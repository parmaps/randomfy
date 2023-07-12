import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFetchGenres from "../src/hooks/useFetchGenresRandomfy";
import { act } from "@testing-library/react";

describe("Fetch Randomfy Genres Hook", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });
  });
  const mockData = [
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
  ];

  test("should render genres as empty array initially ", async () => {
    const { result } = renderHook(() => useFetchGenres());

    // Wait until the callback does not throw an error
    await waitFor(() => {
      expect(result.current.genres).toEqual([]);
      expect(result.current.genres).toHaveLength(0);
    });
  });

  test("should trigger fetch only once", async () => {
    const fetchMock = global.fetch;
    renderHook(() => useFetchGenres());
    // Wait for the initial render to complete
    await act(async () => {
      console.log(fetchMock.mock.calls);
    });

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  //   test("should fetch genres successfully", async () => {
  //     const { result, waitForNextUpdate } = renderHook(() => useFetchGenres());
  //     // console.log(waitForNextUpdate);
  //   });

  //   test("should handle fetch errors", async () => {});

  //   test("isLoading state is set to true when fetching data", () => {});

  //   test("isLoading state is set to false when data is fetched", () => {});

  //   test("genres state once set is of type Genres[]", () => {});

  

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
