import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './pdf.css';

// Force Vite to bundle the worker cleanly as a local asset chunk
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page 
          key={`page_${index + 1}`} 
          pageNumber={index + 1} 
          renderTextLayer={false} 
          renderAnnotationLayer={false} 
        />
      ))}
    </Document>
  );
}