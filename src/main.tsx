import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GroceryStoreProvider } from './context/GroceryStoreContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GroceryStoreProvider>
      <App />
    </GroceryStoreProvider>
  </StrictMode>
);
