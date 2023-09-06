import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    var formData = req.body
    console.log(formData)

    formData = {
      ...formData,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    //console.log(formData)
    const response = await axios
      .post(
        'https://api.cal.com/v1/bookings?apiKey=cal_live_2c319e79d32d3442d2801259cf6c1794',
        formData,
        config
      )
      .then((response) => {
        console.log('API response:', response.data)
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Status Code:', error.response.status)
          console.error('Response Data:', error.response.data)
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message)
        }
      })

    res.status(200).json(response)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
