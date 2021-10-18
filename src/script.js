import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import Cube from './model/objects/cube'
import Torus from './model/objects/torus'
import Cone from './model/objects/cone'
import Sphere from './model/objects/sphere'

// Debug
export const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Cube
const cube = Cube("Cubo")
scene.add(cube)

const guiCube = gui.addFolder('Cube')
guiCube.add(cube.rotation, 'y').step(.1)
guiCube.add(cube.rotation, 'x').step(.1)
guiCube.add(cube.rotation, 'z').step(.1)

// Torus

const torus = Torus("Torus")
scene.add(torus)

// Cone

const cone = Cone("Cone")
scene.add(cone)

// Sphere

const sphere = Sphere("Sphere")
scene.add(sphere)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 1.2)
pointLight.position.set(-3, 1.1, 1.8)
scene.add(pointLight)

/* const helper1 = new THREE.PointLightHelper(pointLight)
scene.add(helper1) */

const guiLight1 = gui.addFolder('Light 1')
guiLight1.add(pointLight.position, "x").step(.1)
guiLight1.add(pointLight.position, "y").step(.1)
guiLight1.add(pointLight.position, "z").step(.1)
guiLight1.add(pointLight, "intensity").step(.1)


const pointLight2 = new THREE.PointLight(0xded340, 1)
pointLight2.position.set(3.1, 0.6, 3.5)
scene.add(pointLight2)

/* const helper2 = new THREE.PointLightHelper(pointLight2)
scene.add(helper2) */

const guiLight2 = gui.addFolder('Light 2')
guiLight2.add(pointLight2.position, "x").step(.1)
guiLight2.add(pointLight2.position, "y").step(.1)
guiLight2.add(pointLight2.position, "z").step(.1)
guiLight2.add(pointLight2, "intensity").step(.1)
guiLight2.addColor({color: 0xffffff}, "color")
.onChange((color) => {
    pointLight2.color = new THREE.Color(color)
})

const pointLight3 = new THREE.PointLight(0x5d5af0, 1)
pointLight3.position.set(0, 8.4, 6.6)
scene.add(pointLight3)

/* const helper3 = new THREE.PointLightHelper(pointLight3)
scene.add(helper3)
 */
const guiLight3 = gui.addFolder('Light 3')
guiLight3.add(pointLight3.position, "x").step(.1)
guiLight3.add(pointLight3.position, "y").step(.1)
guiLight3.add(pointLight3.position, "z").step(.1)
guiLight3.add(pointLight3, "intensity").step(.1)
guiLight3.addColor({color: 0xffffff}, "color")
.onChange((color) => {
    pointLight3.color = new THREE.Color(color)
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 4
scene.add(camera)

// Controls
 const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

/*     const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime
 */
    torus.rotation.z = -.5 * clock.getElapsedTime()
    sphere.rotation.y = .5 * clock.getElapsedTime()
    // Update Orbital Controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()