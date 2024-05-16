import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import AnnotationLayer styles
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Import TextLayer styles

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
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

  function downloadPdf() {
    const link = document.createElement('a');
    link.href = '/Resume2.pdf'; // Change the path to your PDF file
    link.download = 'Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-4'>
        <Document file="/Resume2.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={onError}>
          <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
      <button onClick={downloadPdf} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Download
      </button>
    </div>
  );
}
