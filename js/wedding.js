function weddingSend(){
    let params={
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        cdate: document.getElementById("cdate").value,
        edate: document.getElementById("edate").value,
        comments: document.getElementById("comments").value

    }
    emailjs.send("service_kv1e8b8", "template_1q6loyo", params).then(function(res){alert("Submission Successful")})
}

 


