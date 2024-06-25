import React from 'react';
import AppLinkItem from './AppLinkItem';
import '../css/AppLinkItems.css';

function AppLinkItems({props}) {
    console.log(props.apps);
    return (
        <div className="row app-link-items">
            {props.apps.map((app) => <AppLinkItem app={app}/>)}
        </div>
    )
}

export default AppLinkItems;