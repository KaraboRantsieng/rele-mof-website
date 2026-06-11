'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Football3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth
    const H = mount.clientHeight
    if (W === 0 || H === 0) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 100)
    camera.position.z = 4.5

    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const key = new THREE.PointLight(0xffffff, 1.6)
    key.position.set(3, 4, 3)
    scene.add(key)
    const fill = new THREE.PointLight(0xcc0000, 0.35)
    fill.position.set(-3, -2, 2)
    scene.add(fill)

    const icoGeo = new THREE.IcosahedronGeometry(1.5, 1)
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0x101010,
      roughness: 0.22,
      metalness: 0.12,
    })
    const ball = new THREE.Mesh(icoGeo, ballMat)
    scene.add(ball)

    const edgesGeo = new THREE.EdgesGeometry(icoGeo)
    const edgesMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16 })
    const edges = new THREE.LineSegments(edgesGeo, edgesMat)
    scene.add(edges)

    let raf: number
    const clock = new THREE.Clock()

    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      ball.rotation.y = t * 0.22
      ball.rotation.x = t * 0.07
      ball.position.y = Math.sin(t * 0.5) * 0.18
      edges.rotation.copy(ball.rotation)
      edges.position.copy(ball.position)
      renderer.render(scene, camera)
    }
    tick()

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      icoGeo.dispose(); edgesGeo.dispose(); ballMat.dispose(); edgesMat.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />
}
