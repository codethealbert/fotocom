var page = require('page');
var empty = require('empty-element');
var template = require('./template.js');
var title = require('title');

page('/', function(ctx, next){
  title('FotoCom');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user:{
        username: 'codethealbert',
        avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'
      },
      url: 'office.jpg',
      likes: 45,
      liked: true
    },
    {
      user:{
        username: 'codethealbert',
        avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'
      },
      url: 'office.jpg',
      likes: 5,
      liked: true
    }
  ];

  empty(main).appendChild(template(pictures));
})
