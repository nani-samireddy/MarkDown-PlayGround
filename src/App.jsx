import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-black text-white p-10">MarkDown Editor</h1>
      <div className="w-100vw h-100vh flex flex-row ">
        <div className="w-50vw   h-full">
          <textarea
            className="w-full h-full p-4  outline-none resize-none"
            name="rawMarkdown"
            id="rawMarkdown"
            placeholder="Enter your markdown here..."
            res
          ></textarea>
        </div>
        <div className="w-50vw h-full ">
          <textarea
            readOnly
            className="w-full h-full p-4  outline-none"
            name="markDownOutput"
            id="markDownOutput"
            placeholder="Your markdown will appear here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
