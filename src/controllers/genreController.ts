import Genre from "@/models/genre";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createBulkGenres(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { genres } = req.body;
    console.log("Genres:", genres);
    console.log("Creating genres...");
    const mappedGenres = genres.map((genre: any) => ({
      genre: genre,
    }));
    console.log("mappedgenres", mappedGenres);

    const testValue = [{ genre: "abc123" }, { genre: "name too long" }];


    const newGenres = await Genre.bulkCreate(testValue);
    res.status(201).json(newGenres);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
