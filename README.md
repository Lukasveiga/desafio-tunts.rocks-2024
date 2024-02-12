# Challenge Tunts.Rocks 2024 🤘

<br>

<p align="center">
     <a alt="Node">
        <img src="https://img.shields.io/badge/Nodejs-v18.16.0-blue.svg" />
    </a>
    <a alt="Typescript">
        <img src="https://img.shields.io/badge/Typescript-v5.2.2-purple.svg" />
    </a>
    <a alt="Jest">
        <img src="https://img.shields.io/badge/Jest-v29.7.0-brightgreen.svg" />
    </a>
    <a alt="Express">
        <img src="https://img.shields.io/badge/GoogleApis-v133.0.0-lightgreen.svg" />
    </a>
</p>

### Overview:

<p align="justify">
This project is part of the selection process for the Tunts.Rocks internship position. The challenge consists of creating an application in a programming language. This application must be capable of reading a Google Sheets spreadsheet, fetching necessary information, calculating, and writing the results back to the spreadsheet.
</p>

<br>

### Problem Information:

<p align="justify">
A table was provided with information about students in an engineering course, including data regarding the number of absences and their respective grades on the three semester exams (P1, P2, P3). It is necessary to calculate the current status of the student and also the final passing grade (FPG), according to the following rules:
</p>

Average grade (m) Situation:

<ul>
    <li>m < 5  - Disapproved by Grade</li>
    <li>5 <= m < 7  - Final Exam</li>
    <li>m >= 7  - Approved</li>
</ul>

<p align="justify">
<i>Obs: Students who have a number of absences exceeding 25% of the number of classes in the semester are automatically disapproved by absence.</i>
</p>

<p align="justify">
For students who took the final exam, it is necessary to obtain the minimum grade for final approval following the following rule:

- 5 <= (m + fpg)/2
</p>

where:

<ul>
    <li>m -> Average grade</li>
    <li>naf -> Necessary final passing grade (FPG)</li>
</ul>

<br>

### Project Information:
