import React from 'react';
import '../css/AppLinkItem.css';

function AppLinkItem({app}) {
    return (
        <div className="col-md-4 col-12 app-link-item">
            <div className="border border-dark border-1 app-link-item-in">
            <a href={app.url}>
                <h3 className="fs-4">{app.name}</h3>
                <p className="fs-6">{app.description}</p>
            </a>
            </div>
        </div>
    );
}

export default AppLinkItem;