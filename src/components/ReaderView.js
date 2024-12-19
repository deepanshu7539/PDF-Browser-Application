import React from "react";
import "./ReaderView.css";

const ReaderView = ({ pdf, onBack }) => {
  return (
    <div className="reader-view">
      <button className="back-button" onClick={onBack}>
        Back to List
      </button>
      <h2>{pdf.name}</h2>
      <p>By: {pdf.author}</p>
      <iframe
        src={pdf.link}
        title={pdf.name}
        className="pdf-frame"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ReaderView;
