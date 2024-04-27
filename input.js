const input = document.querySelector('input');
let wait;
input.addEventListener('input',()=>{
    clearTimeout(wait)
    wait=  setTimeout(()=>{
        inputHandler()
    },400)
})

function inputHandler() {
    const data = input.value;
        console.log(data);
}