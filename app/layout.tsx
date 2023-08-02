import './globals.css'
import Navbar from './components/navbar';
export const metadata = {

    title: 'Create Next App',
    description: 'Generated by create next app',
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <Navbar />
          <main className="min-h-screen bg-background flex flex-col items-center pt-10">
            {children}
          </main>
        </body>
      </html>
    )
  }
