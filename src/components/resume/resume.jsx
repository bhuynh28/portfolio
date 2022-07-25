import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Link } from "react-router-dom";
import "./resume.css"
import pdf from "../../img/resume.pdf"

function Resume() {

  return (
    <div className="res-page">
        <h1 className="res-header">Resume</h1>
        <div className="pdf-wrapper">
            <Document file={pdf}>
                <Page pageNumber={1} />
            </Document>
            <Link to={pdf} target="_blank" download>Download</Link>
        </div>
    </div>
  );
}

export default Resume