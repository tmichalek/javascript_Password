// Sprawdzenie poprawności haseł


const input = document.querySelector("input");
const passwords = ['Raz', 'DwA'];
const messages = ["super", "działa!"]
const div =document.querySelector("div");

const showMessage = (e) => {
 
let text = e.target.value;
div.textContent="";
 passwords.forEach((password, index)=>{
     if(password.toUpperCase()===text.toUpperCase())
     {
     div.textContent=messages[index];

        // console.log(password.toUpperCase());
        // console.log(text.toUpperCase());
        // console.log(index);
        // console.log(messages[index]);
    }
 })
}

input.addEventListener("input", showMessage)



