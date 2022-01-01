const input = document.getElementById("password");
const msg = document.getElementById("error");

function check(){
    const password = document.getElementById("password").value;

    const letters = (/[A-Za-z]+/.test(password))?true:false;
    const numbers = (/[0-9]+/.test(password))?true:false;
    const special = (/[!\"#$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    const min = (password.length > 7)?true:false;

    if((letters == true) && (numbers == true) && (special == true) && (min == true)){
        input.style.background = "#A0DB8E";
        msg.textContent = "✔️ Great! Your password is strong and it is hack-resistant..";
                
    }

    else if((letters == true) && (numbers == true) && (special == false) && (min == true)){
        input.style.background = "#ffe599";
        msg.textContent = "⚠️ Nice! Your password is good but it is probably crackable..";
                
    }

    else if((letters == false) && (numbers == true) && (special == true) && (min == true)){
        input.style.background = "#ffe599";
        msg.textContent = "⚠️ Nice! Your password is good but it is probably crackable..";
                
    }

    else if((letters == true) && (numbers == false) && (special == true) && (min == true)){
        input.style.background = "#ffe599";
        msg.textContent = "⚠️ Nice! Your password is good but it is probably crackable..";
                
    }

    else{
        input.style.background = "#f4cccc";
        msg.textContent = "❌ Oops!! Your password is very weak and easily crackable";
                
    }

   


}






