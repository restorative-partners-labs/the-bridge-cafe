// ./nextjs-pages/src/pages/api/exit-preview.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default function exit(req, res) {
  res.setDraftMode({ enable: true })
  res.writeHead(307, { Location: '/' })
  res.end()
}
