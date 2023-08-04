import React from 'react'

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  )
}

export default PDFViewer
