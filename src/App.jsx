import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import { WithoutBodyScrollLock } from "./components/WithoutBodyScrollLock";
import { BodyLockWithReactUse } from "./components/BodyLockWithReactUse";
import { BodyLockWithUseHooks } from "./components/BodyLockWithUseHooks";

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Link to="/react-use">Example with react-use</Link>
        <Link to="/use-hooks">Example with use-hooks</Link>
        <WithoutBodyScrollLock />
      </div>
    ),
  },
  {
    path: "react-use",
    element: (
      <div>
        <Link to="/">Home</Link>
        <Link to="/use-hooks">Example with use-hooks</Link>
        <BodyLockWithReactUse />
      </div>
    ),
  },
  {
    path: "use-hooks",
    element: (
      <div>
        <Link to="/">Home</Link>
        <Link to="/react-use">Example with react-use</Link>
        <BodyLockWithUseHooks />
      </div>
    )
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App