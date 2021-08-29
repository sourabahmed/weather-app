document.getElementById('input-button').addEventListener('click', function(){
    const inputName = document.getElementById('input-name');
    const inputValue = inputName.value;
    const key = 'b2b2a77f68b8021280fe4e1fe9066d39';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${key}`
    try{
        fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))   
    }
    catch(error){
        console,log(error);
    }
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayTemparature(data.main))
});
const displayTemparature = data => {
     console.log(data)
     const inputName = document.getElementById('input-name').value;
     const temp = data.main
     const add = document.getElementById('temparature');
     add.innerHTML = '';
     const div = document.createElement('div');
     div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${inputName}</h1>
            <h3><span>${temp.temp}</span>&deg;C</h3>
            <h1 class="lead">Clouds</h1>`
     add.appendChild(div);
}