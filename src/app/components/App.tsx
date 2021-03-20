// @ts-ignore
import * as React from "react";
import { Disclosure, Button } from "react-figma-plugin-ds";
import "react-figma-plugin-ds/figma-plugin-ds.css";
import "../styles/ui.css";
import data from "../assets/data";

export default function App(props) {
  const renderMenu = () => {
    // Loop over every category and output the grouping
    return Object.entries(data).map(([key, value]) => {
      return (
        <Disclosure
          className="disclosure border-bottom"
          // @ts-ignore
          label={value.name}
          // @ts-ignore
          key={value.name}
          isSection
        >
          
          {
            // @ts-ignore
            renderMenuItem(key, value.data)
          }
        </Disclosure>
      );
    });
  };

  const renderMenuItem = (category, data) => {
    // Loop over every entry in a category
    return Object.entries(data).map(([key, value]) => {
      return (
        <Button
          className="button border-bottom"
          // @ts-ignore
          key={value.name}
          onClick={function () {
            replaceText(category, value);
          }}
        >
          {
            // @ts-ignore
            value.name
          }
        </Button>
      );
    });
  };

  const replaceText = (category, item) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "replace-text",
          category: category,
          identifier: item.identifier,
        },
      },
      "*"
    );
  };

  return <>{renderMenu()}</>;
}
