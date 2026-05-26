const form = document.querySelector('form');
// console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')


    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML= `height is not a number`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML= `weight is not a number`
    }
    else{
        result.innerHTML= height * weight;
    }
    // return result   
})
