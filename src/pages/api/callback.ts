// Initiate the authorization request
import type { NextApiRequest, NextApiResponse } from "next";
const querystring = require("querystring");
const request = require("request"); // "Request" library

type Data = {
  name: string;
};

type Response = {
  statusCode: number;
};

type Body = {
  access_token: string;
  refresh_token: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // var state = generateRandomString(16);

  const code = req.query.code || null;
  console.log("code: " + code);
  // const state = req.query.state || null;
  // const storedState = req.cookies ? req.cookies[stateKey] : null;
  const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID as string;
  const client_secret: string = process.env.CLIENT_SECRET as string;
  const redirect_uri: string = process.env.NEXT_PUBLIC_REDIRECT_URI as string;
  const authorization: string =
    "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");

  // const auth_url:string = "https://accounts.spotify.com/api/token"
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
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
      // console.log("error:", error)
      // console.log("response:", response)
      console.log("client_id", client_id);
      console.log("client_secret", client_secret);
      console.log("authorization", authorization);
      console.log("body:", body);

      if (!error && response.statusCode === 200) {
        const access_token = body.access_token;
        const refresh_token = body.refresh_token;

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
          }
        );

        res.redirect("/");

        // we can also pass the token to the browser to make requests from there
        // res.redirect(
        //   "/#" +
        //     querystring.stringify({
        //       access_token: access_token,
        //       refresh_token: refresh_token,
        //     })
        // );
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
