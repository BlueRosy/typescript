import FullList from "../model/FullList";
import ListItem from "../model/ListItem";

// like a context list all props and required functions
interface DOMList {
    ul: HTMLUListElement,
    // clear the fulllist
    clear():void,
    // render the fulllist on the screen
    render(fulllist: FullList):void,
}

export default class DOM implements DOMList {

    
    ul: HTMLUListElement;
    static instance: DOM = new DOM();
    
    private constructor (){
      this.ul = document.querySelector('.listItems') as HTMLUListElement
    }


    clear(): void {
        this.ul.innerHTML = ``
    }

    render(fulllist: FullList): void {
        this.ul.innerHTML = fulllist.list.map((item:ListItem) => (`<li id="${item.id}" class="text-xl flex items-center justify-between my-2">
        <div class="flex-1 text-left">
          <button type="button" class="toggleBtn pr-2 "><i class="toggleBtnColor fa-solid fa-check text-green-200 cursor-pointer hover:text-green-400 transition-colors ${item.checked? 'text-green-400': ''}"></i></button><span class="todo ${item.checked? 'line-through text-red-400':''}">${item.item}</span>
        </div>
        <div>
          <button type="button" class="deleteBtn pr-2" ><i class="fa-solid fa-xmark text-2xl text-red-200 cursor-pointer hover:text-red-400 transition-colors"></i></button>
        </div>
      </li>`)).join("")

      // insert into element some eventListener
      const toggleBtns = document.getElementsByClassName('toggleBtn');
      const deleteBtns = document.getElementsByClassName('deleteBtn');
      if (toggleBtns.length !== 0 ) 
      {
        for (let i = 0; i < toggleBtns.length; i++){
          toggleBtns[i].addEventListener('click', () => {
            fulllist.list[i].checked = !fulllist.list[i].checked;
            fulllist.save();
            this.render(fulllist);
          })

          deleteBtns[i].addEventListener('click', () => {
            fulllist.removeItem(fulllist.list[i].id);
            this.render(fulllist);
          })
        }
      }
      
    }
}