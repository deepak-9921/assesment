let inputs = document.querySelectorAll('.name')
let spans = document.querySelectorAll('span')
let phone = document.querySelector('.phone')
let passes = document.querySelectorAll('.pass')
let inputBoxes = Array.from(inputs)
let spanBoxes = Array.from(spans)
let passBoxes = Array.from(passes)

let submit = document.querySelector('#submit')

for (let i = 0; i < inputBoxes.length; i++) {
    inputBoxes[i].addEventListener('input', () => {
        let len = inputBoxes[i].value.length;
        if (len <= 3) {
            spanBoxes[i].innerText = "**Length is to short"
            submit.disabled = true;
        }
        else {
            spanBoxes[i].innerText = ""
            submit.disabled = false;
        }
    })
}

phone.addEventListener('input', () => {
    let len = phone.value.length;
    if (len <= 9) {
        document.querySelector('.spanPhone').innerText = "**Must be 10 digit"
        submit.disabled = true;
    } else if (len > 10) {
        document.querySelector('.spanPhone').innerText = "**Must be 10 digit"
        submit.disabled = true;
    }
    else {
        document.querySelector('.spanPhone').innerText = ""
        submit.disabled = false;
    }
})

passBoxes[1].addEventListener('input',()=>{
    let len0 = passBoxes[0].value;
    let len1 = passBoxes[1].value;

    if(len1 !== len0){
        document.querySelector('.spanPass').innerText = "**Password not same"
        submit.disabled = true;
    }else{
        document.querySelector('.spanPass').innerText = ""
        submit.disabled = false;
    }
})





