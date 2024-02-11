import { GoogleSheetsApiAuth } from "../config/google-sheets-api-auth";
import { FinalPassingGrade } from "./calculate-final-passing-grade";
import "dotenv/config";

export class WriteValuesSheet {
  constructor(
    private readonly googleSheetsApiAuth: GoogleSheetsApiAuth,
    private readonly finalPassingGrade: FinalPassingGrade
  ) {}

  async writeResults(): Promise<void> {
    const { googleSheets, auth, spreadsheetId } = await this.googleSheetsApiAuth.auth();
    const students = await this.finalPassingGrade.calculateFinalPassingGrade();

    const results: any[][] = [];

    for (const student of students) {
      const result: any[] = [student.getSituation(), student.getFinalPassingGrade()];
      results.push(result);
    }

    const sheetRange = students.length + 3;

    googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: `${process.env.SHEET_NAME}!G4:H${sheetRange}`,
      valueInputOption: "RAW",
      requestBody: {
        values: results,
      },
    });

    console.info("Writing results into the google sheet...");
  }
}
