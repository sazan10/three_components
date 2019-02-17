import React, {Component} from 'react';
import * as THREE from 'three'
import * as TrackballControls from 'three-trackballcontrols';
//import { toCSG, fromCSG } from 'three-2-csg';
  class ThreeScene extends Component {
    
    componentDidMount() {
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      //ADD CAMERA
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
      );
      this.camera.position.z = 5;
  
      //ADD SCENE
  
      //ADD RENDERER
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.mount.appendChild(this.renderer.domElement);
  
  
      //ADD CUBE
  
      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
  
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 1.2;
      this.controls.panSpeed = 0.8;
      this.controls.noZoom = false;
      this.controls.noPan = false;
      this.controls.staticMoving = true;
      this.controls.dynamicDampingFactor = 0.3;
      this.controls.keys = [65, 83, 68];
  
  
      var ambient = new THREE.AmbientLight(0xbbbbbb);
      this.scene.add(ambient);
  
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(0, 0, 1);
      this.scene.add(directionalLight);
  
      this.geometry = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 32, 1, true, 1, 6.3);
      this.material = new THREE.MeshPhongMaterial({ color: '#0b7dba', emissive: 0x072534, side: THREE.DoubleSide });
      this.cylinder = new THREE.Mesh(this.geometry, this.material);
     // this.cylinder.rotateX(7);
     console.log("dlkfshdlkf:",this.geometry);

     this.geometry_hemisphere = new THREE.SphereGeometry(1, 64, 64, 0, 6.3, 0, 3.14/2);
     this.geometry_nozzle=new THREE.CylinderGeometry(0.3,0.3,0.6,32,32,true,1,6.3);
    
     this.material_sphere = new THREE.MeshPhongMaterial({ color: '#0b7dba', emissive: 0x072534, side: THREE.DoubleSide });
     this.sphere = new THREE.Mesh(this.geometry_hemisphere, this.material_sphere);
     this.nozzle= new THREE.Mesh(this.geometry_nozzle,this.material);
     this.nozzle.rotateX(1.57).rotateZ(1.57).translateY(-0.75).translateZ(-1);
     

     var depth_flange=0.3;
     var radius_hole=0.2;
     var thickness_nozzle_cylinder=0.05;
     var thickness_flange=0.4
     var extrudeSettings = { curveSegments: 50,depth: depth_flange, bevelEnabled: false, bevelSegments: 1, steps: 1, bevelSize: 0, bevelThickness: 0 };
     var extrudeSettings2 = { curveSegments: 50,depth: 1, bevelEnabled: false, bevelSegments: 1, steps: 1, bevelSize: 0, bevelThickness: 0 };
     var material_extrude = new THREE.MeshPhongMaterial({
      color: '#0b7dba',
      shading: THREE.SmoothShading,
      specular: 0xffffff,
      shininess: 1.0,
    });
    
     var arcShape = new THREE.Shape();
     arcShape.moveTo(0, 0 );
     arcShape.absarc( 0, 0, thickness_flange, 0, Math.PI * 2, false );
     var holePath = new THREE.Path();
     holePath.moveTo( 0, 0 );
     holePath.absarc( 0, 0,radius_hole, 0, Math.PI * 2, true );
     arcShape.holes.push( holePath );




     var arcShape_cylinder = new THREE.Shape();
     arcShape_cylinder.moveTo(0, 0 );
     arcShape_cylinder.absarc( 0, 0, radius_hole+thickness_nozzle_cylinder, 0, Math.PI * 2, false );
     var holePath2 = new THREE.Path();
     holePath2.moveTo( 0, 0 );
     holePath2.absarc( 0, 0, radius_hole, 0, Math.PI * 2, true );
     arcShape_cylinder.holes.push(holePath2);




  
     var depth_flange3=0.1;
     var radius_hole3=0.05;
     var radius_central3=0.15;
     var thickness_nozzle_cylinder3=0.05;
     var radius_flange3=0.4
     var extrudeSettings3 = { curveSegments: 50,depth: depth_flange3, bevelEnabled: false, bevelSegments: 1, steps: 1, bevelSize: 0, bevelThickness: 0 };
     var extrudeSettings4 = { curveSegments: 50,depth: 1, bevelEnabled: false, bevelSegments: 1, steps: 1, bevelSize: 0, bevelThickness: 0 };

    
     var arcShape3 = new THREE.Shape();
     arcShape3.moveTo(0, 0 );
     arcShape3.absarc( 0, 0, radius_flange3, 0, Math.PI * 2, false );
     var holePath3 = new THREE.Path();
     holePath3.moveTo( 0, 0 );

     holePath3.absarc( 0, 0.28,radius_hole3, 0, Math.PI * 2, true );

     var holePath32 = new THREE.Path();
     holePath32.moveTo( 0, 0 );
     
     holePath32.absarc( 0.18, -0.22,radius_hole3, 0, Math.PI * 2, true );
     arcShape3.holes.push(holePath32);


     var holePath33 = new THREE.Path();
     holePath33.moveTo( 0, 0 );
     
     holePath33.absarc( -0.18, -0.22,radius_hole3, 0, Math.PI * 2, true );
     arcShape3.holes.push(holePath33);

     var holePath34 = new THREE.Path();
     holePath34.moveTo( 0, 0 );
     
     holePath34.absarc( 0, 0,radius_central3, 0, Math.PI * 2, true );
     arcShape3.holes.push(holePath34);

     arcShape3.holes.push( holePath3 );

     var arcShape_cylinder2 = new THREE.Shape();
     arcShape_cylinder2.moveTo(0, 0 );
     arcShape_cylinder2.absarc( 0, 0, radius_central3+thickness_nozzle_cylinder, 0, Math.PI * 2, false );
     var holePath35 = new THREE.Path();
     holePath35.moveTo( 0, 0 );
     holePath35.absarc( 0, 0, radius_central3, 0, Math.PI * 2, true );
     arcShape_cylinder2.holes.push(holePath35);




     
