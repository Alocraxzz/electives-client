import "./index.css";
import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeContainer } from "./theme/ThemeContainer";
import { router } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./features/redux/rtk/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ThemeContainer>
            <RouterProvider router={router}/>
        </ThemeContainer>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
