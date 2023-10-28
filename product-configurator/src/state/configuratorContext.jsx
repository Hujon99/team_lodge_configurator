import React, { createContext, useContext, useState } from 'react';

const ConfiguratorContext = createContext();

export function ConfiguratorProvider({ children }) {
    const [config, setConfig] = useState({}); // Initial state

    return (
        <ConfiguratorContext.Provider value={{ config, setConfig }}>
            {children}
        </ConfiguratorContext.Provider>
    );
}

export function useConfigurator() {
    return useContext(ConfiguratorContext);
}
