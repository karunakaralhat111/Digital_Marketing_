function changeColor(element) {
    const listItems = document.querySelectorAll('.nav-item');
    listItems.forEach(item => {
      item.classList.remove('active');
    });
    
    element.classList.add('active');
  }

//   ============================== Google Sheet ==============

const scriptURL = 'https://script.google.com/macros/s/AKfycbyeTZdgj5awiTjxXej7Znv88BmeOGG9zewAjO-ogI6fEobT3vAFALqI5Uy_eZrq9eDi/exec'
			const form = document.forms['Contactform']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
                form.reset();
			})
            
