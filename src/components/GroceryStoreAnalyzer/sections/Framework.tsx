import React from 'react';
import { Clock, Activity, Maximize } from 'lucide-react';

const Framework: React.FC = () => {
  return (
    <div className="space-y-4">
      <p>My intelligence-gathering methodology is structured as a three-phase funnel that progressively narrows the estimate range while increasing precision. Each phase builds upon the previous one, with explicit decision points to evaluate whether additional time investment is warranted.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="text-blue-500" />
            <h3 className="text-lg font-semibold">Phase 1: Rapid Baseline</h3>
          </div>
          <p className="text-sm">2-3 hours</p>
          <p className="text-sm mt-2">Establishes boundary conditions and initial profit range using public data and limited observation.</p>
          <p className="text-sm mt-2 font-semibold">Expected accuracy: ±40%</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="text-orange-500" />
            <h3 className="text-lg font-semibold">Phase 2: Operational Intelligence</h3>
          </div>
          <p className="text-sm">6-8 hours</p>
          <p className="text-sm mt-2">Refines estimates through targeted in-store observations and supply chain analysis.</p>
          <p className="text-sm mt-2 font-semibold">Expected accuracy: ±25%</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Maximize className="text-green-500" />
            <h3 className="text-lg font-semibold">Phase 3: Refinement & Validation</h3>
          </div>
          <p className="text-sm">6-8 hours</p>
          <p className="text-sm mt-2">Creates comprehensive model with multiple validation points and sensitivity analysis.</p>
          <p className="text-sm mt-2 font-semibold">Expected accuracy: ±15%</p>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold">Decision Logic</h3>
      <p>The progression through phases follows explicit decision criteria:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>After Phase 1: Continue if confidence interval is {'>'}±40% or if specific risk factors are identified</li>
        <li>After Phase 2: Continue if confidence interval is {'>'}±25% or if significant discrepancies exist between estimation methods</li>
        <li>Phase 3 completion results in investment-grade analysis suitable for critical business decisions</li>
      </ul>
      
      <p>This progressive refinement approach recognizes the law of diminishing returns in data collection, allowing for resource optimization based on the required level of precision.</p>
    </div>
  );
};

export default Framework;
