import * as THREE from 'three'

/**
 * @param {string} name
 */
export default function Cube(name) {

  const geometry = new THREE.BoxGeometry(1, 1, 1)

  const material = new THREE.MeshStandardMaterial()
  material.color = new THREE.Color(0x8D6E63)

  const cube = new THREE.Mesh(geometry,material)
  cube.name = name
  cube.rotation.set(-.9, -.2, -1.1)
  cube.position.set(0, 3.2, -.1)
  return cube
}