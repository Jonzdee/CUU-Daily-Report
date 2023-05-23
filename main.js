
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwUAx0aXxmXF1T2qQzxjWBTSkirD1gEFWx-BXv6Bjx9ZQjPvGeBRTuOzD8etN5HKe_s/exec'
  const form = document.forms['submit-to-google-sheet']
  
  const msg = document.getElementById('msg')
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
          swal("Good job!", "You Have Submitted Your Report! ", "success");
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
  