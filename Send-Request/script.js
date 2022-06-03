let content = document.getElementById("content")
let error = document.getElementById("error")
let city = document.getElementById("city")
let country = document.getElementById("country")
let weather = document.getElementById("weather")
let cBtn = document.getElementById("cBtn")
let fBtn = document.getElementById("fBtn")
let input = document.getElementById("input")
let localTime = document.getElementById("localTime")
$(document).ready(function () {
    $("#searchBtn").click(function () {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`).then(element => {
            content.style.visibility = "visible"
            error.classList.add("d-none")
            city.innerText = element.data.location.name
            country.innerText = element.data.location.country
            weather.innerText = element.data.current.temp_c
            localTime.innerText = element.data.location.localtime
            $("#cBtn").click(function () {
                weather.innerText = element.data.current.temp_c
            })
            $("#fBtn").click(function () {
                weather.innerText = element.data.current.temp_f
            })
        }).catch(
            error.classList.remove("d-none"),
            content.style.visibility = "hidden",
        )
    })
})

