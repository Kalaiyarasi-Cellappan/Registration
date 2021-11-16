function validage(age){
  if(age>=1 && age<=99)
  {
    return 1;
  }
  else{
    return 0;
  }
  
}

function validName(name)
{
  let regName = /^[a-zA-Z]+$/;
  if(regName.test(name))
  {
  return 1;
  }
  else
  {
  return 0;
  }
}

function validMail(mail){
  let regName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regName.test(mail))
        {
        return 1;
        }
        else
        {
        return 0;
        }
}


function validPwd(pwd){
  let regName = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(regName.test(pwd))
        {
        return 1;
        }
        else
        {
        return 0;
        }
}

let kalai = document.getElementById("register");


var but = document.getElementById('subbut');
but.addEventListener('click',(e) => {
e.preventDefault();
var name1 = document.getElementById('name').value;
var age1 = document.getElementById('age').value;
var mail1 = document.getElementById("mail").value;
var pwd1 = document.getElementById("psw").value;

var one = validName(name1);
var two = validage(age1);
var three = validMail(mail1);
var four = validPwd(pwd1);

if(one === 0 || two === 0 || three === 0 || four === 0 ){
if(one === 0)
{
  alert("Only alphabet is valid and the numbers is not allowed")
}
if(two === 0)
{
  alert("age must be within 1 to 99");
}
if(three === 0){
  alert("valid mail id will be in the form(xxx@fff.com)")
}
if(four === 0)
{
  alert("Must contain at least one number and one uppercase and lowercase letter and one special characters, and at least 8 or more characters ")
}
}
else{
    if(one===1)
    {
     let namediv = document.createElement("div");
     kalai.appendChild(namediv);
     let namelabel = document.createElement("label");
     namelabel.setAttribute("for","label1");
     namelabel.innerHTML = "Name:";
     namediv.appendChild(namelabel);
     let nameinp = document.createElement("input");
     nameinp.setAttribute("type","text");
     nameinp.class="form-control mt-1";
     nameinp.id="nametext1";
     namediv.appendChild(nameinp);
     document.getElementById("nametext1").value=name1;
    }

    if(two===1)
    {
    let agediv = document.createElement("div");
    kalai.appendChild(agediv);
    let agelabel = document.createElement("label");
    agelabel.setAttribute("for","label1");
    agelabel.innerHTML = "Age:";
    agediv.appendChild(agelabel);
    let ageinp = document.createElement("input");
    ageinp.setAttribute("type","text");
    ageinp.class="form-control mt-1";
    ageinp.id="Agetext";
    agediv.appendChild(ageinp);
    document.getElementById("Agetext").value=age1;
    }

    if(three===1)
    {
    let maildiv = document.createElement("div");
    kalai.appendChild(maildiv);
    let maillabel = document.createElement("label");
    maillabel.setAttribute("for","label1");
    maillabel.innerHTML = "Email:";
    maildiv.appendChild(maillabel);
    let mailinp = document.createElement("input");
    mailinp.setAttribute("type","text");
    mailinp.class="form-control mt-1";
    mailinp.id="Emailtext";
    maildiv.appendChild(mailinp);
    document.getElementById("Emailtext").value=mail1; 
    }

    if(four===1)
    {
    let passdiv = document.createElement("div");
    kalai.appendChild(passdiv);
    let passlabel = document.createElement("label");
    passlabel.setAttribute("for","label1");
    passlabel.innerHTML = "Password:";
    passdiv.appendChild(passlabel);
    let passinp = document.createElement("input");
    passinp.setAttribute("type","text");
    passinp.class="form-control mt-1";
    passinp.id="pwdtext";
    passdiv.appendChild(passinp);
    document.getElementById("pwdtext").value=pwd1; 
    }
}
})
