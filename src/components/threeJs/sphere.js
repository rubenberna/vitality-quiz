import React, { Component } from 'react'
import * as THREE from 'three';

class Sphere extends Component {

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    // 3 things to set up three.js: scene, camera and renderer
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect view: we use the width and height of the browser
      0.1,
      1000    // near and far plane
    )

    this.camera.position.z = 7 // how close we see the object

    this.renderer = new THREE.WebGLRenderer({
      antialias: true // otherwise the result will look 'jagged'
    })
    this.renderer.setClearColor("#e5e5e5") // same as background color
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    // each 3D object has a shape and a type of surface
    this.geometry = new THREE.SphereGeometry(1, 4, 4) // accepts radius (size), width and height
    this.material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 })
    // we need light to see the color
    this.light = new THREE.PointLight(0xFFFFFF, 1, 500) // color, intensity and distance
    this.light.position.set(10, 0, 25) // x, y, z coordinates
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)
    this.scene.add(this.light)

    this.renderScene()
  }

  renderScene = () => {
    requestAnimationFrame(this.render) // creates a loop that causes the renderer to draw the scene everytime the screen is refreshed
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div>
        <div
          style={{ width: '100vw', height: '100vh' }}
          ref={(mount) => { this.mount = mount }}
        />
      </div>
    )
  }
}

export default Sphere;