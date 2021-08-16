import React from 'react'
import Auth from './meta/auth/Auth'
import Sandbox from './sandbox/Sandbox'
import TestContext from './context/TestContext'

// const GlobalContext = {
//     payloadMode:'loremIpsum', //options: 'loremIpsum, fromDB, fromFile'
//     templateMode: 'simple' //options: 'sample, fromDB, fromFile'
// };

const contextMapper = {
    'test':{
        'getCards': 'fromLocal',
        'template': 'simple'
    }
}


const Component = ({contextName}) => {

    const getExistingCardsContext = contextMapper[contextName].getCards
    const templateContext = contextMapper[contextName].template


    return (
        <div>
            <div><Auth /></div>
            <div>
                <Sandbox 
                getExistingCardsContext={getExistingCardsContext}
                />
            </div>
        </div>
    )
}

export default Component;