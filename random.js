
document.getElementById('id').style.display = 'none';

let id1 = document.getElementById('id');

let page = window.location.href;

let key = document.getElementById('id');

var iframe2 = document.createElement('iframe');


// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(iframe2);
iframe2.setAttribute("style","height:1px;width:1px;display:none;");
iframe2.setAttribute("src","https://app.twayobiz.com/current-plan?key=" + key.innerText);

setTimeout(() => {
  showWidg()
}, 14000);

function showWidg() {


window.addEventListener("message", event => {
let plan = event.data.plan;
let bgcolor = '#03c2fc';
let questionone = event.data.questionone;
let questiontwo = event.data.questiontwo;
let questionthree = event.data.questionthree;
let helplink = event.data.helplink;

if (plan !== 'Basic') {
  let message = '-';

        if (event.data.color !== 'undefined') {
  let bgcolor = event.data.color;

  var widget1 = document.createElement('div');


// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(widget1);
widget1.setAttribute("style","position: fixed;bottom: 5;right: 5;");
widget1.innerHTML = `
<style>
p {
font-size: 12px;
font-family: arial;
}
h3 {
font-family: arial;
}
#water
   position: absolute;
   bottom: 10px;
   left: 10px;
}
</style>
<div id="obwidget">
<div id="obpop" style="osition: relative; height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <h3 style="font-size: 20px">
          Send message
    </h3>
        <br />
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <br />
        <label for="element" style="font-size: 14px; font-family: arial">Element</label>
        <input type="number" name="input4" id="element" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" onchange="change()" />
        <br />
        <input type="hidden" id="pag" name="screencap" value="${page}" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br />
        <label for="message" style="font-size: 14px; font-family: arial">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;"></textarea>
        <br />
        <button onclick="sendbug()" type="text"-webkit-appearence: none; -moz-appearence: none; appearence: none; style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 7px; margin-top: 5px; margin-bottom: 5px;">
          Send
        </button>
      <br />
      <p>
       ${message}
      </p>
      <br />
      <p style="display: none;" id="sonly">
       Message submitted
      </p>
    </div>
    <br />
    <button type="text" style=" color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 12px; border-radius: 5px;" onclick="togg()">Help</button>
  </div>`;
}
else {
let bgcolor = '#03c2fc';
}
}
else {
  let message = '<img src="https://twayobiz.com/twayobiz1-icon-color.png" style="width: 14px; height: 14px;"> Created with <a href="https://twayobiz.com" target="_blank" style="color: black; text-decoration: underline;">twayobiz</a>';

      if (event.data.color !== 'undefined') {
  let bgcolor = event.data.color;
}

      var widget1 = document.createElement('div');


// div tag in which iframe will be added should have id attribute with value myDIV
document.getElementsByTagName('body')[0].appendChild(widget1);
widget1.setAttribute("style","position: fixed;bottom: 5;right: 5;");
widget1.innerHTML = `
<style>
p {
font-size: 12px;
font-family: arial;
}
h3 {
font-family: arial;
}
div.absolute {
   position: absolute;
   bottom: 10px;
   left: 10px;
}
div.relative {
position: relative;
}
</style>
<div id="obwidget">
<div class="relative" id="obpop" style="height: 280px; color: black; border: 1px solid white; padding: 5px; background-color: white; display: none; border-radius: 10px; box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -webkit-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1); -moz-box-shadow: 1px 1px 34px -13px rgba(0,0,0,1);">
    <h3 style="font-size: 20px !important;">
          Send message
    </h3>
        <label for="email" style="font-size: 14px; font-family: arial">Email</label>
        <input type="email" name="input1" id="email" style="-webkit-appearence: none !important; -moz-appearence: none !important; appearence: none !important; margin-bottom: 5px !important; outline: none !important; border: 1px solid black !important; border-radius: 5px !important;" />
        <input type="hidden" id="pag" name="screencap" value="${page}" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" />
        <input type="hidden" name="key" value="${key.innerText}" />
        <br />
        <label for="element" style="font-size: 14px; font-family: arial">Element</label>
        <input type="number" name="input4" id="element" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; margin-bottom: 5px; outline: none; border: 1px solid black; padding: 5px; border-radius: 5px;" onchange="change()" />
        <br />
        <label for="message" style="font-size: 14px  !important; font-family: arial  !important">Message</label>
        <textarea name="input2" id="message" style="-webkit-appearence: none !important; -moz-appearence: none !important; appearence: none !important; margin-bottom: 5px !important; outline: none !important; border: 1px solid black !important; padding: 5px !important; border-radius: 5px !important;"></textarea>
        <br />
<button onclick="sendbug()" type="text"  style="-webkit-appearence: none !important; -moz-appearence: none !important; appearence: none !important; color: white !important; background-color: ${bgcolor} !important; border: none !important; cursor: pointer !important; padding: 7px !important; margin-top: 5px !important; margin-bottom: 80px !important;">
          Send
        </button>
      <div style="margin-top: 0px;" class="absolute">
       <p>${message}</p>
      </div>
      <p style="display: none;" id="sonly">
       Message submitted
      </p>
    </div>
    <br/>
    <button type="text" style="-webkit-appearence: none; -moz-appearence: none; appearence: none; color: white; background-color: ${bgcolor}; border: none; cursor: pointer; padding: 12px; border-radius: 5px;" onclick="togg()">Help</button>
  </div>`;




})
    
  





}
