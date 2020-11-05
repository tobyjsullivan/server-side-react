import React from 'react';
import {renderToString} from 'react-dom/server';

interface TemplateProps {
  title: string,
  rootNodeId: string,
  clientJsPath: string,
  children: React.ReactNode,
}

function Template(props: TemplateProps) {
  return (
    <>
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>{props.title}</title>
        </head>
        <body>
          <div id={props.rootNodeId}>
            {props.children}
          </div>
          <script src={props.clientJsPath}></script>
        </body>
      </html>
    </>
  );
}

export function renderTemplate(title: string, rootNodeId: string, clientJsPath: string, innerJsx: React.ReactElement): string {
  return renderToString(
      <Template
        title={title}
        rootNodeId={rootNodeId}
        clientJsPath={clientJsPath}
        >
        {innerJsx}
      </Template>
    );
}
