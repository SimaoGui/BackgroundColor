document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("switch-btn");
    let body = document.body;
    let div = document.getElementById("div")

    function setColor(){
        r_INDEX = Math.floor(Math.random()*255);
        g_INDEX = Math.floor(Math.random()*255);
        b_INDEX = Math.floor(Math.random()*255);
        body.style.backgroundColor = `rgb(${r_INDEX}, ${g_INDEX}, ${b_INDEX})`;
        let rgbValue = body.style.backgroundColor;
        console.log(rgbValue);
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        
        function rgbToHex(r, g, b) {
            return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
        }

        let h1 = document.getElementById("hex");
        let hexadecimal = rgbToHex(r_INDEX, g_INDEX, b_INDEX)

        if (h1.innerText != ""){
            h1.innerText ='';
        }

        h1.innerText = hexadecimal.toUpperCase();     
    };

    button.addEventListener('click', setColor);
});