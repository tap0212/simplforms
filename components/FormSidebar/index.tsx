import { PlusOutlined } from '@ant-design/icons';
import { AnswersConfig } from 'app/forms/constants';
import { FormData } from 'app/forms/types';
import Image from 'next/image';
import { useRef } from 'react';

const FormSidebar = ({
  className,
  formData,
  onNameEdit,
}: {
  className: string;
  formData: FormData;
  onNameEdit: (e: string) => void;
}) => {
  const state = useRef({ value: formData.name, prevValue: '', key: 0 });
  if (state.current.prevValue !== formData.name) {
    state.current.value = formData.name;
    state.current.key = Date.now();
  }

  const handleInput = (event: any) => {
    const value = event.target.innerText;
    state.current.prevValue = value;
    onNameEdit(value);
  };

  return (
    <div className={`border-r border-grey ${className}`}>
      <p className="font-normal text-base">My Workspace/</p>
      <div
        key={state.current.key}
        role="textbox"
        contentEditable="true"
        suppressContentEditableWarning={true}
        className="outline-none"
        dangerouslySetInnerHTML={{ __html: state.current.value }}
        onInput={handleInput}
      />
      <div className="flex items-center justify-between my-8">
        <p className="font-semibold text-xl">Content</p>
        <button className="px-4 py-2 bg-grey outline-none rounded-md hover:shadow-blue shadow-lg flex items-center hover:bg-coolBlue cursor-pointer">
          <PlusOutlined />
        </button>
      </div>
      <div>
        {formData.questions.map((question, index) => (
          <div className="flex gap-3 items-center" key={question.id}>
            <p className="text-sm font-normal">{index + 1}.</p>
            <Image
              alt={question.type}
              src={AnswersConfig[question.type].icon}
            />
            <p className="text-sm font-normal">{question.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSidebar;
