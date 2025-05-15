import React from 'react';

const Conclusion: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold">Recommended Approach</h3>
        <p className="mt-2">For this midsize discount grocery store, I recommend a <strong>10-12 hour investment</strong> (Phases 1 and 2), which should yield an estimate with approximately <strong>±25% confidence</strong>.</p>
        
        <p className="mt-2">This balanced approach offers the optimal trade-off between precision and efficiency because:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The single entrance/exit provides a perfect chokepoint for customer counting</li>
          <li>Limited checkout capacity creates a clear operational ceiling</li>
          <li>Discount grocery stores follow more standardized operational models</li>
          <li>Published benchmarks for chains like Lidl provide reliable comparison points</li>
        </ul>
        
        <p className="mt-4">Proceeding to Phase 3 would yield only marginal improvements in accuracy (±15%) at the cost of doubling the time investment, making it difficult to justify unless investment-grade precision is required.</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold">Key Efficiency Drivers</h3>
        <p className="mt-2">The formula-driven approach of discount grocers makes their financial performance more predictable than full-service supermarkets:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border p-3 rounded-lg">
            <h4 className="font-semibold">Limited SKU Philosophy</h4>
            <p className="text-sm mt-1">Discount grocers typically stock 1,500-2,500 SKUs vs. 30,000+ in full-service stores, creating more predictable inventory and margin patterns.</p>
          </div>
          
          <div className="border p-3 rounded-lg">
            <h4 className="font-semibold">Private Label Dominance</h4>
            <p className="text-sm mt-1">With 70-90% private label products, discount grocers have more stable and predictable margins than stores relying on branded products.</p>
          </div>
          
          <div className="border p-3 rounded-lg">
            <h4 className="font-semibold">Operational Standardization</h4>
            <p className="text-sm mt-1">Discount formats emphasize operational efficiency with standardized processes, making performance metrics more consistent.</p>
          </div>
          
          <div className="border p-3 rounded-lg">
            <h4 className="font-semibold">High Inventory Turnover</h4>
            <p className="text-sm mt-1">Typical inventory turns of 20-26× annually (vs. 12-15× for traditional supermarkets) create predictable supply chain patterns.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold">Final Thoughts</h3>
        <p className="mt-2">This three-phase intelligence-gathering methodology demonstrates:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The ability to develop reasonable estimates with limited information</li>
          <li>Strategic use of multiple independent methods to increase confidence</li>
          <li>Understanding of when additional precision isn't worth the investment</li>
          <li>Practical application of retail business principles and metrics</li>
          <li>Structured approach to a complex problem with inherent uncertainty</li>
        </ul>
        <p className="mt-4">The approach balances analytical rigor with practical business thinking, leveraging both quantitative methods and qualitative assessment to arrive at a defensible profit estimate.</p>
      </div>
    </div>
  );
};

export default Conclusion;