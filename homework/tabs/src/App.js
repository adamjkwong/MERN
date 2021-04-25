import './App.css';
import React, { useState } from 'react';
import TabTop from './components/TabTop';
import TabDisplay from './components/TabDisplay';
    
function App() {
    const ArrayofTabs = [
        {label: "Tab 1", content: "Tab 1 content is here"},
        {label: "Tab 2", content: "Tab 2 content is here"},
        {label: "Tab 3", content: "Tab 3 content is here"},
        {label: "Tab 4", content: "Tab 4 content is here"},
        {label: "Tab 5", content: "Tab 5 content is here"},
    ]

    const [allTheTabs, setAllTheTabs] = useState(ArrayofTabs);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    return (
        <div className="App">
                <TabTop allTheTabs = { allTheTabs }
                currentTabIndex = { currentTabIndex }
                setCurrentTabIndex = { setCurrentTabIndex }
                />
                <TabDisplay allTheTabs = { allTheTabs } currentTabIndex = { currentTabIndex }/>
        </div>
    );
}

export default App;
