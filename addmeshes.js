import * as THREE from 'three'

const tLoader = new THREE.TextureLoader()

export function addBoilerPlateMesh(){
    const box = new THREE.BoxGeometry(1,1,1)
    const boxMaterial = new THREE.MeshPhysicalMaterial({color:0xff0000})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-2, 0, 0)
    return boxMesh
}

export function addStandardMesh(){
    const box = new THREE.BoxGeometry(1,1,1)
    const boxMaterial = new THREE.MeshStandardMaterial({color:0xffffff})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(2, 0, 0)
    return boxMesh
}

export function addMesh1(){
    const sphere = new THREE.SphereGeometry(0.15,16,16)
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
        color:0x7FFFAA,
		transmission: 1,
		ior:2.33,
		metalness: 1,
		roughness: 0.3,
		thickness: 0,
	})
    const sphereMesh = new THREE.Mesh(sphere, sphereMaterial)
    sphereMesh.position.set(0, 0, 0)
    return sphereMesh
    
}

export function addMesh2(){
    const Torus = new THREE.TorusGeometry(0.25,0.03,16,50)
    const TorusMaterial = new THREE.MeshPhysicalMaterial({
        color:0x008B8B,
		transmission: 1,
		ior:2.33,
		metalness: 1,
		roughness: 0.3,
		thickness: 0,
	})
    const TorusMesh = new THREE.Mesh(Torus, TorusMaterial)
    TorusMesh.position.set(0, 0, 0)
    return TorusMesh
}

export function addMesh3(){
    const plane = new THREE.PlaneGeometry(40, 20)
    const planeMaterial = new THREE.MeshStandardMaterial({color:0x008B8B})
    const planeMesh = new THREE.Mesh(plane, planeMaterial)
    planeMesh.position.set(0, 0, -4)
    return planeMesh
}

export function addMesh4(){
    const Torus = new THREE.TorusGeometry(0.4,0.03,16,50)
    const TorusMaterial = new THREE.MeshPhysicalMaterial({
        color:0x4682B4,
		transmission: 1,
		ior:2.33,
		metalness: 1,
		roughness: 0.3,
		thickness: 0,
	})
    const TorusMesh = new THREE.Mesh(Torus, TorusMaterial)
    TorusMesh.position.set(0, 0, 0)
    return TorusMesh
}


export function addMesh5(){
    const Torus = new THREE.TorusGeometry(0.55,0.03,16,50)
    const TorusMaterial = new THREE.MeshPhysicalMaterial({
        color:0x4169E1,
		transmission: 1,
		ior:2.33,
		metalness: 1,
		roughness: 0.3,
		thickness: 0,
	})
    const TorusMesh = new THREE.Mesh(Torus, TorusMaterial)
    TorusMesh.position.set(0, 0, 0)
    return TorusMesh
}


export function addMesh6(){
    const Torus = new THREE.TorusGeometry(0.7,0.03,16,50)
    const TorusMaterial = new THREE.MeshPhysicalMaterial({
        color:0x191970,
		transmission: 1,
		ior:2.33,
		metalness: 1,
		roughness: 0.3,
		thickness: 0,
	})
    const TorusMesh = new THREE.Mesh(Torus, TorusMaterial)
    TorusMesh.position.set(0, 0, 0)
    return TorusMesh
}

export function addMesh7(){
    const Torus = new THREE.TorusGeometry(0.85,0.03,16,50)
    const TorusMaterial = new THREE.MeshPhysicalMaterial({
        color:0x483D8B,
		transmission: 1,
		ior:2.33,
		metalness: 1,
		roughness: 0.3,
		thickness: 0,
	})
    const TorusMesh = new THREE.Mesh(Torus, TorusMaterial)
    TorusMesh.position.set(0, 0, 0)
    return TorusMesh
}

export function addMesh8(){
    const Torus = new THREE.TorusGeometry(1,0.03,16,50)
    const TorusMaterial = new THREE.MeshPhysicalMaterial({
        color:0x8A2BE2,
		transmission: 1,
		ior:2.33,
		metalness: 1,
		roughness: 0.3,
		thickness: 0,
	})
    const TorusMesh = new THREE.Mesh(Torus, TorusMaterial)
    TorusMesh.position.set(0, 0, 0)
    return TorusMesh
}

export function addMesh9(){
    const gcolor = tLoader.load('/glass.jpg')
    const sphere = new THREE.SphereGeometry(1.2,36,36)
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
        map:gcolor,
        normalMap: gcolor,
		transmission: 1,
		ior:2.3,
        transparent: true,
        opacity: 0.3,
		metalness: 0,
		roughness: 0,
		thickness: 0,
	})
    const sphereMesh = new THREE.Mesh(sphere, sphereMaterial)
    sphereMesh.position.set(0, 0, 0)
    return sphereMesh
    
}
