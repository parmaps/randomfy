import { FeatureOptionsMax } from "./form.d";
import { FeatureOptions } from "@/types/form";
import { FormValues } from "@/types/form";
import {
  Control,
  FieldPath,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { OPTIONS_FEATURES } from "./../components/SearchForm/OptionsData";

export type SharedData = {
  registerState: (name: FieldPath<FormValues>) => UseFormRegisterReturn<T>;
  controlState: Control<FormValues>;
};

export type Response = {
  statusCode: number;
};

export type Data = {
  access_token: string;
};

export type Body = {
  access_token: string;
  refresh_token: string;
  error: any;
};

export type FormValues = {
  artists: OptionsValues[];
  genres: OptionsValues[];
  features: FeatureOptionsMin & FeatureOptionsMax;
};

export type FeatureOptionsMin = {
  popularity_min: string;
  energy_min: string;
  danceability_min: string;
  instrumentalness_min: string;
  tempo_min: string;
  valence_min: string;
};

export type FeatureOptionsMax = {
  popularity_max: string;
  energy_max: string;
  danceability_max: string;
  instrumentalness_max: string;
  tempo_max: string;
  valence_max: string;
};

export type FeatureOptionsMinKeys = keyof FeatureOptionsMin;
export type FeatureOptionsMinString = `features.${Extract<
  FeatureOptionsMinKeys,
  string
>}`;
export type FeatureOptionsMaxKeys = keyof FeatureOptionsMax;
export type FeatureOptionsMaxString = `features.${Extract<
  FeatureOptionsMaxKeys,
  string
>}`;

export type OptionsValues = { label: string; value: string };

export type GenreObject = { id: number; genre: string; [key]: any };

export type RecommendationParams = FeatureOptionsMin &
  FeatureOptionsMax & {
    seed_artists: string;
    seed_genres: string;
    // seed_tracks: string;
  };
