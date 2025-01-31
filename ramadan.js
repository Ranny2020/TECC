//update audio title dynamically
const audioTitle =
document.getElementById("audio-title");
const audioPlayer =
document.getElementById("audio-player");

const audioData =[{
    title:'Suratul Maryam',
    src:'Ahmad_Sulaiman_1.mp3'
    
}];

//load audio data
audioData.forEach((audio,index)=>{
    const option =
    document.createElement('option');
    option.value = audio.src;
    option.text = audio.title;
    audioPlayer.appendChild(option);
});

//update audio title on change
audioPlayer.addEventListener('change',()=>{
    const selectedAudio = 
    audioPlayer.Value;
    const selectedTitle = 
    audioData.find(audio => audio.src === selectedAudio).title;
    audioTitle.innerText = selectedTitle;
});