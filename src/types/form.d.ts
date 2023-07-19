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
  artists: {}[];
  genres: {}[];
  features: FeatureOptionsMin | FeatureOptionsMax;
};

export type FeatureOptionsMin = {
  popularity_min: number;
  energy_min: number;
  danceability_min: number;
  instrumentalness_min: number;
  tempo_min: number;
  valence_min: number;
};

export type FeatureOptionsMax = {
  popularity_max: number;
  energy_max: number;
  danceability_max: number;
  instrumentalness_max: number;
  tempo_max: number;
  valence_max: number;
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

export interface OptionsValues {
  label: string;
  value: string;
}

export interface Genres extends OptionsValues {}

export type GenreObject = { id: number; genre: string; [key]: any };

export type RecommendationParams = {
  accessToken: string;
  seedArtists: string;
  seedGenres: string;
  seedTracks: string;
  minValence: string;
}