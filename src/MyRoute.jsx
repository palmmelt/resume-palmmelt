import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar/Navbar";
import BackendBlogs from "./pages/BackendBlogs";
import FrontendBlogs from "./pages/FrontendBlogs";
import Homepage from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";
import OtherBlogs from "./pages/OtherBlogs";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/frontend-blogs" component={FrontendBlogs}/>
        <Route path="/backend-blogs" component={BackendBlogs}/>
        <Route path="/other-blogs" component={OtherBlogs}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoute;
