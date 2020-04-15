// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
// POST REQUEST TO CREATE A NEW BURGER
  $(".create-form").on("click", function(event) {
    event.preventDefault();

    // var id = $(this).data("id");
    // var done = $(this).data("devoured");

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added " + data + " to the menu");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

// SEND THE PUT REQUEST TO DEVOUR BURGER
$(".burger-devoured").on("click", function(event){
  var id = $(this).data("id");
  var ifDevoured = {
    devoured: 1
  };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: ifDevoured
    }).then(
      function() {
        console.log("Check please");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})
// DELETE REQUEST TO EMPTY TRASH CAN