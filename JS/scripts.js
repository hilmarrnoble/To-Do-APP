$(document).ready(function() {

  // 1. Adding a new item to the list of items:
  $('#button').click(function() {
      let inputValue = $('#input').val();
      
      if (inputValue === '') {
          alert("You must write something!");
      } else {
          let li = $('<li></li>').text(inputValue);  // Create the new list item
          
          let crossOutButton = $('<button class="crossOutButton delete"></button>').text('X');  // Create the delete button
          li.append(crossOutButton);  // Append the delete button to the list item
          
          $('#list').append(li);  // Append the new list item to the list
          
          // 2. Crossing out an item from the list of items (Using event delegation)
          li.on('dblclick', function() {
              $(this).toggleClass('strike');  // Toggle strike-through when double-clicked
          });
          
          // 3. Deleting the item when the "X" is clicked:
          crossOutButton.click(function() {
              li.remove();  // Remove the item from the list
          });
          
          // Clear input field after adding the item
          $('#input').val('');
      }
  });

  // 4. Reordering the items:
  $('#list').sortable();  // Make the list sortable
});
