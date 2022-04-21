# React Only Updates What’s Necessary:-

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

# Components and Props:-

    Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

    components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

# Props are Read-Only

    Whether you declare a component as a function or a class, it must never modify its own props.Consider this sum function:

    function sum(a, b) {
    return a + b;
    }

    Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

    In contrast, this function is impure because it changes its own input:

    function withdraw(account, amount) {
    account.total -= amount;
    }

> All React components must act like pure functions with respect to their props.

# Converting a Function to a Class

You can convert a function component like Clock to a class in five steps:

1.  Create an ES6 class, with the same name, that extends React.Component.
2.  Add a single empty method to it called render().
3.  Move the body of the function into the render() method.
4.  Replace props with this.props in the render() body.
5.  Delete the remaining empty function declaration.

# Lifecycle Methods

    The componentDidMount() method runs after the component output has been rendered to the DOM.

# Key

    Keys help React identify which items have changed, are added, or are removed.
    Keys should be given to the elements inside the array to give the elements a stable identity

> A good rule of thumb is that elements inside the map() call need keys.

# Index as Key

    If you are using index as a key, when you are adding new items in a array from the start, then react assumes that keys are changed for all items in the array, because index changes if you are adding items in the start of the array so react will re-render all items in array, This is bad for performance because we are re-rendering the previous data.

When can you use index as a key?

1. the list and items are static–they are not computed and do not change;
1. the items in the list have no ids;
1. the list is never reordered or filtered.

When all of them are met, you may safely use the index as a key.

# Controlled Components

    React component that renders a form also controls what happens in that form on subsequent user input.
    An input form element whose value is controlled by React in this way is called a “controlled component”.

> Note

You can pass an array into the value attribute, allowing you to select multiple options in a select tag:

```js
<select multiple={true} value={["B", "C"]}>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
</select>
```

# Lifting the state up

There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering.

Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

# React.Component

    React.Component is the base class for all React components. It implements the basic functionality needed for state and lifecycle methods.

# React.PureComponent

    React.PureComponent is a subclass of React.Component that implements shouldComponentUpdate() to perform a shallow comparison between newProps and oldProps and newState and oldState.
    This will prevent unnecessary re-rendering when the component receives new props or state, but it will still re-render if the props or state have changed in a way that affects the output.

# React.memo

    If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

    React.memo is a higher-order component that wraps a regular React component and makes it memoizable.
    This means that the component will only re-render if one of its props or state changes.
    This is useful for avoiding expensive operations when the props or state of a component do not change.

# React.Fragment

    React.Fragment is a component that renders its children.
    It is useful for wrapping a group of elements that you want to keep as siblings in the DOM tree but you do not want to be wrapped in a <div>.

> You can also use it with the shorthand <></> syntax.

# React.lazy()

    React.lazy() lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading components that aren’t used during the initial render.

    React.lazy() is a higher-order component that wraps a regular React component and makes it lazy.
    This means that the component will only be loaded when it is rendered for the first time.
    This is useful for loading data asynchronously.

> Note that rendering lazy components requires that there’s a **_<React.Suspense>_** component higher in the rendering tree. This is how you specify a loading indicator.

# React.Suspense

    React.Suspense is a component that suspends the rendering of a component until the specified promise resolves.
    This is useful for loading data asynchronously.

# React LifeCyle

## Mounting

when an instance of a component is being created and inserted into the DOM

## Updating

An update can be caused by changes to props or state.

## Unmounting

when an instance of a component is being removed from the DOM

## Error Handling

when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

# Constructor

    Typically, in React constructors are only used for two purposes:

    1.Initializing local state by assigning an object to this.state.
    2.Binding event handler methods to an instance.

    The constructor is called before the component is mounted.

    Constructor is the only place where you should assign this.state directly.
    In all other methods, you need to use this.setState() instead

# Portals

    Portals provide a way to render children into a DOM node that exists outside the hierarchy of the DOM component.

    Used for rendering modals, tooltips, or popovers.

# flushSync()

    Force React to flush any updates inside the provided callback synchronously. This ensures that the DOM is updated immediately.

# Single-page Application

A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run.
Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is **_not reloaded_**.

# Compilers

A JavaScript compiler **takes JavaScript code, transforms it and returns JavaScript code in a different format**. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. Babel is the compiler most commonly used with React.

# Bundlers

Bundlers take JavaScript and CSS **code written as separate modules (often hundreds of them), and combine them together into a few files better optimized** for the browsers. Some bundlers commonly used in React applications include Webpack and Browserify.

# Package Managers

Package managers are tools that allow you to manage dependencies in your project. npm and Yarn are two package managers commonly used in React applications. Both of them are clients for the same npm package registry.

# CDN

CDN stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.

# Elements

React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable.

```js
const element = <h1>Hello, world</h1>
```

# Components

React components are small, reusable pieces of code that return a React element to be rendered to the page.
The simplest version of React component is a plain JavaScript function that returns a React element

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;

```

# props

props are inputs to a React component. They are data passed down from a parent component to a child component.

**_props are read-only_**. They should not be modified in any way:

```js
// Wrong!
props.number = 42
```

> If you need to modify some value in response to user input or a network response, use state instead

# state

A component needs state when some data associated with it changes over time.

# state vs props

The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself. A component cannot change its props, but it can change its state.

# Lifecycle Methods

Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.

# Controlled vs. Uncontrolled Components

React has two different approaches to dealing with form inputs.

An input form element whose value is controlled by React is called a controlled component. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.

An uncontrolled component works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.

In most cases you should use controlled components.

# Reconciliation

When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called “reconciliation”.

# props-drilling

Prop drilling refers to the process of sending props from a higher-level component to a lower-level component.

Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

# shallowCompare

shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.

It does this by iterating on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.

shallowCompare returns true if the shallow comparison for props or state fails and therefore the component should update.

shallowCompare returns false if the shallow comparison for props and state both pass and therefore the component does not need to update.

# Pure Component

React.PureComponent implements it with a shallow prop and state comparison.

If your React component’s render() function renders the same result given the same props and state, then PureComponent does not re-render, PureComponent only re-renders if props or state changes

you can use React.PureComponent for a performance boost in some cases.
