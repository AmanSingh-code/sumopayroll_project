let icon=document.getElementById("icon1")

icon.addEventListener("mouseover", displayPopup)
  
icon .addEventListener("mouseout", removePopup)


function removePopup(e){
  document.querySelector(".popup").style.display = "none"
}


function displayPopup(e){
//   let val = e.target.getAttribute("data-icon")
  
  let pop = document.querySelector('.popup')
  pop.style.display = "block"
  
}

// <---popup2---->

let icon2=document.getElementById("icon2")

icon2.addEventListener("mouseover", displayPopup2)
  
icon2 .addEventListener("mouseout", removePopup2)


function removePopup2(e){
  document.querySelector(".popup2").style.display = "none"
}


function displayPopup2(e){
  
  let pop = document.querySelector('.popup2')
  pop.style.display = "block"
  
}

// <----------popup3------------>

let icon3=document.getElementById("icon3")

icon3.addEventListener("mouseover", displayPopup3)
  
icon3 .addEventListener("mouseout", removePopup3)


function removePopup3(e){
  document.querySelector(".popup3").style.display = "none"
}


function displayPopup3(e){
  
  let pop = document.querySelector('.popup3')
  pop.style.display = "block"
  
}
// ------------popup4------------------

let icon4=document.getElementById("icon4")

icon4.addEventListener("mouseover", displayPopup4)
  
icon4 .addEventListener("mouseout", removePopup4)


function removePopup4(e){
  document.querySelector(".popup4").style.display = "none"
}


function displayPopup4(e){
  
  let pop = document.querySelector('.popup4')
  pop.style.display = "block"
  
}


//document.getElementById('btn-1').addEventListener("click", loadText);
var tbody = document.querySelector('#cardsbody')

function loadText(){
    var xhr = new XMLHttpRequest();
    var url = 
    "http://api.ipstack.com/202.142.81.140?access_key=6989f83ec351964619ebc695718c5fc5&format=2"

    xhr.open ("GET", url);

    xhr.onload = function (){
        var data = JSON.parse(this.responseText);
        console.log(data.ip)
        var html = "";
        var count =1;
            if( this.readyState == 4 && this.status == 200){
        var list =setInterval(function(){
            
            
                html += `<tr class="list"> 
                    <td>${data.ip}</td>
                    <td>31.12.2020</td>
                    <td>${data.country_name}</td>
                    <td>${data.city}</td>
                    <td>Windows/Chrome-87.0.4280.88</td>
                </tr>`
            
        
        tbody.innerHTML = html;
        count++
        if (count == 10){
            clearInterval(list)
        }

        },1000)
            }    
    };
    xhr.send();
}