import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Adjust the path if needed
import { doc, getDoc } from 'firebase/firestore';
import './PracticePage.css';

const PracticePage = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState("print('Hello, World!')");
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [lines, setLines] = useState([]);
  const [userName, setUserName] = useState('');

  // Update line numbers when code changes
  useEffect(() => {
    setLines(Array(code.split('\n').length).fill(0));
  }, [code]);

  // Fetch user name from Firestore
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userRef = doc(db, 'users', currentUser.email); // Document ID is email
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserName(userSnap.data().name || 'User');
          } else {
            setUserName('User');
          }
        }
      } catch (error) {
        console.error('Error fetching user name:', error);
        setUserName('User');
      }
    };

    fetchUserName();
  }, []); // ✅ No dependencies here since it's fetching once on mount

  // Handle code execution
  const handleRunCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code, input }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput("❌ Failed to connect to the server.");
    }
  };

  return (
    <div className="practice-page">
      <div className="navbar">
        KARE Coding Practice Page:
        <div className="right">Welcome, {userName}</div>
      </div>

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

        <div className="editor-wrapper">
          <div className="line-numbers">
            {lines.map((_, idx) => (
              <div key={idx}>{idx + 1}</div>
            ))}
          </div>
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          ></textarea>
        </div>

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
