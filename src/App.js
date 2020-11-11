import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Introduction from './components/pages/Introduction';
import Cervices from './components/pages/Cervices';
import Chatbox from './components/pages/Chatbox';
import login from './components/pages/sign/login';
import Registration from './components/pages/validation/Registration';
import Profile from './components/pages/Profile';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={AboutUs} />
        <Route path='/introduction' exact component={Introduction} />
        <Route path='/cervices' exact component={Cervices} />
        <Route path='/chatbox' exact component={Chatbox} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/login' exact component={login} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
