import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import ReactDOM from 'react-dom/client'
import './assets/global.css'
import { ThemeProvider } from './components/theme-provider'

// Create the router instance
const router = createRouter({ routeTree })

// Register the router type
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
