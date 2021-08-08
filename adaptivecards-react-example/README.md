## A minimal react component for [microsoft/adaptivecards](https://github.com/Microsoft/AdaptiveCards).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then I added the minimal react component.

Feel free to copy/paste out [this react component](https://github.com/quincycs/adaptivecards-react-example/blob/master/src/AdaptiveCard.js) into your project.  The only dependency is the original microsoft adaptivecards npm package.

[Commit of the component with example usage](https://github.com/quincycs/adaptivecards-react-example/commit/1c4322ea255e5c5f46d38243f95c91cb2fed8e46)

## Known Issue

Since this is a minimal example, the component does not re-render if the props change.  Therefore keep in mind the adaptive cards are adaptive in layout, but not reactive to property changes.  If you need a component that is reactive, then take a look at [this repo](https://github.com/gatewayapps/react-adaptivecards) instead.
