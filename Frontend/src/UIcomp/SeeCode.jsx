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
            height: 160px;
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
  }, []);

  return (
    <div className="preview-container bg-gray-100 rounded-lg h-40">
      <iframe ref={iframeRef} title="Output" className="mx-auto w-full h-58 flex justify-center"></iframe>
    </div>
  );
};

const SeeCode = () => {
    const html = ``; 
    const css = ``; 
    const js = ``; 

    const reactCode = ``; 
  
  return (
    <div>
         <CodePreview html={html} css={css} js={js} reactCode={reactCode} />
    </div>
  )
}

export default SeeCode