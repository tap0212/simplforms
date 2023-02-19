'use client';

import { PlusOutlined } from '@ant-design/icons';
import { EmptyState } from 'assets';
import FilledButton from 'components/Buttons/Filled';
import Image from 'next/image';

const Dashboard = () => (
  <div className="p-8 py-10 desktop:px-[10%]">
    <h1 className=" text-lg font-semibold">My Workspace</h1>
    <FilledButton
      className="my-4"
      onClick={() => {
        //
      }}>
      <p className="flex items-center justify-center gap-2">
        Create a SimplForm <PlusOutlined />
      </p>
    </FilledButton>
    <div className="flex flex-col gap-2 items-center justify-center p-4">
      <Image className="p-8" alt="Empty State" src={EmptyState} />
      <h2 className="text-3xl font-light mt-4">Come on in!</h2>
      <p className="text-sm font-normal w-1/2 desktop:w-1/3 text-center">
        Grab a hot cuppa (or cold brew) and get comfortable. It’s time to create
        something special.
      </p>
      <FilledButton
        className="my-4"
        onClick={() => {
          //
        }}>
        <p className="flex items-center justify-center gap-2">
          Create a SimplForm <PlusOutlined />
        </p>
      </FilledButton>
    </div>
  </div>
);

export default Dashboard;
