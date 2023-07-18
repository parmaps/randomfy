
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
    const errorJson = await response.json();
    const { error } = errorJson;

    throw new Error(
      `Failed to fetch data from Spotify API: Status ${error.status} -> ${error.message}.`
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error("Failed to parse JSON response from Spotify API");
  }
}

export async function getArtistIdByName(
  artistName: string,
  accessToken: string
) {
  try {
    const artistData = await fetchArtistData(artistName, accessToken);

    console.log("response data: " + artistData);
    const { artists } = artistData;
    const artist = artists.items[0];

    if (!artist) {
      throw new Error("Artist not found");
    }

    // Returning the artist
    return artist;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
