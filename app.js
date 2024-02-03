let app = window.Telegram.WebApp;

app.expand();

app.MainButton.textColor = "#FFFFFF";
app.MainButton.color = "#2cab37";

let item = "данные";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", OnClick);
function OnClick()
{
    if(app.MainButton.isVisible)
    {
        app.MainButton.hide();
    }
    else
    {
        app.MainButton.setText("вы нажали на кнопку");
        app.MainButton.show();
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", OnInit);
function OnInit()
{
    Telegram.sendData(item);
}

let userInfo = document.getElementById("userInfo");

let p = document.createElement("p");
p.innerText = `${app.initDataUnsafe.user.first_name} ${app.initDataUnsafe.user.last_name}`;

userInfo.appendChild(p);
