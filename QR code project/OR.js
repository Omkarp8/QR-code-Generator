let img = document.getElementById("img");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function GenerateQR()
{
     if(qrText.value.length > 0)
     qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}
