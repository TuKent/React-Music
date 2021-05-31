import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './scenes/homepage/index';
import LastestPage from './scenes/latest-page/index';
import AlbumsPage from './scenes/albums-page/index'
import Navbar from './components/navbar/index';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content-page">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/latest-page" component={LastestPage} />
            <Route exact path="/albums-page" component={AlbumsPage} />
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
