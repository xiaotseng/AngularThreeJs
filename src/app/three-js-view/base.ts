import { Scene, AmbientLight, PointLight, WebGL1Renderer, PerspectiveCamera, GridHelper, Color, WebGLRenderer, Camera, AxesHelper, BoxGeometry, Object3D, Geometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, MeshPhongMaterial, HemisphereLight, SpotLight, Vector3 } from 'three';
//import{OrbitControls}from 'three-full';
//import * as Stats from 'stats.js';
import * as TWEEN from '@tweenjs/tween.js';
import {
    FXAAShader, UnrealBloomPass, ShaderPass, FilmPass, OutlinePass, GeometryUtils, CopyShader, ColorifyShader, SepiaShader,
    OrbitControls, GLTFLoader, EffectComposer, RenderPass, SMAAShader, SMAAPass, ClearMaskPass, MaskPass,
} from 'three-full';
export const RENDERER = new WebGLRenderer();
export function initRenderer(doc: Element) {
    RENDERER.setSize(doc.clientWidth, doc.clientHeight);
    RENDERER.shadowMap.enabled = true;
    doc.appendChild(RENDERER.domElement);//把threeJs画布嵌套到网页里
}
export let SCENES = [];
export let SCENE;//场景
export let CAMERA;//相机
export let CONTROLS;//控制器
export function initScene() {
    SCENE = new Scene();
}
export function initCamera(doc: Element) {
    const d = {
        fov: 30,
        near: 1,
        far: 1000,
    };
    CAMERA = new PerspectiveCamera(
        d.fov,
        doc.clientWidth / doc.clientHeight,
        d.near,
        d.far);
    const p = {
        x: -20,
        y: 10,
        z: -10,
    };
    CAMERA.position.set(p.x, p.y, p.z);
    CAMERA.lookAt(0, 0, 0);
    CONTROLS = new OrbitControls(CAMERA, RENDERER.domElement);  // 控制镜头
}
//在场景里添加网格
export function initGrid() {
    const gridHelper = new GridHelper(100, 50);
    let axes = new AxesHelper(5);
    SCENE.add(gridHelper);
    SCENE.add(axes);
}
//全部模型
let Models = [];
export function addModel() {
    //材质
    let mat = new MeshBasicMaterial();
    mat = new MeshPhongMaterial({ color: "#ffffff", });
    //模型
    let boxGeo = new BoxGeometry(10, 10, 10)
    Models.push(new Mesh(boxGeo, mat));
    let light = new PointLight("#ffffff");
    //点光源
    light.position.set(50, 100, 100);
    Models.push(light);
    //遍历所有模型加到场景
    Models.map(r => { SCENE.add(r) })
}
export const MIXER = [];

