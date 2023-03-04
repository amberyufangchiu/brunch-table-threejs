import React from 'react'
import { useControls } from 'leva'
import { useGLTF} from '@react-three/drei'

const Scene = () => {
    const Models = [
        { title: 'Pancake', url: './models/pancakes_with_maple_syrup.glb' },
    ]
  
    function Model({ url }) {
        const { scene } = useGLTF(url)
        return <primitive object={scene} />
      }

    const { title } = useControls({
        title: {
          options: Models.map(({ title }) => title),
        },
      })

  return (
    <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
        <Model
            url={Models[Models.findIndex((m) => m.title === title)].url}
          />
      </group>
  )
}

export default Scene