import React from 'react';
import AppLinkItem from './AppLinkItem';
import '../css/AppLinkItems.css';

function AppLinkItems({apps}) {
    return (
        <div className="row app-link-items">
            {apps && apps.map((app) => <AppLinkItem app={app} key={app.id}/>)}
        </div>
    )
}

export default AppLinkItems;