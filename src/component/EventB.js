import React, {component} from 'react'

class EventB extends component{
    constructor(props){
        super(props)

        this.state={
            message:'hello'
        }
    }
    clickhandler(){
        this.setstate({
            message:'goodbye'
        })
        console.log(this)
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onclick={this.clickhandler}click></button>
            </div>
        )
    }
}
export default EventB