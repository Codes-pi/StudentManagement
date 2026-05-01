import StatCard from '../components/StatCard'

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Student Management Dashboard</h1>
      
      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* We pass specific data to each card using Props */}
        <StatCard 
          title="TOTAL" 
          value="120" 
          subtitle="Enrolled Students" 
          borderColor="purple" 
          textColor="gray" 
        />
        
        <StatCard 
          title="PRESENT" 
          value="98" 
          subtitle="Today's Count" 
          borderColor="green" 
          textColor="green" 
        />
        
        <StatCard 
          title="ABSENT" 
          value="22" 
          subtitle="- 12% from yesterday" 
          borderColor="red" 
          textColor="red" 
        />
        
        <StatCard 
          title="AVG RATE" 
          value="81.6%" 
          subtitle="Monthly Average" 
          borderColor="purple" 
          textColor="purple" 
        />
        
      </div>
    </div>
  )
}