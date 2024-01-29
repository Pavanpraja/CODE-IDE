import { Box } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../Context/DataProvider";


function Result() {
  //html, css, js

  const { html, css, js } = useContext(DataContext);

  const srcCode = `<html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`;

  return (
    <Box>
      <iframe
        srcDoc={srcCode}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      ></iframe>
    </Box>
  );
}

export default Result;
