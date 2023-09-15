import axios from 'axios'

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const response = await axios.get(
        'https://order.spoton.com/so-the-bridge-cafe-10987/san-luis-obispo-ca/63338b3bf3ebec0040438b39'
      )

      if (response.headers.location) {
        if (response.headers.location.includes('closed')) {
          res.status(200).json({ online: false })
        } else {
          res.status(200).json({ online: true })
        }
      } else {
        res.status(404).json({ online: true })
      }
    } catch (error) {
      console.error('Error:', error.message)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
