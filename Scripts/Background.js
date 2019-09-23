function BuildBackground(){
  let Parent = document.getElementById("LeftBar-Background");

  //Build Scene
  var Scene = new THREE.Scene();
  var Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  //Build Renderer
  var Renderer = new THREE.WebGLRenderer();
  Renderer.setSize(Parent.clientWidth, Parent.clientHeight );
  Parent.appendChild( Renderer.domElement );

  //Style elem
  Renderer.domElement.style.width = "100%";
  Renderer.domElement.style.height = "100%";
  Renderer.domElement.style.position = "absolute";
  Renderer.domElement.style.zIndex = "-1";
  Renderer.domElement.style.top = "0";
  Renderer.domElement.style.left = "0";

  //Populate
  var Geo = new THREE.PlaneBufferGeometry(200, 200, 200, 200);
  var Mat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var Cube = new THREE.Mesh( Geo, Mat );
  Scene.add( Cube );

  console.log(Cube)

  Camera.position.z = 5;

  function animate() {
  	requestAnimationFrame( animate );
  	Renderer.render( Scene, Camera );
  }


  animate();
}





document.addEventListener("DOMContentLoaded", function(){
  BuildBackground();
});
