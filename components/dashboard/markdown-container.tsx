

import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import ReactMarkdown from 'react-markdown';
// import gfm from 'remark-gfm';
import type { FC } from "react";


import { MarkdownPreview } from './markdown-preview';
import { MarkdownEditor } from './markdown-editor';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface Props{
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}
export const MarkdownContainer:FC<Props> = (props)=> {
  // const [isPreviewVisible, setIsPreviewVisible] = useState(false);



  return (
    <div className='pt-4'>
      <ScrollSync>
        <div className="hidden md:flex">
          <ScrollSyncPane>
            <div
              className={`h-screen w-full overflow-auto md:flex md:flex-col`} 
             
            >
              <MarkdownEditor
                content={props.content}
                setContent={props.setContent}
              />
            </div>
          </ScrollSyncPane>

          <ScrollSyncPane>
            <div
              className={`h-screen w-full overflow-auto `}
            >
              <MarkdownPreview
              >
                <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '');

                    return !inline && match ? (
                      <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]} {...props}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                  {props.content}
                </ReactMarkdown>
              </MarkdownPreview>
            </div>
          </ScrollSyncPane>
        </div>
      </ScrollSync>
    </div>
  );
}
