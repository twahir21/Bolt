// This file is only used by the web ... is root for the web
import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* 1. Add custom CSS or Fonts here */}
        <ScrollViewStyleReset />

        {/* 2. Add SEO tags here */}
        <meta name="description" content="My awesome Uber Clone app" />
      </head>
      <body>
        {/* The 'children' is where your app's routes are injected */}
        {children}
      </body>
    </html>
  );
}