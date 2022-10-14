let upload = document.getElementById('upload');
let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hue = document.getElementById('hue-rotate');
let reset = document.querySelector('span');
let download = document.getElementById('download');
let img = document.getElementById('img');
let imagesbox = document.querySelector('.imagesbox');

 
function resetValue(){
img.style.filter='none';
//and all values return to begain point
saturate.value='100';
contrast.value='100';
brightness.value='100';
sepia.value='0';
grayscale.value='0';
blur.value='0';
hue.value='0';
}
window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
    imagesbox.style.display='none';
}
//files of file type acting like an array 
upload.onchange=function(){
    resetValue();
    download.style.display='block';
    reset.style.display='block';
    imagesbox.style.display='block';
    let file =new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src=file.result;
    }}
//this for only one affact is true 
//saturate.addEventListener('input',function(){
  //  img.style.filter=`saturate(${saturate.value}%)`;
//})
//for all filters one works and stay tuned for rest
let allfilters = document.querySelectorAll ("ul li input");
allfilters.forEach(filter=>{
   
    filter.addEventListener("input",function(){
        img.style.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue.value}deg)
        `
    
    })
})
download.onclick= function(){
    download.href= img.src;
}