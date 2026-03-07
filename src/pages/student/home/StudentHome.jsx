import React from 'react'

import { sectors } from "../../../data/Sector.js";
import Card from "../../../components/common/Card";
import Navbar from "../../../components/layout/Navbar";
import "./StudentHome.css";

function StudentHome() {
  const user = {
    name: "Arun",
    department: "CSE",
  };

  return (
    <div className="student-home-page">
      <Navbar />

      <div className="home-content">
        <h1 className="dept-name">Department of {user.department}, KIOT.</h1>
        <div className="home-container">
          <Card title="Department of" subtitle={user.department} />

          {sectors.map((sector) => (
            <Card key={sector.id} title={sector.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentHome;
