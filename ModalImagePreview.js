function modal(imageName, subtitle = ""){
    document.getElementById('modalBG').style.display = "block";
    document.getElementById('modal').innerHTML = '<img img id="modalImg" src=' + imageName + ' class="modalImageContent"></img>';
    document.getElementById('modalSub').innerText = subtitle;
    var img = document.getElementById('modalImg');
    var imgHeight = img.naturalHeight;
    var imgWidth = img.naturalWidth;
    var finalHeight = imgHeight;
    var finalWidth = imgWidth;
    var pageWidth = window.innerWidth * 0.8;
    var pageHeight = window.innerHeight * 0.8;
    if(imgHeight > pageHeight){
        finalHeight = pageHeight;
        finalWidth = imgWidth * (pageHeight / imgHeight);
    }
    if(finalWidth > pageWidth){
        var factor = pageWidth / finalWidth;
        finalWidth *= factor;
        finalHeight *= factor;
    }
    document.getElementById('modalCont').style.width = finalWidth.toString(10) + "px";
    document.getElementById('modalCont').style.height = finalHeight.toString(10) + "px";
}

function modalExit(){
    document.getElementById('modalBG').style.display = "none"; 
}