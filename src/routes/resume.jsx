import React from 'react';
import "./resume.css"

function Resume() {

  return (
    <div className="res-page">
        <h1 className="res-header">Resume</h1>
        <div className="pdf-wrapper">
        <iframe src="https://drive.google.com/file/d/160zQCB_AAUpqFIBisTJnzjnk9yMsoeW2/preview" width="100%" height="100%" allow="autoplay" title="pdf"></iframe>
        </div>
    </div>
  );
}

export default Resume