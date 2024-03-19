import { UserButton } from '@clerk/nextjs';

import { CreateQuestionDialog } from '..';
import { Separator } from '../ui/separator';
import { NavMenu } from './nav-menu';

export const NavBar = () => {
  return (
    <div className="h-full w-full">
      <nav className="flex items-center justify-between px-5 py-4">
        <NavMenu />
        <div className="flex items-center gap-6">
          <CreateQuestionDialog />
          <UserButton userProfileMode="modal" />
        </div>
      </nav>
      <Separator />
    </div>
  );
};
