let inp = document.querySelector('input');
let add = document.querySelector('.add');

// let main = document.querySelector('main')
// let edit = document.createElement('button');
// let del = document.createElement('button');
// main.append(edit,del)

// edit.classList.add('edit');
// del.classList.add('del')

let todo = document.querySelector('.todo-list');

let editing = null;
add.addEventListener('click',()=>{
       if(editing){
                editing.querySelector('h3').innerText = inp.value;
                editing=null;
                inp.value = "";
                add.innerText="add";
                return;
            } 
 
    let value = inp.value;
    if(value.trim()=== "") return;
    todo.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div>
                    <button class="btn edit">Edit</button>
                    <button class="btn del">Delete</button>
                </div>
            </div>`
            inp.value=""

            let li = todo.lastElementChild
            let ed = li.querySelector('.edit')

            
            ed.addEventListener('click',()=>{
                let h3 = li.querySelector('h3')
                inp.value = h3.innerText
                editing = li;
                add.innerText = "Save"
 })

        let del = li.querySelector('.del')
        del.addEventListener('click',()=>{
            let h3 = li.querySelector('h3');
            // h3.innerText="";
            
            li.remove()
        })

    console.log(value);
})




