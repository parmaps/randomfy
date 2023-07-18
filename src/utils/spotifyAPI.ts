export async function fetchSpotifyData(
  searchParam: string,
  type: string,
  accessToken: string
) {
  console.log(
    "searchParam: ",
    searchParam,
    "type: ",
    type,
    "accessToken: ",
    accessToken
  );

  const spotifyURL = "https://api.spotify.com/v1/search";

  const response = await fetch(
    `${spotifyURL}?q=${encodeURIComponent(searchParam)}&type=${type}`,
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
