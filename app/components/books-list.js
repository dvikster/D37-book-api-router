import React, {Component} from 'react';
import {Link} from 'react-router';

export default class BooksList extends Component{
    render(){
        return(
            <div>
                <h1>Books List</h1>
                <ul>
                    <li><Link to="authors/authors/book/1">book 1</Link></li>
                    <li><Link to="authors/authors/book/2">book 2</Link></li>
                    <li><Link to="authors/authors/book/3">book 3</Link></li>
                    <li><Link to="authors/authors/book/4">book 4</Link></li>
                    <li><Link to="authors/authors/book/5">book 5</Link></li>
                </ul>
            </div>
        )
    }
}