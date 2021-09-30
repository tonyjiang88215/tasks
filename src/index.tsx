import { render } from "react-dom";

import { App } from "./App";

import "react-tabs/style/react-tabs.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "antd/dist/antd.css";

import "./styles.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
