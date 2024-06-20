import { useEffect } from 'react';
import { TweenMax } from 'gsap';

const Navbar = () => {
  useEffect(() => {
    // Example animation (fade in)
    TweenMax.from('.nav-item', 1, { opacity: 0, y: -20, stagger: 0.2 });
  }, []);

  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-center space-x-4 py-4">
        <li className="nav-item">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="text-white hover:text-gray-300">About</a>
        </li>
        {/* Add more navigation items */}
      </ul>
    </nav>
  );
};

export default Navbar;
