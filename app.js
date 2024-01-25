// variable
let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector('button');
let voices = [];
let voiceSelect = document.querySelector("select");

if (browser() === "Firefox"){
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
    speech.voice = voices[0];
    voices.forEach((voice,i)=> {
        voiceSelect.options[i] = new Option(voice.name,i);
    });
}else{
    window.speechSynthesis.onvoiceschanged = () =>{
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
        speech.voice = voices[0];
        voices.forEach((voice,i)=> {
            voiceSelect.options[i] = new Option(voice.name,i);
        });
    };
}

// eventlisteners
eventlisteners()
function eventlisteners(){
    btn.addEventListener('click', () =>{
        speech.text = document.querySelector('textarea').value;
        window.speechSynthesis.speak(speech);
    })
    voiceSelect.addEventListener("change",()=>{
        speech.voice = voices[voiceSelect.value];
    })
}






