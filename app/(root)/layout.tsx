

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className=''>
        {/* Sidebar */}
        Sidebar

        {children}
      </main>
    </html>
  );
}
