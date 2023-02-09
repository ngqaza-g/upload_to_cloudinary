const fileInput = document.getElementById("image");


fileInput.addEventListener('change', (e)=>{
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function(){
        console.log(reader.result);

        fetch('/api/upload', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({file: reader.result})
        })
        .then((res)=>{
            res.status === 200 ? console.log("File Uploaded") : ""
        })
        .catch(e => console.log("An error occured"));
    }
});