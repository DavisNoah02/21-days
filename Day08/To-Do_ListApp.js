// script.js
$(document).ready(function() {
    $('#addTaskBtn').click(function() {
      var task = $('#taskInput').val();
      if (task !== '') {
        var listItem = $('<li>').text(task);
        var deleteButton = $('<button>').text('Delete').addClass('deleteBtn');
        listItem.append(deleteButton);
        $('#taskList').append(listItem);
        $('#taskInput').val('');
      }
    });
//   deleting the task using Delete btn
    $(document).on('click', '.deleteBtn', function() {
      $(this).parent().remove();
    });
  
    $(document).on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });

//   dfgnf
// script.js
// $(document).ready(function() {
//     $('#addTaskBtn').click(function() {
//       var task = $('#taskInput').val();
//       if (task !== '') {
//         $('#taskList').append('<li>' + task + '</li>');
//         $('#taskInput').val('');
//       }
//     });
  
//     $('#taskList').on('click', 'li', function() {
//       $(this).toggleClass('completed');
//     });
//   });
  