//scene.add( torus );

var geometry_extrude3 = new THREE.ExtrudeGeometry( arcShape3, extrudeSettings3 );

var geometry_extrude4 = new THREE.ExtrudeGeometry( arcShape_cylinder2, extrudeSettings3);
var mesh3 = new THREE.Mesh( geometry_extrude3, material_extrude) ;
var mesh4 = new THREE.Mesh( geometry_extrude4, material_extrude) ;

mesh3.translateX(2).translateY(1.3);
mesh4.translateX(2+depth_flange3).translateY(1.3);
mesh3.rotateY(3.14/2);
mesh4.rotateY(3.14/2);
this.scene.add(mesh4);
this.scene.add(mesh3);







     var arcShape4 = new THREE.Shape();
     arcShape4.moveTo(0, 0 );
     arcShape4.absarc( 0, 0, radius_hole3+thickness_nozzle_cylinder3, 0, Math.PI * 2, false );
     var holePath4 = new THREE.Path();
     holePath4.moveTo( 0, 0 );
     holePath4.absarc( 0, 0, radius_hole3, 0, Math.PI * 2, true );
     arcShape4.holes.push(holePath3);


















     var points = holePath.getPoints();
     var out_points= arcShape.getPoints();
     var geometry_outer = new THREE.BufferGeometry().setFromPoints(out_points);
	
	var geometry_inner = new THREE.BufferGeometry().setFromPoints( points );
	
  var line1 = new THREE.Line( geometry_outer, this.material );
  var line2 = new THREE.Line( geometry_inner, this.material );
  //this.scene.add( line1 );
 // this.scene.add( line2 );

this.cylinder.rotateZ(3.14/2);
this.cylinder.position.x=0.7;

/*
var Syx = 1,
    Szx = 0,
    Sxy = 0,
    Szy = 0,
    Sxz = 0,
    Syz = 0;

var matrix = new THREE.Matrix4();

matrix.set(   1,   Syx,  Szx,  0,
            Sxy,     1,  Szy,  0,
            Sxz,   Syz,   1,   0,
              0,     0,   0,   1  );

// apply shear matrix to geometry                  
this.cylinder.geometry.applyMatrix( matrix );


*/

//this.scene.add(this.cylinder);




var depth_flange5=0.15;
var radius_hole5=0.2;
var thickness_nozzle_cylinder5=0.05;
var thickness_flange5=0.4
var extrudeSettings5 = { curveSegments: 50,depth: depth_flange5, bevelEnabled: false, bevelSegments: 1, steps: 1, bevelSize: 0, bevelThickness: 0 };
var extrudeSettings6 = { curveSegments: 50,depth: 0.5, bevelEnabled: false, bevelSegments: 1, steps: 1, bevelSize: 0, bevelThickness: 0 };

var arcShape5 = new THREE.Shape();
arcShape5.moveTo(0, 0 );
arcShape5.absarc( 0, 0, thickness_flange5, 0, Math.PI * 2, false );
var holePath5 = new THREE.Path();
holePath5.moveTo( 0, 0 );
holePath5.absarc( 0, 0,radius_hole5, 0, Math.PI * 2, true );
arcShape5.holes.push( holePath5 );




var arcShape6 = new THREE.Shape();
arcShape6.moveTo(0, 0 );
arcShape6.absarc( 0, 0, radius_hole5+thickness_nozzle_cylinder5, 0, Math.PI * 2, false );
var holePath6 = new THREE.Path();
holePath6.moveTo( 0, 0 );
holePath6.absarc( 0, 0, radius_hole5, 0, Math.PI * 2, true );
arcShape6.holes.push(holePath6);

