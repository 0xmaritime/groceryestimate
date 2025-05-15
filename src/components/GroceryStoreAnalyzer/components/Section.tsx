import React, { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionProps {
  title: string;
  icon: ReactNode;
  isExpanded: boolean;
  toggleFunc: (id: string) => void;
  children: ReactNode;
  id: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  icon,
  isExpanded,
  toggleFunc,
  children,
  id
}) => (
  <div className="mb-6 border rounded-lg bg-white shadow">
    <div 
      className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
      onClick={() => toggleFunc(id)}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {isExpanded ? <ChevronUp /> : <ChevronDown />}
    </div>
    {isExpanded && (
      <div className="p-4 border-t">
        {children}
      </div>
    )}
  </div>
);