const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","&"];
let passwordEl1 = document.getElementById("passwordText")
let passwordEl2 = document.getElementById("pwd")
let generateButton = document.getElementById("generate")

generateButton.addEventListener("click", function() {
    // Clear previous passwords
    passwordEl1.textContent = "";
    passwordEl2.textContent = "";
  
    // Generate 8 characters for each password display
    for (let i = 0; i < 15; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      passwordEl1.textContent += characters[randomIndex];
      let randomIndex2 = Math.floor(Math.random() * characters.length);
      passwordEl2.textContent += characters[randomIndex2];
    }
  });
  