import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateArticle from './components/CreateArticle';
import ShowArticleList from './components/ShowArticleList';
import ShowArticleDetails from './components/ShowArticleDetails';
import UpdateArticleInfo from './components/UpdateArticleInfo';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowArticleList} />
          <Route path='/create-article' component={CreateArticle} />
          <Route path='/edit-article/:id' component={UpdateArticleInfo} />
          <Route path='/show-article/:id' component={ShowArticleDetails} />
        </div>
      </Router>
    );
  }
}

export default App; //change
