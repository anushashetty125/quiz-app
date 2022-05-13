export type QuestionType = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];

  };

export type MouseHandler = React.MouseEvent<HTMLButtonElement>;

  export type QuestionProps = {
    amount: number;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    callback: (e: React.FormEvent<EventTarget>) => void;
    options: string[];
  }

  export type OptionProps = {
    pageredirect: string;
    header: string;
    option1: string;
    option2: string;
    option3: string;
  };


  export type Location = {
    state: {
      level: string;
      amount: string;
    }
  }

  export type finalLocation = {
    state: {
      counter: number;
      amount: number;
    }
  }