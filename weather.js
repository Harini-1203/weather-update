

const apikey='1f79230c1f970979983f6900ae80b071';
const apiurl='https://api.openweathermap.org/data/2.5/weather?q=';
const unit="&&units=metric";


document.querySelector('button').addEventListener('click',function(){
    document.querySelector('button').classList.add('buttonhover');

    setTimeout(function(){
        document.querySelector('button').classList.remove('buttonhover');
    },200);
    var inpvalue=document.querySelector('input').value;
    weatherup(inpvalue);
    document.querySelector('input').classList.remove('inputhover');

})
document.querySelector('input').addEventListener('mousedown',mouse);


async function weatherup(cityname){
    const response=await fetch(apiurl+cityname+unit+'&apikey='+apikey);
    var data=await response.json();
    
    console.log(data);

    city.innerHTML=data.name;
    degree.innerHTML=data.main.temp+"°C";
    
    document.querySelector('img').src='images/'+data.weather[0].main+'.png';
    console.log("image works");
}

function mouse(){   
    document.querySelector('input').classList.add('inputhover');
}






