import './style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import DOM from './templates/ListTemplate'

const initApp = (): void => {
    const fulllist = FullList.instance;
    const template = DOM.instance;
    
    const form: HTMLFormElement = document.getElementById("todoForm") as HTMLFormElement;
    const content: HTMLInputElement = document.querySelector(".newTodo") as HTMLInputElement;
    const clearAllBtn: HTMLButtonElement = document.getElementById("clearBtn") as HTMLButtonElement;

    fulllist.load()
    template.render(fulllist)
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (content.value.trim() === "") {
            content.value = ""
            return 
        }

        // id could be the time of data inputed in or be the appended index from 1, const itemid: number = (fulllist.list.length ? ParseInt(fulllist.list[fulllist.list.length - 1].id) + 1 : 1)
        // them give it itemid.toString()
        const newListItem = new ListItem(Date.now().toString(), content.value.trim(), false)
        fulllist.addItem(newListItem)
        content.value = ""
        template.render(fulllist)
    })

    clearAllBtn.addEventListener('click', () => {
        fulllist.clearList()
        template.clear()
    })
    
    
}

// we are not starting running TS code until the DOM content loaded
document.addEventListener("DOMContentLoaded", initApp)