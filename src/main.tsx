import { createRoot } from "react-dom/client";
import "./index.scss";
import { MyCalendar } from "./App.tsx";
import { Event } from "./event.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddEvent } from "./add-event.tsx";
import {Provider} from "react-redux";
import { store } from './store/strore.ts'


const router = createBrowserRouter([
    {
        path: "/",
        element: <MyCalendar />,
    },
    {
        path: "/add-event/:id?",
        element: <AddEvent />,
    },
    {
        path: "/event/:id",
        element: <Event />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
