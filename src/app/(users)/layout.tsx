import HeaderMain from "@/components/header/header.main";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
            <HeaderMain/>
            {children}
      </body>
    </html>
  );
}
