import * as THREE from '../ImposrtFiles/three.module.js'

class playSound {
    constructor(voxelId,camera) {
        const listener = new THREE.AudioListener();
        camera.add( listener );

        const sound = new THREE.Audio( listener );

        const audioLoader = new THREE.AudioLoader();
        if(voxelId == 14 || voxelId == 12 || voxelId == 29) {
            audioLoader.load( './Assets/sounds/grassBrake.mp3', function( buffer ) {
                sound.setBuffer( buffer );
                sound.setLoop( false );
                sound.setVolume( 1 );
                sound.play();
            });
        }else if(voxelId == 1 || voxelId == 4 || voxelId == 5 || voxelId == 6 || voxelId == 8 || voxelId == 15
            || voxelId == 19 || voxelId == 20 || voxelId == 21 || voxelId == 22 || voxelId == 23
            || voxelId == 24 || voxelId == 25 || voxelId == 26 || voxelId == 28 || voxelId == 30) {
            audioLoader.load( './Assets/sounds/stonePlacing.mp3', function( buffer ) {
                sound.setBuffer( buffer );
                sound.setLoop( false );
                sound.setVolume( 3 );
                sound.play();
            });
        }
    }
}
export {playSound}