import './style.css'

const pageLoad = (() => {
    function onLoad (){
        let form = document.querySelector('form')
        form.addEventListener('change', (event)=>{
            if(!validityHandler.valid(event)){
              event.preventDefault()
              let element = document.getElementById(event.target.id)
              errorHandler.showError(element)
            } else{ 
                errorHandler.clearError(event)
          
            }
          })
        form.addEventListener('submit', (event)=>{
            if(!validityHandler.formCheckValid()){
              event.preventDefault()
              
              
            } else{ 
                event.preventDefault()
                console.log('high Five')
          
            }
          })  
    }
    return{
        onLoad
    }
 } )()

 const errorHandler = (() => {
    function showError(element){
        console.log('showerror called')
       
       
       if(element.id==="password"|| element.id==="passwordc"){
            let password = document.getElementById('password')
            let password2 = document.getElementById('passwordc')
            let errorSpan = document.getElementById('passworderror')
            if ( password2.value !== password.value){
                errorSpan.textContent = 'Passwords do not match'
                element.classList.add('invalid')}
                else if (password.validity.valueMissing|| password2.validty.valueMissing){
                errorSpan.textContent = 'Please enter a password'
                element.classList.add('invalid')
                }
            
            }
        else if(element.validity.valueMissing || !element.validity.valid){
            let span = element.nextSibling
            let data = span.getAttribute('data')
            span.textContent = `Please enter a valid ${data}`
            element.classList.add('invalid')
        }

        }
    

    function clearError(event){
        let element = document.getElementById(event.target.id)
        console.log(element)
        
        if(element.id === "password" || element.id === 'passwordc'){
            let errorSpan = document.getElementById("passworderror")
            errorSpan.textContent = ''
            let password = document.getElementById('password')
            let password2 = document.getElementById('passwordc')
            password.classList.remove('invalid')
            password2.classList.remove('invalid')
        }else {
            let span = element.nextSibling
            span.textContent = ''
            element.classList.remove('invalid')
        }
        
    }
    return{
        showError,
        clearError
    }
    } )()

 const validityHandler = (() => {
    function valid (event){
        
        let password = document.getElementById('password')
        let password2 = document.getElementById('passwordc')

        let element = document.getElementById(event.target.id)

        if(element.id === 'password' || element.id === 'passwordc'){
            
            if ( password2.value !== password.value){
                console.log('passwords do not match')
                return false
            } else {return true}
        }
        else if(!element.validity.valid || element.validity.valueMissing){
            console.log(`invalid ${element.id}`)
            return false
        } else {return true}

        
        
    }

    function formCheckValid(){
        let inputs = document.querySelectorAll('input')
        let password = document.getElementById('password')
        let password2 = document.getElementById('passwordc')
        for(let element of inputs){
            console.log(element)
            if(element.id === 'password' || element.id === 'passwordc'){
                
                if( password2.value === '' || password.value === '' ){
                    errorHandler.showError(element)
                    return false
                }
                else if( password2.value !== password.value){
                    console.log('passwords do not match')
                    return false
                }
            }
            else if(!element.validity.valid || element.validity.valueMissing || element.value === ''){
                errorHandler.showError(element)
                return false
            } 
        }
        return true
    }

    return{
        valid,
        formCheckValid
    }
 } )()

pageLoad.onLoad()