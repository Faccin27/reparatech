export default function Footer() {
  return (
    <footer className="w-full px-4 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 items-center justify-center flex bg-white/10 backdrop-blur-xl rounded-xl p-3">
            <span className="text-white font-bold">R</span>
          </div>
          <span className="text-white text-lg">ReparaTech</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <a
            href="#init"
            className="text-gray-300 hover:text-white text-xs font-bold transition-colors hover:underline"
          >
            About
          </a>
          <a
            href="/terms"
            className="text-gray-300 hover:text-white text-xs font-bold  transition-colors hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="text-gray-300 hover:text-white text-xs font-bold transition-colors hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="https://wa.me/5549999422388"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xs font-bold transition-colors hover:underline"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
