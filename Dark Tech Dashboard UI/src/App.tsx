import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { EnergyStatCards } from './components/EnergyStatCards';
import { WorldMap } from './components/WorldMap';
import { CountryConsumption } from './components/CountryConsumption';
import { EnergySourceMix } from './components/EnergySourceMix';
import { EnergyAnomalies } from './components/EnergyAnomalies';

export default function App() {
  return (
    <div className="flex h-screen bg-[#0a0e1a] text-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar />
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-[1440px] mx-auto space-y-6">
            {/* Energy Statistics Cards */}
            <EnergyStatCards />
            
            {/* World Map */}
            <WorldMap />
            
            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CountryConsumption />
              </div>
              <div>
                <EnergySourceMix />
              </div>
            </div>
            
            {/* Energy Anomalies */}
            <EnergyAnomalies />
          </div>
        </main>
      </div>
    </div>
  );
}
