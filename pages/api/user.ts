import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../interfaces";

export default withApiAuthRequired(function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  if (req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
  } else if (req.method === "POST") {
    const { name } = req.body;
    res.status(200).json({ name: "Created" });
  } else if (req.method === "PUT") {
    const { name } = req.body;
    res.status(200).json({ name: "Updated" });
  } else if (req.method === "DELETE") {
    const { name } = req.body;
    res.status(200).json({ name: "Deleted" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
});
