import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;

const starCount = 10000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(starCount * 3);

for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 2000;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const vertexShader = `
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 1.0; // Size of the dots
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const fragmentShader = `
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // White color
    }
`;

const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader
});

const stars = new THREE.Points(geometry, material);
scene.add(stars);

camera.position.z = 500;

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();