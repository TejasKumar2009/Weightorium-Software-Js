weight_input = document.getElementById("weight_input")
launch_result = document.getElementById("launch_result")
modal_text = document.getElementById("modal_text")

btn_earth = document.getElementById("btn_earth")
btn_moon = document.getElementById("btn_moon")
btn_sun = document.getElementById("btn_sun")
btn_mars = document.getElementById("btn_mars")
btn_venus = document.getElementById("btn_venus")
btn_mercury = document.getElementById("btn_mercury")
btn_jupiter = document.getElementById("btn_jupiter")
btn_saturn = document.getElementById("btn_saturn")
btn_neptune = document.getElementById("btn_neptune")
btn_uranus = document.getElementById("btn_uranus")


btn_earth.addEventListener("click", function(){result_btn("earth")});
btn_moon.addEventListener("click", function(){result_btn("moon")});
btn_sun.addEventListener("click", function(){result_btn("sun")});
btn_mars.addEventListener("click", function(){result_btn("mars")});
btn_venus.addEventListener("click", function(){result_btn("venus")});
btn_mercury.addEventListener("click", function(){result_btn("mercury")});
btn_jupiter.addEventListener("click", function(){result_btn("jupiter")});
btn_saturn.addEventListener("click", function(){result_btn("saturn")});
btn_neptune.addEventListener("click", function(){result_btn("neptune")});
btn_uranus.addEventListener("click", function(){result_btn("uranus")});


function result_btn(planet){
    weight = Math.round(weight_input.value)

    if (planet=="earth"){
    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2>`
    launch_result.click();
    
}
else if (planet=="moon"){
    moon_weight = Math.round((weight*0.16))

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Moon = ${moon_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="sun"){
    sun_weight = Math.round(weight*28)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Sun = ${sun_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="mars"){
    mars_weight = Math.round(weight*0.38)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Mars = ${mars_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="venus"){
    venus_weight = Math.round(weight*0.91)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Venus = ${venus_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="mercury"){
    mercury_weight = Math.round(weight*0.377)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Mercury = ${mercury_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="jupiter"){
    jupiter_weight = Math.round(weight*2.54)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Jupiter = ${jupiter_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="saturn"){
    saturn_weight = Math.round(weight*1.07)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Saturn = ${saturn_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="neptune"){
    neptune_weight = Math.round(weight*1.14)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Neptune = ${neptune_weight} KG</h2>`
    launch_result.click();
}
else if (planet=="uranus"){
    uranus_weight = Math.round(weight*0.89)

    modal_text.innerHTML = `<h2>Weight on Earth = ${weight} KG</h2><br><h2>Weight on Uranus = ${uranus_weight} KG</h2>`
    launch_result.click();
}

}

