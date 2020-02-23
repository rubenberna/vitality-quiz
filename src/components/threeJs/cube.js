import React, { Component } from 'react'
import * as THREE from 'three';
import { TweenMax, Power2, TimelineLite, TimelineMax, Expo } from "gsap/TweenMax";

class Cube extends Component {

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

    this.camera.position.z = 4 // how close we see the object

    this.renderer = new THREE.WebGLRenderer({
      antialias: true // otherwise the result will look 'jagged'
    })
    this.renderer.setClearColor("#e5e5e5") // same as background color
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    // Use mouse location to trigger animations
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()

    // each 3D object has a shape and a type of surface
    this.geometry = new THREE.BoxGeometry(1, 1, 1) // accepts radius (size), width and height
    this.material = new THREE.MeshLambertMaterial({ color: 0xF7F7F7 })
    // this.mesh = new THREE.Mesh(this.geometry, this.material)
    
    // this.scene.add(this.mesh)

    // ADD Multiple cubes
    this.meshX = -10
    for(let i = 0; i < 15 ; i++) {
      this.mesh = new THREE.Mesh(this.geometry, this.material)
      this.mesh.position.x = (Math.random() - 0.5 ) * 10 // random positioning
      this.mesh.position.y = (Math.random() - 0.5 ) * 10 // random positioning
      this.mesh.position.z = (Math.random() - 0.5 ) * 10 // random positioning
      this.scene.add(this.mesh)
      this.meshX += 1
    }


    // we need light to see the color
    this.light = new THREE.PointLight(0xFFFFFF, 1, 1000) // color, intensity and distance
    this.light.position.set(0, 0, 0) // x, y, z coordinates
    this.scene.add(this.light)

    this.light = new THREE.PointLight(0xFFFFFF, 2, 1000) // color, intensity and distance
    this.light.position.set(0, 0, 25) // x, y, z coordinates
    this.scene.add(this.light)

    this.start()
  }

  start = () => {
    if(!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  animate = () => {
    // THREE.JS
    // this.mesh.rotation.x += 0.01
    // this.mesh.rotation.y += 0.09
    // this.mesh.scale.y -= 0.01

    // GSAP
    // this.tl = new TimelineMax().delay(.3) // delay the animation by 3 millisecond
   
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  renderScene = () => {
    requestAnimationFrame(this.render)
    this.renderer.render(this.scene, this.camera)
  }

  onMouseMove = (e) => {
    e.preventDefault();
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera)
    this.intersects = this.raycaster.intersectObjects(this.scene.children, true)
    for(let i = 0; i < this.intersects.length; i++) {

      // this.intersects[i].object.material.color.set(0xff0000); 
      this.tl = new TimelineMax()
      // this.tl = new TimelineMax({ paused: true })

      // we scale our object, for the duration of 1, on the x axis, we set an ease effect -- exponential easeOut
      // this.tl.to(this.mesh.scale, 1, {x: 2, ease: Expo.easeOut }) 
      this.tl.to(this.intersects[i].object.scale, .5, { y: .5, ease: Expo.easeOut })
      this.tl.to(this.intersects[i].object.scale, .5, { x: 2, ease: Expo.easeOut })
      this.tl.to(this.intersects[i].object.position, 1, { y: 2, ease: Expo.easeOut })
      this.tl.to(this.intersects[i].object.rotation, .5, { y: Math.PI * .5, ease: Expo.easeOut }, "=-1.5") // this means that it will happen 1.5 sec before it normally would
      this.tl.to(this.intersects[i].object.position, 1, { x: 3, ease: Expo.easeOut })
      // this.tl.play()
    }
    
    
  }

  render() {
    return (
      <div>
        <div
          style={{ width: '100vw', height: '100vh' }}
          ref={(mount) => { this.mount = mount }}
          onMouseMove={ e => this.onMouseMove(e) }
        />
        <h1 className='take-quiz-banner'>
          Take Quiz
        </h1>
      </div>
    )
  }
}

export default Cube;