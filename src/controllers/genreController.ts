import Genre from "@/models/genre";
import { NextApiRequest, NextApiResponse } from "next";

export async function getGenres(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const genres = await Genre.findAll();
    res.status(201).json(genres);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function createBulkGenres(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { genres } = req.body;
    // console.log("Genres:", genres);
    console.log("Creating genres...");
    const mappedGenres = genres.map((genre: any) => ({ genre: genre }));

    const newGenres = await Genre.bulkCreate(mappedGenres);
    res.status(201).json(newGenres);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
