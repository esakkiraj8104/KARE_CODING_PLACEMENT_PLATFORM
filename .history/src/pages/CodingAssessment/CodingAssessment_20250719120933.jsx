import React from 'react';
import st
import './CodingAssessment.css'; // Create a new CSS file for styles

const CodingAssessment = () => {
  return (
    <div className="coding-assessment-container">
      <h1 className="coding-heading">Coding & MCQ Assessment</h1>

      <div className="assessment-sections">
        {/* MCQ Section */}
        <div className="mcq-section">
          <h2>📝 MCQ Assessment</h2>
          <p>Answer multiple-choice questions to test your knowledge in aptitude, reasoning, and core technical subjects.</p>
          <button className="start-btn">Start MCQ Test</button>
        </div>

        {/* Coding Platform Section */}
        <div className="coding-section">
          <h2>💻 Coding Platform</h2>
          <p>Solve coding problems in real-time with compiler support in multiple languages.</p>
          <button className="start-btn">Start Coding Challenge</button>
        </div>
      </div>
    </div>
  );
};

export default CodingAssessment;
