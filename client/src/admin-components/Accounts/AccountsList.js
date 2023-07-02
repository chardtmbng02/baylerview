import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const AccountsList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("https://baylerview-api.onrender.com/api/logins")
      .then((response) => {
        setAccounts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const accountusers = accounts.map((account, index) => (
    <tr key={index}>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.username}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {account.password.replace(/./g, "*")}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.lastname}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.firstname}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.position}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.user_level}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className={`text-sm ${
            account.account_status === "Active"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {account.account_status}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{new Date(account.date).toLocaleString()}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <Link
          to={`/admin/accounts/edit/${account._id}`}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Edit
        </Link>
        <span className="ml-2 text-red-600 hover:text-red-900">
          Delete
        </span>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="bg-red-100 mx-2">
        <table className=" min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Password
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Lastname
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Firstname
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Level
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date Modified
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {accountusers}
          </tbody>
        </table>
      </div>
    </>
  );
};
