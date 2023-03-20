import "./index.css";
import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeContainer } from "./theme/ThemeContainer";
import { router } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./features/redux/rtk/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ThemeContainer>
            <RouterProvider router={router}/>
        </ThemeContainer>
    </Provider>,
);

reportWebVitals();
