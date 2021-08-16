import React, {useEffect, useState} from 'react'
import Editable from './editable/Editable'
const Template = (props) => {

    const [data, setData] = useState(props)
    const [styles, setStyles] = useState(props.styles)
    const [dataJsx,setDataJsx] = useState('Text Here')

    function updateJsxRender() {
        console.log("load up a card template")
        if(!data){
            return
        }
        let dataJsxTemp = Object.entries(data).map(([key,value])=>{
            return (

                <Editable 
                value={value.toString()}
                handleChange={updateValue}
                
                />


            );
          })
          setDataJsx(dataJsxTemp)
    }

    useEffect(updateJsxRender,[])
    useEffect(updateJsxRender,[props])

    
    return (
        <div>
            {dataJsx}
            
        </div>
    )
}

export default Template
