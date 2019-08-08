    //节流
   const  debounce=function(func,wait){
        let start=+new Date()
        return function(){
          let cur=+new Date();
          if(cur-start>wait){
              func(...arguments)
              start=cur
          }
        }
     }

     export {debounce}