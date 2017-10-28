var state = {}

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
    input: 'This field is bound from the Vue.',
    github: function() {
      var myInit = {
        method: 'GET',
        headers: {
          Authorization: `token `
        }
      }
      fetch('https://api.github.com/users/mdjurdj1/repos', myInit).then(response => {
        return response.json()
      }).then(json => {
        state.name = json[0].owner.login
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

var app_3 = new Vue({
  el: '#app_3',
  data: {
     message: `Greetings! You loaded this page on ${new Date().toLocaleString()}!`
  }
})

handleSubmit = (e) => {
  state.submitted ? state.submitted = false : state.submitted = true
  if(state.submitted) {
    app_2.input = 'THE SWITCH IS ON!'
  } else {
    app_2.input = 'The switch is off...'
  }
}
