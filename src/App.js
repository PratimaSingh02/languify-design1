import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import TeamPage from './pages/TeamPage';
import Partners from './pages/Partners'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    {/* <HomePage/>*/}
       <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/about' component={TeamPage}/>
          <Route path='/partners' component={Partners}/>
        </Switch>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
