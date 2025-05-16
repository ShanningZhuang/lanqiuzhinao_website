import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">篮球智脑</h3>
            <p className="text-slate-300">
              打造你的专属篮球训练体系，提升技术，实现目标
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">功能</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/videos" className="text-slate-300 hover:text-white transition-colors">
                  技术视频
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="text-slate-300 hover:text-white transition-colors">
                  训练分析
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-slate-300 hover:text-white transition-colors">
                  训练计划
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-300 hover:text-white transition-colors">
                  社区分享
                </Link>
              </li>
              <li>
                <Link href="/coach" className="text-slate-300 hover:text-white transition-colors">
                  AI教练
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
                  使用条款
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="text-slate-300 mb-2">邮箱: contact@lanqiuzhinao.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} 篮球智脑. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 