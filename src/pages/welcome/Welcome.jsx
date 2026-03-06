import "../welcome/Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img id="kiot-logo" src="/images/KIOT-Logo.webp" alt="KIOT LOGO" />
      <div className="welcome-body">
        <div className="welcome-content">
          <h1 id="line1">Knowledge Institute of Technology (Autonomous)</h1>
          <h2 id="line2">Complaint Box</h2>
          <div className="welcome-button">
            <button id="stu">Student</button>
            <button id="sta">Staff</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
