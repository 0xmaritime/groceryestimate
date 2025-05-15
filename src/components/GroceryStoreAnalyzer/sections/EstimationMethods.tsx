import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { methodsData } from '../data';
import { PhaseIcon } from '../components/PhaseIcon';
import { MethodIcon } from '../components/MethodIcon';

const EstimationMethods: React.FC = () => {
  return (
    <div className="space-y-4">
      <p>A powerful aspect of my approach is using multiple independent estimation methods to triangulate results, increasing confidence through methodological diversity.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {methodsData.map((method, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white">
            <div className="flex items-center space-x-2 mb-3">
              <MethodIcon name={method.name} />
              <h3 className="text-lg font-semibold">{method.name}</h3>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <PhaseIcon phase={method.phase} />
              <span>Phase {method.phase}</span>
              <span className="text-gray-500">•</span>
              <Clock className="h-4 w-4 text-gray-500" />
              <span>{method.time}h</span>
              <span className="text-gray-500">•</span>
              <TrendingUp className="h-4 w-4 text-gray-500" />
              <span>±{100-method.accuracy}% margin</span>
            </div>
            
            {method.name === 'Catchment Area' && (
              <div className="mt-3">
                <p className="text-sm">Establishes theoretical market ceiling based on:</p>
                <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-xs">
                  Revenue = (Households × Annual Spend × Capture Rate) / 12
                </div>
                <p className="text-xs mt-2 text-gray-600">Uses census data and competitive positioning to estimate market share</p>
              </div>
            )}
            
            {method.name === 'Checkout Capacity' && (
              <div className="mt-3">
                <p className="text-sm">Calculates operational throughput ceiling:</p>
                <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-xs">
                  Revenue = Max Hourly Customers × Hours × Avg Transaction × 30
                </div>
                <p className="text-xs mt-2 text-gray-600">Accounts for 1 cashier + 4 self-checkout lanes with efficiency factors</p>
              </div>
            )}
            
            {method.name === 'Direct Observation' && (
              <div className="mt-3">
                <p className="text-sm">Measures actual customer behavior:</p>
                <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-xs">
                  Revenue = Σ(Period Customer Count × Period Avg Transaction) × Days
                </div>
                <p className="text-xs mt-2 text-gray-600">Based on 6 strategic observation periods covering different days/times</p>
              </div>
            )}
            
            {method.name === 'Staff Productivity' && (
              <div className="mt-3">
                <p className="text-sm">Uses labor as efficiency proxy:</p>
                <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-xs">
                  Revenue = Staff Hours × Revenue per Labor Hour × 4.3 weeks
                </div>
                <p className="text-xs mt-2 text-gray-600">Based on observed staffing levels and industry productivity benchmarks</p>
              </div>
            )}
            
            {method.name === 'Supply Chain' && (
              <div className="mt-3">
                <p className="text-sm">Reverse-engineers from delivery volume:</p>
                <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-xs">
                  Revenue = Delivery Value × Markup Factor × 4.3 weeks
                </div>
                <p className="text-xs mt-2 text-gray-600">Accounts for inventory turnover rates typical in discount grocery (20-26× annually)</p>
              </div>
            )}
            
            {method.name === 'Triangulation' && (
              <div className="mt-3">
                <p className="text-sm">Weighted combination of all methods:</p>
                <div className="bg-gray-100 p-2 mt-1 rounded font-mono text-xs">
                  Final Est = Σ(Method Est × Confidence Weight) / Σ(Weights)
                </div>
                <p className="text-xs mt-2 text-gray-600">Assigns confidence factors based on data quality for each method</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <h3 className="text-lg font-semibold mt-6">From Revenue to Profit</h3>
      <p>Once monthly revenue is established through multiple methods, I convert to profit using:</p>
      
      <div className="bg-white border rounded-lg p-4 my-4">
        <h4 className="font-semibold">Standard Discount Grocery P&L Structure</h4>
        <table className="w-full mt-2">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-semibold">Revenue</td>
              <td className="py-2 text-right">100%</td>
            </tr>
            <tr className="border-b bg-red-50">
              <td className="py-2 pl-4">Cost of Goods Sold (COGS)</td>
              <td className="py-2 text-right">80-84%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-semibold">Gross Profit</td>
              <td className="py-2 text-right">16-20%</td>
            </tr>
            <tr className="border-b bg-blue-50">
              <td className="py-2 pl-4">Labor Costs</td>
              <td className="py-2 text-right">8-10%</td>
            </tr>
            <tr className="border-b bg-yellow-50">
              <td className="py-2 pl-4">Occupancy Costs (Rent, Utilities)</td>
              <td className="py-2 text-right">3-4%</td>
            </tr>
            <tr className="border-b bg-purple-50">
              <td className="py-2 pl-4">Other Operating Expenses</td>
              <td className="py-2 text-right">3-5%</td>
            </tr>
            <tr className="bg-green-50">
              <td className="py-2 font-semibold">Net Profit</td>
              <td className="py-2 text-right">1-2.5%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs mt-2 text-gray-600">Figures based on discount grocery industry benchmarks and published financial data</p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Method Triangulation Strategy</h3>
        <p>The power of multiple methods lies in their different blind spots and biases:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Catchment area analysis may overestimate if not accounting for all competitors</li>
          <li>Checkout capacity may underestimate if peak utilization is rare</li>
          <li>Direct observation is accurate but limited to sampled periods</li>
          <li>Staff productivity depends on accurate labor efficiency benchmarks</li>
          <li>Supply chain analysis requires accurate delivery content estimation</li>
        </ul>
        <p className="mt-2">By weighting and combining these approaches, systematic errors are minimized, leading to a more reliable final estimate.</p>
      </div>
    </div>
  );
};

export default EstimationMethods;