// @ts-ignore
import * as React from 'react';
import Fuse from 'fuse.js';
import {Disclosure, Button, Input, Text} from 'react-figma-plugin-ds';
import 'react-figma-plugin-ds/figma-plugin-ds.css';
import '../styles/ui.css';
import data from '../assets/data';
import {groupBy} from 'lodash';

// Fuse.js search options
const options = {
    includeScore: true,
    findAllMatches: true,
    keys: ['name'],
};

// Set up fuse.js search
const fuse = new Fuse(data, options);

export default function App(props) {
    // Store search terms into state
    const [searchTerm, setSearchTerm] = React.useState('');

    // Get results
    const result = search(searchTerm);

    return (
        <React.Fragment>
            <Input
                className="input"
                defaultValue=""
                icon="search"
                iconColor="black8"
                onChange={(inputText) => {
                    setSearchTerm(inputText);
                }}
                placeholder="Search for data types"
            />
            {renderMenu(result)}
        </React.Fragment>
    );
}

// Custom search
// This will return all results if no search performed which overrides default behaviour
const searchFilter = (fuse) => {
    const list = data.map((doc, idx) => ({
        item: doc,
        score: 1,
        refIndex: idx,
    }));

    return (query) => {
        const results = fuse.search(query);
        // If the person has searched, return the results,
        // otherwise the original data formatted to behave like search results
        return query ? {searched: true, data: results} : {searched: false, data: list};
    };
};

// Run search via our custom search function that calls fuse.js
const search = searchFilter(fuse);

const renderMenu = (results) => {
    // If the user searched
    if (results.searched) {
        return (
            <Disclosure
                className="disclosure border-bottom"
                // @ts-ignore
                label={'Search results'}
                // @ts-ignore
                key={'search-results'}
                isDefaultExpanded={true}
                isSection
            >
                {
                    // @ts-ignore
                    renderMenuItem(results.data)
                }
            </Disclosure>
        );
    } else {
        // If they haven't searched, create the categories
        const menuData = groupBy(results.data, 'item.category');

        // Loop over every category and output the grouping
        return Object.entries(menuData).map(([key, value]) => {
            return (
                <Disclosure
                    className="disclosure border-bottom"
                    // @ts-ignore
                    label={key}
                    // @ts-ignore
                    key={key}
                    isDefaultExpanded={false}
                    isSection
                >
                    {
                        // @ts-ignore
                        renderMenuItem(value)
                    }
                </Disclosure>
            );
        });
    }
};

const renderMenuItem = (menuItemData) => {
    // Loop over every entry in a category and output the button
    return menuItemData.map((element) => {
        return (
            <Button
                className="button border-bottom"
                // @ts-ignore
                key={element.item.name}
                onClick={function () {
                    replaceText(element.item);
                }}
            >
                {
                    // @ts-ignore
                    element.item.name
                }
            </Button>
        );
    });
};

const replaceText = (item) => {
    // This communmicates back out to the Figma plugin
    // since we can't run any real actions here
    parent.postMessage(
        {
            pluginMessage: {
                type: 'replace-text',
                category: item.category,
                identifier: item.identifier,
                name: item.name,
            },
        },
        '*'
    );
};
