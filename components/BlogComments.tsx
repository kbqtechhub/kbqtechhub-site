'use client';

import type React from 'react';
import { useState } from 'react';

interface CommentProps {
  comments?: {
    user: string;
    comment: string;
    replies?: { user: string; reply: string }[];
  }[];
}

export default function BlogComments({ comments = [] }: CommentProps) {
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add comment logic here
    setNewComment('');
    setUserName('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text_gradient w-fit bg-clip-text text-transparent text-2xl font-bold mb-6 text_gradient">
        Comments
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="space-y-2">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 rounded-md bg-pure-black border border-graphite-gray text-white"
            required
          />
        </div>
        <div className="space-y-2">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 rounded-md bg-pure-black border border-graphite-gray text-white min-h-[100px]"
            required
          />
        </div>
        <button
          type="submit"
          className="red_gradient px-6 py-2 rounded-md text-white font-semibold"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="faq_section p-4">
            <div className="mb-2">
              <h4 className="font-bold text-yelly">{comment.user}</h4>
              <p className="text-white mt-1">{comment.comment}</p>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-8 mt-4 space-y-4 border-l-2 border-graphite-gray pl-4">
                {comment.replies.map((reply, replyIndex) => (
                  <div
                    key={replyIndex}
                    className="border-2 border-graphite-gray rounded-xl p-3 hover:bg-graphite-gray/10 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-yelly"></div>
                      <h5 className="font-bold text-yelly">{reply.user}</h5>
                    </div>
                    <p className="text-white mt-2 ml-3">{reply.reply}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
