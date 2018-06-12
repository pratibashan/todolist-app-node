
let btnSave = document.getElementById('btnSave')
let txtTitle = document.getElementById('txtTitle')
let txtPriority = document.getElementById('txtPriority')
let txtDateCreated= document.getElementById('txtDateCreated')
let txtDateCompleted = document.getElementById('txtDateCompleted')
let txtCompleted = document.getElementById('txtCompleted')


btnSave.addEventListener('click',function(){

    fetch('http://localhost:3000/todolist',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      title : txtTitle.value,
      priority :txtPriority.value,
      dateCreated : txtDateCreated.value,
      dateCompleted :txtDateCompleted.value,
      isCompleted : txtCompleted.value
    })
  }).then(function(response){
    return response.json()
  }).then(function(json){
    console.log(json)
  })

})
