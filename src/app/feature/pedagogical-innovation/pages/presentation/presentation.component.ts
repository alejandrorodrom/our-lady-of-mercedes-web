import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  readonly tickets: Array<Array<{text: string}>> = [
    [
      {
        text: 'La filosofía es una disciplina que promueve el pensamiento crítico.'
      },
      {
        text: 'La Filosofía nos previene contra la superstición, la ignorancia, el fanatismo y la superficialidad.'
      },
      {
        text: 'La Filosofía nos ayuda a ser más humanos, a ser tolerantes para construir un mundo mejor.'
      }
    ],
    [
      {
        text: 'La Filosofía nos permite entender la realidad de manera objetiva.'
      },
      {
        text: 'La Filosofía nos enseña a vivir de un modo autentico y coherente con nuestros principios.'
      },
      {
        text: 'La Filosofía nos ayuda a cuestionarnos sobre todo lo existente, así como a elaborar razonamientos válidos.'
      }
    ],
    [
      {
        text: 'La Filosofía despierta el interés, la curiosidad y el deseo por aprender y conocer los grandes misterios de la humanidad'
      },
      {
        text: 'La Filosofía defiende las ideas de verdad, bondad, belleza, justicia e igualdad en una sociedad del siglo XXI.'
      },
      {
        text: 'La filosofía nos facultad a hacernos preguntas sobre la vida, el conocimiento, la religión entre otros.'
      }
    ]
  ]
}
