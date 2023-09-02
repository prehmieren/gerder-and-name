const data = document.querySelector('.data')
const resetBtn = document.getElementById('reset')

function setData() {
    getGender()
}

async function getGender() {
    try {
        const response = await fetch(`https://api.genderize.io/?name=${input.value}`);
        const data = await response.json()
        getData(data)
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

function getData(data) {
    const surname = document.getElementById('name')
    const gender = document.getElementById('gender')
    const probability = document.getElementById('probability')
    surname.innerText = data.name
    if (data.gender === "female") {
        gender.innerText = "ผู้หญิง"
    } else if (data.gender === "male") {
        gender.innerText = "ผู้ชาย"
    } else {
        gender.innerText = ""
    }
    probability.innerText = data.probability * 100 + "%"
}

function callDataApi(e) {
    e.preventDefault()
    if (input.value.length == 0) {
        data.hidden = true
        data.classList.remove('showData')
    } else {
        data.hidden = false
        data.classList.add('showData')
    }
    getGender()

}
resetBtn.addEventListener('click', () => {
    data.hidden = true
    input.value = ''
})
form.addEventListener('submit', callDataApi)

setData()