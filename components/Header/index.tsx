'use client';

import { SimplFormsLight } from 'assets';
// eslint-disable-next-line import/no-cycle
import Authentication from 'components/Auth/Login';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <div className="p-8 desktop:px-[10%] flex items-center justify-between border-b-[1px] border-grey">
    <Link href="/">
      <Image
        priority
        alt="SimplFormsLight"
        width={128}
        height={24}
        src={SimplFormsLight}
      />
    </Link>
    <Authentication />
  </div>
);

export default Header;
