var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app_2 = new Vue({
  el: '#app_2',
  data: {
    message: 'Wow, another message!',
    github: function() {
      var myInit = {
        method: 'GET',
        headers: {
          Authorization: `token INSERTTOKEHERE`
        }
      }
      fetch('https://api.github.com/users/mdjurdj1/repos', myInit).then(response => {
        return response.json()
      }).then(json => {
        json.forEach(r => {
          let node = document.createElement('LI')
          let textNode = document.createTextNode(`${r.name}`)
          node.appendChild(textNode)
          document.getElementById('list').appendChild(node)
      })
    })
  }()
}
})

handleSubmit = () => {
  alert('hey')
}
