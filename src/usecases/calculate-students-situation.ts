import { GoogleSheetsApiAuth } from "../config/google-sheets-api-auth";
import { StudentInformations } from "../domain/student-informations";
import { GetStudentsInformation } from "./get-student-information";
import "dotenv/config";

export class StudentsSituation {
  constructor(
    private readonly googleSheetsApiAuth: GoogleSheetsApiAuth,
    private readonly studentsInformation: GetStudentsInformation
  ) {}

  async calculateSituation(): Promise<StudentInformations[]> {
    const totalClassesSemester: number = await this.getTotalClassesSemester();

    const studentsInfo = await this.studentsInformation.getStudentInformation();

    for (const student of studentsInfo) {
      if (student.getAverageGrade() < 5 || student.abscence > totalClassesSemester * 0.25) {
        student.setSituation(situation.disapproved);
      } else if (student.getAverageGrade() < 7) {
        student.setSituation(situation.final);
      } else if (student.getAverageGrade() >= 7) {
        student.setSituation(situation.approved);
      }
    }

    console.info("Calculating students situations...");

    return studentsInfo;
  }

  private async getTotalClassesSemester(): Promise<number> {
    const { googleSheets, auth, spreadsheetId } = await this.googleSheetsApiAuth.auth();

    const sheetData = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: process.env.SHEET_NAME,
    });

    const rows = sheetData.data.values;

    const total = rows ? rows[1] : "No rows";

    return parseInt(total[0].split(":")[1].trim());
  }
}

export enum situation {
  disapproved = "Reprovado por Nota",
  approved = "Aprovado",
  final = "Exame Final",
}
