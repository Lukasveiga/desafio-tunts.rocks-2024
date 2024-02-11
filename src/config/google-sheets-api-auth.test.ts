import "dotenv/config";
import { GoogleSheetsApiAuth } from "./google-sheets-api-auth";

const sut = new GoogleSheetsApiAuth();

describe("Test connection with Google Sheets API", () => {
  test("Should return correct metadata informations", async () => {
    const { googleSheets, auth, spreadsheetId } = await sut.auth();

    const metadata = await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });

    expect(metadata.data.spreadsheetId).toEqual(process.env.SPREAD_SHEET_ID);
    expect(metadata.data.properties?.title).toEqual("Engenharia de Software - Desafio Lukas Veiga");
  });
});
