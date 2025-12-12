import './globals.css'
import { ProfileProvider } from './contexts/ProfileContext'

export const metadata = {
  title: 'Profile Manager',
  description: 'React Context API Profile Manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProfileProvider>
          {children}
        </ProfileProvider>
      </body>
    </html>
  )
}