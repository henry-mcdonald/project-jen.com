import React,{useState,useEffect} from 'react'

import Control from './control/Control'
import Body from './body/Body'
import { Rnd } from 'react-rnd'

const Card = ({keyName,cardData,setCardData}) => {

    const [title,setTitle] = useState(cardData.title)
    const [cardWidth,setCardWidth] = useState(cardData.width)
    const [cardHeight,setCardHeight] = useState(cardData.height)
    const [cardX,setCardX] = useState(cardData.x)
    const [cardY, setCardY] = useState(cardData.y)

    const handleDragStop = (e,d) => {
        console.log("DRAGGED")
        setCardX(d.x)
        setCardY(d.y)
    }
    const handleResizeStop= (e,direction,ref,delta,position) => {
        console.log("RESIZED")
        setCardWidth(ref.style.width)
        setCardHeight(ref.style.height)
    }

    const writeToLocal = () => {
        console.log("WRITTEN TO LOCAL")
        const dataObj = {
            'title':title,
            'width':cardWidth,
            'height':cardHeight,
            'x':cardX,
            'y':cardY
    }
        localStorage.setItem(
            keyName,
            JSON.stringify(dataObj)
            )
    }

    useEffect(writeToLocal,[title,cardWidth,cardHeight,cardX,cardY])

    // const updateCardData = () => {
    //     newCardData = {
    //         title:title,
    //         width:cardWidth,
    //         height:cardHeight,
    //         x:cardX,
    //         y:cardY
    //     }

    // }
    // useEffect(updateCardData)

    return (
        <Rnd className="card"
        size={{width:cardWidth,height:cardHeight}}
        onDragStop={handleDragStop}
        position={{x:cardX,y:cardY}}
        bounds={'window'}

        onResizeStop={handleResizeStop}
        >
            <Control 
            title={title}
            setTitle={setTitle}
            />
            <Body 
            cardData={cardData}
            />
        </Rnd>
    )
}

export default Card
