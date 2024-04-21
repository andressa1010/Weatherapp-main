const apiKey = "3a4c7d0d94164cb3f2da62e62a9d2a06";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const barraDePesquisa = document.querySelector(".pesquisa input");
const botaoPesquisa = document.querySelector(".pesquisa button");
const iconeChuva = document.querySelector(".icone-chuva");
const inputCidade = document.getElementById("input-cidade");


async function checarClima (city){
    const resposta = await fetch (apiUrl + city + `&appid=${apiKey}`);
    if (resposta.status == 404) {
        document.querySelector(".erro").style.display = "block";
        document.querySelector(".clima").style.display = "none";
    } else { var data = await resposta.json();
        document.querySelector(".cidade").innerHTML = data.name;
        document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + "°";
        document.querySelector(".umidade").innerHTML = data.main.humidity + "%";
        document.querySelector(".vento").innerHTML = data.wind.speed + "km/h";
        iconeChuva.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

        document.querySelector(".clima").style.display ="block";
        document.querySelector(".erro").style.display = "none";
    }
}

botaoPesquisa.addEventListener ("click", () =>{
    checarClima (barraDePesquisa.value);
})
inputCidade.addEventListener ("keyup", (e) =>{
    if(e.code === "Enter") {
        const city = e.target.value;
        checarClima(barraDePesquisa.value);
    }
})


