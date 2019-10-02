/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/newline-after-import */
import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script
        key="abc"
        type="text/javascript"
        src="/scripts/animation.js"
      />,
  ]);
}