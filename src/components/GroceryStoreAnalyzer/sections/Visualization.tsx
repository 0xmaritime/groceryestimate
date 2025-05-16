import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { confidenceTimeData, methodsData, profitBreakdownData, approachConfig } from '../data';
import { useGroceryStore } from '../../../context/GroceryStoreContext';

const Visualization: React.FC = () => {
  const { selectedApproach, setSelectedApproach } = useGroceryStore();

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Approach Selection</h3>
        <p className="mb-4">Select an approach based on time investment and accuracy needs:</p>
        
        <div className="flex space-x-4 mb-6">
          {['quick', 'balanced', 'comprehensive'].map(approach => (
            <button
              key={approach}
              className={`px-4 py-2 rounded-lg border ${
                selectedApproach === approach 
                  ? 'bg-blue-100 border-blue-500' 
                  : 'bg-white'
              }`}
              onClick={() => setSelectedApproach(approach)}
            >
              {approach.charAt(0).toUpperCase() + approach.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(approachConfig[selectedApproach]).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
              <p className="text-lg">{value}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Charts remain the same */}
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Confidence vs. Time Investment</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={confidenceTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Confidence (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#3b82f6" 
                activeDot={{ r: 8 }}
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Estimation Method Comparison</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={methodsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="accuracy" name="Accuracy %" fill="#3b82f6" />
              <Bar dataKey="time" name="Time (hours)" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Typical Discount Grocery Profit Breakdown</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={profitBreakdownData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {profitBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
