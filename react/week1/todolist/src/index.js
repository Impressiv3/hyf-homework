import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import data from "./data.json";

const root = document.getElementById("root");

render(<App data={data}/>, root);
