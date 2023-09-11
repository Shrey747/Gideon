import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="container">
      <h1 className="heading">Gideon Video Call</h1>
      <input
        className="input-field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button className="join-button" onClick={handleJoinRoom}>
        Join
      </button>
    </div>
  );
};

export default HomePage;
