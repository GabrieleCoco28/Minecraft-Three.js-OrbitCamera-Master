class forest {
    constructor(normal,flat,treesCheck,amp,freq,world,water,badWater, cellSize, scene) {
        var coordinates = []
        function randInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        if(normal.checked) {
            for (var y = 0; y < cellSize; ++y) {
              for (var z = 0; z < cellSize; ++z) {
                for (var x = 0; x < cellSize; ++x) {
                  var height1 = Math.round(noise.perlin2(x / freq, z / freq) * amp) < 0? 0 : Math.round(noise.perlin2(x / freq, z / freq) * amp);
                  var height2 = Math.round(noise.perlin2(x * freq, z * freq) / amp) < 0? 0 : Math.round(noise.perlin2(x * freq, z * freq) / amp);
                  var height = height1 + height2
                  if(height <= 3) {
                    world.setVoxel(x, height + 30, z, 3);
                  }else if(height > 3 && height <= 50){
                    world.setVoxel(x, height + 30, z, 14);
                  }else if(height > 60 && height <= 75){
                    world.setVoxel(x, height + 30, z, 5);
                  }else {
                    world.setVoxel(x, height + 30, z, 13);
                  }

                  if(height > 60 && height <= 75) {
                    world.setVoxel(x, height + 29, z, 5);
                  }else if(height > 75){
                    world.setVoxel(x, height + 29, z, 13);
                  }else {
                    world.setVoxel(x, height + 29, z, 7)
                  }
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
              if(randNum == 20 && coordinates[i].y > 35 && coordinates[i].y < 58) {
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
    }
}
export { forest }