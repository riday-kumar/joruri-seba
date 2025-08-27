## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**getElementById:**
It is used to find element by its ID. It returns single element. If id is not exists in the element it returns null.

**getElementsByClassName:**
It is used to find an element by its class name.It returns HTMLCollection.

**querySelector:**
It is used to find first element that matches a CSS selector. If It doesn't get anything it returns null.

**querySelectorAll:**
It is used to find all elements that match a CSS selector. It returns nodelist.

## 2. How do you create and insert a new element into the DOM?
First of all, I will create a new element using this : **document.createElement(tagName)**
then If I want, I can set inner text into the new crated element by using :  **innerText**
then I have to append the new element to the body or other section. For this I will use:
**appendChild()**

## 3. What is Event Bubbling and how does it work?
Event bubbling is the process in which an event starts from the target element and then bubbles up to its parent elements, up to the root (document).

**Direction :** Inner element → Parent element → Ancestors → document.

Example: Clicking a button triggers its handler, then its parent’s handler, then ancestors.

## 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where instead of adding event listeners to many child elements, we add a single listener to their parent.

**Useful :** improves performance, reduces memory usage, and makes it easy to handle dynamically added elements.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
**preventDefault()** Prevents the default browser action for an event. It stops the browser’s built-in behavior (like following a link, submitting a form)

**stopPropagation()**  Stops event from bubbling or capturing in the DOM. Prevents the event from moving up (or down) the DOM tree
