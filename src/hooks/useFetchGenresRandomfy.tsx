import React, { useEffect, useState } from "react";
import { Genres } from "@/types/form";
import { mapGenresToOptionsValues } from "@/utils/strings";

const useFetchGenresRandomfy = () => {
  const [genres, setGenres] = useState<Genres[] | []>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  // TODO 7/7 change when in prod to production URL
  const genresURL = "http://localhost:3000/api/genres";

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        console.log("Fetching genres...");
        const resp = await fetch(genresURL);
        const data = await resp.json();
        const mappedGenres = await mapGenresToOptionsValues(data);
        console.log("mappedGenres", mappedGenres);
        console.log("Done fetching genres.");
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchGenres();
  }, []);

  return { genres, isLoading, error };
};

export default useFetchGenresRandomfy;
