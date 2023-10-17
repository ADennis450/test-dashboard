import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import Header from "./components/header";

const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(<App initialData={(window as any).initialData} />);
