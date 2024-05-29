// import { library } from "@fortawesome/fontawesome-svg-core";
type todo = {
    [index:string]: string | boolean,
    content: string,
    completed: boolean,
}

export let todos:todo[] = [];
    


export const addTodos = (newTodo:string):void => {
        if (newTodo.trim() !== ""){
            const newtodo:todo = {
                content:newTodo.trim(),
                completed: false,
            }
            todos.push(newtodo);
        }
        displayTodos();
        return   
    }

export const clearAll = ():void => {
    todos = [];
    displayTodos();
}

export const deleteTodo = (index: number):void => {
        // console.log("hi, delete")

        if (index >= 0 && index < todos.length)
            {
                todos = todos.filter((_, i:number) => i !== index)
            }
        console.log(todos)
        displayTodos();
        return
    }

export const ToggleTodo = (index: number):void => {

        if (index >= 0 && index < todos.length){
            todos[index].completed = !todos[index].completed;
            displayTodos();
        }
        
    }

export const displayTodos = ():void => {
        const listItems = document.querySelector<HTMLUListElement>('.listItems')!;
        console.log(listItems);
        if (todos && todos.length > 0) {
            console.log(todos)
            const todoitems = todos.map((td:todo) => (`<li class="text-xl flex items-center justify-between my-2">
            <div class="flex-1 text-left">
              <button type="button" class="toggleBtn pr-2 "><i class="toggleBtnColor fa-solid fa-check text-green-200 cursor-pointer hover:text-green-400 transition-colors ${td.completed? 'text-green-400': ''}"></i></button><span class="todo ${td.completed? 'line-through text-red-400':''}">${td.content}</span>
            </div>
            <div>
              <button type="button" class="deleteBtn pr-2" ><i class="fa-solid fa-xmark text-2xl text-red-200 cursor-pointer hover:text-red-400 transition-colors"></i></button>
            </div>
          </li>`)
            )
            listItems.innerHTML = todoitems.join("");
            const deleteBtns = document.getElementsByClassName('deleteBtn');
            const toggleBtns = document.getElementsByClassName('toggleBtn');
            for (let i = 0; i < deleteBtns.length; i++){
                (deleteBtns[i] as HTMLButtonElement).addEventListener("click", ()=>deleteTodo(i));
                (toggleBtns[i] as HTMLButtonElement).addEventListener("click", () => ToggleTodo(i));
            }
            return
        }
        listItems.innerHTML = "";
    }
