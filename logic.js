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
set();
function set(){
    document.getElementById('name_').innerText="Name: "+document.getElementById('name').value;
    document.getElementById('address_').innerText="Address: "+document.getElementById('address').value;
    document.getElementById('dob_').innerText="DOB: "+document.getElementById('dob').value;
    document.getElementById('fhname_').innerText="F/H Name: "+document.getElementById('fhname').value;
    document.getElementById('name_').innerText="Name: "+document.getElementById('name').value;
    document.getElementById('pp').src=document.getElementById('imgonline').value;
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

