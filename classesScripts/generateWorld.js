import * as THREE from '../ImposrtFiles/three.module.js'
import { forest } from './biomesScript/forest.js'
import { desert } from './biomesScript/desert.js'

class generateWorld {
  constructor() {

  } 
  generate(normal,flat,treesCheck,cloudsCheck,amp,freq,cellSize,world,scene,water,badWater,loading,biome) {

    if(biome.value == "forest") {
      new forest(normal,flat,treesCheck,amp,freq,world,water,badWater,cellSize,scene)
    }else if(biome.value == "desert") {
      new desert(normal,flat,amp,freq,world, cellSize,treesCheck)
    }

    loading.style.display = "none"
    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    if(cloudsCheck.checked == true) {
      for(let i = 0; i < Math.random() * cellSize / 5; i++) {
        const cloudG = new THREE.BoxGeometry(Math.random() * cellSize ,4,Math.random() * cellSize);
        const cloudM = new THREE.MeshBasicMaterial({color:"white"})
        const cloud = new THREE.Mesh(cloudG,cloudM)
        cloud.position.set(
          Math.random() * cellSize,
          randInt(110,130),
          Math.random() * cellSize
        )
        scene.add(cloud)
      }
    }
    const sunG = new THREE.SphereGeometry(5,20,20);
    const sunM = new THREE.MeshBasicMaterial({color:"yellow"});
    const sun = new THREE.Mesh(sunG,sunM);
    scene.add(sun)
    sun.position.set(
      cellSize,
      cellSize * 2.5,
      cellSize
    )
    sun.visible = false
    const light = new THREE.SpotLight("white", 1);
    light.position.set(sun.position.x, sun.position.y, sun.position.z);
    light.lookAt(cellSize,0,cellSize)
    light.castShadow = true
    scene.add(light);
    light.shadow.mapSize.width = 2048 * 2.5; 
    light.shadow.mapSize.height = 2048 * 2.5;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = cellSize* cellSize;
  }
}
export {generateWorld}