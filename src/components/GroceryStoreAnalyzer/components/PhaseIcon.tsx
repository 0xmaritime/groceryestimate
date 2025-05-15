import React from 'react';
import { Clock, Activity, Maximize } from 'lucide-react';

interface PhaseIconProps {
  phase: number;
}

export const PhaseIcon: React.FC<PhaseIconProps> = ({ phase }) => {
  switch(phase) {
    case 1: return <Clock className="text-blue-500" />;
    case 2: return <Activity className="text-orange-500" />;
    case 3: return <Maximize className="text-green-500" />;
    default: return null;
  }
};