import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata = {
  title: 'Portfolio Pribadi - Developer & Designer',
  description: 'Portfolio pribadi yang menampilkan proyek-proyek web development, mobile development, dan desain UI/UX.',
  keywords: 'portfolio, web development, mobile development, UI/UX design, React, Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
} 