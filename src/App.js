import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import {Route, Switch} from 'react-router-dom';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
