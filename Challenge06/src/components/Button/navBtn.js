import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation({ to, buttonText }) {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(to);
  };

  return (
    <div>
      <button
      className="btn me-auto text-light mb-4"
      style={{ backgroundColor: "#5CB85F", border: "none" }}
      onClick={navigateTo}>{buttonText}</button>
    </div>
  );
}

export default Navigation;