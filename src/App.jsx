import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import PageObjects from './components/PageObjects';
import PageMain from './components/PageMain';
import PageQueries from './components/PageQueries';
import PageStatement from './components/PageStatement';
import PageFeedback from './components/PageFeedback';
import Header from './components/Header';
import Footer from './components/Footer';
import PageDiscoveredProperty from './components/PageDiscoveredProperty';
import PageDoc from './components/PageDoc';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <div className="content">
        <Route exact path="/" component={PageMain} />
        <Route path="/obj" component={PageObjects} />
        <Route path="/queries" component={PageQueries} />
        <Route path="/havings" component={PageDiscoveredProperty} />
        <Route path="/statement" component={PageStatement} />
        <Route path="/feedback" component={PageFeedback} />
        <Route path="/doc" component={PageDoc} />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
