# 7egend Web challenge

[Live Demo](https://makeup-ui.firebaseapp.com)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm install`

Install all dependencies.

### Dependencies:

- [React](https://reactjs.org/): Used as client-side;
- [Immutable](https://facebook.github.io/immutable-js/): It was used to verify with data changed with the function `is`;
- [react-router](https://reacttraining.com/react-router/) and [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom): React libraries to deal with application routing, like route changes and navigation;
- [react-js-pagination](https://github.com/vayser/react-js-pagination): React library used to implements paginagion, I've decised to use this lib, because was easier to integrate with my [Table](https://github.com/leandher/rc-makeup-api/blob/master/src/components/Table/Table.js) component then other pagination components and the ui presentation looks like ok;
- [react-select](https://github.com/jedwatson/react-select): React library used on tag filter, great ui presentation and easy usage. I've already used on other project;
- [Recompose](https://github.com/acdlite/recompose): It is a toolkit for creating composable pipelines of higher order components. It allows you to easily separate your logic from your components, creating re-usable building blocks. You can use it to drive your presentational components on any platform React supports.
- [react-feather](https://github.com/feathericons/react-feather): Used as icons package. Feather is a collection of simply beautiful open source icons designed by [Cole Bemis](https://github.com/colebemis/).
- [react-sidebar](https://github.com/balloob/react-sidebar): Used as sidebar package.
- [react-image-lightbox](https://github.com/frontend-collective/react-image-lightbox): Used as lightbox to show makeup photo. At first, I implemented my own modal component, but I had some issues after styles improvement and I decided to looking for a external package and I found this one, that is pretty simple to use and I can easy customize.
