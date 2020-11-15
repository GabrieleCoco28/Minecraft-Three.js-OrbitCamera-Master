import * as THREE from './ImposrtFiles/three.module.js';
import { OrbitControls } from './ImposrtFiles/OrbitControls.js';
import { Water } from './ImposrtFiles/Water.js';
import { VoxelWorld } from './classesScripts/voxelWorld.js'
import { generateWorld } from './classesScripts/generateWorld.js'
import { _3Dfile } from './classesScripts/saveScene.js'

VoxelWorld.faces = [
  { // left
    uvRow: 0,
    dir: [ -1,  0,  0, ],
    corners: [
      { pos: [ 0, 1, 0 ], uv: [ 0, 1 ], },
      { pos: [ 0, 0, 0 ], uv: [ 0, 0 ], },
      { pos: [ 0, 1, 1 ], uv: [ 1, 1 ], },
      { pos: [ 0, 0, 1 ], uv: [ 1, 0 ], },
    ],
  },
  { // right
    uvRow: 0,
    dir: [  1,  0,  0, ],
    corners: [
      { pos: [ 1, 1, 1 ], uv: [ 0, 1 ], },
      { pos: [ 1, 0, 1 ], uv: [ 0, 0 ], },
      { pos: [ 1, 1, 0 ], uv: [ 1, 1 ], },
      { pos: [ 1, 0, 0 ], uv: [ 1, 0 ], },
    ],
  },
  { // bottom
    uvRow: 1,
    dir: [  0, -1,  0, ],
    corners: [
      { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
      { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
      { pos: [ 1, 0, 0 ], uv: [ 1, 1 ], },
      { pos: [ 0, 0, 0 ], uv: [ 0, 1 ], },
    ],
  },
  { // top
    uvRow: 2,
    dir: [  0,  1,  0, ],
    corners: [
      { pos: [ 0, 1, 1 ], uv: [ 1, 1 ], },
      { pos: [ 1, 1, 1 ], uv: [ 0, 1 ], },
      { pos: [ 0, 1, 0 ], uv: [ 1, 0 ], },
      { pos: [ 1, 1, 0 ], uv: [ 0, 0 ], },
    ],
  },
  { // back
    uvRow: 0,
    dir: [  0,  0, -1, ],
    corners: [
      { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
      { pos: [ 0, 0, 0 ], uv: [ 1, 0 ], },
      { pos: [ 1, 1, 0 ], uv: [ 0, 1 ], },
      { pos: [ 0, 1, 0 ], uv: [ 1, 1 ], },
    ],
  },
  { // front
    uvRow: 0,
    dir: [  0,  0,  1, ],
    corners: [
      { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
      { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
      { pos: [ 0, 1, 1 ], uv: [ 0, 1 ], },
      { pos: [ 1, 1, 1 ], uv: [ 1, 1 ], },
    ],
  },
];
var flat = document.getElementById("flat");
var normal = document.getElementById("normal");
var createWorldButton = document.getElementById("generate");
var loading = document.getElementById("loader");
var cloudsCheck = document.getElementById("clouds");
var treesCheck = document.getElementById("trees");
var shadowCheck = document.getElementById("shadows");
var shadowQuality = document.getElementById("shadowQuality");
var antialiasingCheck = document.getElementById("antialiasingCheck");
var advancedWater = document.getElementById("advancedWater");
var preferences = document.getElementById("preferences");
var saveScene = document.getElementById("saveScene");
var ui = document.getElementById("ui");
var logo = document.getElementById("logo")
var customTexture = document.getElementById("texture")
var downladTexture = document.getElementById("downloadTexture")

normal.checked = true
cloudsCheck.checked = true
treesCheck.checked = true
shadowCheck.checked = true
antialiasingCheck.checked = true
advancedWater.checked = true

function download(filename) {
  var link = document.createElement('a');
  link.href = './Assets/flourish-cc-by-nc-sa.png';
  link.download = 'flourish-cc-by-nc-sa.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

downladTexture.onclick = function() {
  download("./Assets/flourish-cc-by-nc-sa.png")
}


createWorldButton.onclick = function(){
  if(flat.checked || normal.checked) {
    loading.style.display = "block"
    setTimeout(() =>{
      main()
    },100)
  }
}
function main() { 
  saveScene.style.display = "block";
  ui.style.display = "block";  7
  document.body.style.overflow = "hidden";
  logo.style.display = "none";

  preferences.style.display = "none";

  const renderer = new THREE.WebGLRenderer({antialias:antialiasingCheck.checked});
  renderer.shadowMap.enabled = shadowCheck.checked;

  if(shadowQuality.value == "high") {
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
  }else if(shadowQuality.value == "medium") {
    renderer.shadowMap.type = THREE.PCFShadowMap
  }else {
    renderer.shadowMap.type = THREE.BasicShadowMap
  }
  

  document.addEventListener("keydown", (e) => {
    if(e.key == "h" && ui.style.display == "block" && saveScene.style.display == "block") {
      ui.style.display = "none";
      saveScene.style.display = "none"
    }else {
      ui.style.display = "block";
      saveScene.style.display = "block"
    }
  })

  renderer.setSize(window.innerWidth,window.innerHeight)
  document.body.appendChild(renderer.domElement)
  noise.seed(Math.random())

  const cellSize = Number(document.getElementById("chunkSize").value);

  const fov = 75;
  const aspect = window.innerWidth/window.innerHeight;  
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(cellSize / 2, cellSize / 2, cellSize / 2);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  var scene = new THREE.Scene();
  scene.background = new THREE.Color('lightblue');
  scene.fog = new THREE.Fog("lightgrey", 1,cellSize * 5);

  const waterGeometry = new THREE.PlaneBufferGeometry( cellSize, cellSize );
	var water = new Water(
			      waterGeometry,
				  {
				  	textureWidth: 512,
				  	textureHeight: 512,
				  	waterNormals: new THREE.TextureLoader().load( './Assets/waternormals.jpg', function ( texture ) {
				  		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				  	} ),
            alpha: 1.0,
				  	sunDirection: new THREE.Vector3(),
				  	sunColor: 0xffffff,
				  	waterColor: 0x001e0f,
				  	distortionScale: 1,
				  	fog: scene.fog !== undefined
				  }
  );
  water.rotation.x = - Math.PI / 2;
  water.position.set(
    cellSize/2,
    32.8,
    cellSize/2
  )

  var badWater = new THREE.Mesh(
    new THREE.PlaneGeometry(cellSize,cellSize),
    new THREE.MeshPhongMaterial({color:0x50e8eb,transparent: true,opacity:.5})
  );
  badWater.rotation.x = - Math.PI / 2;
  badWater.position.set(
    cellSize/2,
    32.8,
    cellSize/2
  )

  
  document.addEventListener("keypress",(e) => {
    if(e.key == "s") {
      new _3Dfile( scene );
    }
  })
  document.getElementById("saveScene").addEventListener("click", () => {
    new _3Dfile( scene );
  })

  var amp =  Number(document.getElementById("amplitude").value);
  var freq =  Number(document.getElementById("frequence").value);
  const tileSize = 16;
  const tileTextureWidth = 512;
  const tileTextureHeight = 128;
  const loader = new THREE.TextureLoader();

  if (customTexture.value) {
    var texture = loader.load(URL.createObjectURL(customTexture.files[0]), render);
    for(let i = 0; i < 32; i++) {
      document.querySelectorAll("#ui input[type=radio] + label")[i].style.backgroundImage = `url(${URL.createObjectURL(customTexture.files[0])})`
    }
  }else {
    var texture = loader.load('/Assets/flourish-cc-by-nc-sa.png', render);
  }
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;

  const aLight = new THREE.AmbientLight("white", .25);
  scene.add(aLight)

  const world = new VoxelWorld({
    cellSize,
    tileSize,
    tileTextureWidth,
    tileTextureHeight,
  });

  var generation = new generateWorld()
  generation.generate(normal,flat,treesCheck,cloudsCheck,amp,freq,cellSize,world,scene,water,badWater,loading)

  function downloadJson(sceneJSON) {
    var dataStr = "data:text/json;charset=utf-8," + 
    encodeURIComponent(JSON.stringify(sceneJSON));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "world.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }  
  const sceneJSON = scene.toJSON();
  downloadJson(sceneJSON)

  const material = new THREE.MeshPhongMaterial({
    map: texture,
  });
  material.needsUpdate = true

  var mesh;

  const cellIdToMesh = {};
  function updateCellGeometry(x, y, z) {
    const cellX = Math.floor(x / cellSize);
    const cellY = Math.floor(y / cellSize);
    const cellZ = Math.floor(z / cellSize);
    const cellId = world.computeCellId(x, y, z);
    mesh = cellIdToMesh[cellId];
    const geometry = mesh ? mesh.geometry : new THREE.BufferGeometry();

    const {positions, normals, uvs, indices} = world.generateGeometryDataForCell(cellX, cellY, cellZ);
    const positionNumComponents = 3;
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
    const normalNumComponents = 3;
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
    const uvNumComponents = 2;
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
    geometry.setIndex(indices);
    geometry.computeBoundingSphere();
    geometry.computeVertexNormals()
    geometry.computeFaceNormals()

    geometry.castShadow = true;
    geometry.receiveShadow = true;


    if (!mesh) {
      mesh = new THREE.Mesh(geometry, material);
      mesh.name = cellId;
      cellIdToMesh[cellId] = mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      mesh.position.set(cellX * cellSize, cellY * cellSize, cellZ * cellSize);
    }
  }

  const neighborOffsets = [
    [ 0,  0,  0], 
    [-1,  0,  0], 
    [ 1,  0,  0], 
    [ 0, -1,  0], 
    [ 0,  1,  0], 
    [ 0,  0, -1], 
    [ 0,  0,  1], 
  ];
  function updateVoxelGeometry(x, y, z) {
    const updatedCellIds = {};
    for (const offset of neighborOffsets) {
      const ox = x + offset[0];
      const oy = y + offset[1];
      const oz = z + offset[2];
      const cellId = world.computeCellId(ox, oy, oz);
      if (!updatedCellIds[cellId]) {
        updatedCellIds[cellId] = true;
        updateCellGeometry(ox, oy, oz);
      }
    }
  }
  updateVoxelGeometry(1, 1, 1);

  function render() {
    requestAnimationFrame(render);
    if(advancedWater.checked) {
      const time = performance.now() * 0.001;
      water.material.uniforms['time'].value += .5 / 100.0;
    }
    controls.update();
    renderer.render(scene, camera);
  }
  render();

  let currentVoxel = 0;
  let currentId;

  document.querySelectorAll('#ui .tiles input[type=radio][name=voxel]').forEach((elem) => {
    elem.addEventListener('click', allowUncheck);
  });

  function allowUncheck() {
    if (this.id === currentId) {
      this.checked = false;
      currentId = undefined;
      currentVoxel = 0;
    } else {
      currentId = this.id;
      currentVoxel = parseInt(this.value);
    }
  }

  function getCanvasRelativePosition(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * renderer.domElement.width  / rect.width,
      y: (event.clientY - rect.top ) * renderer.domElement.height / rect.height,
    };
  }

  function placeVoxel(event) {
    const pos = getCanvasRelativePosition(event);
    const x = (pos.x / renderer.domElement.width ) *  2 - 1;
    const y = (pos.y / renderer.domElement.height) * -2 + 1;  

    const start = new THREE.Vector3();
    const end = new THREE.Vector3();
    start.setFromMatrixPosition(camera.matrixWorld);
    end.set(x, y, 1).unproject(camera);

    const intersection = world.intersectRay(start, end);
    if (intersection) {
      const voxelId = event.shiftKey ? 0 : currentVoxel;
      const pos = intersection.position.map((v, ndx) => {
        return v + intersection.normal[ndx] * (voxelId > 0 ? 0.5 : -0.5);
      });
      world.setVoxel(...pos, voxelId);
      updateVoxelGeometry(...pos);
    }
  }

  const mouse = {
    x: 0,
    y: 0,
  };

  function recordStartPosition(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.moveX = 0;
    mouse.moveY = 0;
  }
  function recordMovement(event) {
    mouse.moveX += Math.abs(mouse.x - event.clientX);
    mouse.moveY += Math.abs(mouse.y - event.clientY);
  }
  function placeVoxelIfNoMovement(event) {
    if (mouse.moveX < 5 && mouse.moveY < 5) {
      placeVoxel(event);
    }
    window.removeEventListener('mousemove', recordMovement);
    window.removeEventListener('mouseup', placeVoxelIfNoMovement);
  }
  renderer.domElement.addEventListener('mousedown', (event) => {
    event.preventDefault();
    recordStartPosition(event);
    window.addEventListener('mousemove', recordMovement);
    window.addEventListener('mouseup', placeVoxelIfNoMovement);
  }, {passive: false});
  renderer.domElement.addEventListener('touchstart', (event) => {
    event.preventDefault();
    recordStartPosition(event.touches[0]);
  }, {passive: false});
  renderer.domElement.addEventListener('touchmove', (event) => {
    event.preventDefault();
    recordMovement(event.touches[0]);
  }, {passive: false});
  renderer.domElement.addEventListener('touchend', () => {
    placeVoxelIfNoMovement({
      clientX: mouse.x,
      clientY: mouse.y,
    });
  });
  window.addEventListener("resize", function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}