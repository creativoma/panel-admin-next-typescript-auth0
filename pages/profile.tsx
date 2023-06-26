import { FiGithub, FiLinkedin, FiLogOut, FiEdit3 } from "react-icons/fi";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { TbWorldWww } from "react-icons/tb";
import Layout from "../components/layout";
import Link from "next/link";

export function ProfileCard({ user }) {
  return (
    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
      <div className="flex items-center gap-x-4">
        <img
          className="rounded-full w-20 h-20"
          src="https://avatars.githubusercontent.com/u/66380259?v=4"
          alt="Avatar image"
          title="Mariano Álvarez"
        />
        <div className="grow">
          <h3 className="font-bold text-3xl text-gray-800 dark:text-gray-200">
            Mariano Álvarez
          </h3>
          <p className="text-s font-bold uppercase text-blue-800">
            Frontend Developer
          </p>
        </div>
      </div>
      <p className="mt-4 mb-2 text-lg text-black">
        I am a Frontend Developer with extensive experience in various
        technologies, including pure JavaScript, React, Next.js, Astro.build,
        PHP, MySQL, Tailwind CSS, Sass, Node.js, Framer Motion and Wordpress
        (both traditional and Headless CMS). In addition, I have training in
        multimedia design and interface design using tools such as Figma and
        Adobe XD.
      </p>
      <div className="mt-3 space-x-4">
        <a
          className="inline-flex justify-center items-center text-gray-500 border border-blue-800 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
          href="https://github.com/creativoma"
        >
          <FiGithub className="text-xl m-2 text-blue-800" />
        </a>
        <a
          className="inline-flex justify-center items-center text-gray-500 border border-blue-800 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
          href="https://linkedin.com/in/ma-marianoalvarez/"
        >
          <FiLinkedin className="text-xl m-2 text-blue-800" />
        </a>
        <a
          className="inline-flex justify-center items-center text-gray-500 border border-blue-800 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
          href="https://dev.creativoma.com/"
        >
          <TbWorldWww className="text-xl m-2 text-blue-800" />
        </a>
      </div>
      <div className="mt-3 space-x-4">
        <Link
          href="#"
          className="text-ms mt-3 py-3 w-fit px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
        >
          <FiEdit3 className="text-xl" /> Edit profile
        </Link>
        <Link
          href="/api/auth/logout"
          className="text-ms mt-3 py-3 w-fit px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
        >
          <FiLogOut className="text-xl" /> Log out
        </Link>
      </div>
    </div>
  );
}

export default withPageAuthRequired(function Profile({ user, isLoading }) {
  return (
    <Layout user={user} loading={isLoading}>
      <h2 className="mb-6 text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
        Welcome!
      </h2>
      {isLoading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  );
});
