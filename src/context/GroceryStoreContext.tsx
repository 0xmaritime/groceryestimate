import React, { createContext, useState, useContext, ReactNode } from 'react';
import { approachConfig, profitBreakdownData, methodsData } from '../components/GroceryStoreAnalyzer/data';

interface GroceryStoreContextType {
  selectedApproach: string;
  setSelectedApproach: (approach: string) => void;
  estimatedProfit: number | null;
  confidenceInterval: string | null;
  selectedMethodsForComparison: string[];
  setSelectedMethodsForComparison: React.Dispatch<React.SetStateAction<string[]>>;
  methodEstimates: { name: string; revenue: number }[];
}

const GroceryStoreContext = createContext<GroceryStoreContextType | undefined>(undefined);

export const GroceryStoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedApproach, setSelectedApproach] = useState('balanced');
  const [estimatedProfit, setEstimatedProfit] = useState<number | null>(null);
  const [confidenceInterval, setConfidenceInterval] = useState<string | null>(null);
  const [selectedMethodsForComparison, setSelectedMethodsForComparison] = useState<string[]>([]);
  const [methodEstimates, setMethodEstimates] = useState<{ name: string; revenue: number }[]>([]);

  const defaultInputs = {
    households: 10000,
    avgAnnualGrocerySpend: 6000,
    baseCaptureRate: 0.2,
    locationQualityFactor: 1.2,
    cashierThroughput: 25,
    selfCheckoutThroughput: 15,
    selfCheckoutEfficiency: 0.8,
    operatingHours: 14,
    avgTransactionValue: 25,
    avgWage: 13.5,
    weeklyDeliveries: 3.5,
    avgDeliveryValue: 15000,
    inventoryTurns: 23,
  };

  const calculateCatchmentAreaRevenue = (inputs: typeof defaultInputs) => {
    const potentialMarket = inputs.households * inputs.avgAnnualGrocerySpend;
    const captureRate = inputs.baseCaptureRate * inputs.locationQualityFactor;
    return (potentialMarket * captureRate) / 12;
  };

  const calculateCheckoutCapacityRevenue = (inputs: typeof defaultInputs) => {
    const maxHourlyCustomers = inputs.cashierThroughput + (inputs.selfCheckoutThroughput * inputs.selfCheckoutEfficiency * 4);
    const dailyRevenueCeiling = maxHourlyCustomers * inputs.operatingHours * inputs.avgTransactionValue;
    return dailyRevenueCeiling * (30 / 1);
  };

  const calculateDirectObservationRevenue = (inputs: typeof defaultInputs) => {
    return calculateCatchmentAreaRevenue(inputs) * 0.9;
  };

  const calculateStaffProductivityRevenue = (inputs: typeof defaultInputs) => {
    return calculateCatchmentAreaRevenue(inputs) * 0.95;
  };

  const calculateSupplyChainRevenue = (inputs: typeof defaultInputs) => {
    return calculateCatchmentAreaRevenue(inputs) * 1.05;
  };

  const calculateProfit = (revenue: number) => {
    const cogsPercentage = profitBreakdownData.find(item => item.name === 'COGS')?.value || 0;
    const laborPercentage = profitBreakdownData.find(item => item.name === 'Labor')?.value || 0;
    const occupancyPercentage = profitBreakdownData.find(item => item.name === 'Rent & Utilities')?.value || 0;
    const otherExpensesPercentage = profitBreakdownData.find(item => item.name === 'Other Expenses')?.value || 0;

    const totalExpensesPercentage = cogsPercentage + laborPercentage + occupancyPercentage + otherExpensesPercentage;
    const netProfitPercentage = 100 - totalExpensesPercentage;

    return revenue * (netProfitPercentage / 100);
  };

  const calculateEstimation = (approach: string) => {
    const inputs = defaultInputs;
    const revenueEstimates: { name: string; revenue: number }[] = [];
    let confidence: string = '';

    methodsData.forEach(method => {
      let revenue = 0;
      switch (method.name) {
        case 'Catchment Area':
          revenue = calculateCatchmentAreaRevenue(inputs);
          break;
        case 'Checkout Capacity':
          revenue = calculateCheckoutCapacityRevenue(inputs);
          break;
        case 'Direct Observation':
          revenue = calculateDirectObservationRevenue(inputs);
          break;
        case 'Staff Productivity':
          revenue = calculateStaffProductivityRevenue(inputs);
          break;
        case 'Supply Chain':
          revenue = calculateSupplyChainRevenue(inputs);
          break;
      }
      if (revenue > 0) {
        revenueEstimates.push({ name: method.name, revenue });
      }
    });

    setMethodEstimates(revenueEstimates);

    let finalRevenueEstimate = 0;
    switch (approach) {
      case 'quick': {
        const quickMethods = revenueEstimates.filter(est => 
          est.name === 'Catchment Area' || est.name === 'Checkout Capacity');
        finalRevenueEstimate = quickMethods.reduce((sum, est) => sum + est.revenue, 0) / quickMethods.length;
        confidence = approachConfig.quick.accuracy;
        break;
      }
      case 'balanced': {
        const balancedMethods = revenueEstimates.filter(est => est.name !== 'Triangulation');
        finalRevenueEstimate = balancedMethods.reduce((sum, est) => sum + est.revenue, 0) / balancedMethods.length;
        confidence = approachConfig.balanced.accuracy;
        break;
      }
      case 'comprehensive': {
        const comprehensiveMethods = revenueEstimates.filter(est => est.name !== 'Triangulation');
        finalRevenueEstimate = comprehensiveMethods.reduce((sum, est) => sum + est.revenue, 0) / comprehensiveMethods.length;
        confidence = approachConfig.comprehensive.accuracy;
        break;
      }
      default:
        setEstimatedProfit(null);
        setConfidenceInterval(null);
        return;
    }

    const estimatedProfit = calculateProfit(finalRevenueEstimate);
    setEstimatedProfit(estimatedProfit);
    setConfidenceInterval(confidence);
  };

  React.useEffect(() => {
    calculateEstimation(selectedApproach);
  }, [selectedApproach]);

  return (
    <GroceryStoreContext.Provider value={{
      selectedApproach,
      setSelectedApproach,
      estimatedProfit,
      confidenceInterval,
      selectedMethodsForComparison,
      setSelectedMethodsForComparison,
      methodEstimates
    }}>
      {children}
    </GroceryStoreContext.Provider>
  );
};

export const useGroceryStore = () => {
  const context = useContext(GroceryStoreContext);
  if (context === undefined) {
    throw new Error('useGroceryStore must be used within a GroceryStoreProvider');
  }
  return context;
};
