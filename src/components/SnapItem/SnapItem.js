import React from 'react';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./SnapItem.css";

const SnapItem = ({ title, description, backgroundImg, actions, isFirst = false }) => {
    return (
        <div className="snapItem" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="snapItem__container">
                <div className="snapItem__description">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="snapItem__actions">
                    {React.Children.toArray(actions)}
                </div>
                {isFirst && (
                    <div className="snapItem__expand">
                        <ExpandMoreIcon />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SnapItem;