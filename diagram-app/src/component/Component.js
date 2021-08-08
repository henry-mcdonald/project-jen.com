import React from 'react'
import Auth from './meta/auth/Auth'
import Toolbar from './toolbar/Toolbar'
import Sandbox from './sandbox/Sandbox'

const globalState = {
    payloadMode:'loremIpsum', //options: 'loremIpsum, fromDB, fromFile'
    templateMode: 'sample' //options: 'sample, fromDB, fromFile'
};
  
const globalStateContext = React.createContext(globalState);

const Component = () => {
    return(
        <div>
            Component: Big Poppa App Controlller
            <div><Auth /></div>
            <div><Toolbar /></div>
            <div><Sandbox /></div>
        </div>
    )
}

export default Component;