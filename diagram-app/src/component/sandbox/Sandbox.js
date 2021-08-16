import React,{useState,useEffect} from 'react'
import Card from './card/Card'
import Toolbar from './toolbar/Toolbar'

var uniqid = require('uniqid')

const sampleData= {
    'title': 'this is the title',
    'text': 'this is some text',
    'height':80,
    'width':40,
    'x':30,
    'y':90,
}



function Sandbox({getExistingCardsContext}) {
    const [cards,setCards] = useState(['cards are loading...'])

    const handleCreateCard = () => {

        const key = 'diagram-app-card' + uniqid()
        
        const existingCards = cards
        const newCardData = sampleData

        const newCard = <Card 
        key={key}
        keyName={key}
        cardData={newCardData}
        />
        setCards(cards.concat(newCard)
        )


    }

    const handleSaveWorkspace = () => {
        cards.map(card => {
            alert("SAVED!!!")
            // card.save()
            // return localStorage.setItem(card.key,JSON.stringify(card))
        })
    }

    const getCardsFromLocal = () => {
        console.log("getting cards from local")
        let cardsTemp = Object.entries(localStorage).map(([key,value]) => {
        
        if(!key.startsWith('diagram-app-card')){
            return
        }
            console.log(value)
            return(
                <Card 
                key={key}
                keyName={key}
                cardData={JSON.parse(value)}
                />
            )
        })

        setCards(cardsTemp)

    }

    const existinCardContextMapper = {
        'fromLocal': getCardsFromLocal
    }
    const onLoad = () => {
        const getCardFunction = existinCardContextMapper[getExistingCardsContext]
        getCardFunction()
    }

    useEffect(onLoad,[])


    return (
        <div>
            <Toolbar 
            handleCreateCard={handleCreateCard}
            handleSaveWorkspace={handleSaveWorkspace}
            />
            {cards}
        </div>
    )
}

export default Sandbox
