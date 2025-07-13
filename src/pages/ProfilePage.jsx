import { useAuth } from '../contexts/AuthContext';
import { User, Edit, Save, X } from 'lucide-react';
import { useState } from 'react';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    email: user?.email || '',
    age: user?.age || '',
    gender: user?.gender || '',
    country: user?.country || '',
    city: user?.city || '',
    occupation: user?.occupation || '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    console.log('Saved Data:', formData); // Replace with API call later
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 animate-fadeInUp relative">
        {/* Header */}
        <div className="flex items-center space-x-6 mb-8">
          {/* Avatar */}
          <div className="w-28 h-28 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {user?.fullName?.[0] || <User className="h-10 w-10" />}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <p className="text-gray-500">@{user?.username}</p>
          </div>
          {/* Edit/Cancel Button */}
          <div className="ml-auto">
            {isEditing ? (
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-400 text-white rounded-full shadow hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow hover:from-pink-600 hover:to-red-600 transition"
              >
                <Edit className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>

        {/* Form or Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <p className="text-gray-500 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</p>
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm p-2"
                />
              ) : (
                <p className="text-gray-800 text-lg font-semibold">{value || '—'}</p>
              )}
            </div>
          ))}
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow hover:from-green-600 hover:to-emerald-600 transition"
            >
              <Save className="h-5 w-5" />
              <span>Save Changes</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
