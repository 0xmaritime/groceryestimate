import React from 'react';

const TaskSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Task</h2>
      <p>Imagine the grocery store closest to your home.</p>
      <p>Now imagine you’ve been asked to figure out how much money this store makes in a month — as accurately as possible.</p>
      <p>The store staff and owner won’t chat with you at all.</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Your task:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Write out how you’d approach this — step by step.</li>
        <li>Tell us how much time you’d need to get to a good, realistic estimate.</li>
      </ul>
    </div>
  );
};

export default TaskSection;
