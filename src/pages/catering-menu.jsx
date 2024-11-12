import React from 'react'
import PDFViewer from '../components/PDFViewer'

const CateringMenu = () => {
  return (
    <iframe
      src="/catering-menu.pdf"
      width="100%"
      height="100%"
      scrolling="no"
      frameborder="0"
      allowfullscreen=""
      allow="clipboard-write"
      class="publuuflip"
    ></iframe>
  )
}

export default CateringMenu
