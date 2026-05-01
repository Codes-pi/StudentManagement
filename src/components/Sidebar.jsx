export default function Sidebar() {
  return (
    <div className="w-64 bg-[#16213e] min-h-screen p-6 border-r border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
        Admin Portal
      </h2>
      <ul className="space-y-4 text-gray-400 font-medium">
        <li className="hover:text-purple-400 hover:bg-gray-800 p-2 rounded-lg cursor-pointer transition-colors">
          Dashboard
        </li>
        <li className="hover:text-purple-400 hover:bg-gray-800 p-2 rounded-lg cursor-pointer transition-colors">
          Attendance
        </li>
        <li className="hover:text-purple-400 hover:bg-gray-800 p-2 rounded-lg cursor-pointer transition-colors">
          Settings
        </li>
      </ul>
    </div>
  )
}