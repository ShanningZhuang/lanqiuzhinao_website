'use client'

import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';

interface TrainingPlan {
  id: number;
  title: string;
  level: '初级' | '中级' | '高级';
  duration: string;
  description: string;
  tags: string[];
  completionRate?: number;
}

export default function PlansPage() {
  // 推荐的训练计划
  const recommendedPlans: TrainingPlan[] = [
    {
      id: 1,
      title: '投篮基础训练计划',
      level: '初级',
      duration: '4周',
      description: '针对初学者的投篮基础训练，包含姿势、力量和准确度训练',
      tags: ['投篮', '基础', '入门'],
      completionRate: 35
    },
    {
      id: 2,
      title: '中级运球技巧提升',
      level: '中级',
      duration: '6周',
      description: '提升控球能力和复杂运球技巧，适合有一定基础的球员',
      tags: ['运球', '控球', '中级'],
      completionRate: 0
    },
    {
      id: 3,
      title: '高强度比赛实战训练',
      level: '高级',
      duration: '8周',
      description: '以实战为导向的高强度训练，提升比赛中的决策和执行能力',
      tags: ['实战', '高强度', '高级'],
      completionRate: 0
    }
  ];
  
  // 所有训练计划
  const allPlans: TrainingPlan[] = [
    ...recommendedPlans,
    {
      id: 4,
      title: '篮下终结技巧训练',
      level: '中级',
      duration: '4周',
      description: '提高篮下终结能力，包括各种上篮技巧和对抗训练',
      tags: ['上篮', '终结', '中级']
    },
    {
      id: 5,
      title: '防守脚步与姿势训练',
      level: '初级',
      duration: '3周',
      description: '学习正确的防守姿势和脚步移动，提高防守效率',
      tags: ['防守', '基础', '脚步']
    },
    {
      id: 6,
      title: '三分球专项训练',
      level: '高级',
      duration: '6周',
      description: '提高三分球投射稳定性和不同情况下的三分球命中率',
      tags: ['三分球', '投篮', '高级']
    },
    {
      id: 7,
      title: '篮球体能训练方案',
      level: '中级',
      duration: '8周',
      description: '全面提升篮球所需的爆发力、耐力和协调性',
      tags: ['体能', '耐力', '爆发力']
    },
    {
      id: 8,
      title: '篮球战术理解与执行',
      level: '高级',
      duration: '5周',
      description: '学习和实践常见篮球战术，提高球队配合和战术执行力',
      tags: ['战术', '配合', '高级']
    }
  ];

  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // 根据选择的级别和搜索关键词筛选训练计划
  const filteredPlans = allPlans.filter(plan => {
    const matchesLevel = selectedLevel === null || plan.level === selectedLevel;
    const matchesSearch = 
      plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesLevel && matchesSearch;
  });
  
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">训练计划</h1>
            <p className="text-gray-600">
              根据你的水平和目标选择合适的训练计划，系统的提升篮球技能
            </p>
          </div>
          
          {/* 我的计划 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">我的计划</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedPlans.filter(plan => plan.completionRate !== undefined && plan.completionRate > 0).map(plan => (
                <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{plan.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        plan.level === '初级' ? 'bg-green-100 text-green-800' :
                        plan.level === '中级' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {plan.level}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">完成进度</span>
                        <span className="font-medium">{plan.completionRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${plan.completionRate}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{plan.duration}</span>
                      <Link href={`/plans/${plan.id}`} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                        继续训练
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
              {recommendedPlans.filter(plan => plan.completionRate !== undefined && plan.completionRate > 0).length === 0 && (
                <div className="col-span-3 text-center py-8 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500 mb-4">你还没有开始任何训练计划</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    选择推荐计划
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* 推荐计划 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">为你推荐</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedPlans.filter(plan => !plan.completionRate || plan.completionRate === 0).map(plan => (
                <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{plan.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        plan.level === '初级' ? 'bg-green-100 text-green-800' :
                        plan.level === '中级' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {plan.level}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {plan.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{plan.duration}</span>
                      <Link href={`/plans/${plan.id}`} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                        开始计划
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 筛选和搜索 */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 text-sm rounded-md ${selectedLevel === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setSelectedLevel(null)}
              >
                全部
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-md ${selectedLevel === '初级' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setSelectedLevel('初级')}
              >
                初级
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-md ${selectedLevel === '中级' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setSelectedLevel('中级')}
              >
                中级
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-md ${selectedLevel === '高级' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setSelectedLevel('高级')}
              >
                高级
              </button>
            </div>
            
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="搜索训练计划..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* 所有计划 */}
          <h2 className="text-xl font-bold mb-4">浏览所有计划</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map(plan => (
              <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{plan.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      plan.level === '初级' ? 'bg-green-100 text-green-800' :
                      plan.level === '中级' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {plan.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {plan.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{plan.duration}</span>
                    <Link href={`/plans/${plan.id}`} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      {plan.completionRate ? '继续训练' : '查看详情'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPlans.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500">没有找到符合条件的训练计划</p>
            </div>
          )}
          
          {/* 自定义计划 */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">想要专属于你的训练计划？</h3>
              <p className="text-blue-600 max-w-xl">
                根据你的目标、能力水平和训练条件，我们可以为你生成完全个性化的训练计划
              </p>
            </div>
            <Link href="/plans/create" className="mt-4 md:mt-0 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              创建个性化计划
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 