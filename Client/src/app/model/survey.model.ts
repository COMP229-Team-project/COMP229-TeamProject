import { Question1, Question2, Question3, Question4 } from './question.model';

export class Survey {
  constructor(
    public title: string,
    public description: string,
    public avatar: string,
    public question: [Question1, Question2, Question3, Question4],
    public _id: string
  ) {}
}
