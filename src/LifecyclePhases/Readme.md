LIFECYCLE PHASES
A React class component goes through three phases during its lifetime:
1)Mounting – Component is created and inserted into the DOM.
2️)Updating – Component is re-rendered when state or props change.
3️)Unmounting – Component is removed from the DOM.
React provides lifecycle methods that allow us to run code at specific moments during these phases.

PHASE 1: MOUNTING
-- Mounting happens when the component is created and inserted into the DOM tree.
Methods Invoked
1)constructor() -- Called first before the component appears and Runs only once.
2)render() -- Returns the JSX.
3)componentDidMount() -- Called after the component is rendered into the DOM and Runs only Once

PHASE 2: UPDATING
-- Occurs whenever the State changes or Props change
Methods Invoked
1)render() -- returns the jsx and Called every time the component renders
2)componentDidUpdate() -- Called after every update.

PHASE 3: UNMOUNTING
-- Component gets removed from DOM.
Methods Invoked
1)componentWillUnmount() -- Called right before removal of a component
