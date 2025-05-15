import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="space-y-4">
      <p>I've spent approximately 70 minutes developing this intelligence-gathering approach to estimate the monthly profit of a midsize European grocery store (comparable to Lidl) with one entrance/exit, one staffed cashier, and four self-checkout panels, located at a busy intersection with both pedestrian and vehicle accessibility.</p>
      
      <h3 className="text-lg font-semibold">Key Assumptions</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Store operates as a discount format (similar to Lidl/Aldi)</li>
        <li>Limited checkout capacity creates a predictable transaction ceiling</li>
        <li>Single entrance provides reliable traffic monitoring opportunity</li>
        <li>Busy intersection location suggests strong visibility and accessibility</li>
        <li>Average household annual grocery spending is known from public census data and studies, and easy to obtain from public sources</li>
        <li>average net profit margins for similar stores is known or easy to estimate from public sources</li>
        <li>Private label percentage likely 70-90% (typical for discount format)</li>
        <li>No direct communication with store staff or management is possible</li>
      </ul>
      
      <h3 className="text-lg font-semibold">My Analytical Framework</h3>
      <p>My approach is structured around the intelligence funnel concept: starting with broad demographic and physical constraints to establish boundaries, then progressively narrowing the estimate range through targeted observations. The methodology includes:</p>
      
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Multiple independent estimation methods</strong> to triangulate results</li>
        <li><strong>Clear decision points</strong> to assess whether additional precision is worth time investment</li>
        <li><strong>Phase-based structure</strong> allowing for scalable time commitment based on accuracy needs</li>
        <li><strong>Emphasis on observable data points</strong> rather than speculation</li>
        <li><strong>Leverage of industry benchmarks</strong> for validation</li>
      </ul>
      
      <p>This framework balances academic rigor with practical business thinking, leveraging both quantitative methods and qualitative assessment to arrive at a defensible profit estimate without requiring internal company data.</p>
    </div>
  );
};

export default Introduction;
