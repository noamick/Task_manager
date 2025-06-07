import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TasksProvider } from './contexts/TasksContext.tsx'
import { ThemeProvider } from '@material-tailwind/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TasksProvider>
  </StrictMode>,
)
