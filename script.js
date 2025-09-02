console.log(document);

function getElement(id) {
  return document.getElementById(id);
}

let coins = 100;
const coinSpan = document.getElementById("coinCount");
coinSpan.innerText = coins;

const callBtns = document.getElementsByClassName("btn-call");

for (let callButton of callBtns) {
  callButton.addEventListener("click", function () {
    
    if (coins < 20) {
      alert("Not enough coins! At least 20 coins are needed.");
      return; 
    }

    
    coins -= 20;
    coinSpan.innerText = coins;

    
    const callTitle = callButton.parentNode.parentNode.childNodes[1].innerText;
    const callNumber = callButton.parentNode.parentNode.childNodes[5].childNodes[0].innerText;

    let now = new Date();

    
    const callLog = getElement("call-log");
    const newCall = document.createElement("div");

    newCall.innerHTML = `
      <div class="bg-gray-200 mx-[14px] mt-[24px] rounded-xl flex justify-between p-4">
        <div>
          <h2 class="font-bold">${callTitle}</h2>
          <h2 class="">${callNumber}</h2>
        </div>
        <div>${now.toLocaleTimeString()}</div>
      </div>
    `;
    callLog.prepend(newCall); 

    alert(`📞 Calling ${callTitle} at ${callNumber}`);
  });
}


  document.getElementById("btn-clear").addEventListener("click", function(){
    const callLog=getElement("call-log");
    callLog.innerHTML= "";
  });


let count = 0;
const countSpan = document.getElementById("copyCount");

const buttons = document.querySelectorAll(".btn-copy");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        
        const card = btn.closest(".card");
        const text = card.querySelector(".co").innerText;

        navigator.clipboard.writeText(text).then(() => {
          
          const original = btn.innerText;
          alert("Copied: " + text);
          count++;
          countSpan.innerText = count;
        });
      });
    });

const heartSpan = document.getElementById("heartCount");
let heartCount = localStorage.getItem("heartCount") ? parseInt(localStorage.getItem("heartCount")) : 0;

heartSpan.innerText = heartCount;

 const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart) => {
      heart.addEventListener("click", () => {
        heartCount++;
        heartSpan.innerText = heartCount;       
});
    });