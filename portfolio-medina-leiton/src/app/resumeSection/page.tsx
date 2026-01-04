import React from 'react';

interface PDFViewerProps {
  pdfFile: string;
}

function PDFViewer({ pdfFile }: PDFViewerProps) {
  return (
    <div>
      <iframe
        src={pdfFile}
        width="100%"
        height="500px"
        style={{ border: 'none' }}
        title="Visor de PDF"
      ></iframe>
    </div>
  );
}

export default PDFViewer;