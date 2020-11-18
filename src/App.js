import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookingData from './Components/BookingList/BookingData/BookingData';
import AddHows from './Components/AddHows/AddHows/AddHows';
import MyRentData from './Components/MyRent/MyRentData/MyRentData';
import Sidebar from './Components/ShareComponents/Sidebar/Sidebar';
import Home from './Components/Home/Home/Home';
import ApartmentDetail from './Components/Home/ApartmentDetail/ApartmentDetail/ApartmentDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
              <Home />
          </Route>

          <Route path='/sidebar'>
              <Sidebar></Sidebar>
          </Route>

          <Route path='/booking'>
              <BookingData></BookingData>
          </Route>

          <Route path='/addHows'>
              <AddHows></AddHows>
          </Route>

          <Route path='/myRent'>
              <MyRentData></MyRentData>
          </Route>

          <Route path='/room/:apartment'>
              <ApartmentDetail></ApartmentDetail>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
