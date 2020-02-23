import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import * as THREE from 'three';
import titleFont from '../../assets/fonts/good_brush.json'
import { TimelineMax, Expo } from "gsap/TweenMax";

import './banner.scss'

const OrbitControls = require('three-orbit-controls')(THREE);


class Banner extends Component {
  componentDidMount() {
    this.sceneSetup()
    this.addCustomObjects()
    this.startAnimationLoop()
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  sceneSetup = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      35, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      10000 // far plane
    );

    this.controls = new OrbitControls(this.camera, this.mount)
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.renderer.setClearColor("#171330")
    this.mount.appendChild(this.renderer.domElement); 

    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
  }

  addCustomObjects = () => {
    // Font
    this.loader = new THREE.FontLoader()
    this.font = this.loader.parse(titleFont)
    this.geometry = new THREE.TextGeometry("What's up ?", {
      font: this.font,
      size: 80,
      height: 10,
      material: 0,
      bevelThickness: 1,
      extrudeMaterial: 1
    })
    this.material = new THREE.MeshLambertMaterial({ color: 0xff5722 })
    this.textMesh = new THREE.Mesh(this.geometry, this.material)
    this.textMesh.name = 'text'
    this.textMesh.isObject3D = true
    this.textMesh.position.set(-320, 0, -1000)
    this.scene.add(this.textMesh)

    // Spheres    
    this.geometry = new THREE.SphereGeometry(1, 15, 150)
    this.material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 })
    this.bubleBox = []
    this.meshX = -10
    for (let i = 0; i < 300; i++) {
      this.buble = new THREE.Mesh(this.geometry, this.material)
      this.buble.position.x = (Math.random() - 0.5) * 1000 // random positioning
      this.buble.position.y = (Math.random() - 0.5) * 1000
      this.buble.position.z = -800
      this.bubleBox.push(this.buble)
      this.scene.add(this.buble)
      this.meshX += 1
    }

    // Lights
    const lights = []
    lights[0] = new THREE.DirectionalLight(0xffffff, 2.0, 1000)
    lights[1] = new THREE.HemisphereLight(0xfff8e1, 0xff6f00, 1)
    lights[0].target = this.textMesh 
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
  }

  startAnimationLoop = () => {
    // for (let i = 0; i < this.bubleBox.length; i++) {
    //   this.tl = new TimelineMax().delay(.3)
    //   this.tl.to(this.bubleBox[i].position, 40, { y: (Math.random() - 1) * 1000, ease: Expo.easeOut })
    // }
    
    this.renderer.render(this.scene, this.camera)
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop)
  }

  handleWindowResize = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  onMouseMove = (e) => {
    e.preventDefault();
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
    this.textMesh.rotation.x = this.mouse.x
    this.textMesh.rotation.y = this.mouse.y

    this.raycaster.setFromCamera(this.mouse, this.camera)
    // this.intersects = this.raycaster.intersectObjects(text, true)
    // this.tl.to(this.intersects.rotation, .5, { y: Math.PI * .5, ease: Expo.easeOut }, "=-1.5")

    // for (let i = 0; i < this.intersects.length; i++) {

    //   // this.intersects[i].object.material.color.set(0xff0000); 
    //   this.tl = new TimelineMax().delay(.3)

    //   this.tl.to(this.intersects[i].object.position, 1, { y: (Math.random() - 0.5) * 1000, ease: Expo.easeOut })
    //   this.tl.to(this.intersects[i].object.position, .5, { x: (Math.random() - 0.5) * 1000, ease: Expo.easeOut }, "=-1.5") 
    // }
  }

  onClick = (e) => {
    e.preventDefault()
    this.camera.zoom = 5000 // not working
    
    for (let i = 0; i < this.bubleBox.length; i++) {
      this.tl = new TimelineMax().delay(.3)
      this.tl.to(this.bubleBox[i].position, 10, { y: -0.2, ease: Expo.easeOut })
    }
    setTimeout(() => this.props.history.push('/select_quiz'), 2000)    
  }
  render() {
    return (
      <div className="banner-content">
        <div
          style={{ width: '100vw', height: '100vh' }}
          ref={(mount) => this.mount = mount}
          onClick={ e => this.onClick(e) }
          onMouseMove={ e => this.onMouseMove(e)}
        />
        <div className="banner-indications">
          <h2>
            Just like going to the doctor
          </h2>
          <p>
            To do a regular and thorough checkup on your health, thus identifyin your supplement needs 
          </p>
        </div>
        <div className="banner-login">
          <h3>Login</h3>
        </div>
      </div>
    )
  }
}

export default withRouter(Banner)