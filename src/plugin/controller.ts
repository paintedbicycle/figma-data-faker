import find from 'lodash/find';
import data from '../app/assets/data';

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'replace-text') {
        if (!figma.currentPage.selection || !figma.currentPage.selection.length) {
            return figma.notify('Please select at least one text layer');
        }
        // Loop through all selected nodes
        for (const node of figma.currentPage.selection) {
            // Get out of here if it's not text
            if (node.type !== 'TEXT') return;

            // We must re-load the font for a text layer for some Figma reason
            // Case 1: If the layer has multiple text styles
            // @ts-ignore
            if (typeof node.fontName === 'symbol') {
                const len = node.characters.length;
                for (let i = 0; i < len; i++) {
                    // @ts-ignore
                    await figma.loadFontAsync(node.getRangeFontName(i, i + 1));
                }

                // Case 2: If only one style
            } else {
                //@ts-ignore
                await figma.loadFontAsync(node.fontName);
            }

            // Grab the data for this specific pieces of data
            const data = lookupData(msg.identifier);

            // Run the function that comes from the look up
            const replacement = data.replace();

            // Finally set the text
            node.characters = replacement;
        }
    }
};

function lookupData(identifier) {
    // Pull all information from the availableGaps object
    return find(data, (object) => {
        // Pick the gap object that corresponds to this form
        return object.identifier === identifier;
    });
}
