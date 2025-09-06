    const input = document.querySelector('#input-box')
    const add = document.querySelector('button')
    const listContainer = document.querySelector("#list_container")
    add.addEventListener('click', (e)=>{
        const user_input = input.value;
        input.value = ''
        console.log(user_input)
        if(user_input === '') alert('Please enter a task!')
        else{
            let span = document.createElement('span')
            span.innerHTML = '\u00d7'
            const li = document.createElement('li');
            li.innerHTML = `${user_input}`
            listContainer.appendChild(li);
            li.appendChild(span)
            li.style.display = 'block'
    }
    saveData()
    })
   listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove()
        saveData()
    }
    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
   })

   function saveData(){
    localStorage.setItem('Data', listContainer.innerHTML)
   }
   
   function showTask(){
    listContainer.innerHTML = localStorage.getItem('Data');
   }
   showTask()