import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";

const ErrorNotFound = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h2 className="mb-6 text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
        Error 404
      </h2>
      <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
        The page you are looking for does not exist. Please try looking in the
        menu.
      </p>
      <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
        If you still can't find it, please contact us. Thank you.
      </p>
    </Layout>
  );
};

export default ErrorNotFound;
