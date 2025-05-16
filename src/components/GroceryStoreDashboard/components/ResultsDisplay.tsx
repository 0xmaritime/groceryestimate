import React from 'react';
import { useGroceryStore } from '../../../context/GroceryStoreContext';
import DashboardCard from './DashboardCard';

const ResultsDisplay: React.FC = () => {
  const { estimatedProfit, confidenceInterval, selectedApproach } = useGroceryStore();

  return (
    <DashboardCard title="Estimation Results">
      <div className="space-y-4">
        <p>Based on the <strong>{selectedApproach}</strong> approach:</p>
        {estimatedProfit !== null ? (
          <div className="text-2xl font-bold text-green-700">
            Estimated Monthly Profit: €{estimatedProfit.toLocaleString()}
          </div>
        ) : (
          <div className="text-xl text-gray-600">
            Calculating estimated profit...
          </div>
        )}
        {confidenceInterval !== null && (
          <div className="text-lg text-gray-800">
            Confidence Interval: {confidenceInterval}
          </div>
        )}
        <p className="text-sm text-gray-600">
          Note: These are preliminary estimates based on the selected approach and placeholder calculations.
          Actual calculations will be integrated based on the detailed methodology.
        </p>
      </div>
    </DashboardCard>
  );
};

export default ResultsDisplay;
