import React from 'react';
import { Users, ShoppingCart, TrendingUp, Briefcase, Truck, BarChart2 } from 'lucide-react';

interface MethodIconProps {
  name: string;
}

export const MethodIcon: React.FC<MethodIconProps> = ({ name }) => {
  switch(name) {
    case 'Catchment Area': return <Users className="text-blue-500" />;
    case 'Checkout Capacity': return <ShoppingCart className="text-purple-500" />;
    case 'Direct Observation': return <TrendingUp className="text-orange-500" />;
    case 'Staff Productivity': return <Briefcase className="text-cyan-500" />;
    case 'Supply Chain': return <Truck className="text-red-500" />;
    case 'Triangulation': return <BarChart2 className="text-green-500" />;
    default: return null;
  }
};