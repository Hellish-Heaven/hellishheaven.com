import React, { ReactNode } from 'react';

export default function Base(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hellish Heaven</title>
        <link rel="stylesheet" href="/assets/app.css" />
      </head>
      <body>{props.children}</body>
    </html>
  )
}
