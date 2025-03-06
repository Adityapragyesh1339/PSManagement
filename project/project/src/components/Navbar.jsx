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
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-lg py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div>
          <Link to="/" className="text-white font-extrabold text-2xl tracking-wide hover:text-gray-200 transition duration-300">
            Password Manager
          </Link>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">{user.name}</span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-indigo-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
