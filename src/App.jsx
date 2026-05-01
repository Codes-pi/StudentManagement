import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'

function App() {
  return (
    <div className="flex bg-slate-900 min-h-screen font-sans">
      
      {/* The Sidebar stays on the left */}
      <Sidebar />
      
      {/* The Dashboard takes up the remaining space */}
      <div className="flex-1">
        <Dashboard />
      </div>

    </div>
  )
}

export default App