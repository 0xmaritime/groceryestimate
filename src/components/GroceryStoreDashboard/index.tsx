import React, { useState } from 'react';
import DashboardCard from './components/DashboardCard';
import TaskSection from '../GroceryStoreAnalyzer/sections/TaskSection'; // Import the existing TaskSection
import Introduction from '../GroceryStoreAnalyzer/sections/Introduction'; // Import the existing Introduction
import Framework from '../GroceryStoreAnalyzer/sections/Framework'; // Import the existing Framework
import Phase1 from '../GroceryStoreAnalyzer/sections/Phase1'; // Import the existing Phase1
import Phase2 from '../GroceryStoreAnalyzer/sections/Phase2'; // Import the existing Phase2
import Phase3 from '../GroceryStoreAnalyzer/sections/Phase3'; // Import the existing Phase3
import EstimationMethods from '../GroceryStoreAnalyzer/sections/EstimationMethods'; // Import the existing EstimationMethods
import Visualization from '../GroceryStoreAnalyzer/sections/Visualization'; // Import the existing Visualization
import Conclusion from '../GroceryStoreAnalyzer/sections/Conclusion'; // Import the existing Conclusion
import ApproachSelector from './components/ApproachSelector'; // Import the new ApproachSelector

const GroceryStoreDashboard = () => {
  const [activeTab, setActiveTab] = useState('task'); // Default to the task tab
  const [selectedApproach, setSelectedApproach] = useState('balanced'); // State for selected approach

  const renderContent = () => {
    switch (activeTab) {
      case 'task':
        return (
          <DashboardCard title="Task">
            <TaskSection />
          </DashboardCard>
        );
      case 'introduction':
        return (
          <DashboardCard title="Introduction: My Approach to Estimating Store Profit">
            <Introduction />
          </DashboardCard>
        );
      case 'framework':
        return (
          <DashboardCard title="Analytical Framework: The Three-Phase Intelligence Funnel">
            <Framework />
          </DashboardCard>
        );
      case 'phase1':
        return (
          <DashboardCard title="Phase 1: Rapid Baseline Estimation">
            <Phase1 />
          </DashboardCard>
        );
      case 'phase2':
        return (
          <DashboardCard title="Phase 2: Operational Intelligence">
            <Phase2 />
          </DashboardCard>
        );
      case 'phase3':
        return (
          <DashboardCard title="Phase 3: Refinement and Validation">
            <Phase3 />
          </DashboardCard>
        );
      case 'estimationMethods':
        return (
          <DashboardCard title="Multiple Estimation Methods">
            <EstimationMethods />
          </DashboardCard>
        );
      case 'visualization':
        return (
          <DashboardCard title="Interactive Exploration">
            <Visualization
              selectedApproach={selectedApproach}
              setSelectedApproach={setSelectedApproach}
            />
          </DashboardCard>
        );
      case 'conclusion':
        return (
          <DashboardCard title="Conclusion and Recommendation">
            <Conclusion />
          </DashboardCard>
        );
      default:
        return <DashboardCard title="Welcome">Select a tab from the left.</DashboardCard>;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Grocery Store Profit Dashboard</h1>
        {/* Approach Selector */}
        <ApproachSelector
          selectedApproach={selectedApproach}
          setSelectedApproach={setSelectedApproach}
        />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Tab Navigation */}
        <nav className="w-64 bg-gray-800 text-white p-4">
          <ul>
            {['task', 'introduction', 'framework', 'phase1', 'phase2', 'phase3', 'estimationMethods', 'visualization', 'conclusion'].map(tab => (
              <li key={tab} className="mb-2">
                <button
                  className={`w-full text-left py-2 px-4 rounded ${activeTab === tab ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Display Area */}
        <main className="flex-1 p-4 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default GroceryStoreDashboard;
