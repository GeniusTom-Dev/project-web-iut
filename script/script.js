var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 10, 10 );

var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var ambientLight = new THREE.AmbientLight( 0xdddddd, 0.4 );
scene.add( ambientLight );

var directionalLight = new THREE.DirectionalLight( 0xdddddd, 0.8 );
directionalLight.position.set( 0, 100, 100 );
scene.add( directionalLight );

var loader = new GLTFLoader();

loader.load( '../assets/3dModel/scene.gltf', function ( gltf ) {

    scene.add( gltf.scene );
    renderer.render( scene, camera );

}, undefined, function ( error ) {

    console.error( error );

} );