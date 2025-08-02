import React, { useState } from 'react';
import './PracticePage.css';

const PracticePage = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState("print('Hello, World!')");
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language,
          code,
          input,
        }),
      });

      const data = await response.json();
      console.log("Backend output:", data);  // ✅ ADD THIS for debugging
      setOutput(data.output);
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput("❌ Failed to connect to the server.");
    }
  };


  return (
    <div className="practice-page">
      <div className="practice-container">
        <h2 className="practice-title">💻 Practice Coding</h2>

        <div className="options-bar">
          <label>Select Language:</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="java">Java</option>
          </select>
        </div>

        <textarea
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        ></textarea>

        <textarea
          className="input-box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Custom Input (optional)"
        ></textarea>

        <button className="run-button" onClick={handleRunCode}>
          ▶️ Run Code
        </button>

        <div className="output-box">
          <h3>🧾 Output</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
