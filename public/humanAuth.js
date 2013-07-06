// get the span element
var humanButton = document.getElementsByClassName('humanAPIAuthButton');

// check to make sure there is only 1
if (humanButton.length === 0) {console.log('please add humanAPIAuthButton span to page');}
if (humanButton.length >= 2) {console.log('please only add one instance of humanAPIAuthButton to the page');}

// write our button styles and append them to the page
var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".humanPopup { height: 50px!important;line-height: 36px;font-size: 20px;background: #ececec;font-weight:bold;padding: 0 1em;border: 1px solid #999;border-radius:5px;box-sizing:content-box;}.humanPopup:hover{border-color:#518cc6;border-bottom-color:#2a65a0;color:#fff;background-color:#599bdc;background-image:linear-gradient(#599bdc,#3072b3)}";
  document.body.appendChild(css);

function createHumanButton() {
    var button = document.createElement("img");
    button.setAttribute("src", "/img/connect-w.png")
    // button.setAttribute("type", "button");
    // button.setAttribute("value", "connect human/api");
    button.setAttribute("name", "humanAPIAuthButton");
    button.setAttribute("style", "width:50%;margin:auto;")
    // button.setAttribute("class", "humanPopup");
    // button.setAttribute("background", "transparent url('img/connect-b.png') no-repeat;");

    button.setAttribute("onclick", "authHumanAPI()");
    humanButton[0].appendChild(button);
}

function popupwindow(url, title, w, h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

function authHumanAPI() {
  var callback = humanButton[0].getAttribute('data-target');
  popupwindow(callback, 'humanapi-auth', 600, humanButton[0].getAttribute('data-window-height'));
}

createHumanButton();