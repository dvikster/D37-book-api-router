import React, {Component} from 'react';

export default class ListContainer extends Component{
    render(){
        return(
            <div className="list-container">
                {this.props.children}
            </div>
        )
    }
}
