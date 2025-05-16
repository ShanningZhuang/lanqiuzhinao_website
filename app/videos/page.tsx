'use client'

import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';

interface VideoCategory {
  id: number;
  name: string;
}

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  categoryId: number;
}

export default function VideosPage() {
  // Mock categories
  const categories: VideoCategory[] = [
    { id: 1, name: '投篮技巧' },
    { id: 2, name: '运球训练' },
    { id: 3, name: '防守技巧' },
    { id: 4, name: '体能训练' },
    { id: 5, name: '战术分析' },
  ];
  
  // Mock videos data
  const allVideos: Video[] = [
    {
      id: 1,
      title: '标准投篮姿势详解',
      thumbnail: '#',
      duration: '12:34',
      views: 1245,
      categoryId: 1
    },
    {
      id: 2,
      title: '三分球技巧提高训练',
      thumbnail: '#',
      duration: '18:21',
      views: 987,
      categoryId: 1
    },
    {
      id: 3,
      title: '高级运球技巧训练',
      thumbnail: '#',
      duration: '15:45',
      views: 756,
      categoryId: 2
    },
    {
      id: 4,
      title: '背后运球和变向教学',
      thumbnail: '#',
      duration: '10:12',
      views: 645,
      categoryId: 2
    },
    {
      id: 5,
      title: '一对一防守基础',
      thumbnail: '#',
      duration: '14:23',
      views: 523,
      categoryId: 3
    },
    {
      id: 6,
      title: '篮球专项体能训练',
      thumbnail: '#',
      duration: '22:10',
      views: 412,
      categoryId: 4
    },
    {
      id: 7,
      title: '常见进攻战术分析',
      thumbnail: '#',
      duration: '25:18',
      views: 356,
      categoryId: 5
    },
    {
      id: 8,
      title: '篮球比赛战术布置',
      thumbnail: '#',
      duration: '19:45',
      views: 289,
      categoryId: 5
    }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // 根据选择的分类和搜索关键词筛选视频
  const filteredVideos = allVideos.filter(video => {
    const matchesCategory = selectedCategory === null || video.categoryId === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">标准训练视频</h1>
            <p className="text-gray-600">
              观看专业篮球教练的标准训练视频，学习正确的篮球技巧和动作要领
            </p>
          </div>
          
          {/* 搜索和分类过滤 */}
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  className={`px-4 py-2 text-sm font-medium ${selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border border-gray-300 rounded-l-lg`}
                  onClick={() => setSelectedCategory(null)}
                >
                  全部
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 text-sm font-medium ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border-t border-b border-r border-gray-300 ${category.id === categories.length ? 'rounded-r-lg' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="搜索视频..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* 视频网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredVideos.map(video => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40 bg-gray-300">
                  {/* Video thumbnail placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs py-1 px-2 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{categories.find(cat => cat.id === video.categoryId)?.name}</span>
                    <span>{video.views} 次观看</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">没有找到符合条件的视频</p>
            </div>
          )}
          
          {/* Pagination placeholder */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                上一页
              </button>
              <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
              <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50">
                下一页
              </button>
            </nav>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 