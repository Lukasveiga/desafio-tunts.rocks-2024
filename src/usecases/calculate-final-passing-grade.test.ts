import { GoogleSheetsApiAuth } from "../config/google-sheets-api-auth";
import { GetStudentsInformation } from "./get-student-information";
import { StudentsSituation } from "./calculate-students-situation";
import { FinalPassingGrade } from "./calculate-final-passing-grade";

const googleSheetsApiAuth = new GoogleSheetsApiAuth();
const getStudentsInformation = new GetStudentsInformation(googleSheetsApiAuth);
const studentsSituation = new StudentsSituation(googleSheetsApiAuth, getStudentsInformation);
const sut = new FinalPassingGrade(studentsSituation);

describe("Final Passing Grade Test", () => {
  test("Should return the correct value of final passing grade for each student", async () => {
    const students = await sut.calculateFinalPassingGrade();

    expect(students.length).toEqual(24);
    expect(students[0].getFinalPassingGrade()).toEqual(4.7);
    expect(students[1].getFinalPassingGrade()).toEqual(3.4);
    expect(students[2].getFinalPassingGrade()).toEqual(0); // -> Disapproved for abscence
    expect(students[3].getFinalPassingGrade()).toEqual(0); // -> Approved student
  });
});
