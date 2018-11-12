"use-strict"; 

function ToDoInfo(){
    const vm = this;
    vm.listitems = 
        [
            {task: "Walk the dog", completed: false},
            {task: "Go to the store", completed: false},
            {task: "Get Gas", completed: false},
            {task: "Wash the car", completed: false},
        ];

    vm.removeTask = (index) => {
        vm.listitems.splice(index, 1);
    };

    vm.addTask = (task) => {
        vm.listitems.push({
            task: task,
            completed: false
        });
        vm.listitems.task = ""; 
    };

    vm.completeTask = (index, completed) => {
        vm.listitems[index].completed = true; 
    };

    vm.inComplete = (index, completed) => { 
        vm.listitems[index].completed = false; 
        vm.tempIndex = index;   
        vm.showForm = false; 
    };


    vm.editTask = (index, info) => {
        vm.showForm = true; 
            vm.tempTask = {
                task: info.task,
        }
        vm.tempIndex = index;   
    };

    vm.updateTask = (index, info) => {
        vm.listitems.splice(index, 1, {
            task: info.task,
            completed: false
        });
        vm.showForm = false; 
    };



};

angular
    .module("ToDoList")
    .controller("ToDoInfo", ToDoInfo);