import { OptionsValues } from "@/types/form";

export const OPTIONS_ARTISTS: OptionsValues[] = [];

export const OPTIONS_GENRES: OptionsValues[] = [
  { label: "Rock", value: "rock" },
  { label: "Alternative", value: "alternative" },
  { label: "Samba", value: "samba" },
  { label: "IDM", value: "IDM" },
  { label: "Electronic", value: "electronic" },
  { label: "Reggae", value: "reggae" },
];

export const OPTIONS_FEATURES: OptionsValues[] = [
  { label: "Popularity", value: "popularity" },
  { label: "Energy", value: "energy" },
  { label: "Danceability", value: "danceability" },
  { label: "Instrumentalness", value: "instrumentalness" },
  { label: "Tempo", value: "tempo" },
  { label: "Valence", value: "valence" },
];
