import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { google } from 'googleapis';
import { version } from 'react';

export default withApiAuthRequired(async function products(req, res) {
  const { accessToken } = await getAccessToken(req, res, {
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const sheets = await google.sheets({ version: "v4", auth: accessToken});

  const range = 'rules!B21';

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [
        ['Test Data']
      ]
    }
  });

  const data = await response.json();
  res.status(200).json(data);
})