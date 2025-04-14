import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Zap, Gift } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from '../lib/auth'; // Added import for signOut

function Club() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignOut = async () => {
    try {
      await signOut(); // Ensure signOut is called
      navigate('/signin'); // Redirect to sign-in page after sign-out
    } catch (err) {
      console.error('Error signing out:', err);
      setError('Failed to sign out. Please try again.');
    }
  };

  const handleJoin = async () => {
    try {
      setLoading('Basic');
      setError(null);
      setSuccess(null);

      if (!user) {
        navigate('/signup', { state: { redirectTo: '/club', selectedTier: 'Basic' } });
        return;
      }

      // Simulate API call for free membership activation
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess('Successfully joined Basic tier!');
    } catch (err) {
      console.error('Membership error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Kaleidos Club</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Become a member of our exclusive art community and enjoy special benefits, completely free of charge!
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
            {success}
          </div>
        )}

        {/* Membership Tier */}
        <div className="text-center">
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow inline-block">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <p className="text-4xl font-bold mb-6">Free<span className="text-lg text-gray-600">/forever</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Gift className="h-5 w-5 text-indigo-600 mr-2" />
                Early access to new artworks
              </li>
              <li className="flex items-center">
                <Gift className="h-5 w-5 text-indigo-600 mr-2" />
                Member-only newsletter
              </li>
              <li className="flex items-center">
                <Gift className="h-5 w-5 text-indigo-600 mr-2" />
                Exclusive content access
              </li>
              <li className="flex items-center">
                <Gift className="h-5 w-5 text-indigo-600 mr-2" />
                Monthly virtual events
              </li>
            </ul>
            <button
              onClick={handleJoin}
              disabled={loading === 'Basic'}
              className="w-full py-3 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === 'Basic' ? 'Joining...' : 'Join Free'}
            </button>
          </div>
        </div>

        {user && (
          <div className="text-center mt-8">
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const benefits = [
  {
    icon: <Star className="h-8 w-8 text-indigo-600 mx-auto" />,
    title: "Early Access",
    description: "Be the first to view and purchase new artworks before they're available to the public."
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600 mx-auto" />,
    title: "Exclusive Events",
    description: "Join member-only exhibitions, workshops, and social gatherings."
  },
  {
    icon: <Zap className="h-8 w-8 text-indigo-600 mx-auto" />,
    title: "Artist Connect",
    description: "Direct access to artists through exclusive Q&A sessions and studio visits."
  },
  {
    icon: <Gift className="h-8 w-8 text-indigo-600 mx-auto" />,
    title: "Free Membership",
    description: "Enjoy all benefits completely free with no hidden charges"
  }
];

export default Club;
