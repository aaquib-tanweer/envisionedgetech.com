import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import ReactDOM from 'react-dom/client'
import './assets/global.css'
import { ThemeProvider } from './components/theme-provider'

// Register your router before using it
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
)
