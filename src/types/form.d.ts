import { OPTIONS_FEATURES } from './../components/SearchForm/OptionsData';
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
  features: FeatureOptions2;
};

export type FeatureOptions<T> = {  

}

export type FeatureOptions2 = {
  popularity_min: number;  
  energy_min: number;
  danceability_min: number; 
  instrumentalness_min: number;
  tempo_min: number;
  valence_min: number;
}



export interface OptionsValues {
  label: string;
  value: string;
}

export interface Genres extends OptionsValues {}
