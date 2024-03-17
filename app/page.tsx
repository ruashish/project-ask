import { auth } from '@clerk/nextjs';
import Link from 'next/link';

import { PageRoutes } from '@/constants/routes';

const App = async () => {
  const { userId } = await auth();
  return (
    <div>
      hello
      <Link href={userId ? PageRoutes.Dashboard : PageRoutes.NewUser}>
        <button>{userId ? 'Go To Dashboard' : 'Sign In'}</button>
      </Link>
    </div>
  );
};

export default App;
