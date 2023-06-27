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
  artist: string;
};

export interface OptionsValues {
  label: string;
  value: string;
}

export interface Genres extends OptionsValues {}
