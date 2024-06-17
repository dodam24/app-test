import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import { GlobalStyle } from "@/style/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
        <div id="modal"></div>
    </BrowserRouter>,
);
