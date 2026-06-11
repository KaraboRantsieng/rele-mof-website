'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Trophy3D() {
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
    camera.position.z = 5.5

    scene.add(new THREE.AmbientLight(0xffffff, 0.55))
    const key = new THREE.PointLight(0xffffff, 2.8)
    key.position.set(3, 5, 3)
    scene.add(key)
    const redFill = new THREE.PointLight(0xcc0000, 0.9)
    redFill.position.set(-2, 0, 3)
    scene.add(redFill)
    const rimLight = new THREE.PointLight(0xffd700, 0.6)
    rimLight.position.set(0, -3, -2)
    scene.add(rimLight)

    const gold = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.88,
      roughness: 0.12,
      emissive: 0x7a5a00,
      emissiveIntensity: 0.1,
    })

    const group = new THREE.Group()

    // Cup via lathe
    const pts: THREE.Vector2[] = []
    for (let i = 0; i <= 18; i++) {
      const t = i / 18
      let r: number
      if (t < 0.08) r = 0.38 + t * 2.5
      else if (t < 0.38) r = 0.58 - (t - 0.08) * 0.65
      else r = 0.38 + (t - 0.38) * 1.5
      pts.push(new THREE.Vector2(r * 0.52, t * 1.6 - 0.2))
    }
    group.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 32), gold))

    // Stem
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.095, 0.65, 16), gold)
    stem.position.y = -0.75
    group.add(stem)

    // Base platform
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.47, 0.11, 32), gold)
    base.position.y = -1.12
    group.add(base)

    // Rim ring
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.038, 8, 32), gold)
    rim.position.y = 1.22
    rim.rotation.x = Math.PI / 2
    group.add(rim)

    group.position.y = 0.15
    scene.add(group)

    let raf: number
    const clock = new THREE.Clock()

    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      group.rotation.y = t * 0.48
      group.position.y = 0.15 + Math.sin(t * 0.7) * 0.07
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
      gold.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" aria-hidden="true" />
}
