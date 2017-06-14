import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

//Layout
import MainContainer from './components/main-container';
import ListContainer from './components/list-container';

//Pages
import Home from './components/home'
import AuthorsList from './components/author-list'
import GenresList from './components/genres'
import BooksList from './components/books-list'
import BookItem from './components/book-item'
import GenerItem from './components/gener-item'

export default (
    <Router history={browserHistory}>
        <Route component={MainContainer}>
            <Route path="/" component={Home} />


            <Route path="authors">
                <Route component={ListContainer}>
                    <IndexRoute component={AuthorsList}/>
                </Route>
                <Route path="authors/:Id" component={BooksList}/>
                <Route path="authors/:Id/:Id" component={BookItem} />
            </Route>

            <Route path="genres">
                <Route component={ListContainer}>
                    <IndexRoute component={GenresList} />
                </Route>
                <Route path="genres/:genresId" component={GenerItem}/>
            </Route>



        </Route>
  </Router>
)
