import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./usecontext";
// import App from "./useEffect";
// import App from "./useReducer";
// import App from "./useRef";
import App from "./customehook";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);