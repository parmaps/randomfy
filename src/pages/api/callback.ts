// Initiate the authorization request
import { Body, Response } from "@/types/form";
import type { NextApiRequest, NextApiResponse } from "next";
const querystring = require("querystring");
const fetch = require("node-fetch");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO 10/6 State for Security
  // var state = generateRandomString(16);
  // const state = req.query.state || null;
  // const storedState = req.cookies ? req.cookies[stateKey] : null;

  const authURL = "https://accounts.spotify.com/api/token";
  const code = req.query.code as string;
  const redirect_uri: string = process.env.NEXT_PUBLIC_REDIRECT_URI as string;
  const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID as string;
  const client_secret: string = process.env.CLIENT_SECRET as string;
  const authorization: string =
    "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");
  const authContentType = "application/x-www-form-urlencoded";

  const authOptions = {
    method: "POST",
    headers: { authorization, "Content-Type": authContentType },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirect_uri,
    }),
  };

  try {
    const authResponse = await fetch(authURL, authOptions);
    if (!authResponse.ok) {
      throw new Error("Failed to generate access token");
    }
    const body = await authResponse.json();
    console.log("request body:", body);
    const accessToken: string = body.access_token;
    const refreshToken: string = body.refresh_token;

    // Use access token to access Spotify Web API
    const spotifyURL = "https://api.spotify.com/v1/me";
    const spotifyOptions = {
      headers: { Authorization: "Bearer " + accessToken },
    };

    try {
      const spotifyResponse = await fetch(spotifyURL, spotifyOptions);
      if (!spotifyResponse.ok) {
        throw new Error("Failed to generate access token");
      }
      const body = await spotifyResponse.json();
      console.log("request get ME body:", body);

      const user = body;
      const userTokens = { accessToken, refreshToken };

      const userURL = "http://localhost:3000/api/users";
      const userOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, userTokens }),
      };

      try {
        const userResponse = await fetch(userURL, userOptions);
        if (!userResponse.ok) {
          throw new Error("Failed to create user");
        }
        const body = await userResponse.json();
        console.log("new user:", body);
      } catch (error) {
        throw error;
      }

      // Refresh access token if current is invalid
      if (body.error?.status === 401) {
        res.redirect(
          "/api/refreshToken?" +
            querystring.stringify({
              access_token: accessToken,
              refresh_token: refreshToken,
            })
        );
      }
      // Proceed to login
      else res.redirect("/");
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  } catch (error) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "invalid_token",
        })
    );
    throw error;
  }
}
