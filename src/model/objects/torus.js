import { TorusGeometry ,MeshStandardMaterial, Color, Mesh } from 'three'

import { gui } from '../../script'

/**
 * @param {string} name
 */
export default function Torus(name) {
  const geometry = new TorusGeometry(1.8, .15, 10, 10)

  const material = new MeshStandardMaterial()
  material.color = new Color(0x8BC34A)

  const torus = new Mesh(geometry,material)
  torus.name = name
  torus.rotation.set(-1.6, 0, 0)
  torus.position.set(0, .2, 0)

  const Folder = gui.addFolder('Torus')
  const FPosition = Folder.addFolder("Position")
  FPosition.add(torus.position, "x")
  FPosition.add(torus.position, "y")
  FPosition.add(torus.position, "z")
  const FRotation = Folder.addFolder("Rotation")
  FRotation.add(torus.rotation, "x").step(.1)
  FRotation.add(torus.rotation, "y")
  FRotation.add(torus.rotation, "z")

  return torus
}