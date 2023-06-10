// Initiate the authorization request
import type { NextApiRequest, NextApiResponse } from "next";
const querystring = require("querystring");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // var state = generateRandomString(16);
  const scope: string =
    "user-read-private user-read-email user-library-read  user-top-read playlist-read-private playlist-modify-private";
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const redirect_uri: string = process.env.NEXT_PUBLIC_REDIRECT_URI as string;

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        // state: state
        show_dialog: true,
      })
  );
}
