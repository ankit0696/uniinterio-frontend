import { prisma } from '@/lib/prisma'

export default async function handler(req, res) {
  console.log('req.method' + req.method)
  if (req.method === 'POST') {
    try {
      const { phone } = req.body
      console.log('phone 1' + phone)
      // Error handling
      if (!phone) {
        console.log('phone 2' + phone)
        return res.status(400).json({ message: 'Phone is required' })
      }
      const result = await prisma.contact.create({
        data: {
          phone: phone,
        },
      })

      res.status(201).json({ result })
    } catch (error) {
      console.log('error' + error.message)
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(405).json({ message: `${req.method} method is not allowed` })
  }
}

// Path: src\pages\api\contact.js
