import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import MidPage from './MidPage';
import Contact_Us from './ContactUs';


class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter >
                    <div>
                        <Route exact path="/" component={MidPage}/>
                        <Route path="/Contact_Us" component={Contact_Us}/>                        
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;