import React from 'react';
import { Helmet } from 'react-helmet-async';
import { WritingPost as WritingPostType } from '../data/posts';
import { Navbar } from './Navbar';

interface WritingPostProps {
  post: WritingPostType;
}

export const WritingPost: React.FC<WritingPostProps> = ({ post }) => {
  const siteUrl = 'https://darren.computer'; // Ideally from env or config
  const currentUrl = `${siteUrl}/writing/${post.id}`;
  
  return (
    <div className="writing-post">
      <Navbar />
      <Helmet>
        <title>{post.title} | Darren Angle</title>
        <meta name="description" content={post.summary} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        {post.image && <meta property="og:image" content={post.image} />}

        {/* Twitter */}
        <meta property="twitter:card" content={post.image ? "summary_large_image" : "summary"} />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.summary} />
        {post.image && <meta property="twitter:image" content={post.image} />}
      </Helmet>

      <article>
        <h1>{post.title}</h1>
        <div style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>{post.date}</div>
        
        {post.image && (
          <img 
            src={post.image} 
            alt="" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxHeight: '400px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '2.5rem'
            }} 
          />
        )}

        <div className="post-content">
          {post.content}
        </div>
      </article>
    </div>
  );
};
