var state = {
  clicked: 0
}

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
    reposVisible: true
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    },
    getRepos: function() {
      this.reposVisible ? this.reposVisible = true : this.reposVisible = false;
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
      },
    clearRepos: function() {
      document.getElementById('list').innerHTML = ''
    }
    }
  })

var app_3 = new Vue({
  el: '#app_3',
  data: {
     message: `Greetings! You loaded this page on ${new Date().toLocaleString()}!`,
     peopleList: [{text: "Mike", id: 1, career:'doctor'}, {text:"John", id:2, career:'doctor'}, {text:"Alexis", id:3, career:'doctor'}],
     seen: true
  }
})

handleSubmit = (e) => {
  app_3.seen ? app_3.seen = false : app_3.seen = true;
}

Vue.component('list-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}  |   {{todo.career}}</li>'
})
