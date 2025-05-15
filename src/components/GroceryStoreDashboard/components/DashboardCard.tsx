import React, { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;
