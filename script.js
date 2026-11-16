const title = document.getElementById('title');
const content = document.getElementById('content');
const savebtn = document.getElementById('savebtn');
const displaybtn = document.getElementById('display');
const displaytitle = document.getElementById('displaytitle');
const displaycontent = document.getElementById('displaycontent');
const clearbtn = document.getElementById('clearbtn');
savebtn.addEventListener('click',function(){
    localStorage.setItem('savedtitle',title.value);
    localStorage.setItem('savedcontent',content.value);
    alert('the note was saved')   
})
displaybtn.addEventListener('click',function(){
    const savedtitle = localStorage.getItem('savedtitle') || '';
    const savedcontent = localStorage.getItem('savedcontent') || '';
    displaycontent.innerText=savedcontent;
    displaytitle.innerText=savedtitle;

})
clearbtn.addEventListener('click',function(){
    localStorage.removeItem('savedtitle');
    localStorage.removeItem('savedcontent');
    title.value=''
    content.value=''
    displaytitle.innerText=''
    displaycontent.innerText=''
})
