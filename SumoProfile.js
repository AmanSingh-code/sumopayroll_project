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