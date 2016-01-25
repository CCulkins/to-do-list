function Task(task, place, deadline) {
  this.task = task;
  this.place = place;
  this.deadline = deadline;
}
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputTask = $("input#new-task").val();
    var inputPlace = $("input#new-place").val();
    var inputDeadline = $("input#new-deadline").val();

  });
});
