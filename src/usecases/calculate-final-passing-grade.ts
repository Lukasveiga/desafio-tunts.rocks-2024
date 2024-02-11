import { StudentInformations } from "../domain/student-informations";
import { StudentsSituation, situation } from "./calculate-students-situation";

export class FinalPassingGrade {
  constructor(private readonly studentsSituation: StudentsSituation) {}

  async calculateFinalPassingGrade(): Promise<StudentInformations[]> {
    const students = await this.studentsSituation.calculateSituation();

    for (const student of students) {
      if (student.getSituation() == situation.final) {
        const fpg = 5 * 2 - student.getAverageGrade();
        const fpgFormatted = Math.round(fpg * 10) / 10;
        student.setFinalPassingGrade(fpgFormatted);
      } else {
        student.setFinalPassingGrade(0);
      }
    }

    console.info("Calculating students final passing grade...");

    return students;
  }
}
