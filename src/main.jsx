import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import Loading from "./pages/utils/Loading/index.jsx";
import store from "./redux/store/index.js";
const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </StrictMode>
);
