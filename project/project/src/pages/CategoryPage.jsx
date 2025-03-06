// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import axios from 'axios';

// function CategoryPage() {
//   const { type } = useParams();
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [passwords, setPasswords] = useState([]);
//   const [newEntry, setNewEntry] = useState({
//     username: '',
//     password: '',
//     phoneNumber: '',
//   });
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//       return;
//     }
//     fetchPasswords();
//   }, [user, type]);

//   const fetchPasswords = async () => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.get('http://localhost:5000/api/passwords', config);
//       setPasswords(data.filter((p) => p.category === type));
//     } catch (error) {
//       setError('Failed to fetch passwords');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       await axios.post(
//         'http://localhost:5000/api/passwords',
//         {
//           category: type,
//           subcategory: type,
//           ...newEntry,
//         },
//         config
//       );
//       setNewEntry({ username: '', password: '', phoneNumber: '' });
//       fetchPasswords();
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to add password');
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       await axios.delete(`http://localhost:5000/api/passwords/${id}`, config);
//       fetchPasswords();
//     } catch (error) {
//       setError('Failed to delete password');
//     }
//   };

//   const getCategoryTitle = () => {
//     const titles = {
//       'mails': 'Mail',
//       'devices': 'Device',
//       'github': 'GitHub',
//       'social-media': 'Social Media'
//     };
//     return titles[type] || type;
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
//       <div className="flex items-center mb-8">
//         <button
//           onClick={() => navigate('/')}
//           className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-110"
//         >
//           ← Back
//         </button>
//         <h1 className="text-3xl font-bold text-indigo-700 ml-4">{getCategoryTitle()} Details</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
//         <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New {getCategoryTitle()}</h2>
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label class="block text-sm font-medium text-red-700">Username/Email</label>
//               <input
//                 type="text"
//                 value={newEntry.username}
//                 onChange={(e) => setNewEntry({ ...newEntry, username: e.target.value })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 value={newEntry.password}
//                 onChange={(e) => setNewEntry({ ...newEntry, password: e.target.value })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-transform transform hover:scale-105"
//             >
//               Save
//             </button>
//           </form>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">Saved {getCategoryTitle()} Items</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username/Email</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {passwords.map((entry) => (
//                   <tr key={entry._id}>
//                     <td className="px-6 py-4 whitespace-nowrap">{entry.username}</td>
//                     <td className="px-6 py-4 whitespace-nowrap"><span className="font-mono">••••••••</span></td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <button
//                         onClick={() => handleDelete(entry._id)}
//                         className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;



import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function CategoryPage() {
  const { type } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState([]);
  const [newEntry, setNewEntry] = useState({
    platformName:'',
    username: '',
    password: '',
    phoneNumber: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchPasswords();
  }, [user, type]);

  const fetchPasswords = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get('http://localhost:5000/api/passwords', config);
      setPasswords(data.filter((p) => p.category === type));
    } catch (error) {
      setError('Failed to fetch passwords');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.post(
        'http://localhost:5000/api/passwords',
        {
          category: type,
          subcategory: type,
          ...newEntry,
        },
        config
      );
      setNewEntry({ platformName:'', username: '', password: '', phoneNumber: '' });
      fetchPasswords();
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to add password');
    }
  };

  const handleDelete = async (id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.delete(`http://localhost:5000/api/passwords/${id}`, config);
      fetchPasswords();
    } catch (error) {
      setError('Failed to delete password');
    }
  };

  const getCategoryTitle = () => {
    const titles = {
      'mails': 'Mail',
      'devices': 'Device',
      'github': 'GitHub',
      'social-media': 'Social Media'
    };
    return titles[type] || type;
  };

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col items-center text-center bg-gray-50 min-h-screen">
      <div className="flex items-center mb-10">
        <button
          onClick={() => navigate('/')} 
          className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110 font-semibold"
        >
          ← Back
        </button>
        <h1 className="text-4xl font-extrabold text-indigo-800 ml-6">{getCategoryTitle()} Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 hover:shadow-2xl transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Add New {getCategoryTitle()}</h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
              <label className="block text-sm font-medium text-gray-900">platform Name</label>
              <input
                type="text"
                value={newEntry.platformName}
                onChange={(e) => setNewEntry({ ...newEntry, platformName: e.target.value })}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">Username/Email</label>
              <input
                type="text"
                value={newEntry.username}
                onChange={(e) => setNewEntry({ ...newEntry, username: e.target.value })}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                value={newEntry.password}
                onChange={(e) => setNewEntry({ ...newEntry, password: e.target.value })}
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Save
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 hover:shadow-2xl transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Saved {getCategoryTitle()} Items</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">PlatForms</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Username/Email</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Password</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {passwords.map((entry) => (
                  <tr key={entry._id}>
                    <td className="px-6 py-4">{entry.platformName}</td>
                    <td className="px-6 py-4">{entry.username}</td>
                    <td className="px-6 py-4 font-mono">••••••••</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(entry._id)}
                        className="text-red-600 hover:text-red-800 font-bold transition-transform transform hover:scale-110"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;