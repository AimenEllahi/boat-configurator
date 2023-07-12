import * as THREE from "three";
import React, { Suspense, useRef, useMemo, useState } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  Sky,
} from "@react-three/drei";
import {BsFillEyeFill} from "react-icons/bs";
import { Water } from "three/examples/jsm/objects/Water.js";
import { useControls } from "leva";
import { Model } from "./Components/Boat";
import ColorContainer from "./Components/ColorContainer";
import "./App.css";

extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

const SkyBox = () => {
  const { scene, gl } = useThree();
  const sunRef = useRef();
  const parameters = {
    elevation: 2,
    azimuth: 180,
  };
  const sun = new THREE.Vector3();
  console.log(sunRef, scene);
  const pmremGenerator = new THREE.PMREMGenerator(gl);
  let renderTarget;
  // function updateSun() {
  //   const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
  //   const theta = THREE.MathUtils.degToRad(parameters.azimuth);

  //   sun.setFromSphericalCoords(1, phi, theta);

  //   sunRef.current.__r3f.memoizedProps.object.position.copy(sun);
  //   scene.water.__r3f.memoizedProps.args[1].sunDirection.copy(sun).normalize();

  //   if (renderTarget !== undefined) renderTarget.dispose();

  //   renderTarget = pmremGenerator.fromScene(scene.sky);

  //   scene.environment = renderTarget.texture;
  // }

  // useFrame(() => {
  //   updateSun();
  // });
  return (
    <Sky
      scale={1000}
      sunPosition={[500, 100, -1000]}
      turbidity={0.6}
      elevation={1}
      ref={sunRef}
      azimuth={200}
    />
  );
};

export default function App() {
  const [showColorContainer, setShowColorContainer] = useState(false);

  const handleColorClick = () => {
    setShowColorContainer((prevShow) => !prevShow);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Environment preset='sunset' />
        <Ocean />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <SkyBox />

        <OrbitControls maxPolarAngle={Math.PI * 0.495} />
      </Canvas>
      <div className='icon-container'>
        <div className="icon">
          <BsFillEyeFill size={22} style={{padding:"3px"}} />
        </div>
        <div className='icon'>
          <img onClick={handleColorClick} src='/color.png' alt='arrow' />
        </div>
        <div className='icon'>
          <img src='/sun_icon.png' alt='arrow' />
        </div>
      </div>
      {/*download pdf button*/}
      <div className="download-pdf" style={{ backgroundColor: "gray", position: "fixed", bottom: "50px", left: "50px" }}>
      <button className="button-pdf">Download PDF</button>
      </div>
    
      {showColorContainer && <ColorContainer />}
    </div>
  );
}
