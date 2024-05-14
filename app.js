


let count = 0;

function incrementCounter() {
    count++;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}

function updateCounter() {
    let counterElement = document.getElementById('counter');
    counterElement.innerText = count;
    if (count % 2 === 0) {
        counterElement.style.color = 'green';
    } else {
        counterElement.style.color = 'red'; 
    }
}
