import React from 'react'
import PDFViewer from '../components/PDFViewer'

const PdfPage = () => {
  return (
    <div>
      <PDFViewer pdfUrl="/catering-menu.pdf" />
    </div>
  )
}

export default PdfPage
