export default function StatCard({ title, value, subtitle, borderColor, textColor }) {
  return (
    <div className={`bg-[#16213e] p-5 rounded-2xl border border-gray-700 shadow-xl group hover:border-${borderColor}-500 transition-all duration-300`}>
        <div className="flex justify-between items-start mb-4">
            <span className={`text-xs font-medium text-${textColor}-400 tracking-wider`}>{title}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  )
}