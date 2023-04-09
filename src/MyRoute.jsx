import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar/Navbar";
import BackendBlogs from "./pages/BackendBlogs";
import FrontendBlogs from "./pages/FrontendBlogs";
import Homepage from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";
import OtherBlogs from "./pages/OtherBlogs";
import PuffLoader from "react-spinners/PuffLoader";

const MyRoute = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter basename={"profile-webpage-palmmelt"}>
      <div>
        {loading ? (
          <div className="loading flex-col">
            <PuffLoader
              color={"#ff5e00d8"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <div>
              <p className="text-[#ff5e00d8] font-bold p-2 text-3xl m-2">
                Welcome to website..
              </p>
            </div>
          </div>
        ) : (
          <>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/frontend-blogs" component={FrontendBlogs} />
            <Route path="/backend-blogs" component={BackendBlogs} />
            <Route path="/other-blogs" component={OtherBlogs} />
            <Route path="*" component={NotFound} />
          </Switch>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default MyRoute;
