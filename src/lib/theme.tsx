import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { ThemeId } from '../data/types'

const ThemeContext = createContext<{ theme: ThemeId; setTheme: (t: ThemeId) => void }>({
  theme: 'neutral',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>('neutral')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="min-h-screen bg-canvas">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

/** À appeler dans une page pour appliquer son thème (neutre par défaut). */
export function usePageTheme(theme: ThemeId = 'neutral') {
  const { setTheme } = useContext(ThemeContext)
  useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])
}
