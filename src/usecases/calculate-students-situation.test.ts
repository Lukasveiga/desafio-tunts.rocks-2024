import { GoogleSheetsApiAuth } from "../config/google-sheets-api-auth";
import { GetStudentsInformation } from "./get-student-information";
import { StudentsSituation, situation } from "./calculate-students-situation";

const googleSheetsApiAuth = new GoogleSheetsApiAuth();
const getStudentsInformation = new GetStudentsInformation(googleSheetsApiAuth);
const sut = new StudentsSituation(googleSheetsApiAuth, getStudentsInformation);

describe("Students Situation Test", () => {
  test("Should return the correct situation for each student", async () => {
    const students = await sut.calculateSituation();

    expect(students.length).toEqual(24);
    expect(students[0].getSituation()).toEqual(situation.final);
    expect(students[1].getSituation()).toEqual(situation.final);
    expect(students[2].getSituation()).toEqual(situation.abscence);
  });
});
