import React from 'react'
import * as AdaptiveCardsAPI from 'adaptivecards'

const Card = (payload) => {

    const adaptiveCard = new AdaptiveCardsAPI.adaptiveCard()
    adaptiveCard.parse(payload)
    let htmlResult = adaptiveCard.render()

    return(
        htmlResult
    )

}

export default Card