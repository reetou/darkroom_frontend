// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/event_gallery/${req.body.restaurant}/p/${req.body.id}`
    );

    res.status(200).json(resp.data);
  } catch (e) {
    res.status(404).json({});
  }
}
