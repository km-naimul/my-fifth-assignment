### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: Write down the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll.

1.getElementById : 
        a) This only select one element.
        b) Returns a single Element object.
        c) Only that will be available which keeping the id.

2.getElementsByClassName : 
        a) It can select multiple elements.
        b) Returns a live HTMLCollection of elements.
        c) Need to work with multiple elements by running a loop.

3.querySelector / querySelectorAll :
        a) Selects all elements matching the given CSS selector.
        b) It will return the first element that matches the selector.
        c) Any valid CSS selector.
2. How do you **create and insert a new element into the DOM**?
Answer: To create and insert a new element into the DOM using these steps,
        a) Create the new element using document.createElement().
        b) Added content for the new element.
        c) Added attribute or class.
        d) Insert the element into the DOM.

3. What is **Event Bubbling** and how does it work?
Answer: Write down event bubbling and how does it work,
        a)When we assign an event (like click) to any element, the event does not only work on that element. Instead, it starts from the inner element and spreads upward to the outer elements — this is called Event Bubbling.

        b) ---- It work -------
        event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements. 
        where:
            child button is inside parent div

            parent is inside body


4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

Is it useful because----
        a) Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.
        b) Don't need many listener for many elements just one is enough.
        c)Very easy way to maintain.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer : Write down the difference between **preventDefault() and stopPropagation()** methods,

        preventDefault(): It is a method present in the event interface. This method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable.

        stopPropagation(): This method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called.

