import { RecommendationParams } from "@/types/form";
import { fetchSpotifyRecommendations } from "@/utils/spotifyAPI";

export async function getRecommendations(recommendationParams: RecommendationParams) {
  try {
    const recommendationData = await fetchSpotifyRecommendations(
      recommendationParams
    );
    if (!recommendationData) {
      throw new Error("No recommendations available: try other inputs.");
    }
    return recommendationData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
