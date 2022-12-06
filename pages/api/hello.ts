// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: "experimental-edge",
};

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe 13' })
  return new Response(JSON.stringify({ name: 'John Doe 13' }),
  {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
}
