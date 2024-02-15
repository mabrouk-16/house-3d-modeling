import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

function MyThree(props) {
  const canvasRef = useRef(null);
  let scene = new THREE.Scene();
  useEffect(() => {
    // Create a Three.js scene

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(50, 15, 22);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Helper objects
    const axesHelper = new THREE.AxesHelper(3);
    scene.add(axesHelper);
    const gridHelper = new THREE.GridHelper(100, 50);
    scene.add(gridHelper);

    // Function to draw 3D walls based on canvas lines
    function drawWalls(lines) {
      // Remove existing walls
      scene.children.forEach((child) => {
        if (child.userData && child.userData.isWall) {
          scene.remove(child);
        }
      });

      // Draw walls based on each line
      lines.forEach((line) => {
        let distance = Math.sqrt(
          Math.pow(line.endX - line.startX, 2) +
            Math.pow(line.endY - line.startY, 2)
        );
        let y = 5;
        let z = 1;

        let positionX = (line.startX + line.endX) / 2;
        let positionY = y / 2;
        let positionZ = (line.startY + line.endY) / 2;

        let rotationY = Math.atan2(
          line.startY - line.endY,
          line.startX - line.endX
        );

        const wallGeometry = new THREE.BoxGeometry(distance / 10, y, z);
        const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
        const wall = new THREE.Mesh(wallGeometry, wallMaterial);

        wall.position.set(positionX / 10 - 40, positionY, positionZ / 10 - 30);
        console.log(positionX / 10 - 40, positionY, -positionZ / 10 + 30);
        wall.rotation.y = -rotationY;
        // wall.rotation.x = Math.PI;
        wall.userData.isWall = true;

        scene.add(wall);
      });
    }

    // Function to rotate the scene
    function rotateScene(angleX, angleY, angleZ) {
      scene.rotation.x = angleX;
      scene.rotation.y = angleY;
      scene.rotation.z = angleZ;
      return scene;
    }

    // Call the rotateScene function with desired angles

    //  scene = rotateScene(Math.PI, 0, 0);
    drawWalls(props.lines);
    // Render the scene
    // scene.rotation.y = Math.PI;
    function animate() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
      controls.update();
    }
    animate();

    // Clean up
    return () => {
      // scene;
      // Dispose of Three.js objects
      renderer.dispose();
      controls.dispose();
    };
  }, []); // Dependency array is empty, so this effect only runs once on component mount

  // Function to export the scene as a GLTF file
  function exportScene() {
    const exporter = new GLTFExporter();
    // let exportedScene = new  THREE.Scene();
    // exportedScene= scene.clone()
    // exportedScene.rotateX = Math.PI;
    // rotateScene(Math.PI, 0, 0);

    exporter.parse(scene, function (result) {
      const blob = new Blob([JSON.stringify(result)], {
        type: "application/octet-stream",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.download = "scene.gltf";
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    });
  }
  return (
    <>
      <button onClick={exportScene}>Save 3D</button>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </>
  );
}

export default MyThree;
