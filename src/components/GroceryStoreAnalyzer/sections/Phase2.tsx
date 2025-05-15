import React from 'react';
import { TrendingUp, Briefcase, Truck } from 'lucide-react';

const Phase2: React.FC = () => {
  return (
    <div className="space-y-4">
      <p>Phase 2 refines the estimate through targeted in-store observations and operational analysis, requiring an additional 6-8 hours of work.</p>
      
      <div className="border-l-4 border-orange-500 pl-4 my-4">
        <h3 className="text-lg font-semibold flex items-center"><TrendingUp className="mr-2 text-orange-500" /> Step 5: Customer Flow and Transaction Analysis (3 hours)</h3>
        <p className="mt-2">Leveraging the single entrance/exit point, I conduct systematic customer observation:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Count actual customer entries for 30-minute periods during six strategic times:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Tuesday morning (slow period)</li>
              <li>Thursday evening (post-work rush)</li>
              <li>Friday evening (pre-weekend stock-up)</li>
              <li>Saturday midday (weekend peak)</li>
              <li>Sunday afternoon (weekend traffic)</li>
              <li>Monday evening (beginning-of-week shopping)</li>
            </ul>
          </li>
          <li>Track checkout lane utilization patterns (staffed vs. self-checkout preference)</li>
          <li>Sample 50+ transaction values across different time periods, noting:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Basket size variations by time of day/week</li>
              <li>Payment method splits (card vs. cash)</li>
              <li>Self-checkout vs. cashier transaction value differences</li>
            </ul>
          </li>
          <li>Calculate weighted average transaction value using time-specific traffic weights</li>
          <li>Develop daily revenue model based on observed patterns</li>
        </ul>
        <p className="mt-2 italic text-sm">Rationale: Direct observation eliminates demographic assumptions and provides actual customer behavior patterns.</p>
      </div>
      
      <div className="border-l-4 border-blue-500 pl-4 my-4">
        <h3 className="text-lg font-semibold flex items-center"><Briefcase className="mr-2 text-blue-500" /> Step 6: Staff Modeling (1.5 hours)</h3>
        <p className="mt-2">For this lean staffing model typical of discount grocers, I document:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Total employee count during each observation period</li>
          <li>Functional splits (floor staff, cashier, management, stockers)</li>
          <li>Shift patterns and scheduling approach</li>
          <li>Calculate labor efficiency metrics:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Sales per Labor Hour = Est. Daily Revenue / Total Staff Hours
            </div>
          </li>
          <li>Estimate monthly labor costs:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Monthly Labor Cost = Staff Hours × Avg Wage (€12-15/hr) × 4.3 weeks
            </div>
          </li>
          <li>Compare observed staffing to industry benchmarks for validation</li>
        </ul>
        <p className="mt-2 italic text-sm">Rationale: Labor requirements correlate strongly with sales volume, providing another independent estimation method.</p>
      </div>
      
      <div className="border-l-4 border-red-500 pl-4 my-4">
        <h3 className="text-lg font-semibold flex items-center"><Truck className="mr-2 text-red-500" /> Step 7: Inventory and Supply Chain Assessment (2 hours)</h3>
        <p className="mt-2">For discount format stores with simplified supply chains, I analyze:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Document delivery frequency (likely 3-4 weekly deliveries)</li>
          <li>Estimate pallet quantities and product mix per delivery</li>
          <li>Note private label percentage (typically 70-90% in discount formats)</li>
          <li>Apply discount grocery inventory metrics:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Inventory Turns = 20-26× annually (higher than traditional supermarkets)
            </div>
          </li>
          <li>Calculate implied COGS:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Implied COGS = Observed Delivery Volume × Frequency × 4.3 weeks
            </div>
          </li>
          <li>Assess SKU count and product mix strategy</li>
        </ul>
        <p className="mt-2 italic text-sm">Rationale: Supply chain volume directly correlates with sales volume and COGS, providing another independent verification method.</p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Decision Point 2</h3>
        <p>At this stage, I triangulate between multiple estimation methods:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Compare revenue estimates from:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Catchment area analysis</li>
              <li>Checkout capacity modeling</li>
              <li>Direct customer observation</li>
              <li>Staff productivity metrics</li>
              <li>Supply chain volume indicators</li>
            </ul>
          </li>
          <li>Apply weighted confidence factors to each method</li>
          <li>If confidence interval has narrowed to ±25%, finalize estimate</li>
          <li>If significant discrepancies remain between methods, proceed to Phase 3</li>
        </ul>
        <p className="mt-2">Expected output: Monthly profit range with approximately ±25% confidence interval.</p>
      </div>
    </div>
  );
};

export default Phase2;