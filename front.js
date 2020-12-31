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