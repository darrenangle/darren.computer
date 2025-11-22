import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { WritingPost } from './WritingPost';
import { Navbar } from './Navbar';

export const WritingPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="writing-post">
        <Navbar />
        <p>Post not found.</p>
        <Link to="/writing">Back to writing</Link>
      </div>
    );
  }

  return <WritingPost post={post} />;
};