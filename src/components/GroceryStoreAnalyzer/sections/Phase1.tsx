import React from 'react';
import { Users, ShoppingCart, DollarSign } from 'lucide-react';

const Phase1: React.FC = () => {
  return (
    <div className="space-y-4">
      <p>Phase 1 establishes the initial boundaries of the estimate through fundamental market analysis and physical constraints, requiring 4-5 hours of work.</p>
      
      <div className="border-l-4 border-blue-500 pl-4 my-4">
        <h3 className="text-lg font-semibold flex items-center"><Users className="mr-2 text-blue-500" /> Step 1: Catchment Area Economic Analysis (1.5 hours)</h3>
        <p className="mt-2">I define the store's economic ecosystem by mapping its potential customer base:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Generate a dual catchment map: 10-minute walking radius and 5-minute driving radius</li>
          <li>Analyze traffic patterns at the intersection to gauge exposure and accessibility</li>
          <li>Extract household count and income distribution data from census reports</li>
          <li>Calculate total potential grocery spending using the formula:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Potential Market = Households × Average Annual Grocery Spend (€5,500-6,500/household)
            </div>
          </li>
          <li>Adjust for local economic conditions and demographics</li>
        </ul>
        <p className="mt-2 italic text-sm">Rationale: This establishes the maximum potential revenue for any grocery store in this location, creating an absolute ceiling for our estimate.</p>
      </div>
      
      <div className="border-l-4 border-purple-500 pl-4 my-4">
        <h3 className="text-lg font-semibold flex items-center"><ShoppingCart className="mr-2 text-purple-500" /> Step 2: Competitive Positioning Assessment (1 hour)</h3>
        <p className="mt-2">Understanding this is a discount-format store similar to Lidl, I analyze its competitive landscape:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Map all competing discount grocers (Aldi, Penny, etc.) within 2km</li>
          <li>Identify mainstream supermarkets that may lose price-sensitive customers</li>
          <li>Assess store visibility and accessibility advantages from busy intersection</li>
          <li>Calculate probable capture rates using the formula:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Capture Rate = Base Rate (15-25% for discount format) × Location Quality Factor (1.0-1.5 for busy intersection)
            </div>
          </li>
          <li>Adjust for competitive density and positioning</li>
        </ul>
        <p className="mt-2 italic text-sm">Rationale: Market fragmentation dictates what percentage of total available spending the store can reasonably capture.</p>
      </div>
      
      <div className="border-l-4 border-cyan-500 pl-4 my-4">
        <h3 className="text-lg font-semibold flex items-center"><ShoppingCart className="mr-2 text-cyan-500" /> Step 3: Checkout Capacity Analysis (1 hour)</h3>
        <p className="mt-2">With one staffed lane and four self-checkout stations, I analyze processing constraints:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Time transaction processing at both staffed lane and self-checkout stations</li>
          <li>Calculate maximum hourly throughput:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Max Hourly Customers = (Cashier Throughput [~25/hour]) + (Self-Checkout Throughput [~15/hour] × Efficiency Factor [0.8] × 4 stations)
            </div>
          </li>
          <li>Observe actual utilization rates during peak periods</li>
          <li>Establish revenue ceiling based on checkout constraints:
            <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-sm">
              Daily Revenue Ceiling = Max Hourly Throughput × Operating Hours × Avg Transaction Value
            </div>
          </li>
        </ul>
        <p className="mt-2 italic text-sm">Rationale: Physical processing constraints create a hard ceiling on potential transactions, regardless of demand.</p>
      </div>
      
      <div className="border-l-4 border-green-500 pl-4 my-4">
        <h3 className="text-lg font-semibold flex items-center"><DollarSign className="mr-2 text-green-500" /> Step 4: Initial Profit Calculation (1 hour)</h3>
        <p className="mt-2">I apply discount grocery metrics to develop a first approximation:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Estimated Monthly Revenue = Market Potential × Capture Rate / 12 months</li>
          <li>Gross Margin = Revenue × 16-20% (lower for discount format)</li>
          <li>Operating Expenses breakdown:
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Labor: 8-10% of revenue (leaner for discount format)</li>
              <li>Occupancy: 3-4% of revenue</li>
              <li>Other operating expenses: 3-5% of revenue</li>
            </ul>
          </li>
          <li>Estimated Monthly Profit = Revenue × 1-2.5% (typical discount grocery margins)</li>
        </ul>
        <p className="mt-2 italic text-sm">Rationale: Industry standard metrics provide reliable guidelines for cost structure and profitability in discount grocery operations.</p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Decision Point 1</h3>
        <p>At this stage, I evaluate whether the confidence interval is acceptable:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>If confidence interval is {'>'}±40%, continue to Phase 2</li>
          <li>If significant discrepancies exist between catchment area estimate and checkout capacity estimate, continue to Phase 2</li>
          <li>Otherwise, finalize the estimate at this stage</li>
        </ul>
        <p className="mt-2">Expected output: Monthly profit range with approximately ±40% confidence interval.</p>
      </div>
    </div>
  );
};

export default Phase1;