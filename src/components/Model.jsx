import { useGLTF } from '@react-three/drei'

export function AcaiBowl(props) {
  const { scene } = useGLTF('./models/acai_bowl.glb')
  return <primitive object={scene} {...props} />
}

export function Pancake(props) {
  const { scene } = useGLTF('./models/pancakes_with_maple_syrup.glb')
  return <primitive object={scene} {...props} />
}

export function Coffee(props) {
  const { scene } = useGLTF('./models/coffee_cup.glb')
  return <primitive object={scene} {...props} />
}