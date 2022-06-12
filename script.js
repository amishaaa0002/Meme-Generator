const generateMemeBtn=document.querySelector(".container .meme-generator");
const titleName=document.querySelector(".container .title");
const image=document.querySelector(".container img")
const authorName=document.querySelector(".container .author")




const updateDetails=(url,title,author)=>{
    image.setAttribute("src",url);
    titleName.innerHTML=title;
    authorName.innerHTML=`Meme by: ${author}`;
}
const generateMeme = () => {

    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then((data)=>{
       updateDetails(data.url , data.title , data.author );
    });

};
generateMemeBtn.addEventListener("click",generateMeme)
generateMeme();