import React from 'react';
import ColorPicker from '../components/ColorPicker';
import MaterialSelector from '../components/MaterialSelector';
import AddOnToggle from '../components/AddOnToggle';
import MenuOverlay from '../components/MenuOverlay';
import HeaderMenu from '../components/HeaderMenu';
import SketchfabViewer from '../components/SketchfabViewer';
import './../components/components.css'

function ConfiguratorPage() {
    return (
        <div>
            <HeaderMenu />
            <div className='configuratorContainer'>
                <MenuOverlay />
                <SketchfabViewer />
            </div>
        </div>
    );
}

export default ConfiguratorPage;
