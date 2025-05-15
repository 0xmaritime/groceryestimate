import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { confidenceTimeData, methodsData, profitBreakdownData, approachConfig } from '../data';

interface VisualizationProps {
  selectedApproach: string;
  setSelectedApproach: (approach: string) => void;
}

const Visualization: React.FC<VisualizationProps> = ({ selectedApproach, setSelectedApproach }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Approach Selection</h3>
        <p className="mb-4">Select an approach based on time investment and accuracy needs:</p>
        
        <div className="flex space-x-4 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg border ${selectedApproach === 'quick' ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
            onClick={() => setSelectedApproach('quick')}
          >
            Quick
          </button>
          <button 
            className={`px-4 py-2 rounded-lg border ${selectedApproach === 'balanced' ? 'bg-orange-100 border-orange-500' : 'bg-white'}`}
            onClick={() => setSelectedApproach('balanced')}
          >
            Balanced
          </button>
          <button 
            className={`px-4 py-2 rounded-lg border ${selectedApproach === 'comprehensive' ? 'bg-green-100 border-green-500' : 'bg-white'}`}
            onClick={() => setSelectedApproach('comprehensive')}
          >
            Comprehensive
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-semibold">Time Investment</p>
            <p className="text-lg">{approachConfig[selectedApproach].time}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-semibold">Phases Used</p>
            <p className="text-lg">{approachConfig[selectedApproach].phases}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-semibold">Accuracy</p>
            <p className="text-lg">{approachConfig[selectedApproach].accuracy}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm font-semibold">Methods</p>
            <p className="text-lg">{approachConfig[selectedApproach].methods}</p>
          </div>
        </div>
        
        <p className="mt-4 text-sm">{approachConfig[selectedApproach].description}</p>
      </div>
      
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
        <p className="text-sm mt-2 text-center">The law of diminishing returns: confidence increases rapidly in early phases but plateaus with additional time investment</p>
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
        <p className="text-sm mt-2 text-center">Different methods offer varying trade-offs between time investment and accuracy</p>
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
        <p className="text-sm mt-2 text-center">Discount grocery stores operate on thin margins with COGS as the dominant expense</p>
      </div>
    </div>
  );
};

export default Visualization;