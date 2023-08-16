import { prisma } from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phone } = req.body
    // Error handling
    if (!phone) {
      return res.status(400).json({ message: 'Phone is required' })
    }
    const result = await prisma.contact.create({
      data: {
        phone: phone,
      },
    })
    res.status(201).json({ result })
  } else {
    res.status(405).json({ message: `${req.method} is not allowed` })
  }
}

// Path: src\pages\api\contact.js
