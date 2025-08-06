export type Grade = '9' | '10';

export interface TimeSlot {
  day: string;
  time: string;
}

export interface SubjectData {
  teacher: string;
  schedule: TimeSlot[];
}

export interface GradeSubjects {
  Mathematics: SubjectData;
  Chemistry: SubjectData;
  Biology: SubjectData;
  Physics: SubjectData;
  English: SubjectData;
  Accounting: SubjectData;
}

export interface TimetableData {
  grades: {
    [key in Grade]: GradeSubjects;
  };
}

const timetableData: TimetableData = {
  grades: {
    "9": {
      "Mathematics": {
        "teacher": "Mahil Sir",
        "schedule": [
          {
            "day": "Monday",
            "time": "4:20PM - 5:10PM"
          },
          {
            "day": "Wednesday",
            "time": "4:20PM - 5:10PM"
          }
        ]
      },
      "Chemistry": {
        "teacher": "Nafla Miss",
        "schedule": [
          {
            "day": "Tuesday",
            "time": "4:00PM - 4:50PM"
          },
          {
            "day": "Thursday",
            "time": "4:00PM - 4:50PM"
          }
        ]
      },
      "Biology": {
        "teacher": "Biology Miss",
        "schedule": [
          {
            "day": "Sunday",
            "time": "5:00PM - 5:50PM"
          },
          {
            "day": "Tuesday",
            "time": "5:00PM - 5:50PM"
          }
        ]
      },
      "Physics": {
        "teacher": "Physics Sir",
        "schedule": [
          {
            "day": "Monday",
            "time": "5:20PM - 6:10PM"
          },
          {
            "day": "Wednesday",
            "time": "5:20PM - 6:10PM"
          }
        ]
      },
      "English": {
        "teacher": "Iyad Sir",
        "schedule": [
          {
            "day": "Tuesday",
            "time": "7:00PM - 7:50PM"
          },
          {
            "day": "Saturday",
            "time": "7:00PM - 7:50PM"
          }
        ]
      },
      "Accounting": {
        "teacher": "Adeel Sir",
        "schedule": [
          {
            "day": "Monday",
            "time": "8:00PM - 8:50PM"
          },
          {
            "day": "Saturday",
            "time": "4:00PM - 4:50PM"
          }
        ]
      }
    },
    "10": {
      "Mathematics": {
        "teacher": "Mahil Sir",
        "schedule": [
          {
            "day": "Monday",
            "time": "5:20PM - 6:10PM"
          },
          {
            "day": "Wednesday",
            "time": "5:20PM - 6:10PM"
          }
        ]
      },
      "Chemistry": {
        "teacher": "Nafla Miss",
        "schedule": [
          {
            "day": "Tuesday",
            "time": "5:00PM - 5:50PM"
          },
          {
            "day": "Thursday",
            "time": "5:00PM - 5:50PM"
          }
        ]
      },
      "Biology": {
        "teacher": "Biology Miss",
        "schedule": [
          {
            "day": "Sunday",
            "time": "4:00PM - 4:50PM"
          },
          {
            "day": "Tuesday",
            "time": "4:00PM - 4:50PM"
          }
        ]
      },
      "Physics": {
        "teacher": "Physics Sir",
        "schedule": [
          {
            "day": "Monday",
            "time": "4:20PM - 5:10PM"
          },
          {
            "day": "Wednesday",
            "time": "4:20PM - 5:10PM"
          }
        ]
      },
      "English": {
        "teacher": "Iyad Sir",
        "schedule": [
          {
            "day": "Tuesday",
            "time": "7:00PM - 7:50PM"
          },
          {
            "day": "Saturday",
            "time": "7:00PM - 7:50PM"
          }
        ]
      },
      "Accounting": {
        "teacher": "Adeel Sir",
        "schedule": [
          {
            "day": "Thursday",
            "time": "4:00PM - 4:50PM"
          },
          {
            "day": "Saturday",
            "time": "5:00PM - 5:50PM"
          }
        ]
      },
    }
  }
};

export function getTimetableData(grade: Grade, subject: keyof GradeSubjects): SubjectData | null {
  return timetableData.grades[grade]?.[subject] || null;
}

export function getSubjectsForGrade(grade: Grade): (keyof GradeSubjects)[] {
  return Object.keys(timetableData.grades[grade] || {}) as (keyof GradeSubjects)[];
}

export function getGrades(): Grade[] {
  return Object.keys(timetableData.grades) as Grade[];
}
