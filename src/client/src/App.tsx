import { Routes, Route } from 'react-router'
import AppLayout from './layout/AppLayout.tsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<h1>Welcome to My App</h1>} />
        <Route path="about" element={<h1>About Page</h1>} />
      </Route>
    </Routes>
  )
}

export default App
