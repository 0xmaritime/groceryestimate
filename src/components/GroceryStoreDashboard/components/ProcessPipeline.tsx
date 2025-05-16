import React from 'react';
import { useGroceryStore } from '../../../context/GroceryStoreContext';
import DashboardCard from './DashboardCard';
import { approachConfig } from '../../GroceryStoreAnalyzer/data'; // Import approachConfig

const ProcessPipeline: React.FC = () => {
  const { selectedApproach } = useGroceryStore();
  const currentApproachConfig = approachConfig[selectedApproach];

  const phases = [
    { name: 'Phase 1: Rapid Baseline', key: 'Phase 1' },
    { name: 'Phase 2: Operational Intelligence', key: 'Phase 2' },
    { name: 'Phase 3: Refinement & Validation', key: 'Phase 3' },
  ];

  const isPhaseIncluded = (phaseKey: string) => {
    const phasesIncluded = currentApproachConfig.phases;
    if (phasesIncluded === 'All 3 phases') {
      return true;
    } else if (phasesIncluded === 'Phases 1 & 2') {
      return phaseKey === 'Phase 1' || phaseKey === 'Phase 2';
    } else if (phasesIncluded === 'Phase 1 only') {
      return phaseKey === 'Phase 1';
    }
    return false;
  };

  return (
    <DashboardCard title="Estimation Process Pipeline">
      <div className="flex items-center justify-between space-x-4">
        {phases.map((phase, index) => (
          <React.Fragment key={phase.key}>
            <div className={`flex flex-col items-center ${isPhaseIncluded(phase.key) ? 'opacity-100' : 'opacity-30'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${isPhaseIncluded(phase.key) ? 'bg-blue-500' : 'bg-gray-400'}`}>
                {index + 1}
              </div>
              <div className="text-center text-sm mt-2">{phase.name}</div>
            </div>
            {index < phases.length - 1 && (
              <div className={`flex-1 h-1 ${isPhaseIncluded(phases[index + 1].key) ? 'bg-blue-500' : 'bg-gray-400'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </DashboardCard>
  );
};

export default ProcessPipeline;
