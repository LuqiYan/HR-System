multi.service('userData', function($location) {
    var users = [
        {id:1, fName:'Hege', lName:"Pege", sex: "Male", age: "23" },
        {id:2, fName:'Kim',  lName:"Pim", sex: "Male", age: "25" },
        {id:3, fName:'Sal',  lName:"Smith", sex: "Male", age: "37" },
        {id:4, fName:'Jack', lName:"Jones", sex: "Male", age: "20" },
        {id:5, fName:'John', lName:"Doe", sex: "Male", age: "44" },
        {id:6, fName:'Peter',lName:"Pan", sex: "Male", age: "57" },
        {id:7, fName:'Joyce', lName:"Allan", sex: "Female", age: "33" },
        {id:8, fName:'Lily',  lName:"Pim", sex: "Female", age: "58" },
        {id:9, fName:'Lucy',  lName:"Elias", sex: "Female", age: "32" },
        {id:10, fName:'Mary', lName:"Ellison", sex: "Female", age: "45" },
        {id:11, fName:'Linda', lName:"Oliva", sex: "Female", age: "41" },
        {id:12, fName:'Amanda',lName:"Wills", sex: "Female", age: "34" }
    ];
    var i;
    var num = users.length;
    var eUser = null;


    this.saveUser = function(user) {
        if (user.id == null){
            user.id = num++;
            users.push(user);
        }
        else {
            for (i in users) {
                if (users[i].id == user.id){
                    users[i] = user;
                }
            }
        }
    };

    this.getUser = function(id) {
        for (i in users) {
            if (users[i].id == id){
                return users[i];
            }
        }
    };

    this.deleteUser = function(id) {
        for (i in users) {
            if (users[i].id == id) {
                users.splice(i, 1);
            }
        }
    };


    this.list = function() {
        return users;
    };

    this.go = function (path) {
        $location.path(path);
    };
});
