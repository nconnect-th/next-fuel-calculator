import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Column One: Logo */}
        <div className="w-1/5">
          <a href="https://www.nconnect.asia/">
            <img
              src="https://www.nconnect.asia/wp-content/uploads/2024/06/SQ.png"
              alt="nConnect Logo"
              className="h-10"
            />
          </a>
        </div>

        {/* Column Two: Menu */}
        <nav className="w-3/5">
          <ul className="flex justify-around space-x-4 text-gray-700 font-medium">
            <li>
              <a href="https://www.nconnect.asia/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.nconnect.asia/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="https://www.nconnect.asia/work" className="hover:text-blue-500">
                Showcase
              </a>
            </li>
            <li>
              <a href="http://insights.nconnect.asia" className="hover:text-blue-500">
                Insights
              </a>
            </li>
            <li>
              <a href="https://www.nconnect.asia/contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Column Three: Call to Action */}
        <div className="w-1/5 flex justify-end">
          <a
            href="https://to.nconnect.asia/nConnectLINE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add LINE
          </a>
        </div>
      </div>
    </header>
  );
}
