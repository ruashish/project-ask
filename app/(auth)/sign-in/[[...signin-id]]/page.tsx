import { SignIn } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SignIn />
    </div>
  );
};

export default SignUpPage;
