import { useState, useContext } from "react";
import { SWRConfig } from "swr";
import { AppContext } from "./AppContext";
import StoreFront from "./StoreFront";
import clsx from "clsx";
import Navbar from "./NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const { theme } = useContext(AppContext);
  const classes = clsx(theme);

  if (loggedIn) {
    return (
      <>
        <SWRConfig>
          <BrowserRouter>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products/:id">Product Details</Link>
                </li>
              </ul>
            </nav>
            <main>
              <div className={classes}>
                <Routes>
                  <Route path="/" element={<StoreFront />}></Route>
                  <Route
                    path="/ProductDetails/:id"
                    element={<ProductDetails id={id} />}
                  ></Route>
                </Routes>
              </div>
            </main>
          </BrowserRouter>
        </SWRConfig>

        <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Please login</h2>
        <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
          Login
        </button>
      </>
    );
  }
}
