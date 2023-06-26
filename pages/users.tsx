import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { User } from "../interfaces/index";

const Users = () => {
  const { user, isLoading } = useUser();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Layout user={user} loading={isLoading}>
      <h2 className="mb-6 text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
        Users
      </h2>
      <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
        Lorem ipsum dolor sit amet consectetur adipiscing, elit pulvinar nec
        torquent ullamcorper, commodo turpis tristique nunc consequat. Cubilia
        aliquam tempor penatibus felis aliquet accumsan pellentesque nam, proin
        aenean neque libero enim tortor feugiat, montes litora egestas ad per
        nisl dictum. Leo lacus hac sodales nulla morbi viverra eget scelerisque
        cum ad neque, litora non dis rutrum class cubilia vitae aptent augue.
      </p>

      <div className="flex flex-col mb-10">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Avatar
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Website
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        <img
                          className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                          src={`https://avatars.dicebear.com/api/avataaars/${user.name}.svg`}
                          alt="Image Description"
                        />
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {user.website}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {user.company.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          className="text-blue-500 hover:text-blue-700"
                          href="#"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withPageAuthRequired(Users);
