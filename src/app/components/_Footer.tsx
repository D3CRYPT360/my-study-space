import Link from 'next/link';

const Footer1 = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">My Study Space</h3>
            <p className="text-sm text-gray-600">
              Experience effective learning with<br/> our scheduled online tutition classes for Grade 9 & 10. 
            </p>
          </div>

          {/* Contact & Connect Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <Link 
                    href="https://t.me/mystudyspace" 
                    className="text-gray-600 hover:text-gray-900 transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="viber://chat?number=+9609999999" 
                    className="text-gray-600 hover:text-gray-900 transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Viber"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 50 50" fill="currentColor">
                      <path d="M 44.78125 13.15625 C 44 10.367188 42.453125 8.164063 40.1875 6.605469 C 37.328125 4.632813 34.039063 3.9375 31.199219 3.511719 C 27.269531 2.925781 23.710938 2.84375 20.316406 3.257813 C 17.136719 3.648438 14.742188 4.269531 12.558594 5.273438 C 8.277344 7.242188 5.707031 10.425781 4.921875 14.734375 C 4.539063 16.828125 4.28125 18.71875 4.132813 20.523438 C 3.789063 24.695313 4.101563 28.386719 5.085938 31.808594 C 6.046875 35.144531 7.722656 37.527344 10.210938 39.09375 C 10.84375 39.492188 11.65625 39.78125 12.441406 40.058594 C 12.886719 40.214844 13.320313 40.367188 13.675781 40.535156 C 14.003906 40.6875 14.003906 40.714844 14 40.988281 C 13.972656 43.359375 14 48.007813 14 48.007813 L 14.007813 49 L 15.789063 49 L 16.078125 48.71875 C 16.269531 48.539063 20.683594 44.273438 22.257813 42.554688 L 22.472656 42.316406 C 22.742188 42.003906 22.742188 42.003906 23.019531 42 C 25.144531 41.957031 27.316406 41.875 29.472656 41.757813 C 32.085938 41.617188 35.113281 41.363281 37.964844 40.175781 C 40.574219 39.085938 42.480469 37.355469 43.625 35.035156 C 44.820313 32.613281 45.527344 29.992188 45.792969 27.019531 C 46.261719 21.792969 45.929688 17.257813 44.78125 13.15625 Z M 35.382813 33.480469 C 34.726563 34.546875 33.75 35.289063 32.597656 35.769531 C 31.753906 36.121094 30.894531 36.046875 30.0625 35.695313 C 23.097656 32.746094 17.632813 28.101563 14.023438 21.421875 C 13.277344 20.046875 12.761719 18.546875 12.167969 17.09375 C 12.046875 16.796875 12.054688 16.445313 12 16.117188 C 12.050781 13.769531 13.851563 12.445313 15.671875 12.046875 C 16.367188 11.890625 16.984375 12.136719 17.5 12.632813 C 18.929688 13.992188 20.058594 15.574219 20.910156 17.347656 C 21.28125 18.125 21.113281 18.8125 20.480469 19.390625 C 20.347656 19.511719 20.210938 19.621094 20.066406 19.730469 C 18.621094 20.816406 18.410156 21.640625 19.179688 23.277344 C 20.492188 26.0625 22.671875 27.933594 25.488281 29.09375 C 26.230469 29.398438 26.929688 29.246094 27.496094 28.644531 C 27.574219 28.566406 27.660156 28.488281 27.714844 28.394531 C 28.824219 26.542969 30.4375 26.726563 31.925781 27.78125 C 32.902344 28.476563 33.851563 29.210938 34.816406 29.917969 C 36.289063 31 36.277344 32.015625 35.382813 33.480469 Z M 26.144531 15 C 25.816406 15 25.488281 15.027344 25.164063 15.082031 C 24.617188 15.171875 24.105469 14.804688 24.011719 14.257813 C 23.921875 13.714844 24.289063 13.199219 24.835938 13.109375 C 25.265625 13.035156 25.707031 13 26.144531 13 C 30.476563 13 34 16.523438 34 20.855469 C 34 21.296875 33.964844 21.738281 33.890625 22.164063 C 33.808594 22.652344 33.386719 23 32.90625 23 C 32.851563 23 32.796875 22.996094 32.738281 22.984375 C 32.195313 22.894531 31.828125 22.378906 31.917969 21.835938 C 31.972656 21.515625 32 21.1875 32 20.855469 C 32 17.628906 29.371094 15 26.144531 15 Z M 31 21 C 31 21.550781 30.550781 22 30 22 C 29.449219 22 29 21.550781 29 21 C 29 19.347656 27.652344 18 26 18 C 25.449219 18 25 17.550781 25 17 C 25 16.449219 25.449219 16 26 16 C 28.757813 16 31 18.242188 31 21 Z M 36.710938 23.222656 C 36.605469 23.6875 36.191406 24 35.734375 24 C 35.660156 24 35.585938 23.992188 35.511719 23.976563 C 34.972656 23.851563 34.636719 23.316406 34.757813 22.777344 C 34.902344 22.140625 34.976563 21.480469 34.976563 20.816406 C 34.976563 15.957031 31.019531 12 26.160156 12 C 25.496094 12 24.835938 12.074219 24.199219 12.21875 C 23.660156 12.34375 23.125 12.003906 23.003906 11.464844 C 22.878906 10.925781 23.21875 10.390625 23.757813 10.269531 C 24.539063 10.089844 25.347656 10 26.160156 10 C 32.125 10 36.976563 14.851563 36.976563 20.816406 C 36.976563 21.628906 36.886719 22.4375 36.710938 23.222656 Z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect with Us */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <Link 
                    href="https://instagram.com/mystudyspace" 
                    className="text-gray-600 hover:text-gray-900 transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://tiktok.com/@mystudyspace" 
                    className="text-gray-600 hover:text-gray-900 transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://facebook.com/mystudyspace" 
                    className="text-gray-600 hover:text-gray-900 transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center text-gray-600">
          <p>&copy; {currentYear} My Study Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
