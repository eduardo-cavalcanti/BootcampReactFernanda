import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MinhasMusicas from './pages/MinhasMusicas';
import Inicial from './pages/Inicial';


function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Inicial} />
                <Route exact path="/minhas-musicas" component={MinhasMusicas} />
            </Switch>
        </Router>
    );
}

export default Routes;