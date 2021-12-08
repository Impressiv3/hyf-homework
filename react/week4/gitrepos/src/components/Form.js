import { useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";

export default function Form() {
  const { query, setQuery } = useContext(GlobalStateContext);
  function handleQueryChange(e) {
    setQuery(e.target.value);
    console.log(e.target.value);
  }

  return (
    <form>
      <fieldset>
        <legend>Git User(s)</legend>
        <label htmlFor='usename'>Search:</label>
        <input type='text' name='username' id='username' onChange={handleQueryChange} />
      </fieldset>
    </form>
  );
}
