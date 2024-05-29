## LESSON 11: vite + TS to do list project with Vanilla TS

`Project Demo`: 

<img src="todolistDemo.gif" width="200" />
<br>
<br>


`project reflection`:

store the list items in the variable and reflect that variable on the html DOM element

1. using TS is harder than JS

2. when we `insert a string html` from another .ts  file (rather than directly writing the codes inside HTML). we must consider in this file, do we mention that element ? if so, we could `select that specfic element and give it an action` (DOM Munipulation), if no, sorry, you cannot find that element because it is not in the same file so it could result in asychronmy problem. except that you put the html tag directly inside the HTML file

3. when running toggleTodo function, must notice that everytime when submitting a form, it will trigger the displayTodo function, then if your design don't update / save the css based on the `completed state` of individual todo, then it must be updated to original css (the right method: when toggleTodo, `toggle the completed state` from one side to another side and based completed state to render the element again by running displayTodos()). Remember: both jS and TS cannot update automatically to display the updated state immediately like React could do through useState. so whenever we update a stored value, we must run the displayTodos() again to get the latest DOM and UI.

4. when you design a `<form> and <button type="submit">`. please note that the trigger element which can be `addEventListener('submit', callback)` should be `the form element` rather than the button element!!. Without form and you want to trigger `addEventListener('click', callback)`, this trigger should be from `a button element`.

5. !! both querySelectorAll and getElementByClass should use a for loop and inside the loop to run an addEventListener function !!, if using forEach or Array.from().forEach won't work in TS.