'use client';

import FilledButton from 'components/Buttons/Filled';

/* eslint-disable react/no-unknown-property */
export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center justify-center w-full container-main p-4 laptop:p-0 tablet:w-4/5 laptop:w-3/4 desktop:w-2/4">
        <h1 className="font-light text-3xl tablet:text-4xl laptop:text-5xl w-full text-center">
          Forms that perform: get feedback and leads with ease
        </h1>
        <p className="w-full text-center font-normal text-lg">
          Easy, stylish forms that make data collection a walk in the park
        </p>
        <FilledButton
          onClick={() => {
            //
          }}>
          Sign up! It&apos;s free
        </FilledButton>
      </div>
      <style jsx>{`
        .container-main {
          height: calc(100vh - 104px);
          height: calc(100dvh - 104px);
        }
      `}</style>
    </main>
  );
}
