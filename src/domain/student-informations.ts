export class StudentInformations {
  public readonly registrationNumber: number;
  public readonly name: string;
  public readonly abscence: number;
  private grades: number[];
  private situation: string = "";
  private finalPassingGrade: number = 0;

  constructor(registrationNumber: number, name: string, abscence: number, grades: number[]) {
    this.registrationNumber = registrationNumber;
    this.name = name;
    this.abscence = abscence;
    this.grades = grades;
  }

  public setSituation(situation: string): void {
    this.situation = situation;
  }

  public getSituation(): string {
    return this.situation;
  }

  public setFinalPassingGrade(finalPassingGrade: number): void {
    this.finalPassingGrade = finalPassingGrade;
  }

  public getFinalPassingGrade(): number {
    return this.finalPassingGrade;
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
