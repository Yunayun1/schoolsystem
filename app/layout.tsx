// app/layout.tsx
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* You can add meta tags, title, and other head elements here */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <main>
                    {children} {/* This will render your page content, like from page.tsx */}
                </main>
            </body>
        </html>
    );
}
