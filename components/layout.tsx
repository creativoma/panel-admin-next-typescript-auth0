import Head from "next/head";
import Header from "./header";
import { LayoutProps } from "../interfaces/index";

const Layout = ({ user, loading = false, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Admin Panel with Next.js, Typescript, Tailwindcss and Auth0.</title>
      </Head>
      <Header user={user} loading={loading} />
      <main className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <div className="max-w-[85rem] w-full mx-auto px-4">{children}</div>
      </main>
    </>
  );
};

export default Layout;
