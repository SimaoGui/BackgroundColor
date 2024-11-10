document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("switch-btn");
    const body = document.body;
    const copy = document.getElementById("copyBtn");
    let hexadecimal = "";

    function setColor(){
        r_INDEX = Math.floor(Math.random()*255);
        g_INDEX = Math.floor(Math.random()*255);
        b_INDEX = Math.floor(Math.random()*255);
        body.style.backgroundColor = `rgb(${r_INDEX}, ${g_INDEX}, ${b_INDEX})`;
        var rgbValue = body.style.backgroundColor;
        console.log(rgbValue);
        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        
        function rgbToHex(r, g, b) {
            return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
        }

        let h1 = document.getElementById("hex");
        hexadecimal = rgbToHex(r_INDEX, g_INDEX, b_INDEX)

        if (h1.innerText != ""){
            h1.innerText ='';
        }

        h1.innerText = hexadecimal.toUpperCase();   
        
        copy.style.display = "inline-block"
    };

    function copiarTexto(){
        navigator.clipboard.writeText(hexadecimal.toUpperCase()).then(() => {
            alert("Texto copiado com sucesso!")
        });
    }

    button.addEventListener("click", setColor);
    copy.addEventListener("click", copiarTexto);
});