var geometry_extrude5= new THREE.ExtrudeGeometry( arcShape6, extrudeSettings6 );
//var material_extrude = new THREE.MeshBasicMaterial( { color: '#0b7dba' } );
var geometry_extrude6 = new THREE.ExtrudeGeometry( arcShape, extrudeSettings5 );

var mesh5 = new THREE.Mesh( geometry_extrude5, material_extrude) ;
var mesh6= new THREE.Mesh( geometry_extrude6, material_extrude) ;


var matrix = new THREE.Matrix4();

matrix.set(   1,   0,  0,  0,
              0,   1,  1,  0,
              0,   0,  1,  0,
              0,   0,  0,  1  );

// apply shear matrix to geometry                  
mesh5.geometry.applyMatrix( matrix );
mesh5.translateX(-2+depth_flange5).translateY(1.3);
mesh6.translateX(-2).translateY(1.3).rotateY(3.14/2);
mesh5.rotateY(3.14/2);



    
var geometry_extrude2= new THREE.ExtrudeGeometry( arcShape_cylinder, extrudeSettings2 );
//var material_extrude = new THREE.MeshBasicMaterial( { color: '#0b7dba' } );
var geometry_extrude = new THREE.ExtrudeGeometry( arcShape, extrudeSettings );

var mesh = new THREE.Mesh( geometry_extrude, material_extrude) ;
var mesh2 = new THREE.Mesh( geometry_extrude2, material_extrude) ;
mesh2.rotateY(3.14/2);
mesh2.position.x= depth_flange;

mesh.rotateY(3.14/2);



/* WireFrame Geometry

var wireframe = new THREE.WireframeGeometry( mesh.geometry );

var line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.25;
line.material.transparent = true;
line.material.vertexColors='#0b7dba';

this.scene.add( line );

*/

/* EdgeGeometry

var edges = new THREE.EdgesGeometry( mesh.geometry );
console.log(edges);
console.log(edges.groups);
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );

this.scene.add( line );


*/


var edges1 = new THREE.EdgesGeometry( mesh.geometry );
var line1 = new THREE.LineSegments( edges1, new THREE.LineBasicMaterial( { color: 0xffffff } ) );


var edges2 = new THREE.EdgesGeometry( mesh2.geometry );
var line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0xffffff } ) );


var edges3 = new THREE.EdgesGeometry( mesh3.geometry );
var line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: 0xffffff } ) );



var edges4 = new THREE.EdgesGeometry( mesh.geometry );
var line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0xffffff } ) );


var i;
var geometry_topview= new THREE.Geometry();
var geometry_sideview= new THREE.Geometry();


line2.translateX(2);
line3.translateX(-2);
line4.translateY(2);
line1.translateY(-2);
console.log("bones",line3.geometry);
//this.scene.add( line1 );
//this.scene.add( line2 );
//this.scene.add( line3 );
//this.scene.add( line4 );

this.scene.add( mesh );
this.scene.add(mesh2);

this.scene.add(mesh5);
this.scene.add(mesh6);




