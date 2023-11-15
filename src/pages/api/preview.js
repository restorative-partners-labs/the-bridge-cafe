// ./nextjs-pages/src/pages/api/preview.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default function preview(req, res) {
  res.setDraftMode({ enable: true })
  res.writeHead(307, { Location: '/' })
  res.end()
}
