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

<p align="justify">
For this project is necessary to provide two main informations. First is the <b>google sheet ID</b> and the second is the <b>Google Sheets API credentials</b>.
</p>

#### 1. Google Sheet ID:

- Public link: https://docs.google.com/spreadsheets/d/1FF5QsQkqcwn8ZOIWslmhyuqm_uIz89QIvT-ObqDWCJc/edit?usp=sharing

- The sheet id can be found between the backslashes in the sheet link. In this example: 1FF5QsQkqcwn8ZOIWslmhyuqm_uIz89QIvT-ObqDWCJc

#### 2. Google Sheets API credentials:

1. Within the Google [Cloud console](https://console.cloud.google.com), it is necessary to create a project for the application or use an existing one;

2. After creating the project, it is necessary to access the Google API Library, search for the [Google Sheets API](https://console.cloud.google.com/apis/library/sheets.googleapis.com), add it to the project, and enable it;

3. Create credentials by providing the necessary information for the project;

4. A service account email will be created, so it will be necessary to copy this email and insert it into the sharing configuration in the Google Sheet that will be used, in order to grant access to the application's functionalities;

5. Within the settings of service account, there will be an option to create keys, select the JSON option, which will be the credential file required for use in the project.

- The credentials will be downloaded automatically and you will need to paste them into the project root.

<p align="justify">
<i>Obs: Always remember to insert sensitive data into the .gitignore list so that it is not exposed on the internet.</i>
</p>

### How to Install and Run the Project?

- Add the JSON file with the credentials named as follows: "credentials.json" in the root of the project and insert the table ID into the environment variables file ".env" under the key SPREAD_SHEET_ID, as demonstrated below:

.env:

```
SPREAD_SHEET_ID=1FF5QsQkqcwn8ZOIWslmhyuqm_uIz89QIvT-ObqDWCJc
SHEET_NAME=engenharia_de_software
```

- In the terminal, run the following command to install all necessary project dependencies:

```console
npm install
```

- To run the tests, run the command below:

```console
npm test
```

- And finally, to run the program, run the following command:

```console
npm run start
```

And check if the changes were made successfully in the table.
