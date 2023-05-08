import './style.css'

const pageLoad = (() => {
    function onLoad (){
        let form = document.querySelector('form')
        form.addEventListener('submit', (event)=>{
            if(true){
              event.preventDefault()
              showError()
            } else{ submitClick(event)
          
            }
          })
    }
    return{
        onLoad
    }
 } )()

 const errorHandler = (() => {
    function showError(){
       
    }
    return{
        showError
    }
 } )()

 const validityHandler = (() => {
    function valid (){
        let email = document.getElementById('email')
        let zip = document.getElementById('zip')
        let country = document.getElementById('country')
        let password = document.getElementById('password')
        let password2 = document.getElementById('passwordc')

        
    }
    return{
        
    }
 } )()

pageLoad.onLoad()