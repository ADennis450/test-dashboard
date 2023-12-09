import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import { API_SERVER_URL } from "./public-config";
import axios from "axios";

const container = document.getElementById("app")!;
const root = createRoot(container);

axios.get(`{$API_SERVER_URL}/contests`).then((resp) => {
  console.log(resp);
});

root.render(<App initialData={(window as any).initialData} />);
