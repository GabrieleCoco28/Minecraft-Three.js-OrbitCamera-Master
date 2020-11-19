class desert {
    constructor(normal,flat,amp,freq,world, cellSize,treesCheck) {
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
                  world.setVoxel(x, height + 29, z, 3)
                  world.setVoxel(x, height + 28, z, 3);
                  world.setVoxel(x, height + 27, z, 3);
                  world.setVoxel(x, height + 26, z, 24);
                  world.setVoxel(x, height + 25, z, 24);
                  world.setVoxel(x, height + 24, z, 24);
                  world.setVoxel(x, height + 23, z, 24);
                  world.setVoxel(x, height + 22, z, 24);
                  world.setVoxel(x, height + 21, z, 24);
                  world.setVoxel(x, height + 20, z, 24);
                  world.setVoxel(x, height + 19, z, 24);
                  world.setVoxel(x, height + 18, z, 24);
                  world.setVoxel(x, height + 17, z, 24);
                  world.setVoxel(x, height + 16, z, 24);
                  world.setVoxel(x, height + 15, z, 24);
                  world.setVoxel(x, height + 14, z, 24);
                  world.setVoxel(x, height + 13, z, 24);
                  world.setVoxel(x, height + 12, z, 24);
                  world.setVoxel(x, height + 11, z, 24);
                  world.setVoxel(x, height + 10, z, 24);
                  world.setVoxel(x, height + 9, z, 24);
                  world.setVoxel(x, height + 8, z, 24);
                  world.setVoxel(x, height + 7, z, 24);
                  world.setVoxel(x, height + 6, z, 24);
                  world.setVoxel(x, height + 5, z, 24);
                  world.setVoxel(x, height + 4, z, 24);
                  world.setVoxel(x, height + 3, z, 24);
                  world.setVoxel(x, height + 2, z, 24);
                  world.setVoxel(x, height + 1, z, 15);
                  world.setVoxel(x, height, z, 15);
                  coordinates.push({x:x,y:height + 29,z:z})
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
              var randNum = randInt(1,10000)
              if(randNum == 20) {
                world.setVoxel(coordinates[i].x, coordinates[i].y + 4, coordinates[i].z,17)
                world.setVoxel(coordinates[i].x, coordinates[i].y + 3, coordinates[i].z,17)
                world.setVoxel(coordinates[i].x, coordinates[i].y + 2, coordinates[i].z,17)
                world.setVoxel(coordinates[i].x, coordinates[i].y + 1, coordinates[i].z,17)
              }
            }
          }
    }
}
export { desert }