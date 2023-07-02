import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const EditAccount = () => {
  const { id } = useParams(); // Get the account ID from the URL parameter
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Fetch the account data from the API using the account ID
    axios
      .get(`https://baylerview-api.onrender.com/api/logins/${id}`)
      .then((response) => {
        setAccount(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  const [accountData, setAccountData] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    vpassword: "",
    guest: "",
    acctype: "",
    accstatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://baylerview-api.onrender.com/api/logins/${id}`, accountData)
      .then((response) => {
        console.log("Account updated successfully");
        // Redirect or perform any other action after successful update
      })
      .catch((error) => {
        console.log(error);
        console.log(accountData)
      });
  };

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full bg-white">
          <h1 className="text-3xl text-center text-gray-700 font-semibold">
            Update User Account
          </h1>
          <h3 className="text-sm text-center text-gray-400 font-light pb-5">
            This is where you update user account.
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="fName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Firstname
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    value={account.firstname}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Lastname
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    value={account.lastname}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="fName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={account.username}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={account.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={account.password}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="vpassword"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Verify Password
                  </label>
                  <input
                    type="password"
                    name="vpassword"
                    id="vpassword"
                    placeholder="Verify Password"
                    value={account.password}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="position"
                className="mb-3 block text-sm font-medium text-gray-400"
              >
                Position
              </label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                value={account.position}
                onChange={handleChange}
                className="w-full appearance-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-gray-400">
                    Account Type
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="acctype"
                        id="acctype1"
                        className="h-5 w-5"
                        checked={account.user_level.toLowerCase() === "administrator"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium"
                      >
                        Administrator
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="acctype"
                        id="acctype2"
                        className="h-5 w-5"
                        checked={account.user_level.toLowerCase() === "standard"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium"
                      >
                        Standard
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-gray-400">
                    Account Status
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="accstatus"
                        id="accstatus1"
                        className="h-5 w-5"
                        checked={account.account_status.toLowerCase() === "active"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium"
                      >
                        Active
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="accstatus"
                        id="accstatus2"
                        className="h-5 w-5"
                        checked={account.account_status.toLowerCase() === "inactive"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium"
                      >
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button type="submit" className="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Update Record
              </button>
              <Link to="/admin/accounts"><button className="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mx-3">
                Cancel
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAccount;
