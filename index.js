const title = document.getElementById("title");
const noun = document.getElementById("name")
const pass = document.getElementById("Confirm")
const login = document.getElementById("loog")
const btn = document.getElementById("btn-s")
const divChange = document.getElementById("logs")
const divUnchange = document.getElementById("signs")

function vanish() {
    title.innerText = "Login";
    pass.style.display = "none"
    noun.style.display = "none"
    login.innerHTML = "Not registered yet? <a href> Register </a > "
    btn.innerText = "Login"
    divChange.innerText = "Signup"
    divUnchange.innerText = "Login"

}
