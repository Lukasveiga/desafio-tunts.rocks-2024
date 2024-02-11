export class StudentInformations {
  public readonly registrationNumber: number;
  public readonly name: string;
  public readonly abscence: number;
  private grades: number[];

  constructor(registrationNumber: number, name: string, abscence: number, grades: number[]) {
    this.registrationNumber = registrationNumber;
    this.name = name;
    this.abscence = abscence;
    this.grades = grades;
  }

  public getAverageGrade(): number {
    let total = 0;

    for (const grade of this.grades) {
      total += grade;
    }

    const result = total / 10 / this.grades.length;

    return Math.round(result * 10) / 10;
  }
}
