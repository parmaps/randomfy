// Initiate the authorization request
import { Body, Response } from "@/types/form";
import type { NextApiRequest, NextApiResponse } from "next";
const querystring = require("querystring");
const request = require("request"); // "Request" library


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // TODO 10/6 State for Security
  // var state = generateRandomString(16);
  // const state = req.query.state || null;
  // const storedState = req.cookies ? req.cookies[stateKey] : null;

  // console.log("code: " + code);

  const auth_url: string = "https://accounts.spotify.com/api/token";
  const code = req.query.code || null;
  const redirect_uri: string = process.env.NEXT_PUBLIC_REDIRECT_URI as string;
  const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID as string;
  const client_secret: string = process.env.CLIENT_SECRET as string;
  const authorization: string =
    "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");

  let authOptions = {
    url: auth_url,
    method: "POST",
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization: authorization,
    },
    json: true,
  };

  request.post(
    authOptions,
    function (error: string, response: Response, body: Body) {
      console.log("request body:", body);

      if (!error && response.statusCode === 200) {
        const access_token: string = body.access_token;
        const refresh_token: string = body.refresh_token;
        // WIP 10/6 change flow to DB and delete this
        // Generate fake access token to check refresh token flow
        // const fake_access_token = "1234";

        var options = {
          url: "https://api.spotify.com/v1/me",
          headers: { Authorization: "Bearer " + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(
          options,
          function (error: string, response: Response, body: Body) {
            console.log("request get ME body", body);

            // refresh access token if current is invalid
            if (body.error?.status === 401) {
              // redirect to /refresh_token
              res.redirect(
                "/api/refreshToken?" +
                  querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token,
                  })
              );
            }

            else res.redirect("/");
          }
        );
      } else {
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    }
  );
}
