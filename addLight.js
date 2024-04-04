import * as THREE from 'three'

export function addLight(){
    const light = new THREE.DirectionalLight
    (0xffffff, 5)
    light.position.set(3, 3, 3)
    return light
}

export function addAreaLight(){
    const width = 10;
    const height = 10;
    const intensity = 1;
    const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
    rectLight.position.set( -2, -2, 2 );
    rectLight.lookAt( 0, 0, 0 );
    return rectLight
}