import React from "react";
import {MenuProvider} from "./provider/MenuProvider";
import {RouterProvider} from "react-router-dom";
import IndexRoute from "./routes";

function App() {
  return (
      <>
        <MenuProvider>
          <RouterProvider router={IndexRoute}/>
        </MenuProvider>
      </>
  );
}

export default App;
