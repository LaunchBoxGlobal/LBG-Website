import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
export default function Model(props) {
  const earthRef = useRef();
  const { nodes, materials } = useGLTF("/earth.gltf");

  // useFrame(() => {
  //   if (earthRef.current) {
  //     earthRef.current.rotation.x += 0.01;
  //   }
  // });
  return (
    <group {...props} ref={earthRef} dispose={null} position={[0, 0, 0]}>
      <group scale={0.1}>
        <group position={[0, 0, 0]}>
          <mesh
            geometry={nodes.Path_9__0.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_1.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_2.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_3.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_4.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_5.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_6.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_7.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_8.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_9.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_10.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_11.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_12.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_13.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>

          <mesh
            geometry={nodes.Path_9__0_14.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_15.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_16.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_17.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_18.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_19.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_20.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_21.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_22.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_23.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_24.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_25.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_26.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_27.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_28.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_29.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_30.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_31.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_32.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_33.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_34.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_35.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
          <mesh
            geometry={nodes.Path_9__0_36.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial color="#F40E00" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earth.gltf");
