require('dom-console')({ console: true, initAction: 'minimize' })

var yo = require('yo-yo')
var csjs =require('csjs-inject')


module.exports = demoCA

var welcomeBox = require('welcome-box')
var anotherBox = require('another-box')

function demoCA ({
  theme : { color : color = '#00ffff' },
  data  : { name  : name  = 'anonymous' }
} = {}) {

  var box1 = welcomeBox({ theme: { color: 'blue' }, data: { name: name } })
  var box2 = welcomeBox({ theme: { color: color }, data: { name: 'world!' } })

  var anotherbox1 = anotherBox({ data: { name: '123!' } })
  var anotherbox2 = anotherBox({ data: { name: 'aaa!' } })

  var component = document.createElement('div')

  component.appendChild(box1)
  component.appendChild(box2)
  component.appendChild(anotherbox1)
  component.appendChild(anotherbox2)

  return component
}
