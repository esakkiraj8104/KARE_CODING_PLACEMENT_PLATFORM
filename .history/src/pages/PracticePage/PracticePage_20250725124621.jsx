import React, { useState, useEffect, useRef } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);

  const editorRef = useRef(null);
  const lineNumberRef = useRef(null);

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

  const updateLineNumbers = (value) => {
    const lineCount = value.split('\n').length;
    setLines(Array.from({ length: lineCount }, (_, i) => i + 1));
  };

  useEffect(() => {
    updateLineNumbers(code);
  }, []);

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);
    updateLineNumbers(value);
  };

  const syncScroll = () => {
    if (editorRef.current && lineNumberRef.current) {
      lineNumberRef.current.scrollTop = editorRef.current.scrollTop;
    }
  };

  const handleRunCode = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <div className="practice-page">
      <div className="navbar">
        KARE Code Runner
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
          <div className="line-numbers" ref={lineNumberRef}>
            {lines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <textarea
            className="code-editor"
            ref={editorRef}
            value={code}
            onChange={handleCodeChange}
            onScroll={syncScroll}
            placeholder="Write your code here..."
          ></textarea>
        </div>

        <textarea
          className="input-box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Custom Input (optional)"
        ></textarea>

        <button className="run-button" onClick={handleRunCode} disabled={isLoading}>
          {isLoading ? '⏳ Running...' : '▶️ Run Code'}
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
