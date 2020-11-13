import { GLTFExporter } from '../ImposrtFiles/GLTFExporter.js';
class _3Dfile {
    constructor( scene ) {
        var gltfExporter = new GLTFExporter();
        var options = {
          trs: false,
          onlyVisible: true,
          truncateDrawRange: true,
          binary: true,
          forcePowerOfTwoTextures: true,
          maxTextureSize: 2048
        };
        gltfExporter.parse( scene, function ( result ) {
          if ( result instanceof ArrayBuffer ) {
            saveArrayBuffer( result, 'scene.glb' );
          } else {
            var output = JSON.stringify( result, null, 2 );
            console.log( output );
            saveString( output, 'scene.gltf' );
          }
        }, options );
        var link = document.createElement( 'a' );
        link.style.display = 'none';
        document.body.appendChild( link );
        function save( blob, filename ) {
          link.href = URL.createObjectURL( blob );
          link.download = filename;
          link.click()
        }
        function saveString( text, filename ) {
          save( new Blob( [ text ], { type: 'text/plain' } ), filename )
        }
        function saveArrayBuffer( buffer, filename ) {
          save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename )
        }
    }
}
export {_3Dfile}