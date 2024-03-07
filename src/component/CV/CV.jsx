import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import AnnotationLayer styles
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Import TextLayer styles

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CV() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onError(error) {
    console.error('Error loading PDF:', error);
  }

  return (
    <div className='flex justify-center'>
      <Document file="/Resume.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={onError}>
        <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
      <p>
        
      </p>
    </div>
  );
}
