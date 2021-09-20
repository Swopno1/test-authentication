import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import HeroSection from '../component/HeroSection';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>{error.message}</div>;

  if(user) {
    
    return (
      <div>
        Welcome 2 {user.name}! <a href="api/auth/logout">Logout</a>
        <div>
          <a href="api/products">Products</a>
        </div>
      </div>
    )
  }
  return <a href="/api/auth/login">Login</a>
}
