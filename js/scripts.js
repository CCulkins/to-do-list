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
    var newRow = "<tr><td><input type='checkbox'></td><td class='task'>" + newTask.task + "</td><td class='place'>" + newTask.place + "</td><td class='deadline'>" + newTask.deadline + "</td><td class='up'>&#x21E7;</td><td class='down'>&#x21E9;</td></tr>"

    $("#incompleteTasks tbody").append(newRow);

    $("input#new-task").val("");
    $("input#new-place").val("");
    $("input#new-deadline").val("");

    $('input[type=checkbox]').click(function() {
      var checkedTask = $(this).closest("tr");

      if ($(this).is(":checked")) {
        $('#completedTasks tbody').append(checkedTask);
        $('#incompleteTasks tbody').remove(checkedTask);
      } else {
        $('#incompleteTasks tbody').prepend(checkedTask);
        $('#completedTasks tbody').remove(checkedTask);
      }

    });

    $('.up, .down').click(function() {
      // debugger;
      var selectedRow = $(this).parents('tr:first'), $reindex_start;

      if ($(this).is('.up')) {
        selectedRow.insertBefore(selectedRow.prev());
        $reindex_start=selectedRow;
      } else {
        $reindex_start=selectedRow.next();
        selectedRow.insertAfter($reindex_start);
      }
      var index = $reindex_start.index();
      $reindex_start.nextAll().andSelf().each(function(i){
        $(this).attr(index+i);
      });

    });
  });
});
