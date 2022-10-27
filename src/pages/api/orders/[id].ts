// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../../constants";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resp = await axios.get(
    `${API_URL}/api/v1/darkroom/orders/${req.query.id}`
  );

  res.status(200).json(resp.data);
}
