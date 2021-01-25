import React from 'react';
import { HomePage } from './views/HomePage/HomePage';
import {Route, Switch} from "react-router-dom";
import { Education } from './views/Education/Education';
import { Experience } from './views/Experience/Experience';
import { Contact } from './views/Contact/Contact';
class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path='/education' component={Education} />
                <Route path='/experience' component={Experience}/>
                <Route path='/contact' component={Contact} />
            </Switch>
        );
    }
}

export default Routes;