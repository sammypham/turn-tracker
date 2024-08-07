import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ServicesModalProvider } from './context/ServicesModalProvider';
import { AddServicesModalProvider } from './context/AddServicesModalProvider';
import { SignInModalProvider } from './context/SignInModalProvider';
import { AddTechnicianModalProvider } from './context/AddTechnicianProvider';
import { BusinessesProvider } from './context/BusinessesProvider';
import { TurnManagerProvider } from './context/TurnManagerProvider';
import { UserProvider } from './context/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <TurnManagerProvider>
        <BusinessesProvider>
          <SignInModalProvider>
            <AddTechnicianModalProvider>
              <ServicesModalProvider>
                <AddServicesModalProvider>
                  <App />
                </AddServicesModalProvider>
              </ServicesModalProvider>
            </AddTechnicianModalProvider>
          </SignInModalProvider>
        </BusinessesProvider>
      </TurnManagerProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
