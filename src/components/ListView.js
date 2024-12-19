import React from "react";
import "./ListView.css";

const ListView = ({ pdfs, onSelect }) => {
  return (
    <div className="list-view">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf-item" onClick={() => onSelect(pdf)}>
          <img
            src={`https://via.placeholder.com/100x140.png?text=${encodeURIComponent(
              pdf.name
            )}`}
            alt={pdf.name}
            className="pdf-thumbnail"
          />
          <div className="pdf-info">
            <h3>{pdf.name}</h3>
            <p>{pdf.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
