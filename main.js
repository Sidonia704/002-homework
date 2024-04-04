import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { addMesh1 }  from './addmeshes'
import { addMesh2 }  from './addmeshes'
import { addLight } from './addLight'
import { addAreaLight } from './addLight'
import { addMesh3 } from './addmeshes'
import { addMesh4 } from './addmeshes'
import { addMesh5 } from './addmeshes'
import { addMesh6 } from './addmeshes'
import { addMesh7 } from './addmeshes'
import { addMesh8 } from './addmeshes'
import { addMesh9 } from './addmeshes'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialas:true})
const camera= new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.set(0, 0, 5)
const meshes = {}
let tick = 0
const controls = new OrbitControls(camera, renderer.domElement)

init()
function init(){
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  meshes.a = addMesh1()
  meshes.b = addMesh2()
  meshes.c = addMesh3()
  meshes.d = addMesh4()
  meshes.e = addMesh5()
  meshes.f = addMesh6()
  meshes.g = addMesh7()
  meshes.h = addMesh8()
  meshes.i = addMesh9()

  meshes.defaultLight = addLight()
  meshes.AreaLight = addAreaLight()

  scene.add(meshes.a)
  scene.add(meshes.b)
  scene.add(meshes.c)
  scene.add(meshes.d)
  scene.add(meshes.e)
  scene.add(meshes.f)
  scene.add(meshes.g)
  scene.add(meshes.h)
  scene.add(meshes.i)

  scene.add(meshes.defaultLight)
  scene.add(meshes.AreaLight)

  resize()
  animate()
}

function resize(){
  window.addEventListener('resize' , ()=>{
    renderer.setSize(window.innerWidth, width.innerwidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate(){
  requestAnimationFrame(animate)
  meshes.b.rotation.x += 0.01
  meshes.b.rotation.y += 0.001
  meshes.d.rotation.x += 0.011
  meshes.d.rotation.y += 0.0011
  meshes.e.rotation.x += 0.012
  meshes.e.rotation.y += 0.0012
  meshes.f.rotation.x += 0.013
  meshes.f.rotation.y += 0.0013
  meshes.g.rotation.x += 0.014
  meshes.g.rotation.y += 0.0014
  meshes.h.rotation.x += 0.015
  meshes.h.rotation.y += 0.0015
  meshes.i.rotation.y += 0.001
  meshes.i.rotation.x += 0.001
  renderer.render(scene, camera)
  tick += 0.02
}



