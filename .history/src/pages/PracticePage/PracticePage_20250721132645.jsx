// src/pages/PracticePage.jsx
import React, { useState } from 'react';
import './PracticePage.css';

const PracticePage = () => {
  const [code, setCode] = useState(`print("Hello, world!")`);
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python');
  const [input, setInput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, input, language })
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (err) {
      setOutput('❌ Failed to connect to backend');
    }
  };

  return (
    <div className="practice-page">
      <div className="practice-container">
        <h2 className="practice-title">💻 Practice Coding</h2>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            marginBottom: '16px',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
        >
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>

        <div className="editor-wrapper">
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
        </div>

        <textarea
          placeholder="Optional Input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            marginTop: '16px',
            width: '100%',
            height: '80px',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #cce5ff'
          }}
        />

        <button className="run-button" onClick={handleRunCode}>
          Run Code
        </button>

        <div className="output-box">
          <strong>Output:</strong>
          <br />
          {output}
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
