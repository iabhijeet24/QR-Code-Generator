let text = document.getElementById("text");
let qrImage = document.getElementById("qrImage");
let imgBox = document.querySelector(".imgBox");

function generateQR() {
    let inputValue = text.value.trim(); // Avoid empty spaces being counted

    if (inputValue.length > 0) {
        button.innerText = "Generating...";
        setTimeout(() => {
            button.innerText = "Generate QR";
        }, 1000);

        document.querySelector('.container').style.height = "55vh";
        document.querySelector('.imgBox').style.maxHeight = "300px";

        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputValue);
    } 
       
            else {
                text.classList.add("error");
                setTimeout(() => {
                    text.classList.remove("error");
                }, 800);
            }
        }