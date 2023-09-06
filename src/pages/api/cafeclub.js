// pages/api/submitForm.js

import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    var formData = req.body
    // Handle the formData as needed, e.g., save to a database
    //console.log(formData)
    formData = {
      ...formData,
      merchantId: '63338b3bf3ebec0040438b39',
      source: '37',
    }
    formData.phone = `+1${formData.phone}`
    formData.name = `${formData.firstName} ${formData.lastName}`

    console.log(formData)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    //console.log(formData)
    const response = await axios
      .post(
        'https://customers-bff.spoton.com/api/v1/customers/find-upsert-join',
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

    res.status(200).json({ message: 'Form data received successfully' })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
