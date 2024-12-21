import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model_ani from './components/Model_ani';
// import Hyein from './components/Hyein.jsx';


function App() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: '#E8F5E9',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Model_ani position={[0.025, -0.9, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
