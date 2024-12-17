import React from "react";
import "./css/home.css";
import HeroBanner from "./HeroBanner";
import { motion } from "framer-motion"; // Import Framer Motion
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei"; // For 3D object controls and helpers

export default function Home() {
  return (
    <>
      <HeroBanner />
      <motion.div
        className="content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Home</h1>
        <br />
        <p>
          Established in 1995, Silvermist College of Engineering and Technology
          is a premier institution...
        </p>
      </motion.div>

      {/* Animated Placement Section */}
      <div className="placements-section">
        <h1>Career Launchpad: Soaring Success Rates</h1>
        <motion.div
          className="placement-highlights"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Placement Highlights */}
          <motion.div
            className="flex-table"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Highlights of Placement Session 2023-24</h2>
            <table className="table-content">
              <tbody>
                <tr>
                  <td><strong>Company</strong></td>
                  <td><strong>Offers</strong></td>
                </tr>
                <tr><td>Aerius Technologies</td><td>7</td></tr>
                <tr><td>EcoCycle Inc.</td><td>28</td></tr>
              </tbody>
            </table>
          </motion.div>

          {/* 3D Object Example */}
          <div className="three-d-container">
            <Canvas style={{ height: "300px" }}>
              <ambientLight intensity={0.5} />
              <OrbitControls />
              <Box args={[2, 2, 2]} position={[0, 0, 0]}>
                <meshStandardMaterial attach="material" color="blue" />
              </Box>
            </Canvas>
          </div>
        </motion.div>
      </div>
    </>
  );
}
