import { Moon, Sun, Monitor } from 'lucide-react'

import { Button } from '@/UI/shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/UI/shadcn/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="w-9 h-9 border-gray-300 dark:border-gray-700 bg-gray-100/80 dark:bg-gray-900 hover:bg-gray-200/80 dark:hover:bg-gray-800 backdrop-blur-sm shadow-sm dark:shadow-none transition-all duration-300"
        >
          <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-700 dark:text-gray-200" />
          <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-700 dark:text-gray-200" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-xl dark:shadow-none backdrop-blur-sm"
      >
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <Sun className="h-4 w-4" />
          Light
          {theme === 'light' && <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <Moon className="h-4 w-4" />
          Dark
          {theme === 'dark' && <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <Monitor className="h-4 w-4" />
          System
          {theme === 'system' && <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
