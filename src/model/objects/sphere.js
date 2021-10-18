import { SphereGeometry, MeshStandardMaterial, Mesh, Color } from "three";

export default function Sphere(name) {
  const sphere = new Mesh(new SphereGeometry(1, 10, 9, 0, 6.3, 6, 6.3), new MeshStandardMaterial({
    color: new Color(0xE53935),
    roughness: .5,
    metalness: .3
  }))
  sphere.name = name
  sphere.position.set(0, 1.41, 0)
  return sphere
}