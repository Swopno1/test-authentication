import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Sheet({ user }) {
  return <h1>Sheet Page</h1>
}

export default Sheet;

export const getServerSideProps = withPageAuthRequired();