const THREE = window.MINDAR.IMAGE.THREE;
import {mockWithImage, mockWithVideo} from './applications/libs/camera-mock.js';

document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {

       //mockWithVideo("./applications/assets/mock-videos/course-banner1.mp4");
       mockWithImage("./applications/assets/mock-videos/course-banner1.png");
        // Initialize MindAR with the target image
    
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: './applications/assets/targets/course-banner.mind'
        });
        const { renderer, scene, camera } = mindarThree;

        // Create a plane geometry with a blue material
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x0000ff,
            transparent: true,
            opacity: 0.5
        });
        const plane = new THREE.Mesh(geometry, material);

        // Add the plane to the anchor
        const anchor = mindarThree.addAnchor(0); // Target the first image
        anchor.group.add(plane);

        // Start MindAR session
        await mindarThree.start();

        // Render the scene continuously
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    };

    start();
});
