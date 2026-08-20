document.addEventListener("DOMContentLoaded", function () {

    fetch("/Components/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Cannot load navbar.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });

});