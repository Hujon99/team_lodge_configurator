import React from 'react';
import ColorPicker from '../components/ColorPicker';
import MaterialSelector from '../components/MaterialSelector';
import AddOnToggle from '../components/AddOnToggle';
import SketchfabViewer from '../components/SketchfabViewer';

function ConfiguratorPage() {
    return (
        <div>
            <ColorPicker />
            <MaterialSelector />
            <AddOnToggle />
            <SketchfabViewer />
        </div>
    );
}

export default ConfiguratorPage;
