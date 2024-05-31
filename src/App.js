import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Login />
        <Register />
      </main>
    </div>
  );
}

export default App;
