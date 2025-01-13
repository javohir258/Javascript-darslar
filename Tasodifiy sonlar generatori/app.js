const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() + (max - min + 1)) + min 
}


const generate = () => {
    const placeholderEl = document.querySelector('#placeholder')
    placeholderEl.textContent = getRandomNumber(1, 10)
}


const btnEl = document.getElementById('generate')
btnEl.addEventListener('click' , generate)