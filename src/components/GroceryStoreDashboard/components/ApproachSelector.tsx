import React from 'react';

interface ApproachSelectorProps {
  selectedApproach: string;
  setSelectedApproach: (approach: string) => void;
}

const ApproachSelector: React.FC<ApproachSelectorProps> = ({ selectedApproach, setSelectedApproach }) => {
  return (
    <div className="flex space-x-2">
      <button
        className={`px-3 py-1 rounded-lg text-sm border ${selectedApproach === 'quick' ? 'bg-blue-500 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        onClick={() => setSelectedApproach('quick')}
      >
        Quick
      </button>
      <button
        className={`px-3 py-1 rounded-lg text-sm border ${selectedApproach === 'balanced' ? 'bg-orange-500 text-white border-orange-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        onClick={() => setSelectedApproach('balanced')}
      >
        Balanced
      </button>
      <button
        className={`px-3 py-1 rounded-lg text-sm border ${selectedApproach === 'comprehensive' ? 'bg-green-500 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        onClick={() => setSelectedApproach('comprehensive')}
      >
        Comprehensive
      </button>
    </div>
  );
};

export default ApproachSelector;
