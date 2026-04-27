import React from "react";

const ApplicationForm = () => {
  return (
    <div className="flex items-center justify-center h-[600px] bg-orange-500">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row justify-between items-center bg-orange-500">
          <div className="text-white p-8 lg:w-1/2">
            <h2 className="text-3xl font-bold">Apply now</h2>
            <h3 className="text-2xl mt-4">Junior System Engineer</h3>
            <h3 className="text-2xl">Mechanical Engineering</h3>
            <ul className="mt-8 space-y-2">
              <li>Your resume</li>
              <li>Your ambitions</li>
              <li>Your selection of conversations</li>
              <li>Your job choice</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md lg:w-1/2">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="important"
                >
                  Important
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="important"
                  type="text"
                  placeholder="Important"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="surname"
                >
                  Surname
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  type="text"
                  placeholder="Surname"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Message"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>We handle your data confidentially</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
