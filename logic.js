function togg(e){
    if(e.innerText=='Data'){
        var t=document.querySelector('.data');
        t.style.display="flex";
        e.innerText='Close';
    }else{
         var t=document.querySelector('.data');
        t.style.display="none";
        e.innerText='Data';
    }
    
}
let d=true;

set();
function set(){

    let fixedName1=document.getElementById('name').value;
    let image;
    if(fixedName1=="salfet sigdel"){
        image="https://i.ibb.co/svDnSDJY/salfet.png";
    }else if(fixedName1=="samir bhandari"){
        image="https://i.ibb.co/j2TnmrF/samir.png";
    }
    else{
        image=document.getElementById('imgonline').value;
    }
    if(d){
        image="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg";
        d=false;
    }
    console.log(fixedName1.toLowerCase());
    document.getElementById('name_').innerText="Name: "+document.getElementById('name').value;
    document.getElementById('address_').innerText="Address: "+document.getElementById('address').value;
    document.getElementById('dob_').innerText="DOB: "+document.getElementById('dob').value;
    document.getElementById('fhname_').innerText="F/H Name: "+document.getElementById('fhname').value;
    document.getElementById('name_').innerText="Name: "+document.getElementById('name').value;
    document.getElementById('pp').src=image;
    document.getElementById('doi_').innerText="D.O.I.:"+document.getElementById('doi').value;
    document.getElementById('doe_').innerText="D.O.E.:"+document.getElementById('doe').value;
    document.getElementById('pn_').innerText="Passport:"+document.getElementById('pn').value;
    document.getElementById('cn_').innerText="Citizen:"+document.getElementById('cn').value;
    document.getElementById('bg_').innerText="B.G.:"+document.getElementById('bg').value;
    document.getElementById('cat_').innerText="Category:"+document.getElementById('cat').value;
    document.getElementById('phone_').innerText="Phone:"+document.getElementById('phone').value;
    document.getElementById('dl_').innerText="D.l.:"+document.getElementById('dl').value;
}
function downloadDivAsImage() {
    const element = document.getElementById("capture");

    html2canvas(element).then(canvas => {
      const imageData = canvas.toDataURL("image/png");
      
     
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "div-image.png";
      link.click();
    });
  }
