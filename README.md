# Capstone Frontend

## Project Overview

The goal of this project is to create a site where people can post ideas, tag them based on their categoy, and bookmark ideas on their account to come back to later. The idea is that this will exist as a catch for all the throw away thoughts we have that others may be looking for.

Some inspirations for the UI and design of the site are Pinterest, Twitter, and Reddit.

## Core Features

- Users can scroll through a feed of posts without an account
- Users can generate a random idea without an account
- Users can make an account
- Users can save posts via bookmarks with an account
- Users can post new ideas with an account
- Users can search for specific posts via tags

## Stretch goals

- Users can generate a random idea within a given tag group
- Users can comment on posts
- Search function also works with post text
- Users can organize bookmarks via folders in their account

## Architecture - Frontend

The frontend is currently structured into three folders: account, posts, and tags. Each folder will include components that are reused on the main feed, which is the main page of the app. Future iterations will have a search section implemented as well, which will likely have a page of itself depending on the scope.

## Tech Stack

In addition to React.js, React DOM and React Router, which we have used in all of our projects, this is a list of other components used in this project:

- React Modal - https://reactcommunity.org/react-modal/
- React Select - https://react-select.com/home#getting-started

## Current Progress

The front end is in its beginning stages of development, where there is minimal to no styling and simple functionality. As of right now, the feed feature is fully implemented for users/non-users. Other features are still in development.

## Resources

React Popup/Modal

- https://www.geeksforgeeks.org/reactjs/how-to-create-popup-box-in-reactjs/
- https://demo.mobiscroll.com/react/popup/showing-the-popover#

React Autosuggest

- https://mui.com/material-ui/react-autocomplete/#search-input

https://dev.to/wlytle/implementing-a-searchable-async-dropdown-in-react-5hce

React Searchbar
https://builtin.com/articles/react-search-bar

https://mui.com/material-ui/getting-started/installation/
https://mui.com/material-ui/customization/typography/

Random Post
https://www.geeksforgeeks.org/reactjs/how-to-create-a-random-joke-using-react-app-through-api-fetching/
https://www.geeksforgeeks.org/css/how-to-handle-forms-in-material-ui/

https://mui.com/joy-ui/react-autocomplete/#users-created-option
