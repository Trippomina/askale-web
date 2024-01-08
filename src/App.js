import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./hoc/layout/layout";
import router from "./routing/routing";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
