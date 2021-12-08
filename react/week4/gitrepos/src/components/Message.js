import { useContext } from "react";
import { GlobalStateContext } from "../contexts/GlobalStateContext";

export default function Message() {
  const { message } = useContext(GlobalStateContext);
  return <h1>{message}</h1>;
}
