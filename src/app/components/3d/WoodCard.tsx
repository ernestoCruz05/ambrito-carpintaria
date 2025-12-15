'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, ContactShadows, Environment, useCursor } from '@react-three/drei'
import * as THREE from 'three'

function BusinessCard() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mesh = useRef<THREE.Group>(null!)
    const [hovered, setHover] = useState(false)

    // Muda o cursor para "mãozinha" quando passas o rato
    useCursor(hovered)

    useFrame((state) => {
        if (!mesh.current) return
        // Rotação suave e "pesada"
        const { x, y } = state.pointer
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, x * 0.4, 0.05)
        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, -y * 0.4, 0.05)
    })

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group
                ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                rotation={[0.2, 0, 0]} // Ligeira inclinação inicial
            >
                {/* CORPO DO CARTÃO - Madeira Escura */}
                <mesh>
                    <boxGeometry args={[3.2, 1.9, 0.05]} />
                    <meshStandardMaterial
                        color="#3d2817" // Castanho muito escuro (Nogueira)
                        roughness={0.3} // Ligeiramente brilhante
                        metalness={0.1}
                    />
                </mesh>

                {/* BORDAS DOURADAS (O toque premium) */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[3.22, 1.92, 0.04]} />
                    <meshStandardMaterial color="#C19A6B" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* TEXTO FRENTE - Agora carrega a fonte da web para não falhar */}
                <Text
                    position={[0, 0.15, 0.03]}
                    fontSize={0.28}
                    font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
                    color="#e0e0e0"
                    anchorX="center"
                    anchorY="middle"
                >
                    A.M. BRITO
                </Text>
                <Text
                    position={[0, -0.25, 0.03]}
                    fontSize={0.08}
                    font="https://fonts.gstatic.com/s/manrope/v14/xn7_YHE41ni1AdIRqAuZuw1x.woff"
                    color="#C19A6B"
                    anchorX="center"
                    anchorY="middle"
                    letterSpacing={0.2}
                >
                    CARPINTARIA PORTUGUESA
                </Text>
            </group>
        </Float>
    )
}

export default function WoodCardScene() {
    return (
        // Importante: background transparente aqui para se fundir com o site
        <div className="h-[400px] w-full cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#fff0d6" />

                <BusinessCard />

                {/* Ambiente de estúdio para reflexos bonitos na madeira */}
                <Environment preset="studio" />
                {/* Sombra de contacto suave no chão */}
                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#000000" />
            </Canvas>
        </div>
    )
}