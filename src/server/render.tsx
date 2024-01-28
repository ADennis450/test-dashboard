import ReactDOMServer from "react-dom/server";
import { fetchTestResults } from "../api-client";
import App from "../components/app";
import React from "react";

const serverRender = async () => {
  const testResults = await fetchTestResults();

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={{ testResults }} />
  );

  return { initialMarkup, initialData: { testResults } };
};

export default serverRender;
