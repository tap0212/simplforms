'use client';

import { TabsProps } from 'antd';
import FormSidebar from 'components/FormSidebar';
import Tabs from 'components/Tabs';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CreateFormComponent from './CreateForm';
import { AnswerType, FormData } from '../types';

const CreateForm = () => {
  const [currentTab, setCurrentTab] = useState<string>('0');
  const [formData, setFormData] = useState<FormData>({
    name: 'SimplForm',
    questions: [
      {
        id: uuidv4(),
        question: 'What is your good name?',
        type: AnswerType.Input.SHORT_INPUT,
      },
    ],
  });

  const onChangeTab = (key: string) => {
    setCurrentTab(key);
  };
  const TAB_ITEMS: TabsProps['items'] = [
    {
      key: '0',
      label: 'Create',
      children: <CreateFormComponent formData={formData} />,
    },
    {
      key: '1',
      label: 'Share',
      children: `Content of Tab Pane `,
    },
    {
      key: '2',
      label: 'Results',
      children: `Content of Tab Pane 3`,
    },
  ];
  const onFormDataNameContentEdit = (e: string) => {
    setFormData({
      ...formData,
      name: String(e) || '',
    });
  };
  return (
    <div className="w-full flex minh">
      <FormSidebar
        onNameEdit={onFormDataNameContentEdit}
        formData={formData}
        className="w-[16rem] minh p-4"
      />
      <div className="flex flex-col p-4 w-[calc(100%-15%)]">
        <Tabs
          defaultActiveKey={TAB_ITEMS[0].key}
          items={TAB_ITEMS}
          onChange={onChangeTab}
          activeKey={currentTab}
        />
      </div>
      <style>{`
        .minh{
          min-height: calc(100vh - 7rem);
          min-height: calc(100dvh - 7rem);
        }
      `}</style>
    </div>
  );
};

export default CreateForm;
