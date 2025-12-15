'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 80 }) { // Reduzi a quantidade para ser mais limpo
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mesh = useRef<THREE.Points>(null!)

    // 1. Gerar textura redonda via código (para evitar os quadrados feios)
    const texture = useMemo(() => {
        if (typeof document === 'undefined') return null // Evita erro no servidor
        const canvas = document.createElement('canvas')
        canvas.width = 32
        canvas.height = 32
        const ctx = canvas.getContext('2d')
        if (!ctx) return null

        // Desenhar um círculo difuso (brilho)
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
        gradient.addColorStop(0, 'rgba(255,255,255,1)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 32, 32)

        const tex = new THREE.CanvasTexture(canvas)
        tex.needsUpdate = true
        return tex
    }, [])

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20
            const y = (Math.random() - 0.5) * 15
            const z = (Math.random() - 0.5) * 10
            const speed = Math.random() * 0.005 + 0.002
            temp.push({ x, y, z, speed, originalY: y })
        }
        return temp
    }, [count])

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        particles.forEach((p, i) => {
            pos[i * 3] = p.x
            pos[i * 3 + 1] = p.y
            pos[i * 3 + 2] = p.z
        })
        return pos
    }, [particles, count])

    useFrame((state) => {
        if (!mesh.current) return

        const positions = mesh.current.geometry.attributes.position.array as Float32Array

        for (let i = 0; i < count; i++) {
            particles[i].y -= particles[i].speed

            if (particles[i].y < -7) particles[i].y = 7

            const xIndex = i * 3
            const yIndex = i * 3 + 1
            const zIndex = i * 3 + 2

            // O rato empurra suavemente as partículas
            const mouseX = (state.pointer.x * 10)
            const mouseY = (state.pointer.y * 10)
            const dx = mouseX - positions[xIndex]
            const dy = mouseY - positions[yIndex]
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 2) {
                positions[xIndex] -= dx * 0.01
                positions[yIndex] -= dy * 0.01
            }

            positions[yIndex] = particles[i].y
        }

        mesh.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                {/* AQUI ESTÁ A CORREÇÃO DO ERRO DE TYPESCRIPT: args={[positions, 3]} */}
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            {/* Ajuste visual: map={texture}, transparent, profundidade desligada */}
            <pointsMaterial
                map={texture || undefined}
                size={0.12}       // Ligeiramente menor
                color="#C19A6B"   // Cor "Ouro Velho" / Madeira Clara (destaca-se no preto)
                transparent
                opacity={0.4}     // Menos opacidade para ser misterioso
                sizeAttenuation={true}
                depthWrite={false}
            />
        </points>
    )
}

export default function SawdustParticles() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
                <Particles count={100} />
            </Canvas>
        </div>
    )
}