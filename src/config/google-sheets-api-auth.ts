import { google } from "googleapis";
import "dotenv/config";

export class GoogleSheetsApiAuth {
  async auth() {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./credentials.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: auth });

    const spreadsheetId = process.env.SPREAD_SHEET_ID;

    console.info("Authentication with Google Sheets API Successful");

    return {
      auth,
      client,
      googleSheets,
      spreadsheetId,
    };
  }
}
