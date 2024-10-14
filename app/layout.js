import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/AntRegistry'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Website Title',
  description: 'Your Website Description',
}

export default function RootLayout({ children }) {
  return (
      <ClerkProvider
      appearance={{
        signIn: {
          variables: { colorPrimary: "#F9AA11"}
        },
        signUp: {
          variables: { colorPrimary: "#F9AA11"}
        }
      }}>
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>

        {children}
        </StyledComponentsRegistry>
        </body>
    </html>
    </ClerkProvider>
  )
}
