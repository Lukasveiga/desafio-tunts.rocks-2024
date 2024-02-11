import { GoogleSheetsApiAuth } from "./../config/google-sheets-api-auth";
import { StudentInformations } from "../domain/student-informations";
import "dotenv/config";

export class GetStudentsInformation {
  constructor(private readonly googleSheetsApiAuth: GoogleSheetsApiAuth) {}

  async getStudentInformation(): Promise<StudentInformations[]> {
    const { googleSheets, auth, spreadsheetId } = await this.googleSheetsApiAuth.auth();

    const sheetData = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: process.env.SHEET_NAME,
    });

    const rows = sheetData.data.values;

    const studentsInfo = rows ? rows.slice(3) : [];

    const students: StudentInformations[] = [];

    for (let i = 0; i < studentsInfo.length; i++) {
      let registrationNumber = parseInt(studentsInfo[i][0]);
      let studentName = studentsInfo[i][1];
      let studentAbscence = parseInt(studentsInfo[i][2]);
      let studentGrades = studentsInfo[i].slice(3, 6).map((grade) => parseInt(grade));

      students.push(
        new StudentInformations(registrationNumber, studentName, studentAbscence, studentGrades)
      );
    }

    console.info("Getting students informations from google sheet...");

    students.sort((a, b) => a.registrationNumber - b.registrationNumber);

    return students;
  }
}
