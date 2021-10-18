import { ConeGeometry, MeshStandardMaterial, Mesh, Color } from "three"
export default function Cone(name) {
  const cone = new Mesh(new ConeGeometry(1.5, 1, 5, 1), new MeshStandardMaterial({
    color: new Color(0x26C6DA)
  }))
  cone.name = name
  cone.position.set(0, 0, 0)
  cone.rotation.set(0, 1.5, 0)
  return cone
}