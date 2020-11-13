import * as THREE from '../ImposrtFiles/three.module.js'
class generateWorld {
    constructor() {

    } 
    generate(normal,flat,treesCheck,cloudsCheck,amp,freq,cellSize,world,scene,water,badWater,loading) {
        var coordinates = []
        if(normal.checked) {
            for (var y = 0; y < cellSize; ++y) {
              for (var z = 0; z < cellSize; ++z) {
                for (var x = 0; x < cellSize; ++x) {
                  var height1 = Math.round(noise.perlin2(x / freq, z / freq) * amp) < 0? 0 : Math.round(noise.perlin2(x / freq, z / freq) * amp);
                  var height2 = Math.round(noise.perlin2(x * freq, z * freq) / amp) < 0? 0 : Math.round(noise.perlin2(x * freq, z * freq) / amp);
                  var height = height1 + height2
                  if(height <= 3) {
                    world.setVoxel(x, height + 30, z, 3);
                  }else {
                    world.setVoxel(x, height + 30, z, 14);
                  }
                  world.setVoxel(x, height + 29, z, 7);
                  world.setVoxel(x, height + 28, z, 7);
                  world.setVoxel(x, height + 27, z, 7);
                  world.setVoxel(x, height + 26, z, 7);
                  world.setVoxel(x, height + 25, z, 5);
                  world.setVoxel(x, height + 24, z, 5);
                  world.setVoxel(x, height + 23, z, 5);
                  world.setVoxel(x, height + 22, z, 5);
                  world.setVoxel(x, height + 21, z, 5);
                  world.setVoxel(x, height + 20, z, 5);
                  world.setVoxel(x, height + 19, z, 5);
                  world.setVoxel(x, height + 18, z, 5);
                  world.setVoxel(x, height + 17, z, 5);
                  world.setVoxel(x, height + 16, z, 5);
                  world.setVoxel(x, height + 15, z, 5);
                  world.setVoxel(x, height + 14, z, 5);
                  world.setVoxel(x, height + 13, z, 5);
                  world.setVoxel(x, height + 12, z, 5);
                  world.setVoxel(x, height + 11, z, 5);
                  world.setVoxel(x, height + 10, z, 5);
                  world.setVoxel(x, height + 9, z, 5);
                  world.setVoxel(x, height + 8, z, 5);
                  world.setVoxel(x, height + 7, z, 5);
                  world.setVoxel(x, height + 6, z, 5);
                  world.setVoxel(x, height + 5, z, 5);
                  world.setVoxel(x, height + 4, z, 5);
                  world.setVoxel(x, height + 3, z, 5);
                  world.setVoxel(x, height + 2, z, 15);
                  world.setVoxel(x, height + 1, z, 15);
                  world.setVoxel(x, height, z, 15);
                  if(advancedWater.checked) {
                    scene.add( water );
                  }else {
                    scene.add(badWater)
                  }
                  coordinates.push({x:x,y:height + 30,z:z})
                }
              }
            }
          }else if(flat.checked) {
            for (var y = 0; y < cellSize; ++y) {
              for (var z = 0; z < cellSize; ++z) {
                for (var x = 0; x < cellSize; ++x) {
                  world.setVoxel(x,4,z,14)
                  world.setVoxel(x,3,z,7)
                  world.setVoxel(x,2,z,5)
                  world.setVoxel(x,1,z,15)
                }
              }
            }
          }
          if(treesCheck.checked == true) {
            for(let i = 0; i < coordinates.length; i++) {
              var randNum = randInt(1,1000)
              var treeType = randInt(0,10)
              if(randNum == 20 && coordinates[i].y > 35) {
                if(treeType == 1) {
                  //tronco
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 5, coordinates[i].z,10)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z,10)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z,10)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 2, coordinates[i].z,10)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 1, coordinates[i].z,10)
          
                  //foglie
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z + 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z + 2,12)
          
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z - 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z - 2,12)
          
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 3, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x + 2, coordinates[i].y + 3, coordinates[i].z,12)
          
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 3, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x - 2, coordinates[i].y + 3, coordinates[i].z,12)
                  ///////////////////////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////////////////////
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z + 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z + 2,12)
          
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z - 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z - 2,12)
          
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 4, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x + 2, coordinates[i].y + 4, coordinates[i].z,12)
          
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 4, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x - 2, coordinates[i].y + 4, coordinates[i].z,12)
                  ///////////////////////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////////////////////
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 5, coordinates[i].z + 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 6, coordinates[i].z + 1,12)
          
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 5, coordinates[i].z - 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 6, coordinates[i].z - 1,12)
          
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 5, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 6, coordinates[i].z,12)
          
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 5, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 6, coordinates[i].z,12)
                  ///////////////////////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////////////////////
                  world.setVoxel(coordinates[i].x , coordinates[i].y + 6, coordinates[i].z,12)
                }else if(treeType == 2) {
                  //tronco
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 6, coordinates[i].z,26)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 5, coordinates[i].z,26)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z,26)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z,26)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 2, coordinates[i].z,26)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 1, coordinates[i].z,26)
          
                  //foglie
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z + 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z + 2,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z + 3,12)
          
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z - 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z - 2,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z - 3,12)
          
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 3, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x + 2, coordinates[i].y + 3, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x + 3, coordinates[i].y + 3, coordinates[i].z,12)
          
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 3, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x - 2, coordinates[i].y + 3, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x - 3, coordinates[i].y + 3, coordinates[i].z,12)
                  ///////////////////////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////////////////////
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z + 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z + 2,12)
          
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z - 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z - 2,12)
          
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 4, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x + 2, coordinates[i].y + 4, coordinates[i].z,12)
          
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 4, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x - 2, coordinates[i].y + 4, coordinates[i].z,12)
                  ///////////////////////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////////////////////
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 5, coordinates[i].z + 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 6, coordinates[i].z + 1,12)
          
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 5, coordinates[i].z - 1,12)
                  world.setVoxel(coordinates[i].x, coordinates[i].y + 6, coordinates[i].z - 1,12)
          
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 5, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x + 1, coordinates[i].y + 6, coordinates[i].z,12)
          
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 5, coordinates[i].z,12)
                  world.setVoxel(coordinates[i].x - 1, coordinates[i].y + 6, coordinates[i].z,12)
                  ///////////////////////////////////////////////////////////////////////////////
                  ///////////////////////////////////////////////////////////////////////////////
                  world.setVoxel(coordinates[i].x , coordinates[i].y + 7, coordinates[i].z,12)
                }
              }
            }
          }
          loading.style.display = "none"
          function randInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
          }
          if(cloudsCheck.checked == true) {
            for(let i = 0; i < Math.random() * cellSize / 5; i++) {
              const cloudG = new THREE.BoxGeometry(Math.random() * cellSize / 2 ,4,Math.random() * cellSize / 2);
              const cloudM = new THREE.MeshBasicMaterial({color:"white"})
              const cloud = new THREE.Mesh(cloudG,cloudM)
              //cloud.castShadow = true; 
              //cloud.receiveShadow = true;
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