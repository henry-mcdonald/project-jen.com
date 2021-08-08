import React from "react";
import * as AdaptiveCardsAPI from 'adaptivecards';
import * as ACData from 'adaptivecards-templating';

class ACCard extends React.PureComponent {

    renderData(){
        const { templateJSON, payloadJSON ,cardMinimized} = this.props;
        const adaptiveCard = new AdaptiveCardsAPI.AdaptiveCard();
        // if (hostConfig) {
        //     adaptiveCard.hostConfig = new AdaptiveCardsAPI.HostConfig(hostConfig);
        // }
        // if (onExecuteAction) {
        //     adaptiveCard.onExecuteAction = onExecuteAction;
        // }
        var template = new ACData.Template(templateJSON)
        var cardPayLoad = template.expand({
            $root: payloadJSON
        })
        adaptiveCard.parse(cardPayLoad);
        // console.log(this.el)
        // console.log(templateJSON)
        // console.log(payloadJSON)
        adaptiveCard.render(this.el);

    }
    doNothing() {
        console.log("DO NOTHING")
    }
    componentDidMount() {
        console.log("CARD COMPONENT MOUNT",this.props.cardMinimized)
        this.renderData()
        

    }

    componentWillUnmount(){
        alert("GOODBYE FROM CARD O:BJECT")
    }
    componentDidUpdate(){
        if(this.props.cardMinimized){
            const adaptiveCard = new AdaptiveCardsAPI.AdaptiveCard();
            this.el = null

        } else{
            this.renderData()
        }
    }



    render() {
        // if(this.props.minimized){
        //     //{this.renderData()}
        //     return <div ref={el => this.el = null}/>
        // } else{
        console.log(this.props.cardMinimized)
        if(this.props.cardMinimized){
            console.log("NOTHING TO SHOW")
            return <div>{this.props.cardMinimized}</div>
        }
        else{
            return <div ref={el => this.el = el} />

        } 
    }
}

export default ACCard;