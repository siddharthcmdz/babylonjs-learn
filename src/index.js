import { ArcRotateCamera, Engine, Scene, HemisphericLight, MeshBuilder } from '@babylonjs/core'

console.log('hello from webpack')

const createScene = (canvas, engine) => {
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    const light = new HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const box = MeshBuilder.CreateBox("box", {});

    return scene;
}

const init = () => {
    const canvas = document.getElementById("renderCanvas"); // Get the canvas element

    const engine = new Engine(canvas, true); // Generate the BABYLON 3D engine
    const scene = createScene(canvas, engine);
    engine.runRenderLoop(function () {
        scene.render();
    })

    window.addEventListener('resize', function () {
        engine.resize();
    })
}