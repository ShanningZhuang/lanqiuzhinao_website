'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: '首页', href: '/' },
    { name: '技术视频', href: '/videos' },
    { name: '训练分析', href: '/analysis' },
    { name: '训练计划', href: '/plans' },
    { name: '社区分享', href: '/community' },
    { name: 'AI教练', href: '/coach' },
  ];

  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">篮球智脑</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'text-orange-500 font-medium'
                    : 'text-white hover:text-orange-400'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* User section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login" className="px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">
              登录
            </Link>
            <Link href="/auth/register" className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors">
              注册
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2">
            <nav className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'text-orange-500 font-medium'
                      : 'text-white hover:text-orange-400'
                  } transition-colors duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-2">
                <Link href="/auth/login" className="px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">
                  登录
                </Link>
                <Link href="/auth/register" className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors">
                  注册
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 