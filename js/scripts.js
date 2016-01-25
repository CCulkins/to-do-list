function Task(task, place, deadline) {
  this.task = task;
  this.place = place;
  this.deadline = deadline;
}
$(document).ready(function() {
  $("form#add-task").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#new-task").val();
    var inputPlace = $("input#new-place").val();
    var inputDeadline = $("input#new-deadline").val();
    var newTask = new Task(inputTask, inputPlace, inputDeadline);

    $("tbody").append("<tr><td class='task'>" + newTask.task + "</td><td class='place'>" + newTask.place + "</td><td class='deadline'>" + newTask.deadline + "</td></tr>")

    $("input#new-task").val("");
    $("input#new-place").val("");
    $("input#new-deadline").val("");
  });
});
