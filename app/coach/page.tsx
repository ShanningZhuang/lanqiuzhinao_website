'use client'

import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';

export default function CoachPage() {
  const [isCoachActive, setIsCoachActive] = useState(false);
  const [feedback, setFeedback] = useState<string[]>([]);
  
  // 模拟开始AI教练会话
  const startCoachSession = () => {
    setIsCoachActive(true);
    // 模拟接收反馈
    setTimeout(() => {
      setFeedback([
        '请站在镜头前，确保全身可见',
      ]);
      
      // 模拟更多反馈
      setTimeout(() => {
        setFeedback(prev => [...prev, '姿势已校准，将开始分析你的投篮动作']);
        
        setTimeout(() => {
          setFeedback(prev => [...prev, '出手点偏低，尝试将球举高至额头位置']);
          
          setTimeout(() => {
            setFeedback(prev => [...prev, '手腕跟进不够，投篮后保持手腕下压']);
            
            setTimeout(() => {
              setFeedback(prev => [...prev, '很好！节奏更加流畅了']);
            }, 3000);
          }, 4000);
        }, 3000);
      }, 2000);
    }, 1000);
  };
  
  // 结束AI教练会话
  const endCoachSession = () => {
    setIsCoachActive(false);
    setFeedback([]);
  };
  
  // AI教练功能列表
  const coachFeatures = [
    {
      title: '实时姿势纠正',
      description: 'AI教练会实时分析你的姿势，给出纠正建议',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: '技术动作分析',
      description: '分析你的投篮、运球等技术动作，提供专业指导',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      )
    },
    {
      title: '语音指导',
      description: '通过语音实时给出指导和鼓励',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      )
    },
    {
      title: '训练进度追踪',
      description: '记录每次训练的表现和进步',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    }
  ];
  
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">AI教练</h1>
            <p className="text-gray-600">
              通过摄像头实时分析你的训练动作，提供专业指导和建议
            </p>
          </div>
          
          {/* 主要内容 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* 侧边栏 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">AI教练功能</h2>
                  
                  <div className="space-y-6">
                    {coachFeatures.map((feature, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-4 text-blue-600">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-2">使用说明</h3>
                    <ol className="list-decimal pl-5 text-gray-600 space-y-1">
                      <li>确保摄像头已连接并允许网站访问</li>
                      <li>站在摄像头前，确保全身可见</li>
                      <li>点击"开始训练"按钮，等待AI教练初始化</li>
                      <li>按照AI教练的语音和文字指导进行训练</li>
                      <li>训练结束后，点击"结束训练"</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 主内容区 */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">AI实时指导</h2>
                  
                  {/* 视频区域 */}
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4 relative">
                    {!isCoachActive ? (
                      <div className="text-center text-white p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                        </svg>
                        <h3 className="text-lg font-medium mb-2">摄像头未启用</h3>
                        <p className="text-gray-400 mb-6">
                          点击下方"开始训练"按钮启用摄像头，开始AI教练指导
                        </p>
                        <button 
                          onClick={startCoachSession}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          开始训练
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="text-white text-opacity-70 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-2 animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          <p>AI教练正在分析你的动作...</p>
                        </div>
                        
                        {/* 录制状态指示 */}
                        <div className="absolute top-4 left-4 flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                          <span className="text-white text-sm">实时分析中</span>
                        </div>
                        
                        {/* 结束训练按钮 */}
                        <div className="absolute bottom-4 right-4">
                          <button 
                            onClick={endCoachSession}
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
                          >
                            结束训练
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* 反馈区域 */}
                  <div className="border border-gray-200 rounded-lg p-4 h-48 overflow-y-auto">
                    <h3 className="font-medium mb-2">教练反馈:</h3>
                    {feedback.length > 0 ? (
                      <ul className="space-y-2">
                        {feedback.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                              {index + 1}
                            </span>
                            <p className="flex-1 text-gray-700">{item}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500">
                        {isCoachActive ? '等待AI教练反馈...' : '开始训练后会在这里显示AI教练的反馈'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* 推荐训练 */}
              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">提升训练效果</h3>
                <p className="text-blue-600 mb-4">
                  结合个性化训练计划，效果会更好！AI教练可以根据你的训练计划提供更精准的指导
                </p>
                <Link href="/plans" className="text-blue-700 font-medium hover:text-blue-800 flex items-center">
                  浏览训练计划
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 