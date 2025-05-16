'use client'

import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';

interface Post {
  id: number;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  time: string;
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'feed' | 'ranking' | 'friends'>('feed');
  
  // 模拟社区帖子数据
  const posts: Post[] = [
    {
      id: 1,
      author: {
        id: 1,
        name: '篮球达人',
        avatar: '#'
      },
      content: '今天训练了2小时投篮，命中率终于突破了60%，太开心了！坚持就是胜利！',
      images: ['#'],
      likes: 45,
      comments: 12,
      time: '1小时前'
    },
    {
      id: 2,
      author: {
        id: 2,
        name: '运球高手',
        avatar: '#'
      },
      content: '分享一个训练运球的小技巧：将两个球同时运球，能有效提高你的控球能力和手感。我已经坚持了一个月，效果非常明显！',
      likes: 36,
      comments: 8,
      time: '3小时前'
    },
    {
      id: 3,
      author: {
        id: 3,
        name: '训练狂人',
        avatar: '#'
      },
      content: '完成了今天的高强度训练计划，大家有没有什么恢复体力的好方法？感觉每次训练后都需要很长时间才能恢复。',
      images: ['#', '#'],
      likes: 28,
      comments: 15,
      time: '昨天'
    }
  ];
  
  // 模拟排名数据
  const rankings = [
    { id: 1, name: '训练狂人', avatar: '#', trainHours: 25, rank: 1 },
    { id: 2, name: '篮球达人', avatar: '#', trainHours: 23, rank: 2 },
    { id: 3, name: '控球大师', avatar: '#', trainHours: 20, rank: 3 },
    { id: 4, name: '三分王者', avatar: '#', trainHours: 18, rank: 4 },
    { id: 5, name: '运球高手', avatar: '#', trainHours: 16, rank: 5 }
  ];
  
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">社区</h1>
            <p className="text-gray-600">
              与其他篮球爱好者交流训练心得，分享训练成果，互相激励
            </p>
          </div>
          
          {/* 标签页切换 */}
          <div className="mb-8 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'feed'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('feed')}
              >
                动态
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ranking'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('ranking')}
              >
                排行榜
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'friends'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('friends')}
              >
                好友
              </button>
            </nav>
          </div>
          
          {/* 动态标签页 */}
          {activeTab === 'feed' && (
            <div>
              {/* 发布动态 */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-grow">
                    <textarea
                      placeholder="分享你的训练心得..."
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                    ></textarea>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex space-x-2">
                        <button 
                          className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100"
                          title="上传图片"
                          aria-label="上传图片"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </button>
                        <button 
                          className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100"
                          title="添加位置"
                          aria-label="添加位置"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </button>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        发布
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 帖子列表 */}
              <div className="space-y-6">
                {posts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <h3 className="font-semibold">{post.author.name}</h3>
                        <p className="text-xs text-gray-500">{post.time}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    
                    {post.images && post.images.length > 0 && (
                      <div className={`grid ${post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2 mb-4`}>
                        {post.images.map((img, idx) => (
                          <div key={idx} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">图片 {idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex space-x-6 text-gray-500 text-sm border-t border-gray-100 pt-3">
                      <button 
                        className="flex items-center space-x-1 hover:text-blue-600"
                        title="点赞"
                        aria-label="点赞"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <span>{post.likes}</span>
                      </button>
                      <button 
                        className="flex items-center space-x-1 hover:text-blue-600"
                        title="评论"
                        aria-label="评论"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 排行榜标签页 */}
          {activeTab === 'ranking' && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-blue-50 border-b border-blue-100">
                <h2 className="text-lg font-semibold text-blue-800">本周训练时长排行榜</h2>
                <p className="text-sm text-blue-600">每周一更新，记录上周训练时长</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {rankings.map((user) => (
                  <div key={user.id} className={`p-4 flex items-center ${user.rank <= 3 ? 'bg-yellow-50' : ''}`}>
                    <div className="w-8 h-8 flex items-center justify-center font-bold mr-3">
                      {user.rank <= 3 ? (
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          user.rank === 1 ? 'bg-yellow-400' :
                          user.rank === 2 ? 'bg-gray-300' :
                          'bg-amber-600'
                        } text-white`}>
                          {user.rank}
                        </div>
                      ) : user.rank}
                    </div>
                    
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                    
                    <div className="flex-grow">
                      <h3 className="font-medium">{user.name}</h3>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-semibold text-blue-600">{user.trainHours}小时</div>
                      <div className="text-xs text-gray-500">本周训练时长</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 好友标签页 */}
          {activeTab === 'friends' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <h2 className="text-lg font-medium text-gray-900 mb-2">添加好友，一起训练</h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  添加好友一起参与训练，互相激励，共同进步。还可以发起私聊，交流训练心得
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  添加好友
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
} 