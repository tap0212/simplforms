export const AnswerType = {
  Input: {
    SHORT_INPUT: 'SHORT_INPUT',
    LONG_INPUT: 'LONG_INPUT',
  },
} as const;

type KeysOfInput = keyof typeof AnswerType.Input;

export interface FormData {
  name: string;
  questions: {
    id: string;
    question: string;
    type: KeysOfInput;
  }[];
}
