import Head from 'next/head';
import { Button } from '../components/base/Button';
import { useState } from 'react';
import { useAuth } from '../hooks/auth';
import { Input } from '../components/base/Input';
import { Label } from '../components/base/Label';

const Login = () => {
  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // Auth Hook
  const { login, isLoading, user } = useAuth({ middleware: 'guest' });

  // Check Loading and user
  if (isLoading || user) {
    return <>Is Loading</>;
  }

  // Submit form
  const submitForm = async (e: any) => {
    e.preventDefault();
    // login({ email, password, setErrors });
    console.log(email, password);
  };

  return (
    <>
      <Head>
        <title>Login page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="mx-auto bg-white shadow p-2 rounded">
        <form onSubmit={submitForm} autoComplete="off" className="space-y-4">
          <div className="">
            <Label htmlFor="email" className="cursor-pointer">
              email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <Label htmlFor="password" className="cursor-pointer">
              password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
