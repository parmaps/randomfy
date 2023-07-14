import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFetchGenres from "../src/hooks/useFetchGenresRandomfy";
import { act } from "@testing-library/react";
import { Genres } from "@/types/form";

describe("Fetch Randomfy Genres Hook", () => {
  const mockGenresSpotify = [
    {
      id: 6,
      genre: "acoustic",
      createdAt: "2023-07-07T15:47:48.939Z",
      updatedAt: "2023-07-07T15:47:48.939Z",
    },
    {
      id: 7,
      genre: "afrobeat",
      createdAt: "2023-07-07T15:47:48.939Z",
      updatedAt: "2023-07-07T15:47:48.939Z",
    },
    {
      createdAt: "2023-07-07T15:47:48.940Z",
      genre: "disco",
      id: 32,
      updatedAt: "2023-07-07T15:47:48.939Z",
    },
  ];

  const mockGenresMapped: Genres[] = [
    {
      label: "Acoustic",
      value: "acoustic",
    },
    {
      label: "Afrobeat",
      value: "afrobeat",
    },
    {
      label: "Disco",
      value: "disco",
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockGenresSpotify),
    });
  });

  test("should trigger fetch only once", async () => {
    const fetchMock = global.fetch;
    renderHook(() => useFetchGenres());
    // Wait for the initial render to complete
    await act(async () => {
      //   console.log(fetchMock.mock.calls);
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("should render genres as empty array initially ", async () => {
    const { result } = renderHook(() => useFetchGenres());

    // Wait until the callback does not throw an error
    await waitFor(() => {
      expect(result.current.genres).toEqual([]);
      expect(result.current.genres).toHaveLength(0);
    });
  });

  test("should return genres of type Genres[]", async () => {
    const { result } = renderHook(() => useFetchGenres());

    // Assuming `Genres` is a custom type or class
    await waitFor(() => {
      expect(result.current.genres).toMatchObject(mockGenresMapped);
    });
  });

  test("should fetch genres successfully", async () => {
    const { result } = renderHook(() => useFetchGenres());

    await waitFor(() => {
      const { genres } = result.current;
      expect(genres).toEqual(mockGenresMapped);
    });
  });

  test("should handle fetch errors", async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error("Fetch error"));
    const { result } = renderHook(() => useFetchGenres());

    expect(result.current.error).toBeUndefined();

    await waitFor(() => {
      expect(result.current.error).toEqual(new Error("Fetch error"));
    });
  });

  test("should set isLoading state during data fetching", async () => {
    const { result } = renderHook(() => useFetchGenres());

    expect(result.current.isLoading).toBe(true);

    await waitFor(async () => {
      expect(result.current.isLoading).toBe(false);
    });
  });

  // FIXME 12/7 -> corregir para que trabaje acorde a la logica del useRef firstUpdate
  //   test("should fetch data only on first render", async () => {
  //     const fetchMock = global.fetch;
  //     const { rerender } = renderHook(() => useFetchGenres());

  //     // First render
  //     await act(async () => {
  //       rerender();
  //     });
  //     expect(fetchMock).toHaveBeenCalledTimes(1);

  //     // Second render
  //     await act(async () => {
  //       rerender();
  //     });
  //     expect(fetchMock).not.toHaveBeenCalledTimes(2);

  //     // Third render
  //     await act(async () => {
  //       rerender();
  //     });
  //     expect(fetchMock).not.toHaveBeenCalledTimes(3);
  //   });
});
