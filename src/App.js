// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import TodoList from "./components/TodoList";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid h-screen place-items-center bg-blue-100 px-6 font-sans">
        <Navbar></Navbar>

        <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
          <Header></Header>
          <hr className="mt-4" />

          <TodoList></TodoList>

          <hr className="mt-4" />

          <Footer></Footer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
