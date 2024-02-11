import { GoogleSheetsApiAuth } from "../config/google-sheets-api-auth";
import { GetStudentsInformation } from "./get-student-information";
import { StudentsSituation, situation } from "./calculate-students-situation";

const googleSheetsApiAuth = new GoogleSheetsApiAuth();
const getStudentsInformation = new GetStudentsInformation(googleSheetsApiAuth);
const sut = new StudentsSituation(googleSheetsApiAuth, getStudentsInformation);

describe("Students Situation Test", () => {
  test("Should return the correct situation for each student", async () => {
    const situations = await sut.calculateSituation();

    expect(situations.length).toEqual(24);
    expect(situations[0]).toEqual(situation.final);
    expect(situations[1]).toEqual(situation.final);
    expect(situations[2]).toEqual(situation.disapproved);
  });
});
