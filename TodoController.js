"use-strict"; 

function ToDoInfo(){
    const vm = this;
    vm.listitems = 
        [
            {task: "Walk the dog", completed: true},
            {task: "Go to the store", completed: false},
            {task: "Get Gas", completed: false},
            {task: "Wash the car", completed: true}
        ];

    vm.removeItem = (index) => {
        vm.listitems.splice(index, 1);
    };

};

angular
    .module("ToDoList")
    .controller("ToDoInfo", ToDoInfo);