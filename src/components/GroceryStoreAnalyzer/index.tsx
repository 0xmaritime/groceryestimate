import React, { useState } from 'react';
import { CircleDollarSign, Activity, Clock, ClipboardList } from 'lucide-react';
import Introduction from './sections/Introduction';
import Framework from './sections/Framework';
import Phase1 from './sections/Phase1';
import Phase2 from './sections/Phase2';
import Phase3 from './sections/Phase3';
import EstimationMethods from './sections/EstimationMethods';
import Visualization from './sections/Visualization';
import Conclusion from './sections/Conclusion';
import TaskSection from './sections/TaskSection';
import { Section } from './components/Section';

type ExpandedSections = {
  [key: string]: boolean;
  task: boolean;
  introduction: boolean;
  framework: boolean;
  phase1: boolean;
  phase2: boolean;
  phase3: boolean;
  estimationMethods: boolean;
  visualization: boolean;
  conclusion: boolean;
};

const GroceryStoreAnalyzer = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    task: true,
    introduction: true,
    framework: false,
    phase1: false,
    phase2: false,
    phase3: false,
    estimationMethods: false,
    visualization: true,
    conclusion: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Grocery Store Profit Estimation Framework</h1>
      
      <Section
        title="Task"
        icon={<ClipboardList className="text-blue-500" />}
        isExpanded={expandedSections.task}
        toggleFunc={toggleSection}
        id="task"
      >
        <TaskSection />
      </Section>

      <Section 
        title="Introduction: My Approach to Estimating Store Profit" 
        icon={<CircleDollarSign className="text-blue-500" />}
        isExpanded={expandedSections.introduction}
        toggleFunc={toggleSection}
        id="introduction"
      >
        <Introduction />
      </Section>
      
      <Section 
        title="Analytical Framework: The Three-Phase Intelligence Funnel" 
        icon={<Activity className="text-purple-500" />}
        isExpanded={expandedSections.framework}
        toggleFunc={toggleSection}
        id="framework"
      >
        <Framework />
      </Section>
      
      <Section 
        title="Phase 1: Rapid Baseline Estimation" 
        icon={<Clock className="text-blue-500" />}
        isExpanded={expandedSections.phase1}
        toggleFunc={toggleSection}
        id="phase1"
      >
        <Phase1 />
      </Section>
      
      <Section 
        title="Phase 2: Operational Intelligence" 
        icon={<Activity className="text-orange-500" />}
        isExpanded={expandedSections.phase2}
        toggleFunc={toggleSection}
        id="phase2"
      >
        <Phase2 />
      </Section>
      
      <Section 
        title="Phase 3: Refinement and Validation" 
        icon={<Clock className="text-green-500" />}
        isExpanded={expandedSections.phase3}
        toggleFunc={toggleSection}
        id="phase3"
      >
        <Phase3 />
      </Section>
      
      <Section 
        title="Multiple Estimation Methods" 
        icon={<Activity className="text-purple-500" />}
        isExpanded={expandedSections.estimationMethods}
        toggleFunc={toggleSection}
        id="estimationMethods"
      >
        <EstimationMethods />
      </Section>
      
      <Section 
        title="Interactive Exploration" 
        icon={<Activity className="text-green-500" />}
        isExpanded={expandedSections.visualization}
        toggleFunc={toggleSection}
        id="visualization"
      >
        <Visualization />
      </Section>
      
      <Section 
        title="Conclusion and Recommendation" 
        icon={<CircleDollarSign className="text-green-500" />}
        isExpanded={expandedSections.conclusion}
        toggleFunc={toggleSection}
        id="conclusion"
      >
        <Conclusion />
      </Section>
    </div>
  );
};

export default GroceryStoreAnalyzer;
