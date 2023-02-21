import { FormData } from 'app/forms/types';
import { useMemo, useState } from 'react';

const FormRenderer = ({ formData }: { formData: FormData }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const currentQuestionData = useMemo(
    () => formData.questions[currentQuestion],
    [currentQuestion, formData],
  );
  return (
    <div className="w-full h-full">
      <h2>
        {currentQuestion + 1}. {currentQuestionData.question}
      </h2>
    </div>
  );
};
export default FormRenderer;
