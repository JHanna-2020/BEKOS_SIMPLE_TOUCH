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

function txtFile(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone")
    var cdate = document.getElementById("cdate");
    var edate = document.getElementById("edate");
    var comments = document.getElementById("comments");
    var price = "$10.99"
    let data = "\r Name: " + fname.value + " " + lname.value + " \r\n " + "Email: " + email.value + " \r\n " + "Phone: " + phone.value + " \r\n " + "Current Date: " + cdate.value + " \r\n " + "Event Date: " + edate.value + " \r\n " + "Price: " + price + " \r\n" + "Comments: " + comments.value;
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = "invoice";
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = "invoice";

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();



}


 














