import React from 'react'
import { useEffect , useRef } from 'react';
import ReactDOMServer from 'react-dom/server';


const CodePreview = ({ html, css, js, reactCode }) => {
  const iframeRef = useRef(null);
  
  useEffect(() => {
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const reactCodeString = ReactDOMServer.renderToString(reactCode || <div></div>);
    
    const completeCode = `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
         <style>
          html, body {
            width :full; 
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }
          ${css}
      </style>
        </head>
        <body>
          <div id="root"></div>
          ${html}
          <script type="text/babel">
            function App() {
              return ${reactCodeString};
            }
            ReactDOM.render(<App />, document.getElementById('root'));
          </script>
          <script>${js}</script>
        </body>
      </html>
    `;
    
    doc.open();
    doc.write(completeCode);
    doc.close();
  }, [html , css , js , reactCode]);

  return (
    <div className="bg-gray-100 rounded-lg ">
      <iframe ref={iframeRef} title="Output" className="mx-auto w-full flex justify-center"></iframe>
    </div>
  );
};

const CodeEditor = ({ html , css , js , reactCode} ) => {
  
  return (
    <div className="editor-container p-4 text-white  flex flex-col gap-4">
      {/* <h2 className="text-2xl font-bold text-center">Live Code Editor</h2> */}
      <CodePreview html={html} css={css} js={js} reactCode={reactCode} />
    </div>
  ); 
}; 

export default CodeEditor