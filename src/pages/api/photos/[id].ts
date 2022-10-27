// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resp = await axios.get(
    `http://localhost:4000/api/v1/darkroom/photos/${req.query.id}`
  );

  res.status(200).json(resp.data);
}
