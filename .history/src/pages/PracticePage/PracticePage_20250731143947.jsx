import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './PracticePage.css';

const PracticePage = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState("print('Hello, World!')");
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [lines, setLines] = useState([]);
  const [userName, setUserName] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Line numbers
  useEffect(() => {
    setLines(Array(code.split('\n').length).fill(0));
  }, [code]);

  // Fetch user name from Firestore
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userRef = doc(db, 'users', currentUser.email);
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
  }, []);

  // Handle code execution
  const handleRunCode = async () => {
    if (!code.trim()) {
      setOutput("⚠️ Please write some code to run.");
      return;
    }

    setIsRunning(true);
    setOutput('');
    try {
      const response = await fetch('http://localhost:5000/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: language.trim().toLowerCase(),
          code: code,
          input: input.trim() // ✅ ensure trimmed input
        }),
      });

      const data = await response.json();
      setOutput(data.output || "⚠️ No output received.");
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput("❌ Failed to connect to the server.");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className={`practice-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      {/* Navbar */}
      <div className="navbar">
        KARE Coding Practice Page:
        <div className="right">
          <button className="theme-toggle" onClick={() => setIsDarkTheme(!isDarkTheme)}>
            {isDarkTheme ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
          <span>Welcome, {userName}</span>
        </div>
      </div>

      <div className="practice-container">
        <h2 className="practice-title">💻 Practice Coding</h2>

        {/* Options */}
        <div className="options-bar">
          <div className="language-selector">
            <label>Select Language: </label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="c">C</option>
              <option value="java">Java</option>
            </select>
          </div>

          <div className="run-button-container-inline">
            <button className="run-button" onClick={handleRunCode} disabled={isRunning}>
              {isRunning ? '⏳ Running...' : '▶️ Run Code'}
            </button>
          </div>
        </div>

        {/* Code Editor */}
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
            disabled={isRunning}
          ></textarea>
        </div>

        {/* Input Box */}
        <textarea
          className="input-box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Custom Input (optional)"
          disabled={isRunning}
        ></textarea>
        <small className="input-hint">
          ⚠️ If your code uses <code>input()</code> / <code>scanf()</code> / <code>cin</code>, provide each input value on a new line.
        </small>

        {/* Output */}
        <div className="output-box">
          <h3>🧾 Output</h3>
          {isRunning ? <p>⏳ Executing...</p> : <pre>{output}</pre>}
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
