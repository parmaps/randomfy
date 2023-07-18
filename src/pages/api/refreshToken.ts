// Initiate the authorization request
import { Body, Data, Response } from "@/types/form";
import type { NextApiRequest, NextApiResponse } from "next";
const request = require("request"); // "Request" library // FIXME 10/6 change to Fetch API

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // requesting access token from refresh token
  const auth_url: string = "https://accounts.spotify.com/api/token";
  const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID as string;
  const client_secret: string = process.env.CLIENT_SECRET as string;
  const authorization: string =
    "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");
  const refresh_token: string = req.query.refresh_token as string;

  console.log("refresh_token from /api/refresh_token", refresh_token);
  console.log("\n");

  let refreshOptions = {
    url: auth_url,
    headers: {
      Authorization: authorization,
    },
    method: "POST",
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(
    refreshOptions,
    function (error: string, response: Response, body: Body) {
      console.log("request body: " + JSON.stringify(body));

      if (!error && response.statusCode === 200) {
        const access_token: string = body.access_token;
        console.log("new access token: " + access_token);

        var options = {
          // url: "https://api.spotify.com/v1/me/top/artists",
          url: "https://api.spotify.com/v1/me/",
          headers: { Authorization: "Bearer " + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(
          options,
          function (error: string, response: Response, body: Body) {
            console.log(
              "request get ME body w/ new access token",
              JSON.stringify(body)
            );
          }
        );

        // TODO 27/6 guardar este access token en algun lado

        // res.send({
        //   access_token: access_token,
        // });
      }
    }
  );

  res.redirect("/");
}
