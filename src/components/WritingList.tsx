import React, { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Fuse from "fuse.js";
import { WritingPost } from "../data/posts";
import { Navbar } from "./Navbar";

interface WritingListProps {
  posts: WritingPost[];
}

export const WritingList: React.FC<WritingListProps> = ({
  posts,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const searchQuery = searchParams.get("q") || "";
  const selectedTag = searchParams.get("tag");

  const handleSearchChange = (value: string) => {
    setSearchParams(prev => {
      if (value) prev.set("q", value);
      else prev.delete("q");
      return prev;
    }, { replace: true });
  };

  const handleTagSelect = (tag: string | null) => {
    setSearchParams(prev => {
      if (tag) prev.set("tag", tag);
      else prev.delete("tag");
      return prev;
    });
  };

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [posts]);

  // Initialize Fuse instance
  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ['title', 'summary', 'tags'],
      threshold: 0.4,
    });
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (searchQuery) {
      result = fuse.search(searchQuery).map(res => res.item);
    }

    if (selectedTag) {
      result = result.filter(post => post.tags?.includes(selectedTag));
    }

    return result;
  }, [posts, searchQuery, selectedTag, fuse]);

  // Auto-open search if params exist
  useEffect(() => {
    if (searchQuery || selectedTag) {
      setIsSearchOpen(true);
    }
  }, []);

  return (
    <div className="writing-list">
      <Navbar />
      
      <div style={{ marginBottom: '0.5rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'baseline',
          marginBottom: isSearchOpen ? '1.5rem' : '0.5rem',
        }}>
          <h3 style={{ 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em', 
            color: 'var(--color-text-secondary)',
            margin: 0,
          }}>Research Notes</h3>

          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              fontSize: '0.9rem',
              fontFamily: 'inherit',
            }}
            aria-label="Toggle search"
          >
            {isSearchOpen ? 'Close' : 'Search'}
          </button>
        </div>
        
        {/* Search input container */}
        <div style={{ 
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          opacity: isSearchOpen ? 1 : 0,
          maxHeight: isSearchOpen ? '300px' : '0',
          pointerEvents: isSearchOpen ? 'auto' : 'none'
        }}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              /* autoFocus removed to prevent jump on mount if params present */
              style={{
                width: '100%',
                padding: '0.8rem 0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--color-border-light)',
                marginBottom: '1.5rem',
                color: 'var(--color-text)',
                outline: 'none'
              }}
            />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem' }}>
              <button
                onClick={() => handleTagSelect(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85em',
                  color: selectedTag === null ? 'var(--color-text)' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  textDecoration: selectedTag === null ? 'underline' : 'none',
                  textUnderlineOffset: '0.3em'
                }}
              >
                all
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagSelect(tag === selectedTag ? null : tag)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85em',
                    color: selectedTag === tag ? 'var(--color-text)' : 'var(--color-text-muted)',
                    cursor: 'pointer',
                    textDecoration: selectedTag === tag ? 'underline' : 'none',
                    textUnderlineOffset: '0.3em'
                  }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
      </div>
      
      {filteredPosts.length === 0 ? (
        <div style={{ padding: '2rem 0', color: 'var(--color-text-muted)' }}>
          No matching posts found.
        </div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredPosts.map((post) => (
            <li key={post.id} className="writing-list-item">
              <Link to={`/writing/${post.id}`} className="writing-list-link">
                {/* Content Column */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "1.4em",
                      fontWeight: 600,
                      display: "block",
                      marginBottom: "0.25rem",
                      color: "var(--color-text)",
                      lineHeight: 1.2
                    }}
                  >
                    {post.title}
                  </div>
                  <div className="writing-list-date">
                    {post.date}
                    {post.tags && (
                      <span style={{ marginLeft: '1rem', opacity: 0.6 }}>
                        {post.tags.map(t => `#${t}`).join(' ')}
                      </span>
                    )}
                  </div>
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
                  <img 
                    src={post.image} 
                    alt="" 
                    className="writing-list-image"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};