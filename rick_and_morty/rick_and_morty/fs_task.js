document.addEventListener("DOMContentLoaded", function(){
    console.clear()

    function find(items, text) {
        text = text.split(' ');
        return items.filter(function(item) {
            return text.every(function(el) {
                return item.indexOf(el) > -1
            })
        })
    }

    const input = document.querySelector('.fs-task-input')
    const tags = document.querySelectorAll('a')
    const textContainer = []
    const quantity = document.getElementById('lenthA');
    const div = document.querySelector('.fs-task__link');

    
    tags.forEach(tag => tag.innerText && textContainer.push(tag.innerText) )
    // console.log(textContainer);

    input.addEventListener('input', updateValue);

    function updateValue(e) { // Search something
        const value = e.target.value;
        div.innerHTML = "";

        if (value.length > 0) {
            let arrayA = (find(textContainer, value))
            // console.log(arrayA);
            setTimeout(addLink, 10, arrayA);
            let lengthA = (find(textContainer, value).length);
            quantity.textContent = lengthA; 
            
        }
    }

    function addLink(arr) {
        for(let item of arr) {
            const p = document.createElement('a');
            p.textContent = item;
            div.append(p);   
        }
    }
});