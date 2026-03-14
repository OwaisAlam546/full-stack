function vote(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var res = document.getElementById('res');

    if(age>=18){
        res.innerHTML = name+" " +"You are eligible";
        
    }
    else{
        res.innerHTML = name+ "" +"You are not eligible";
    }

    alert(age)
    if(age>=18){
        alert("you are Eligible")
    }
    else{
        alert("you are not Eligible")
    }
}