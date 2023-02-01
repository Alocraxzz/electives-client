import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {ErrorPage} from "../error-page";
import {Electives} from "../pages/Electives";
import {Exams} from "../pages/Exams";
import {Students} from "../pages/Students";
import {Subjects} from "../pages/Subjects";

export const router = createBrowserRouter([
    {path: "/", element: <App/>, errorElement: <ErrorPage/>},
    {path: "/electives", element: <Electives/>, errorElement: <ErrorPage/>},
    {path: "/exams", element: <Exams/>, errorElement: <ErrorPage/>},
    {path: "/students", element: <Students/>, errorElement: <ErrorPage/>},
    {path: "/subjects", element: <Subjects/>, errorElement: <ErrorPage/>},
]);