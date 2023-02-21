import { LongInput, ShortInput } from 'assets';

import { AnswerType } from './types';

export const AnswersConfig = {
  [AnswerType.Input.SHORT_INPUT]: {
    name: 'Short Input',
    icon: ShortInput,
  },
  [AnswerType.Input.LONG_INPUT]: {
    name: 'Long Input',
    icon: LongInput,
  },
};
