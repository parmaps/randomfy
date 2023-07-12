import React from "react";
import { renderHook, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFetchGenres from "../src/hooks/useFetchGenresRandomfy";

describe("Fetch Randomfy Genres Hook", () => {
  test("renders genres initially as empty array", async () => {
    const { result } = renderHook(useFetchGenres);
    console.log(result);
    expect(result.current.genres).toHaveLength(0);
  });

  test("genres state is set with the fetched genres data", () => {});

  test("isLoading state is set to true when fetching data", () => {});

  test("isLoading state is set to false when data is fetched", () => {});

  test("genres state once set is of type Genres[]", () => {});

  test("the hook is only called once", () => {});
});
