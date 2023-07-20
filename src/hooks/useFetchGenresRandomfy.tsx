import React, { useEffect, useRef, useState } from "react";
import { OptionsValues } from "@/types/form";
import { mapGenresToOptionsValues } from "../utils/mappings";

const useFetchGenresRandomfy = () => {
  const firstUpdate = useRef(true);
  const [genres, setGenres] = useState<OptionsValues[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  // TODO 7/7 change when in prod to production URL
  const genresURL = "http://localhost:3000/api/genres";

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setIsLoading(true);
        console.log("Fetching genres...");
        const resp = await fetch(genresURL);
        const data = await resp.json();
        const mappedGenres = await mapGenresToOptionsValues(data);
        // console.log("mappedGenres", mappedGenres);
        setGenres(mappedGenres);
        console.log("Done fetching genres.");
      } catch (error) {
        console.log("error:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Using firstUpdate with useRef(true) to make sure it only makes a call on it’s first render
    if (firstUpdate.current) fetchGenres();
    firstUpdate.current = false;
  }, []);

  return { genres, isLoading, error };
};

export default useFetchGenresRandomfy;
