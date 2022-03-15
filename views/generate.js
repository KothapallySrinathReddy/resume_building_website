/*const btn=document.querySelector(".nexthead")
var path=window.location.pathname;
var heading={}
if(path=="/headin.html"){
    const btn = document.querySelector(".nexthead")
    btn.addEventListener("click", function(){
        const fname=document.getElementById("fname");
        const prof=document.getElementById("prof");
        const city=document.getElementById("city");
        const zip=document.getElementById("zip");
        const phone=document.getElementById("phone");
        const email=document.getElementById("email");
        heading[fname]=fname.value;
        heading[prof]=prof.value
        heading[city]=city.value;
        heading[zip]=zip.value;
        heading[phone]=phone.value;
        heading[email]=email.value;
        console.log(heading);
        window.location.href="/education.html";
    })


}
console.log(heading.fname);
console.log(heading);
/*function getdata(){
    fname=document.getElementById('fname').value
    console.log(fname)
}
btn.addEventListener("click", getdata)
const changedata=function(){
    const elem= document.getElementById("name2r")
    elem.innerHTML=heading.fname
    console.log(heading.fname)
}

const generateCv=async ()=>{
    url = 'resume.html?name=' + encodeURIComponent(heading.fname)
    window.location.href=url;
    setTimeout(changedata(), 1000);

}*/

const storedata=function(){
    const fname=document.getElementById("fname");
        const prof=document.getElementById("prof");
        const city=document.getElementById("city");
        const zip=document.getElementById("zip");
        const phone=document.getElementById("phone");
        const email=document.getElementById("email");

    localStorage.setItem("name",fname.value)
    localStorage.setItem("prof",prof.value)
    localStorage.setItem("city",city.value)
    localStorage.setItem("zip",zip.value)
    localStorage.setItem("phone",phone.value)
    localStorage.setItem("email",email.value)
    

   //window.location.href='education.html'
}

const storeEDdata=function(){
    const school=document.getElementById("school");
        const sloc=document.getElementById("sloc");
        const degree=document.getElementById("degree");
        const fos=document.getElementById("fos");
   

    localStorage.setItem("school",school.value)
    localStorage.setItem("sloc",sloc.value)
    localStorage.setItem("degree",degree.value)
    localStorage.setItem("fos",fos.value)
    
    

   //window.location.href='education.html'
}

const storeSKdata=function(){
    const langs=document.getElementById("langs");
    const skills=document.getElementById("skills");
   

    localStorage.setItem("langs",langs.value)
    localStorage.setItem("skills",skills.value)
    
    

   //window.location.href='education.html'
}

const generateCv=function(){
    storeSKdata()
    //window.location.href='resume.html'
    window.location.href='resume.html'
}
