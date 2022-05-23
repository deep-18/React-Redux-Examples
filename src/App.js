import React,{Fragment} from "react";
import {BrowserRouter as Router,Route,Routes,Switch, useRoutes} from 'react-router-dom';
import Landing from "./Components/Layout/Landing";
import SearchMain from "./Components/SearchBar/SearchMain";
import Video from "./Video/components/Video"
import "./Style/all.css"

const App = () => {
    const RoutePath = () => {
        let routes = useRoutes([
          { path: "/", element: <SearchMain /> },
          { path: "/Landing", element: <Landing /> },
          { path: "/video", element: <Video /> },
          // ...
        ]);
        return routes;
      };
    return(
        <Fragment>
            <Router>
                <RoutePath />
            </Router>
        </Fragment>
    )
}

export default App;