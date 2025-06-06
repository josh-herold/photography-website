import React, { Suspense } from 'react'
import { Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei'
import './Berlin.css'

function Berlin() {

  return (
    <div>
      <div className="berlin" id='berlin'>

        <div className="berlin-text">
          <h1>BERLIN</h1>
          <p>Thats my hometown. Sometimes it feels very hard to capture Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Unde, necessitatibus minus. Magnam architecto</p>
          <Link to="/berlin">Berlin Photography</Link>

        </div>
        <div className="berlin-image">
          <Canvas>
            {/* Umgebung mit HDR-Hintergrund */}
            <Suspense fallback={null}>
              <Environment preset="night" background />
              <mesh>
                <boxGeometry />
                <meshStandardMaterial metalness={1} roughness={0.5} />
              </mesh>
            </Suspense>
            <OrbitControls />
          </Canvas>


        </div>


      </div>
    </div>
  )
}

export default Berlin
