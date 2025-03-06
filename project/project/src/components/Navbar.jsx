// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function Navbar() {
//   const { user, logout } = useAuth();

//   return (
//     <nav className="">
//       <div className="max-w-xl flex justify-end bg-black mx-auto px-4 sm:px-6 lg:px-8">
//         {/* <div className="flex bg-red-700 items-center justify-between h-8"> */}
//           <div className="flex bg-blue-600 items-center">
//             <Link to="/" class="text-white font-bold text-xl">
//               Password Manager
//             </Link>
//           </div>
//           <div className="flex  items-center">
//             {user ? (
//               <>
//                 <span className="text-white mr-4">{user.name}</span>
//                 <button
//                   onClick={logout}
//                   className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <div class="space-x-4">
//                 <Link
//                   to="/login"
//                   className="text-white hover:bg-indigo-700 px-3 py-2 rounded"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100"
//                 >
//                   Register
//                 </Link>
//               </div>
//             )}
//           </div>
//         {/* </div> */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-blue-400 shadow-lg">
      <div className="container mx-auto">
        <nav className="flex flex-row justify-between items-center py-4 px-6">
          <div>
            <Link to="/" className="text-white font-bold text-2xl tracking-wide hover:text-gray-200 transition duration-300">
              Password Manager
            </Link>
          </div>
          <div>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white font-medium">{user.name}</span>
                <button
                  onClick={logout}
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;