var textbox=document.getElementById('textbox');
textbox.addEventListener('input',function(){
    var text= this.value;
    var characters=text.length;
    document.getElementById('character').innerHTML=characters;
    text=text.trim();
    var words=text.split(" ");
    document.getElementById("word").innerHTML=words.length;
});