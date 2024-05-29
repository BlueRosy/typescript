import { text } from '@fortawesome/fontawesome-svg-core';
import './style.css'
import {addTodos, clearAll} from './todolist.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<h1 class="text-6xl mb-2">To do List</h1>
<form id="todoForm" class="border-white px-0 py-2 border-2 border-dotted rounded-xl">
  <input type="text" placeholder="Add item"
  autofocus class="newTodo p-3 rounded-lg text-gray-400 border-2 w-4/5 mr-1">
  <button type="submit" class="addBtn p-3 border-2 border-white border-dotted rounded-lg hover:border-pink-300 transition-colors">+</button>
</form>
<div id="List" class="mt-2 p-3 border-2 border-white rounded-xl min-h-96">
  <div class="title flex items-center justify-between text-xl border-b-2 border-white pb-2 ">
    <h1 class="font-bold">List</h1>
    <button type="button" id="clearBtn" class="border-2 p-1 rounded-lg border-purple-100 border-dotted hover:text-pink-300 transition-colors">Clear</button>
  </div>
  <div class="mt-2">
    <ul class="listItems max-h-80 overflow-y-scroll">
    </ul>
  </div>
</div>
`
const todoForm = document.querySelector<HTMLFormElement>("#todoForm")!;
const textBox = document.querySelector<HTMLInputElement>(".newTodo")!;
const clearBtn = document.querySelector<HTMLButtonElement>("#clearBtn")!;



todoForm.addEventListener('submit', (event) =>
{
  event.preventDefault();
  addTodos(textBox.value);
  textBox.value = "";
})

clearBtn.addEventListener('click', () => clearAll())



// todolist()

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)





