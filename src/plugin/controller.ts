import find from "lodash/find";
import data from "../app/assets/data";

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "replace-text") {
    // Loop through all selected nodes
    for (const node of figma.currentPage.selection) {
      // Get out of here if it's not text
      if (node.type !== "TEXT") return;

      // We must re-load the font for a text layer for some Figma reason
      // @ts-ignore
      await figma.loadFontAsync(node.fontName);

      // Grab the data for this specific pieces of data
      const data = lookupData(msg.category, msg.identifier);

      // Run the function that comes from the look up
      const replacement = data.replace();

      // Finally set the text
      node.characters = replacement;
    }
  }
};

function lookupData(category, identifier) {
  // Pull all information from the availableGaps object
  return find(data[category].data, (object) => {
    // Pick the gap object that corresponds to this form
    return object.identifier === identifier;
  });
}
