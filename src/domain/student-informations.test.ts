import { StudentInformations } from "./student-informations";

describe("Student Information", () => {
  test("Should return correct average grade", () => {
    const student1 = new StudentInformations(1, "Student Test", 0, [50, 50, 50]);
    const averageGradeSt1 = student1.getAverageGrade();

    const student2 = new StudentInformations(2, "Student Test 2", 0, [50, 50, 50, 100]);
    const averageGradeSt2 = student2.getAverageGrade();

    expect(averageGradeSt1).toEqual(5);
    expect(averageGradeSt2).toEqual(6.3);
  });
});
