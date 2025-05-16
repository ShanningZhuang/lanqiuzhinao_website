'use client'

import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function AnalysisPage() {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadingStatus, setUploadingStatus] = useState<'idle' | 'uploading' | 'processing' | 'completed'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Mock analysis data
  const analyzedVideos = [
    {
      id: 1,
      title: '三分球训练',
      date: '2023-10-15',
      thumbnail: '#',
      metrics: {
        shotAccuracy: 68,
        formCorrectness: 82,
        releaseAngle: 45
      }
    },
    {
      id: 2,
      title: '篮下技巧训练',
      date: '2023-10-10',
      thumbnail: '#',
      metrics: {
        shotAccuracy: 75,
        formCorrectness: 78,
        releaseAngle: 41
      }
    },
    {
      id: 3,
      title: '中距离投篮训练',
      date: '2023-10-05',
      thumbnail: '#',
      metrics: {
        shotAccuracy: 62,
        formCorrectness: 70,
        releaseAngle: 43
      }
    }
  ];
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const simulateUpload = () => {
    if (!selectedFile) return;
    
    setUploadingStatus('uploading');
    setUploadProgress(0);
    
    // 模拟上传进度
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadingStatus('processing');
          
          // 模拟处理时间
          setTimeout(() => {
            setUploadingStatus('completed');
          }, 2000);
          
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };
  
  const resetUpload = () => {
    setUploadingStatus('idle');
    setUploadProgress(0);
    setSelectedFile(null);
  };
  
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">训练视频分析</h1>
            <p className="text-gray-600">
              上传你的训练视频，获取专业分析和技术动作纠正建议
            </p>
          </div>
          
          {/* Tabs */}
          <div className="mb-8 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'upload'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('upload')}
              >
                上传视频
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'history'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('history')}
              >
                分析历史
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'progress'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('progress')}
              >
                进步曲线
              </button>
            </nav>
          </div>
          
          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              {uploadingStatus === 'idle' && (
                <div className="text-center py-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">上传你的训练视频</h3>
                  <p className="text-gray-500 mb-6">
                    支持MP4, MOV格式，最大文件大小1GB
                  </p>
                  
                  <div className="flex justify-center">
                    <label
                      htmlFor="video-upload"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
                    >
                      选择视频文件
                      <input
                        id="video-upload"
                        name="video-upload"
                        type="file"
                        accept="video/mp4,video/mov"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  
                  {selectedFile && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">{selectedFile.name}</p>
                      <button
                        onClick={simulateUpload}
                        className="mt-2 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                      >
                        开始上传
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {uploadingStatus === 'uploading' && (
                <div className="py-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">上传中...</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 text-center">{uploadProgress}%</p>
                </div>
              )}
              
              {uploadingStatus === 'processing' && (
                <div className="py-10 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900">处理视频中...</h3>
                  <p className="text-sm text-gray-500 mt-2">这可能需要几分钟，请耐心等待</p>
                </div>
              )}
              
              {uploadingStatus === 'completed' && (
                <div className="py-6">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700">
                          视频分析完成！
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">分析结果摘要</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-500 mb-1">投篮准确度</div>
                        <div className="text-2xl font-bold text-blue-600">72%</div>
                        <div className="text-xs text-gray-500">高于平均水平</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-500 mb-1">姿势正确性</div>
                        <div className="text-2xl font-bold text-blue-600">85%</div>
                        <div className="text-xs text-gray-500">优秀</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-500 mb-1">出手角度</div>
                        <div className="text-2xl font-bold text-blue-600">43°</div>
                        <div className="text-xs text-gray-500">理想范围</div>
                      </div>
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-2">改进建议:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                      <li>膝盖弯曲角度可以增加，以获得更好的弹跳力</li>
                      <li>手腕跟进动作需要加强，以提高投篮稳定性</li>
                      <li>投篮节奏可以更加一致，尤其是在疲劳状态下</li>
                    </ul>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={resetUpload}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                      >
                        查看完整分析
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={resetUpload}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      上传新视频
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* History Tab */}
          {activeTab === 'history' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {analyzedVideos.map((video) => (
                  <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-40 bg-gray-300 relative">
                      {/* Video thumbnail placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{video.title}</h3>
                        <span className="text-xs text-gray-500">{video.date}</span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">投篮准确度</span>
                            <span className="font-medium">{video.metrics.shotAccuracy}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-600 h-1.5 rounded-full"
                              style={{ width: `${video.metrics.shotAccuracy}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">姿势正确性</span>
                            <span className="font-medium">{video.metrics.formCorrectness}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-green-500 h-1.5 rounded-full"
                              style={{ width: `${video.metrics.formCorrectness}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">出手角度</span>
                            <span className="font-medium">{video.metrics.releaseAngle}°</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-orange-500 h-1.5 rounded-full"
                              style={{ width: `${(video.metrics.releaseAngle / 50) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        查看详情
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {analyzedVideos.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500">还没有分析过的视频</p>
                  <button
                    onClick={() => setActiveTab('upload')}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    上传视频
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">训练进步曲线</h3>
              
              <div className="flex justify-center items-center h-64 mb-6">
                {/* 这里是进步曲线图表的占位符 */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">图表显示区域（在实际应用中会集成图表库）</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">总训练时长</div>
                  <div className="text-2xl font-bold text-blue-600">23.5 小时</div>
                  <div className="text-xs text-green-600">+2.5 小时 (本周)</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">平均准确度</div>
                  <div className="text-2xl font-bold text-blue-600">68%</div>
                  <div className="text-xs text-green-600">+4% (近30天)</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">姿势改进</div>
                  <div className="text-2xl font-bold text-blue-600">76%</div>
                  <div className="text-xs text-green-600">+8% (近30天)</div>
                </div>
              </div>
              
              <h4 className="font-medium text-gray-900 mb-2">个人特征分析:</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>你的投篮准确度在持续提高，特别是在中距离区域</li>
                <li>你的防守姿势和移动速度需要更多关注</li>
                <li>你的体能在长时间训练后有明显下降</li>
                <li>建议加强核心力量和下肢爆发力训练</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
} 