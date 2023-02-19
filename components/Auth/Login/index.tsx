'use client';

import { Auth, ThemeMinimal } from '@supabase/auth-ui-react';
import { Modal } from 'antd';
import FilledButton from 'components/Buttons/Filled';
// eslint-disable-next-line import/no-cycle
import { useSupabase } from 'components/Supabase/SupabaseProvider';
import { useState } from 'react';

export default function Authentication() {
  const { supabase, session } = useSupabase();
  const [modalOpen, setModalOpen] = useState(false);

  // const handleLogout = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   if (error) {
  //     console.log({ error });
  //   }
  // };

  const handleOnClickLogin = () => {
    setModalOpen(true);
  };
  const onClickCloseModal = () => {
    setModalOpen(false);
  };
  if (!session)
    return (
      <>
        <FilledButton onClick={handleOnClickLogin}>Sign Up</FilledButton>
        <Modal
          centered
          open={modalOpen}
          footer={null}
          onCancel={onClickCloseModal}>
          <Auth
            redirectTo="http://localhost:3000/"
            supabaseClient={supabase}
            socialLayout="horizontal"
            appearance={{ theme: ThemeMinimal }}
          />
        </Modal>
      </>
    );
  return (
    <div className="bg-pink w-10 h-10 flex items-center justify-center cursor-pointer font-bold text-lg rounded-full">
      {session.user.email?.slice(0, 1).toUpperCase()}
    </div>
  );
}
