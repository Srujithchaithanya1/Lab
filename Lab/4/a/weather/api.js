var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputvalue');
var nameh = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var latitude1 = document.querySelector('.lati')
var longitude1 = document.querySelector('.longi')
button.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=52c8da5ce4b2fe5cfa8715da73f70b94`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var namev = data['name'];
            var tempv = data['main']['temp'];
            var descv = data['weather']['0']['description'];
            var latv = data['coord']['lat'];
            var longv = data['coord']['lon'];
            nameh.innerHTML = namev;
            temp.innerHTML = tempv;
            desc.innerHTML = descv;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latv}&lon=${longv}&appid=52c8da5ce4b2fe5cfa8715da73f70b94`)
                .then(response => response.json())
                .then(data1 => {
                    console.log(data1)
                    latitude1.innerHTML = latv;
                    longitude1.innerHTML = longv;
                })
                .catch(err => alert("wrong latitude and longitude"))
        })
        .catch(err => alert("wrong city"))
})