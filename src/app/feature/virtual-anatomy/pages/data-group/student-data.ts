import { User, Answer } from './student'

const answer: Answer[] = [
  {
      "answerTF": 1,
      "question": {
          "questionText": "¿Cuántos huesos tiene aproximadamente el cuerpo humano adulto?"
      }
  },
  {
      "answerTF": 0,
      "question": {
          "questionText": "¿Cuál es la función principal de la médula ósea roja?"
      }
  },
  {
      "answerTF": 1,
      "question": {
          "questionText": "¿Qué tipo de hueso es el fémur?"
      }
  },
  {
      "answerTF": 1,
      "question": {
          "questionText": "¿Qué tipo de articulación permite el mayor rango de movimiento?"
      }
  },
  {
      "answerTF": 0,
      "question": {
          "questionText": "¿Qué músculo es el principal responsable de la flexión del brazo en la articulación del codo?"
      }
  },
  {
      "answerTF": 0,
      "question": {
          "questionText": "¿Cuál de los siguientes músculos es responsable de la extensión de la pierna en la articulación de la rodilla?"
      }
  },
  {
      "answerTF": 1,
      "question": {
          "questionText": "¿Cuál de las siguientes enfermedades es una inflamación de las articulaciones que causa dolor y rigidez?"
      }
  },
  {
      "answerTF": 1,
      "question": {
          "questionText": "¿Qué enfermedad se caracteriza por la pérdida de masa ósea y un aumento en el riesgo de fracturas?"
      }
  },
  {
      "answerTF": 1,
      "question": {
          "questionText": "¿Cuál es una enfermedad genética que causa debilidad muscular progresiva y pérdida de masa muscular?"
      }
  },
  {
      "answerTF": 1,
      "question": {
          "questionText": "¿Cuál de las siguientes enfermedades afecta la columna vertebral, causando una curvatura anormal?"
      }
  }
]

export const studentsData: User[] = [
  { name: 'A', lastName: 'Perez', grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'B', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'C', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'D', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'E', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'F', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'G', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'H', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'I', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'J', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'K', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'L', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'M', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'N', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer },
  { name: 'O', lastName: "Perez", grade: 3, section: "C", createAt: new Date("2024-09-29T01:55:06.285Z"), answer: answer }
]

