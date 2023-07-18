import Search from "@/models/Search";
import { getArtistIdByName } from "@/services/spotify/getArtistIdByName";
import { NextApiRequest, NextApiResponse } from "next";

export async function createSearch(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // TODO 17/7 Search artists (to get id)
    const { artistName } = req.body;
    const accessToken =
      "BQAms2UIyXLA3ijTr1Ac8-8l5tV9MkcMA1u1-o1nn6xfHhrR1dwkXIcZCIWL2cvGTwQjmr_pMi0w1-MEsqxM_O1J9LArTZSoHd3Pc1oL7_OgXwTbKqVMY9R0joSs1ngbFn9ZMY83OnDI64avf9hUpxCbeascbjTWy_ETNRTDJUbPwWcVGR9UZEopRMN2zWXUnzlO1JwXg33nDPxMpcO1ZWOF2gF8YzqY-wQEnn3wZTzmnPWRBWTmIR0zF7DS_e5-922yimaaYHi2-g";
    const artist = await getArtistIdByName(artistName, accessToken);
    console.log("Artist Name: ", artist.name);
    console.log("Artist ID: ", artist.id);
    res.status(200).json({ artist: artist.name, id: artist.id });

    // TODO 17/7 Search tracks (to get id)
    // TODO 17/7 Post search to Spotify (to get id) https://api.spotify.com/v1/recommendations?

    // const {userId, searchData} = req.body;
    // TODO 17/7 -> userID deberia venir de getUserById o algo asi (buscar el mail actual logeado y devolver su id)
    // console.log("Creating search...");
    // const newSearch = await Search.create({
    //   userId,
    //   searchData,
    // });
    // res.status(201).json(newSearch);
    // res.status(201).json({ message: "Search created successfully", data: newSearch });
  } catch (error: any) {
    console.log("Error desde searchController:", error);
    res.status(500).json({ error: error.message });
  }
}
