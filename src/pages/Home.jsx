import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = axios.get("http://localhost:3003/users");
    console.log(response.data);
  }, []);
  return (
    <>
      <h1 className="text-black text-3xl font-semibold font-sourcecodepro px-10 py-8">
        List of User Details
      </h1>
      <div className="w-full h-full flex flex-col px-10 py-8 font-sourcecodepro">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-xl text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">Sliver</td>
                <td className="py-4 px-6">Laptop</td>
                <td className="flex items-center py-4 px-6 space-x-3">
                  <button className="px-6 py-3 text-black bg-white font-semibold rounded-lg">
                    View
                  </button>
                  <button className="px-6 py-3 text-white bg-blue-600 font-semibold rounded-lg">
                    Edit
                  </button>
                  <button className="px-6 py-3 text-white bg-red-600 font-semibold rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
