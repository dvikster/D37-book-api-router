import React, {Component} from 'react';
import {Link} from 'react-router';

export default class GenresList extends Component{
    render(){
        return(
            <div>
                <h1>GenresList</h1>
                <ul>
                    <li><Link to="genres/genres/g1t">Genres 1</Link></li>
                    <li><Link to="genres/genres/g2t">Genres 2</Link></li>
                    <li><Link to="genres/genres/g3t">Genres 3</Link></li>
                    <li><Link to="genres/genres/g4t">Genres 4</Link></li>
                    <li><Link to="genres/genres/g5t">Genres 5</Link></li>
                </ul>
            </div>
        )
    }
}