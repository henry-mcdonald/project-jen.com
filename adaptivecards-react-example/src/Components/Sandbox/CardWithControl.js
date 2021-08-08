import React, { useEffect , useState} from 'react';
import * as AdaptiveCardsAPI from 'adaptivecards';
import * as ACData from 'adaptivecards-templating';
// import hmacpoppa from '../samplepayloads/hmacpoppa'
// import EmployeeCardTemplate from '../templates/EmployeeCardTemplate';
import { Rnd } from 'react-rnd';
import ACCard from './Card/ACCard'

const CardFromTemplate = ({templateJSON,payloadJSON}) => {
    const defaultValue = false
    const [minimized, setMinimize] = useState(false)

    //const { card, onExecuteAction, hostConfig } = this.props;
    // const {templateJSON, payloadJSON} = this.props;
    const adaptiveCard = new AdaptiveCardsAPI.AdaptiveCard();
    // if (hostConfig) {
    //     adaptiveCard.hostConfig = new AdaptiveCardsAPI.HostConfig(hostConfig);
    // }
    // if (onExecuteAction) {
    //     adaptiveCard.onExecuteAction = onExecuteAction;
    // }
    // var template = new ACData.Template(templateJSON)
    // console.log(template)
    // var cardPayLoad = template.expand({
    //     $root: payloadJSON
    // })
    // console.log(cardPayLoad)
    // adaptiveCard.parse(cardPayLoad);

    // let cardToRender = adaptiveCard.render();
    const componentDidMount = () => {
        console.log("CARD WITH CONTROL MOUNTED")
    }
    useEffect(componentDidMount, [])
    const handleMinimize = (e) => {
        //e.preventDefault()
        console.log("minimization", minimized)
        setMinimize(!minimized)
    }
    return( 

        <Rnd className='cardContainer'
        > 
        <button className="metaButton" onClick={handleMinimize}>
            -
        </button>
        {/* <div className="metaButton TopRightButton" ref={cardToRender} /> */}
        <button className="metaButton topRightButton">
            Edit
        </button>
        <button className="metaButton bottomRightButton">
            Delete
        </button>
        <Card 
        templateJSON={templateJSON}
        payloadJSON={payloadJSON}
        cardMinimized={minimized}
        />
        </Rnd>
    )
    
}

export default CardFromTemplate;
