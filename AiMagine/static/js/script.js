const submit_btn=document.getElementById('generate-btn')
submit_btn.addEventListener('click',function(){
    let prompt=document.getElementById('promptholder').value
    console.log('value obtained:',prompt);
    
    fetch('http://127.0.0.1:8000/api/prompt/',{method:'POST',headers:{
        "Content-Type": "application/json", // Add Content-Type header
        "X-CSRFToken": getCookie("csrftoken") },body:JSON.stringify({'prompt':prompt})})
    .then(response=>response.json())
    .then(response =>{if (response.ok){console.log('ok');}
        else{console.log('error');}
    })
    .catch(error => {
        console.error('API request failed:', error);
    }) 
    .then(data =>{console.log({'data received':data})});
    
})
// Function to retrieve CSRF token (required for Django)
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }