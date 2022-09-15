import { Formateur } from "./Formateur";
import { Session } from "./Session";
import { Theme } from "./Theme";

export class Formation {
  
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public formateur: Formateur,
      public sessions:[Session],
      public theme:Theme
     
    ) {

  }
}