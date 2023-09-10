import React from 'react'

const Profile = () => {
  return (
    <div className="h-full bg-gray-200 p-8">
    <div className="bg-white rounded-lg shadow-xl pb-8">
      <div className="w-full h-[250px]">
        <img
          src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
          className="w-full h-full rounded-tl-lg rounded-tr-lg" 
        />
      </div>
      <div className="flex flex-col items-center -mt-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg/480px-Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
          className="w-36 h-36 rounded-full"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl">nishant Ross</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </div>
        <p className="text-gray-700">Software Enginner</p>
      </div>
    </div>
    <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
      <div className="w-full flex flex-col 2xl:w-1/3">
        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex items-center border-y py-2">
              <span className="font-bold w-24">Full name:</span>
              <input
                type="text"
                className="text-gray-700 p-2 outline-none focus:border-stone-500 border-2 rounded-md"
              />
            </li>
            <li className="flex items-center border-b py-2">
              <span className="font-bold w-24">Age:</span>
              <input
                type="text"
                className="text-gray-700 p-2 outline-none focus:border-stone-500 border-2 rounded-md"
              />
            </li>
            <li className="flex items-center border-b py-2">
              <span className="font-bold w-24">Mobile:</span>
              <input
                type="text"
                className="text-gray-700 p-2 outline-none focus:border-stone-500 border-2 rounded-md"
              />
            </li>
            <li className="flex items-center border-b py-2">
              <span className="font-bold w-24">Email:</span>
              <input
                type="text"
                className="text-gray-700 p-2 outline-none focus:border-stone-500 border-2 rounded-md"
              />
            </li>
            <li className="flex items-center border-b py-2">
              <span className="font-bold w-24">LinkdinUrl:</span>
              <input
                type="text"
                className="text-gray-700 p-2 outline-none focus:border-stone-500 border-2 rounded-md"
              />
            </li>
            <li className="flex items-center border-b py-2">
              <span className="font-bold w-24">Gender</span>
              <input
                type="text"
                className="text-gray-700 p-2 outline-none focus:border-stone-500 border-2 rounded-md"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile