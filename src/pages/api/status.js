import axios from 'axios'

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const response = await axios.get(
        'https://order.spoton.com/api/merchants/63338b3bf3ebec0040438b39'
      )

      if (response.data.schedule) {
        if (response.data.orderTypes.pickup.scheduleDates.length > 0) {
          res.status(200).json({ onlineOrderingAvailable: true })
        } else {
          res.status(200).json({ onlineOrderingAvailable: false })
        }
      } else {
        res.status(400).json({ onlineOrderingAvailable: true })
      }
    } catch (error) {
      console.error('Error:', error.message)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
