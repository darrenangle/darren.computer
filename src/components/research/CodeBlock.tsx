import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../../context/ThemeContext';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'text', filename }) => {
  const { theme } = useTheme();
  const Highlighter = SyntaxHighlighter as any;

  return (
    <div className="research-code-block" style={{ padding: 0, background: 'transparent', border: 'none' }}>
      {filename && (
        <div className="research-code-filename" style={{ 
          background: theme === 'dark' ? '#2a2a2a' : '#f4f4f4',
          padding: '0.5rem 1rem',
          borderBottom: 'none',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          marginBottom: 0
        }}>
          {filename}
        </div>
      )}
      <div style={{
        borderRadius: filename ? '0 0 4px 4px' : '4px',
        overflow: 'hidden',
        fontSize: '0.9em',
      }}>
        <Highlighter
          language={language}
          style={theme === 'dark' ? oneDark : oneLight}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: theme === 'dark' ? '#1e1e1e' : '#f4f4f4',
          }}
          codeTagProps={{
            style: { fontFamily: "'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" }
          }}
        >
          {code}
        </Highlighter>
      </div>
    </div>
  );
};