console.log("vertices of mesh",mesh.geometry.vertices);

     
     //this.sphere.rotateX(0.5);
     this.sphere.position.x=2;
    // this.sphere.position.y=1;
    this.sphere.position.y=1;
    // this.scene.add(this.sphere);
 
    ;
        //  this.cylinder.position.y=1;
      //   for (i=0;i<this.geometry_hemisphere.vertices.length;i++)
      //   {
      //    // console.log("x and y vertices",this.geometry.vertices[i].x,this.geometry.vertices[i].z);
      //     geometry_topview.vertices.push(new THREE.Vector3(this.geometry_hemisphere.vertices[i].x,this.geometry_hemisphere.vertices[i].z,0));
      //     geometry_sideview.vertices.push(new THREE.Vector3(this.geometry_hemisphere.vertices[i].x,this.geometry_hemisphere.vertices[i].y+1,0));
        
      //   }
     
      // for (i=0;i<this.geometry.vertices.length;i++)
      // {
      //  // console.log("x and y vertices",this.geometry.vertices[i].x,this.geometry.vertices[i].z);
      //   geometry_topview.vertices.push(new THREE.Vector3(this.geometry.vertices[i].x,this.geometry.vertices[i].z,0));
      //   geometry_sideview.vertices.push(new THREE.Vector3(this.geometry.vertices[i].x,this.geometry.vertices[i].y,0));
      
      // }
      // i=0;
      
      for (i=0;i<mesh.geometry.vertices.length;i++)
      {
       // console.log("x and y vertices",this.geometry.vertices[i].x,this.geometry.vertices[i].z);
        geometry_topview.vertices.push(new THREE.Vector3(mesh.geometry.vertices[i].x,mesh.geometry.vertices[i].z,0));
        geometry_sideview.vertices.push(new THREE.Vector3(mesh.geometry.vertices[i].x,mesh.geometry.vertices[i].y+1,0));
      
      }

      //var line = new THREE.Line( geometry_sideview,this.material );
      //this.scene.add(line);
    
    
  /* convex hull for outline  
    
      this.convexHull(geometry_topview.vertices,geometry_topview.vertices.length,2);
     this.convexHull(geometry_sideview.vertices,geometry_sideview.vertices.length,-2);
     
     
 */    
     
     // var s= this.screenXY(this.cylinder);

     //create someplane to project to
  

    
  //this.scene.add(this.nozzle);
    //  this.scene.add(this.sphere);
     //this.scene.add(this.cylinder);
     //this.scene.add(this.sphere);

     // this.scene.add(pointclod);
      this.start();
  
    }

  //   toScreenXY=( position, camera)=> {
  //     var pos = position.clone();
  //     projScreenMat = new THREE.Matrix4();
  //     projScreenMat.multiply( camera.projectionMatrix, camera.matrixWorldInverse );
  //     projScreenMat.multiplyVector3( pos );

  //     var offset = findOffset(div);

  //     return { x: ( pos.x + 1 ) * this.width / 2 + offset.left,
  //          y: ( - pos.y + 1) * this.height / 2 + offset.top };

  // }
  // findOffset=(element)=> { 
  //   var pos = new Object();
  //   pos.left = pos.top = 0;        
  //   if (element.offsetParent)  
  //   { 
  //     do  
  //     { 
  //       pos.left += element.offsetLeft; 
  //       pos.top += element.offsetTop; 
  //     } while (element = element.offsetParent); 
  //   } 
  //   return pos;
  // } 

  orientation=(p,q,r)=>
{
    var val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (val === 0) return 0; 	 // colinear
    return (val > 0)? 1: 2; 	// clock or counterclock wise
}


convexHull=(points, n,y_position)=>
	{
    // There must be at least 3 points
    if (n < 3) return;
    
    // Initialize Result
    let geometry_for_outline= new THREE.Geometry();
    // Find the leftmost point
    var l = 0;
    var i =1;
    for (i = 1; i < n; i++)
    {
        if (points[i].x < points[l].x)
            l = i;
    }
    // Start from leftmost point, keep moving counterclockwise
    // until reach the start point again.  This loop runs O(h)
    // times where h is number of points in result or output.
    var p = l, q;
    var initial=p;
    do
    {
        // Add current point to result
          geometry_for_outline.vertices.push(points[p]);
        // Search for a point 'q' such that orientation(p, x,
        // q) is counterclockwise for all points 'x'. The idea
        // is to keep track of last visited most counterclock-
        // wise point in q. If any point 'i' is more counterclock-
        // wise than q, then update q.
        q = (p+1)%n;
        var j =0;
        for (j = 0; j < n; j++)
        {
           // If i is more counterclockwise than current q, then
           // update q
           if (this.orientation(points[p], points[j], points[q]) === 2)
               q = j;
        }
        // Now q is the most counterclockwise with respect to p
        // Set p as q for next iteration, so that q is added to
        // result 'hull'
        p = q;
    } while (p !== l);  // While we don't come to first point
    geometry_for_outline.vertices.push(points[initial]);
   // console.log("loop ended")
    // Print Result
    var k;
    console.log(geometry_for_outline.vertices);
    var material2 = new THREE.LineBasicMaterial( { color: 0xffffff} );
    var line = new THREE.Line( geometry_for_outline, material2);
    line.position.x=-2;
    line.position.y=y_position;
    this.scene.add(line);
    for (k = 0; k < geometry_for_outline.length; k++)
{
        console.log("geometry of hull vertices",geometry_for_outline.vertices[k].x,geometry_for_outline.vertices[k].y);
}
geometry_for_outline.dispose();
line.remove();
material2.dispose();
}





    componentWillUnmount() {
      this.stop();
      this.mount.removeChild(this.renderer.domElement);
    }
  
    start = () => {
      if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      }
    }
  
    stop = () => {
      cancelAnimationFrame(this.frameId);
    }
  
    animate = () => {
      this.controls.update();
  
  
      this.renderScene();
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  
    renderScene = () => {
      this.renderer.render(this.scene, this.camera);
    }
  
    render() {
      return ( <
        div style = {
          {
            width: '400px',
            height: '400px'
          }
        }
        ref = {
          (mount) => {
            this.mount = mount
          }
        }
        />
      );
    }
  }
  
  export default ThreeScene;