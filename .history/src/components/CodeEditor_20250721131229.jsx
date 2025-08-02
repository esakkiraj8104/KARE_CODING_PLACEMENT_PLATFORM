import React, { useState } from "react";
import axios from "axios";

const CodeEditor = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const res = await axios.post("http://localhost:5000/run", {
        language,
        code,
        input,
      });
      setOutput(res.data.output);
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Run Your Code</h2>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
      </select>

      <br />
      <textarea
        rows={10}
        cols={80}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here"
      ></textarea>

      <br />
      <textarea
        rows={4}
        cols={80}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Custom input (optional)"
      ></textarea>

      <br />
      <button onClick={handleRun}>▶ Run</button>

      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
