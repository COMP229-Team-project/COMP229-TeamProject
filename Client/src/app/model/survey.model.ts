import { Question1, Question2, Question3, Question4 } from './question.model';

//data models to build surveys with our form inputs
export class Survey {
  constructor(
    public title: string,
    public description: string,
    public avatar: string,
    public questions: [Question1, Question2, Question3, Question4],
    public startDate: Date | null,
    public endDate: Date | null,
    public _id: string
  ) {}
}

export class EditableSurvey {
  constructor(
    public title: string,
    public description: string,
    public avatar: string,
    public questions: [Question1, Question2, Question3, Question4],
    public startDate: Date,
    public endDate: Date
  ) {}
}
