import React, {Component} from 'react'


export default class BookItem extends Component{
    render(){
        return(
           <div>
               <img src="http://t0.gstatic.com/images?q=tbn:ANd9GcRzF3c1tkASLO-7RTKXAemQUuoLaoyFph3uhxmn-P2kbWhh3mul"/>
               <p className="name"><strong>Title: </strong>Book Title</p>
               <p className="author"><strong>Autor: </strong>Book Autor</p>
               <p className="desc"><strong>Description: </strong>Book Description</p>
               <p className="pages"><strong>Pages: </strong>Book pages</p>
           </div>
        )
    }
}