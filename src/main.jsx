import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import Loading from "./pages/utils/Loading/index.jsx";
import store, { persistor } from "./redux/store/index.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </StrictMode>
);
