"use strict";

function add_task() {
  // assign variable for input of text field upon add task button click
  var task_to_add = document.getElementById("task_to_add");
  var tasks_arr = [];
  task_to_add = task_to_add.value;
  // just adds some placeholder text incase field is left empty
  if(task_to_add === "") {
    task_to_add = "Nothing to do, eh?";
  }
  manipulate_list(task_to_add);
  document.getElementById("task_to_add").value = ""; // clears submitted text from the input field
};

function manipulate_list(task_to_add) {
  var add_to_list = document.getElementById("add_to_list"); // targets UL
  var li = document.createElement("LI");
  var li_class = li.setAttribute("class", "list-group-item list-group-item-danger");
  li.appendChild(document.createTextNode(task_to_add)); // binds the input variable to the li
  add_to_list.appendChild(li); // appends it to the list
  create_buttons_container();

    function create_buttons_container() {
      var span = document.createElement("SPAN"); // creates a span element, and span specific classes
      var span_class = span.setAttribute("class", "input-group-btn");
      li.appendChild(span);
      create_complete_button();

        function create_complete_button() {
          var complete_button = document.createElement("BUTTON"); // creates complete button element, and complete button specific classes
          var complete_button_class = complete_button.setAttribute("class", "btn btn-success");
          var complete_task = document.createTextNode("Complete Task");
          span.appendChild(complete_button);
          complete_button.appendChild(complete_task);
          complete_button.setAttribute("id", "complete_button");
          complete_button.addEventListener("click", complete_the_task);
          create_delete_button();
          }

        function create_delete_button() {
          var delete_button = document.createElement("BUTTON"); // creates delete button element, and delete button specific classes
          var delete_button_class = delete_button.setAttribute("class", "btn btn-danger");
          var delete_task = document.createTextNode("Delete Task");
          span.appendChild(delete_button);
          delete_button.appendChild(delete_task);
          delete_button.setAttribute("id", "delete_button");
          delete_button.addEventListener("click", delete_the_task);
        }

        function complete_the_task() {
          li.style.display = "none";
          var completed = document.getElementById("completed");
          li = document.createElement("LI");
          var li_class = li.setAttribute("class", "list-group-item list-group-item-success");
          li.appendChild(document.createTextNode(task_to_add));
          completed.appendChild(li);
          //complete_button_ID.setAttribute("class", "list-group-item list-group-item-success");
        }

        function delete_the_task() {
          li.style.display = "none";
        }
      }
    };
