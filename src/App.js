import React from 'react';
import ConfiguratorPage from './pages/ConfiguratorPage';
import { ConfiguratorProvider } from './state/configuratorContext';

function App() {
    return (
        <ConfiguratorProvider>
            <ConfiguratorPage />
        </ConfiguratorProvider>
    );
}

export default App;
