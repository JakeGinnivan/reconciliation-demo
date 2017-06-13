## React reconciliation demo
React updates the DOM through it's use of the virtual DOM, when a new v-dom is created it is diffed to find out what has changed, then React patches the DOM with those changes.

A common scenario in many applications is the need to modify the DOM with A/B testing tools, advertising and other things. This demo is to be able to test how resilient React is to it's DOM being changed outside the v-dom.

*This is unsupported by React and is subject to change when React changes versions, especially fibre.*

### Results
React is very tolerent to changes, the only thing which seems to cause changes to be removes is when the structure of the DOM changes.