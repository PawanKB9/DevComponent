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
      <iframe ref={iframeRef} title="Output" className=" mx-auto w-full h-40 border rounded-lg flex justify-center"></iframe>
    </div>
  );
};

const SeeCode = () => {
    const html = ``; 
    const css = ``; 
    const js = ``; 

    const reactCode = <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-lg font-bold">MyLogo</div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-4">
        <li>
          <a href="#home" className="text-white hover:text-gray-200">Home</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-200">About</a>
        </li>
        <li>
          <a href="#services" className="text-white hover:text-gray-200">Services</a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
        </li>
      </ul>
    </div>
  </nav>  
  
  return (
    <div>
         <CodePreview html={html} css={css} js={js} reactCode={reactCode} />
    </div>
  )
}

export default SeeCode