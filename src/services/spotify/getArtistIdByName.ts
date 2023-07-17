import { NextApiRequest, NextApiResponse } from "next";

async function fetchArtistData(artistName: string, accessToken: string) {
  console.log(
    "-params- ",
    "artistName: ",
    artistName,
    "accessToken: ",
    accessToken
  );

  const spotifyURL = "https://api.spotify.com/v1/search";

  const response = await fetch(
    `${spotifyURL}?q=${encodeURIComponent(artistName)}&type=artist`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  // API Response Handling: If response status is not in the success range (200-299), throw new error returning its code
  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from Spotify API. Response status: ${response.status}`
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error("Failed to parse JSON response from Spotify API");
  }
}

export async function getArtistIdByName(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { artistName } = req.query;
  if (!artistName || typeof artistName !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid or missing artistName parameter" });
  }

  const accessToken = "access-token";

  try {
    const data = await fetchArtistData(artistName, accessToken);
    console.log("response data: " + data);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch data from Spotify API" });
  }
}
