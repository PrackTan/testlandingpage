import * as React from 'react';

import ThemeRegistry from '@/components/theme-registry/theme.registry';
export const metadata = {
  title: 'Bạch Long Mobile',
  description: 'Bạch Long Mobile',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
            {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
