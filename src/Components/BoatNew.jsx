/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 BoatNew.glb --transform
*/


import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import useColorStore from "../Utils/store";

export function BoatNew(props) {
  const { nodes, materials } = useGLTF('/Models/BoatNew-transformed.glb')
  const { colors, activeState, setActiveState } = useColorStore();
  const { camera } = useThree();
  const floorRef = useRef();
  const primFencRef = useRef();
  const secFencRef = useRef();
  const primIntRef = useRef();
  const secIntRef = useRef();
  const consoleRef = useRef();
  const exteriorRailRef = useRef();

  const { position, rotation } = useControls("Position", {
    position: {
      value: [0, 5, 100],
      step: 0.1,
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.1,
    },
  });

  useEffect(() => {
    console.log(activeState);
    switch (activeState) {
      case 0:
        props.setIsAnimationTriggered(true);
        gsap.to(camera.position, {
          x: 0,
          y: 5,
          z: 100,
          duration: 2,
          ease: "power.easeOut",
          onComplete: () => {
            setTimeout(() => {
              props.setIsAnimationTriggered(false);
            }, 100);
          },
          onStart: () => {
            gsap.to(camera.rotation, {
              x: 0,
              y: 0,
              z: 0,
            });
          },
        });
        break;
      case "Secondary Fence":
        props.setIsAnimationTriggered(true);
        gsap.to(camera.position, {
          x: 0,
          y: 16.5,
          z: 62.5,
          duration: 1,
          ease: "power.easeOut",
          onComplete: () => {
            setTimeout(() => {
              props.setIsAnimationTriggered(false);
            }, 500);
          },
          onUpdate: () => {
            camera.lookAt(...secFencRef.current.position);
          },
        });
        break;
      case "Primary Interior Vinyl":
        props.setIsAnimationTriggered(true);
        gsap.to(camera.position, {
          x: 62,
          y: 33,
          z: 21.4,
          duration: 2,
          onComplete: () => {
            setTimeout(() => {
              props.setIsAnimationTriggered(false);
            }, 500);
          },
          onUpdate: () => {
            camera.lookAt(...primIntRef.current.position);
          },
        });
        break;
      case "Exterior Rail":
        props.setIsAnimationTriggered(true);
        gsap.to(camera.position, {
          x: -40,
          y: 8,
          z: 50,
          duration: 2,
          ease: "power.easeOut",
          onComplete: () => {
            setTimeout(() => {
              props.setIsAnimationTriggered(false);
            }, 500);
          },
          onUpdate: () => {
            camera.lookAt(...exteriorRailRef.current.position);
          },
        });
        break;
      case "Secondary Interior Vinyl":
        props.setIsAnimationTriggered(true);

        gsap.to(camera.position, {
          x: 27.8,
          y: 38,
          z: 13,
          duration: 2,
          ease: "power.easeOut",
          onComplete: () => {
            setTimeout(() => {
              props.setIsAnimationTriggered(false);
            }, 500);
          },
          onUpdate: () => {
            camera.lookAt(...secIntRef.current.position);
          },
        });
        break;
      case "Flooring Option":
        props.setIsAnimationTriggered(true);
        gsap.to(camera.position, {
          x: 20,
          y: 40,
          z: 40,
          duration: 2,
          ease: "power.easeOut",
          onComplete: () => {
            setTimeout(() => {
              props.setIsAnimationTriggered(false);
            }, 500);
          },
          onUpdate: () => {
            camera.lookAt(...floorRef.current.position);
          },
          onStart: () => {},
        });
        break;
      case "Console Color":
        props.setIsAnimationTriggered(true);
        gsap.to(camera.position, {
          x: 19,
          y: 40.5,
          z: 33,
          duration: 2,
          ease: "power.easeOut",
          onComplete: () => {
            setTimeout(() => {
              props.setIsAnimationTriggered(false);
            }, 500);
          },
          onUpdate: () => {
            camera.lookAt(...consoleRef.current.position);
          },
        });
        break;
      default:
        break;
    }
  }, [activeState]);

  useEffect(() => {
    camera.position.set(...position);
    camera.rotation.set(...rotation);
  }, [rotation, position]);

  return (
    <group 
    onPointerMissed={() => setActiveState(0)}
    position={[0, 15, 5]}
    {...props}
    scale={12}
    dispose={null}>
      <mesh   name='flooring'
        ref={floorRef}
        position={[0.392, -0.833, 0]}
        // onClick={() => setActiveState("Flooring Option")}
        material-color={colors["Flooring Option"]}
        geometry={nodes.StaticMeshActor_0_StaticMeshComponent0.geometry} 
        material={materials.Rug_007_material}/>
      <mesh geometry={nodes.StaticMeshActor_1_StaticMeshComponent0.geometry} material={materials.Plastic_Metallic_white__0} position={[1.395, -0.336, 0]} />
      <mesh name='Secondary Fence'
        ref={secFencRef}
        // onClick={() => setActiveState("Secondary Fence")}
        material-color={colors["Secondary Fence"]}
        geometry={nodes.StaticMeshActor_2_StaticMeshComponent0.geometry} 
        material={materials.Body_paint_blue} 
        position={[0.138, -0.77, 0]} />
      <mesh  
        material-color={colors["Primary Interior Vinyl"]}
        
        name='Primary Interior'
        ref={primIntRef}
        // onClick={() => setActiveState("Primary Interior Vinyl")}
         geometry={nodes.StaticMeshActor_3_StaticMeshComponent0.geometry}
         material={materials.Leather_white_16_50cm__0} 
         position={[0.519, -0.127, 0]} 
         rotation={[0, 0, 0.08]} />
      <group position={[0.124, -0.494, 1.114]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1.054, 1, 1]}>
        <mesh   material-color={colors["Secondary Interior Vinyl"]}
          name='Secondary Interior'
          ref={secIntRef}
          // onClick={() => setActiveState("Secondary Interior Vinyl")}
          geometry={nodes.Secondary_Interior.geometry} material={materials.Leather_grey} />
        <mesh geometry={nodes.Secondary_Interior_1.geometry} material={materials.Leather_Black} />
        <mesh geometry={nodes.Secondary_Interior_2.geometry} material={materials.WorldGridMaterial} />
        <mesh geometry={nodes.Secondary_Interior_3.geometry} material={materials.Material__970} />
      </group>
      <group position={[0.017, 0.056, 0]}>
        <mesh geometry={nodes['Z-Misc'].geometry} material={materials.Chrome_Polished__0} />
        <mesh geometry={nodes['Z-Misc_1'].geometry} material={materials.Glass_Coated_Red__0} />
        <mesh geometry={nodes['Z-Misc_2'].geometry} material={materials.Aluminum_Anodized_Clear__0} />
        <mesh geometry={nodes['Z-Misc_3'].geometry} material={materials.Iron_Blurry__0} />
        <mesh geometry={nodes['Z-Misc_4'].geometry} material={materials.Plastic_Simple_Blurry_white_1} />
        <mesh geometry={nodes['Z-Misc_5'].geometry} material={materials.Glass_Coated_Green__0} />
        <mesh geometry={nodes['Z-Misc_6'].geometry} material={materials.Glass_Tinted_Black__0} />
        <mesh geometry={nodes['Z-Misc_7'].geometry} material={materials.Glass_Window_Neutral__0} />
        <mesh geometry={nodes['Z-Misc_8'].geometry} material={materials.Chrome_Black__0} />
        <mesh geometry={nodes['Z-Misc_9'].geometry} material={materials.Material__1029} />
        <mesh geometry={nodes['Z-Misc_10'].geometry} material={materials.Material__1052} />
        <mesh geometry={nodes['Z-Misc_11'].geometry} material={materials.Material__1064} />
        <mesh geometry={nodes['Z-Misc_12'].geometry} material={materials.Material__1076} />
        <mesh geometry={nodes['Z-Misc_13'].geometry} material={materials.Plain_Grey_Velvet_2466039_28cm__0} />
        <mesh geometry={nodes['Z-Misc_14'].geometry} material={materials.Black_Plastic_mtl__0} />
        <mesh geometry={nodes['Z-Misc_15'].geometry} material={materials.Grey_Plastic_mtl__0} />
        <mesh geometry={nodes['Z-Misc_16'].geometry} material={materials.Plastic_Simple_Blurry_green__0} />
        <mesh geometry={nodes['Z-Misc_17'].geometry} material={materials.Plastic_Simple_Blurry_fullwhite_1} />
        <mesh  material-metalness={0.8}
          material-color={colors["Exterior Rail"]}
          name='Exterior Rail'
          ref={exteriorRailRef}
          geometry={nodes['Z-Misc_18'].geometry} material={materials.Metal} />
        <mesh geometry={nodes['Z-Misc_19'].geometry} material={materials.Plastic_Metallic_Black__0} />
        <mesh geometry={nodes['Z-Misc_20'].geometry} material={materials.Waveguide_mtl__0} />
        <mesh geometry={nodes['Z-Misc_21'].geometry} material={materials.Screw_mtl__0} />
        <mesh geometry={nodes['Z-Misc_22'].geometry} material={materials.Controls_mtl__0} />
      </group>
    </group>
  )
}

useGLTF.preload('/BoatNew-transformed.glb')
