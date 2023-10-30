import React from 'react';
import SidebarMenu from '../components/SidebarMenu';
import HeaderMenu from '../components/HeaderMenu';
import SketchfabViewer from '../components/SketchfabViewer';
import './../components/components.css'
import './../components/sidebarMenu.css'

function ConfiguratorPage() {
    return (
        <div>
            <HeaderMenu />
            <div className='configuratorContainer'>
                <SidebarMenu />
                <SketchfabViewer />
            </div>
        </div>
    );
}

export default ConfiguratorPage;
