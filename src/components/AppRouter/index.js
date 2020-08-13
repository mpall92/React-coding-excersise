import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ItemList from '../ItemList';
import ItemDetail from '../ItemDetail';

const AppRouter = () => (
  <div>
    <Router >
    <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/items"/>
                )}/>
                 <Route exact path='/items' component={ItemList} />
                 <Route exact path="/items/:name" component={ItemDetail} />
       
          </Switch>
          </Router>
  </div>
);

export default AppRouter;