import React from 'react'
import ProfilePhoto from '../assets/Profile photo.png'

const Profile = () => {

  const [isEditMode, setIsEditMode] = React.useState(false);
  const [username, setUsername] = React.useState('Alex');

  return (
    <div className="w-full h-full bg-white">
      <p className="text-4xl font-semibold text-left mt-5 mb-10 ml-20 text-black">
      Profile
      </p>

      <img className="w-20 h-20 rounded-full m-auto" src={ProfilePhoto} alt="user" />
      
      <div className="flex flex-col justify-center mt-10 mb-16 ml-[36%] mr-[36%]">
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" class="bg-gray-50 border text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="alex@gmail.com" disabled />
        </div>
        
        <div>
          <div className="mt-5 flex items-center justify-between">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className="px-3 py-1 text-sm font-medium text-primary"
            >
              {isEditMode ? 'Save' : 'Edit'}
            </button>
          </div>
          {isEditMode ? (
            <input
              type="text"
              id="username"
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-700 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Alex"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            <input
              type="text"
              id="username"
              className="bg-gray-50 border text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-700 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Alex"
              value={username}
              disabled
            />
          )}
        </div>

        <button className="w-full h-full mt-8 p-3 overflow-hidden rounded-lg bg-primary flex items-center justify-center">
          <p className="text-sm font-semibold text-left text-white">
            Reset Password
          </p>
        </button>

        <button className="w-full h-full mt-5 p-3 overflow-hidden rounded-lg bg-white border border-primary flex items-center justify-center">
          <p className="text-sm font-semibold text-left text-primary">
            Log out
          </p>
        </button>
      </div>
    </div>
  )
}

export default Profile