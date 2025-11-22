import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { WorkPost } from './WorkPost';
import { Navbar } from './Navbar';

export const WorkPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="work-post">
        <Navbar />
        <p>Post not found.</p>
        <Link to="/work">Back to work</Link>
      </div>
    );
  }

  return <WorkPost post={post} />;
};
