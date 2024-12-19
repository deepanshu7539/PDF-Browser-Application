import React, { useState, useEffect } from "react";
import "./App.css";
import ListView from "./components/ListView";
import ReaderView from "./components/ReaderView";

const App = () => {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.npoint.io/dee51ea017d20efdfcc8")
      .then((response) => response.json())
      .then((data) => setPdfs(data));
  }, []);

  const filteredPdfs = pdfs.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>PDF Browser</h1>
        <input
          type="text"
          placeholder="Search PDFs by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </header>
      <main>
        {selectedPdf ? (
          <ReaderView pdf={selectedPdf} onBack={() => setSelectedPdf(null)} />
        ) : (
          <ListView pdfs={filteredPdfs} onSelect={setSelectedPdf} />
        )}
      </main>
    </div>
  );
};

export default App;
