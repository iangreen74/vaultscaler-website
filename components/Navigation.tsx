import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            VaultScaler
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/product" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Radix Platform
            </Link>
            <Link href="/get-radix" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Get Radix
            </Link>
            <Link href="/contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <a 
              href="https://dashboard.vaultscaler.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 bg-primary-1 text-white rounded-full font-semibold hover:bg-primary-2 transition-colors text-sm shadow-md hover:shadow-lg"
            >
              Launch Dashboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
