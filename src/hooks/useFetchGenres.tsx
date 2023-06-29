import React, { useEffect, useState } from "react";
import { Genres } from "@/types/form";

const useFetchGenres = () => {
  const [genres, setGenres] = useState<Genres[] | []>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  const genresURL =
    "https://api.spotify.com/v1/recommendations/available-genre-seeds";
  const access_token =
    "BQBPnoUn3msCIH6zWK_DLd5aYJBZ2RmL5Swu_mLmLT-HvTbLfKCA9daqeLSN0g5k0aD0Z2-M3x0sjtMZuso-SPgeAxwp5oNmUQw4gccn78tNB-PaPv79lQghWGu642fMMAXfbUtEsHD8DcA1s0tVEzQWFpa0y3TkotRN9hSkYbVQt1vJqMVRvU6dfzNGXFHfiTNln2fFLTpyPqYgQ8rlYlIObiDy4kYqLgCA_RHfj856oC9lzwDXW3o0mO_ueW9t6-QLhCW5zt55Zw";
  const headers = { Authorization: "Bearer " + access_token };

  // TODO 27/6 move to /utils
  const capitalizeWord = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // TODO 27/6 move to /utils
  const map = async (genresList: string[]) => {
    return genresList.map((genre) => ({
      label: capitalizeWord(genre),
      value: genre,
    }));
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch(genresURL, { headers: headers });
        const data = await resp.json();
        const { genres } = data;
        const mappedGenres = await map(genres);
        setGenres(mappedGenres);
        setIsLoading(false);
      } catch (err) {
        console.log("catch error:", err);
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return { genres, isLoading, error };
};

export default useFetchGenres;
