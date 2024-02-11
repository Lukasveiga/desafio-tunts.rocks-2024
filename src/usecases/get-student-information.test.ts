import { GoogleSheetsApiAuth } from "../config/google-sheets-api-auth";
import { GetStudentsInformation } from "./get-student-information";

const googleSheetsApiAuth = new GoogleSheetsApiAuth();
const sut = new GetStudentsInformation(googleSheetsApiAuth);

describe("Get Students Information", () => {
  test("Should return correct students information", async () => {
    const students = await sut.getStudentInformation();
    const studentOne = students[0];

    expect(students.length).toEqual(24);
    expect(studentOne.registrationNumber).toEqual(1);
    expect(studentOne.name).toEqual("Eduardo");
    expect(studentOne.abscence).toEqual(8);
    expect(studentOne.getAverageGrade()).toEqual(5.3);
  });
});
