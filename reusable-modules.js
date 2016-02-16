/**
 * Created by Sindt on 15-02-2016.
 */
var personFunc = function(){
    var person = {name: "Bob", age:12 };
    function setAge(val){
        person.age = val;
    }
    function setName(val){
        person.name = val;
    }
    function getInfo(){
        return person.name + " " + person.age;
    }
    return {
        setAgeFunc: function(val){setAge(val);},
        setNameFunc: function(val){setName(val);},
        getInfoFunc: function(){return getInfo();}
    }
};

console.log(personFunc().getInfoFunc());