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
    const ul = document.querySelector('.fs-task__list');

    
    tags.forEach(tag => tag.innerText && textContainer.push(tag.innerText) )
    // console.log(textContainer);

    input.addEventListener('input', updateValue);

    function updateValue(e) { // Search something
        const value = e.target.value;

        let arrayA = (find(textContainer, value))
        // console.log(arrayA);
        for(let item of arrayA) {
            const p = document.createElement('p');
            p.textContent = item;
            ul.append(p);
        }
        console.log(arrayA);
        
        let lengthA = (find(textContainer, value).length);
        quantity.textContent = lengthA;
    }
    
});