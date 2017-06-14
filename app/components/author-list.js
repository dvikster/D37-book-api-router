import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AuthorsList extends Component{
    render(){
        return(
            <div>
                <h1>Authors</h1>
                <ul>
                    <li><Link to="authors/authors/1">authors 1</Link></li>
                    <li><Link to="authors/authors/2">authors 2</Link></li>
                    <li><Link to="authors/authors/3">authors 3</Link></li>
                    <li><Link to="authors/authors/4">authors 4</Link></li>
                    <li><Link to="authors/authors/5">authors 5</Link></li>
                </ul>
            </div>
        )
    }
}