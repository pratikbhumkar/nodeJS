
// var hey=function(){
//     console.log('hello world from a hey');
//     return 'from hey';
// };
// //console.log(hey())
// module.exports=hey;

const Events= require('events')

myEmitter= new Events();



myEmitter.on('someEvent',function(msg){
    console.log(msg)
})

myEmitter.emit('someEvent','Event fired')

var person = function(name){
    this.name=name
} 

var j= new person('James')
// var a= new person('amy')

util= require('util')
util.inherits(person, Events)

j.on('speak',function(){
    console.log(j.name+' has spoken')
})

j.emit('speak')