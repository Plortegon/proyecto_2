function calcularTiempo(){

    let tiempo = new Date();
    

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    hora = hora <10 ? "0" + hora : hora;
    minuto = minuto <10 ? "0" + minuto : minuto;
    segundo = segundo <10 ? "0" + segundo : segundo;

    

    let pantallareloj = hora+ ":" + minuto +":"+segundo;
    let Relojdigital = document.querySelector(".reloj");
    Relojdigital.innerHTML =  pantallareloj;


}

setInterval(calcularTiempo, 1000);












/*QUE CADA MIL SEGUNDO SEA UN SEGUNDO */