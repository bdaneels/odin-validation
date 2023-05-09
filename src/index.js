import './style.css'

const pageLoad = (() => {
    function onLoad (){
        let form = document.querySelector('form')
        form.addEventListener('change', (event)=>{
            if(!validityHandler.valid(event)){
              event.preventDefault()
              errorHandler.showError(event)
            } else{ 
                errorHandler.clearError(event)
          
            }
          })
        form.addEventListener('submit', (event)=>{
            if(true){
              event.preventDefault()
              
            } else{ 
                errorHandler.clearError(event)
          
            }
          })  
    }
    return{
        onLoad
    }
 } )()

 const errorHandler = (() => {
    function showError(event){
        console.log('showerror called')
       let element = document.getElementById(event.target.id)
       let span = element.nextSibling
       let data = span.getAttribute('data')
       
       if(element.validity.valueMissing || !element.validity.valid){
        span.textContent = `Please enter a valid ${data}`
       }

    }

    function clearError(event){
        let element = document.getElementById(event.target.id)
        let span = element.nextSibling
        span.textContent = ''
    }
    return{
        showError,
        clearError
    }
 } )()

 const validityHandler = (() => {
    function valid (event){
        
        /* let email = document.getElementById('email')
        let zip = document.getElementById('zip')
        let country = document.getElementById('country')
        let password = document.getElementById('password')
        let password2 = document.getElementById('passwordc') */

        let element = document.getElementById(event.target.id)

        if(!element.validity.valid || element.validity.valueMissing){
            console.log(`invalid ${element}`)
            return false
        } else {return true}

        
    }
    return{
        valid
    }
 } )()

pageLoad.onLoad()