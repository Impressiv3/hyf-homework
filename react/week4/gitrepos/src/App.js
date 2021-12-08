import "./styles/App.css";
import GlobalStateContextProvider from "./components/GlobalStateContextProvider";
import Form from "./components/Form";
import RepositoryList from "./components/RepositoryList";
import Message from "./components/Message";

export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Search Github Users</h1>
      </header>
      <main>
        <GlobalStateContextProvider>
          <Form />
          <Message />
          <RepositoryList />
        </GlobalStateContextProvider>
      </main>
    </div>
  );
}
