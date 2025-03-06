// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function Dashboard() {
//   const { user } = useAuth();

//   const categories = [
//     {
//       id: 'mails',
//       title: 'Mails',
//       icon: '📧',
//       description: 'Manage your company and client email accounts',
//     },
//     {
//       id: 'devices',
//       title: 'Devices',
//       icon: '📱',
//       description: 'Track all your devices and network information',
//     },
//     {
//       id: 'github',
//       title: 'GitHub',
//       icon: '🐙',
//       description: 'Manage your GitHub account credentials',
//     },
//     {
//       id: 'social-media',
//       title: 'Social Media',
//       icon: '🌐',
//       description: 'Keep track of your social media accounts',
//     },
//   ];

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Please login to continue</h2>
//           <Link
//             to="/login"
//             className="bg-gry-300 text-black px-4 py-2 rounded hover:bg-gray-400"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center container mx-auto px-4 flex-col">
//       <h1 className="text-3xl font-bold mb-2 text-red-600">Welcome, {user.name}!</h1>
//       <p className="text-red-600 mb-8">Manage all your accounts and devices in one secure place.</p>

//       {/* Flexbox Layout for Categories */}
//       <div className="flex flex-wrap justify-around gap-10">
//         {categories.map((category) => (
//           <Link
//             key={category.id}
//             to={`/category/${category.id}`}
//             className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 w-80"
//           >
//             <div className="text-4xl mb-4 text-indigo-600">{category.icon}</div>
//             <h2 className="text-xl font-semibold mb-2 text-gray-800">{category.title}</h2>
//             <p className="text-gray-600">{category.description}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  const categories = [
    {
      id: 'mails',
      title: 'Mails',
      icon: '📧',
      description: 'Manage your company and client email accounts',
    },
    {
      id: 'devices',
      title: 'Devices',
      icon: '📱',
      description: 'Track all your devices and network information',
    },
    {
      id: 'github',
      title: 'GitHub',
      icon: '🐙',
      description: 'Manage your GitHub account credentials',
    },
    {
      id: 'social-media',
      title: 'Social Media',
      icon: '🌐',
      description: 'Keep track of your social media accounts',
    },
  ];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Please login to continue</h2>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-10 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-indigo-700 animate-fadeIn">Welcome, {user.name}!</h1>
      <p className="text-gray-700 mb-8 text-lg">Manage all your accounts and devices in one secure place.</p>

      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="bg-navy p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:scale-105 w-72 text-center flex flex-col items-center"
          >
            <div className="text-5xl mb-4 text-indigo-600">{category.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{category.title}</h2>
            <p className="text-gray-600 text-md">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

