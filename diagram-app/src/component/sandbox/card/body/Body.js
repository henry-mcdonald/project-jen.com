import React, {useEffect, useState,useContext} from 'react'
import LIPayloadMaker from './payloads/LIPayloadMaker'
import UserInputPayloadMaker from './payloads/UserInputPayloadMaker'
import SimpleTemplate from './templates/SimpleTemplate'



const Body = ({cardData,templateContext}) => {

    const [payload, setPayload] = useState(null)
    const [template, setTemplate] = useState(null)

    const onLoad = () => {
        console.log("loading up a card body")
        console.log(cardData)

        // if payload mode is specified then override default
        // if(payloadType){
        //     payloadMode = payloadType
        // }

        const templateMaker = {
            'simple': SimpleTemplate
        } //

        //
        const payloadMaker = {
            'loremIpsum': LIPayloadMaker,
            'userInput': UserInputPayloadMaker,
        } // payload can come from user input, DB, or other

        

        setTemplate(templateMaker[templateContext])

    }

    useEffect(onLoad,[])




    return (
        <div className='cardBody'>
            <SimpleTemplate 
            props={cardData}
            />
        </div>
    )
}

export default Body
