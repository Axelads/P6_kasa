import React, { useState } from 'react';
import '../index.css';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`arrow material-icons ${isOpen ? 'open' : ''}`}>
          arrow_back_ios
        </span>
      </div>
      {isOpen && <div className="collapse-content"><p>{content}</p></div>}
    </div>
  );
};

export default Collapse;