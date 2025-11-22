import React from "react";
import { Link } from "react-router-dom";
import { WritingPost } from "../data/posts";
import { Navbar } from "./Navbar";

interface WritingListProps {
  posts: WritingPost[];
}

export const WritingList: React.FC<WritingListProps> = ({
  posts,
}) => {
  return (
    <div className="writing-list">
      <Navbar />
      <h3 style={{ 
        fontSize: '0.9rem', 
        textTransform: 'uppercase', 
        letterSpacing: '0.05em', 
        color: 'var(--color-text-secondary)',
        marginBottom: '0',
        paddingBottom: '0.5rem'
      }}>Research Notes</h3>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} className="writing-list-item">
            {/* Date Column */}
            <div className="writing-list-date">
              {post.date}
            </div>

            {/* Content Column */}
            <div style={{ flex: 1 }}>
              <Link
                to={`/writing/${post.id}`}
                style={{
                  fontSize: "1.4em",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "0.75rem",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  lineHeight: 1.2
                }}
              >
                {post.title}
              </Link>
              <div style={{ 
                color: "var(--color-text-secondary)",
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                {post.summary}
              </div>
            </div>

            {/* Image Column */}
            {post.image && (
              <Link to={`/writing/${post.id}`} style={{ flexShrink: 0, display: 'block' }}>
                <img 
                  src={post.image} 
                  alt="" 
                  className="writing-list-image"
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};