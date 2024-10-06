export interface Group {
  nameGroup: string;
  createAt:  Date;
  users:     User[];
}

export interface User {
    name:     string;
    lastName: string;
    grade:    number;
    section:  string;
    createAt: Date;
    answer:   Answer[];
}

export interface Answer {
    answerTF: number;
    question: Question;
}

export interface Question {
    questionText: string;
}
