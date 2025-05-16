// Data for various charts
export const confidenceTimeData = [
  { name: '2 hours', accuracy: 40, approach: 'quick' },
  { name: '4 hours', accuracy: 65, approach: 'balanced' },
  { name: '6 hours', accuracy: 75, approach: 'balanced' },
  { name: '8 hours', accuracy: 82, approach: 'comprehensive' },
  { name: '10 hours', accuracy: 87, approach: 'comprehensive' },
  { name: '12 hours', accuracy: 90, approach: 'comprehensive' }
];

export const methodsData = [
  { name: 'Catchment Area', accuracy: 60, time: 1.5, phase: 1 },
  { name: 'Checkout Capacity', accuracy: 65, time: 1, phase: 1 },
  { name: 'Direct Observation', accuracy: 75, time: 3, phase: 2 },
  { name: 'Staff Productivity', accuracy: 70, time: 1.5, phase: 2 },
  { name: 'Supply Chain', accuracy: 70, time: 2, phase: 2 },
  { name: 'Triangulation', accuracy: 80, time: 2, phase: 3 }
];

export const profitBreakdownData = [
  { name: 'COGS', value: 82, color: '#e74c3c' },
  { name: 'Labor', value: 8, color: '#3498db' },
  { name: 'Rent & Utilities', value: 4, color: '#f39c12' },
  { name: 'Other Expenses', value: 4, color: '#9b59b6' },
  { name: 'Net Profit', value: 2, color: '#2ecc71' }
];

// Define a type for approachConfig with an index signature
interface ApproachConfig {
  [key: string]: {
    time: string;
    phases: string;
    accuracy: string;
    methods: string;
    description: string;
  };
}

// Config for different approaches
export const approachConfig: ApproachConfig = {
  quick: {
    time: '2-3 hours',
    phases: 'Phase 1 only',
    accuracy: '±40%',
    methods: 'Catchment area, checkout capacity',
    description: 'Fast baseline using public data and limited observation'
  },
  balanced: {
    time: '5-6 hours',
    phases: 'Phases 1 & 2',
    accuracy: '±25%',
    methods: 'All methods with triangulation',
    description: 'Optimal balance of precision and time investment'
  },
  comprehensive: {
    time: '8-10 hours',
    phases: 'All 3 phases',
    accuracy: '±15%',
    methods: 'Complete model with multiple validations',
    description: 'Investment-grade analysis with high confidence'
  }
};
