import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";
import { FiUsers, FiInfo, FiUser, FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { ProfileCard } from "./profile";

const Home = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <>
        <h2 className="mb-6 text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
          Welcome {user ? "to the private zone" : "to the public zone"}
        </h2>
        <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
          tristique hendrerit commodo inceptos, libero egestas nam ligula sed
          pretium vitae class quam ut enim aliquet dis, volutpat ultricies
          taciti donec ornare quisque aenean nibh blandit vulputate cursus.
          Dictumst sociosqu sem gravida non est aliquam ullamcorper nulla ante,
          ridiculus enim dapibus urna libero interdum mi himenaeos, nullam
          cubilia at integer magna vulputate hac netus.
        </p>
      </>

      {isLoading && <p>Loading login info...</p>}

      {!isLoading && !user && (
        <>
          <div className="max-w-[100%] py-5 lg:py-5 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
              <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <FiInfo className="text-xl text-blue-600" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                      About
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit justo,
                  quis integer tincidunt euismod turpis nec orci dictumst
                  cubilia, volutpat mus pellentesque dapibus himenaeos lacus ac.
                </p>
              </div>
              <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <FiUsers className="text-xl text-blue-600" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                      Users <small>(Login required)</small>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg dark:text-gray-400 blur-[3px] select-none">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit justo,
                  quis integer tincidunt euismod turpis nec orci dictumst
                  cubilia, volutpat mus pellentesque dapibus himenaeos lacus ac.
                </p>
              </div>
              <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <FiUser className="text-xl text-blue-600" />
                  </div>
                  <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                      Profile <small>(Login required)</small>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg dark:text-gray-400 blur-[3px] select-none">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit justo,
                  quis integer tincidunt euismod turpis nec orci dictumst
                  cubilia, volutpat mus pellentesque dapibus himenaeos lacus ac.
                </p>
              </div>
            </div>
          </div>
          <h2 className="my-6 text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
            Log in to get started
          </h2>
          <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
            tristique hendrerit commodo inceptos.
          </p>
          <Link
            href="/api/auth/login"
            className="text-ms py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
          >
            <FiLogIn className="text-xl" /> Log in
          </Link>
        </>
      )}

      {user && (
        <>
          <ProfileCard user={user} />
        </>
      )}
    </Layout>
  );
};

export default Home;
