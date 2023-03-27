
var txtinput = document.querySelector("#txt-area");
var outputDiv=document.querySelector("div");

var url= "https://api.funtranslations.com/translate/minion.json";

function upURL(text){
var updateURL =url + "?"+"text="+ text;
return updateURL;
}

document.querySelector("button").addEventListener("click", function(){
    console.log("clicked")
    // console.log(txtinput.value)
    
    var inputtext =txtinput.value;
 var newUrl=upURL(inputtext)

 fetch(newUrl)
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerHTML=translatedText;
    }
    )
}
   
);
