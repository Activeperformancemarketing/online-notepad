import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MarkdownPreview = ({ markdown }) => {
    return (
        <ReactMarkdown
            components={{
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '');
                    return inline ? (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    ) : (
                        <SyntaxHighlighter
                            style={solarizedLight}
                            language={match ? match[1] : ''}
                            PreTag="div"
                        >
                            {String(children).replace(/
$/, '')}
                        </SyntaxHighlighter>
                    );
                },
            }}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default MarkdownPreview;