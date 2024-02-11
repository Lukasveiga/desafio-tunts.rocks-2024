import { WriteValuesSheet } from "../usecases/write-results-into-sheet";
import { GoogleSheetsApiAuth } from "../config/google-sheets-api-auth";
import { FinalPassingGrade } from "../usecases/calculate-final-passing-grade";
import { StudentsSituation } from "../usecases/calculate-students-situation";
import { GetStudentsInformation } from "../usecases/get-student-information";

const googleSheetsApiAuth = new GoogleSheetsApiAuth();
const getStudentsInformation = new GetStudentsInformation(googleSheetsApiAuth);
const studentsSituation = new StudentsSituation(googleSheetsApiAuth, getStudentsInformation);
const finalPassingGrade = new FinalPassingGrade(studentsSituation);

export default new WriteValuesSheet(googleSheetsApiAuth, finalPassingGrade);
