import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Palette, Info, ShoppingBag, Users } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Club from './pages/Club';
import Success from './pages/Success';
import UserMenu from './components/UserMenu';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <Palette className="h-8 w-8 text-indigo-600" />
                  <span className="text-xl font-semibold text-gray-900">Kaleidos Club</span>
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link to="/gallery" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Gallery</span>
                </Link>
                <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                  <Info className="h-5 w-5" />
                  <span>About</span>
                </Link>
                <Link to="/club" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                  <Users className="h-5 w-5" />
                  <span>Join Club</span>
                </Link>
                <UserMenu />
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/club" element={<Club />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Kaleidos Club</h3>
                <p className="text-gray-400">Discover unique artworks and join our creative community.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
                  <li><Link to="/about" className="hover:text-white">About</Link></li>
                  <li><Link to="/club" className="hover:text-white">Join Club</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">Email: kaleidos.club@gla.ac.in</p>
                <p className="text-gray-400">+919555624006</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;