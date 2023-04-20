import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const [rawMarkdown, setRawMarkdown] = useState("");
  return (
    <div className="App">
      <h1 className="title">MD Playground</h1>
      <div className=" outer-container">
        <div className="raw-input-container">
          <textarea
            className="raw-input"
            name="rawMarkdown"
            id="rawMarkdown"
            placeholder="Enter your markdown here..."
            onChange={(e) => {
              setRawMarkdown(e.target.value);
              setMarkDownOutput(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="markdown-output-container ">
          <div className="markdown-output">
            <ReactMarkdown>{rawMarkdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
