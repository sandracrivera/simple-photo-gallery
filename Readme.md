# Project Title

Simple Photo Gallery using React, Redux Toolkit and TypeScript

## Description

This app uses:

- React JS
- TypeScript
- Redux toolkit
- React-tabs
- Axios
- Styled components
- Husky pre-commit commands
- Jest
- Git workflows to deploy to Netlify

## Functionality

The project is a single page that displays a gallery and:

- fetch data from specific endpoing
- display the photos under 2 tabs: Recently Added and Favorited
- "Recently Added": Sort images by createDate
- "Favorited" display only the favorited photos
- When an image is clicked, update the right side with the associated image data
- The user should be able to both favorite and delete an image. These changes should persist until the page is reloaded.
- Basic mobile layout

## Improvements

- the data set is small but some kind of virtualization will be needed for bigger data sets. The mockup displays the full list (no window height is set). The virtualization packages I know required to set a grid height. For the demo just the lazy property was added in the image. But this will have a performance hit for bigger datasets.
- just a few tests were added as a demonstration (utilities, state), due to time contraint
- test files were added next to the file being tested. For complex apps is recommended to have the tests in their own folder
- move the mobile/desktop layout functionality to its own component. all main logic was added inside the home page for simplicity, but this requires passing the onClick event down the component tree.
- add a few animations to spice the app
