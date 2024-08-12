import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="w-1/3 md:w-1/5">
          <Link href="https://www.nconnect.asia/">
            <img
              src="https://www.nconnect.asia/wp-content/uploads/2024/06/SQ.png"
              alt="nConnect Logo"
              className="h-8 md:h-10"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex w-3/5 justify-around items-center space-x-4">
          <Link href="https://www.nconnect.asia/">
            <a className="text-gray-700 hover:text-indigo-600">Home</a>
          </Link>
          <Link href="https://www.nconnect.asia/about">
            <a className="text-gray-700 hover:text-indigo-600">About</a>
          </Link>
          <Link href="https://www.nconnect.asia/work">
            <a className="text-gray-700 hover:text-indigo-600">Showcase</a>
          </Link>
          <Link href="http://insights.nconnect.asia">
            <a className="text-gray-700 hover:text-indigo-600">Insights</a>
          </Link>
          <Link href="https://www.nconnect.asia/contact">
            <a className="text-gray-700 hover:text-indigo-600">Contact</a>
          </Link>
        </nav>

        {/* Call to Action Button */}
        <div className="w-1/3 md:w-1/5 flex justify-end">
          <Link href="https://to.nconnect.asia/nConnectLINE">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-500 text-center"
            >
              Add LINE
            </a>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="md:hidden flex justify-center py-2">
        <button
          type="button"
          className="text-gray-700 hover:text-indigo-600"
          onClick={() => alert('Open mobile menu')}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
