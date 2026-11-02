1. What is the difference between building a UI imperatively (plain DOM code) and declaratively(React)?

    Imperative: A step by step how to change UI
    Declarative: Describe what UI look and state and React manages update

2. Why must a component name start with a capital letter?

    Distinguish React components from HTML elements

    React treats lowercase JSX names like <button> as built-in HTML elements. A name starting with a capital letter, like <ProfileCard>, tells React to use your component.

3. What does a fragment <>...</> do, and why not just use a <div>?

    Groups multiple JSX elements, without adding extra element? to HTML

    <>...</> groups multiple elements without adding an extra HTML element to the page. A <div> creates an actual container, which can affect layout or styling. Use a fragment when you only need to group elements.

4. Name one benefit of splitting the UI into small components.

    Reusability