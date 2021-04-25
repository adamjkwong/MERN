import React, { useState } from 'react';

const TabTop = props => {
    const { allTheTabs, currentTabIndex, setCurrentTabIndex } = props;
    const tabStyle = (index) => {
        if (index === currentTabIndex) {
            return "selectedTab";
        } else { 
            return "nonSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }

    return (
        <div>
        { }
            {
            allTheTabs.map((item, index) => (
                <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index) }>
                { item.label }
                </div>
            ))
        }
        </div>
    )
}
    
export default TabTop;