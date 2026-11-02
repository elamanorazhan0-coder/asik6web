$(document).ready(function () {

  // Task 0
  console.log("jQuery is ready!");

  // Task 1 - selectors and css
  $("h1").css("color", "darkblue");          // tag selector
  $("#headline").css("font-style", "italic"); // id selector
  $(".intro").css("font-size", "18px");       // class selector

  $("#changeHeadline").click(function () {
    $("#headline").text("I am a future developer!");
    $(".intro").html("I am <b>learning</b> jQuery now.");
  });

  $("#darkBtn").click(function () {
    $("body").css({ "background": "#222", "color": "white" });
    $("section, header").css({ "background": "#333", "border-color": "#555" });
    $("h1").css("color", "lightblue");
  });

  $("#lightBtn").click(function () {
    $("body").css({ "background": "#f2f2f2", "color": "#222" });
    $("section, header").css({ "background": "white", "border-color": "#ccc" });
    $("h1").css("color", "darkblue");
  });

  // Task 2 - hide show toggle
  $("#hideBtn").click(function () {
    $("#status, .facts").hide();
  });
  $("#showBtn").click(function () {
    $("#status, .facts").show();
  });
  $("#toggleBtn").click(function () {
    $("#status, .facts").toggle();
  });

  // Task 3 - fade
  $("#fadeInBtn").click(function () {
    $("#gallery img").fadeIn(1000);
  });
  $("#fadeOutBtn").click(function () {
    $("#gallery img").fadeOut(1000);
  });
  $("#fadeToggleBtn").click(function () {
    $("#gallery img").fadeToggle(1000);
  });

  // Task 4 - slide
  $(".panel").hide(); // panels closed at start
  $(".title").click(function () {
    $(this).next(".panel").slideToggle();
  });
  $("#openAll").click(function () {
    $(".panel").slideDown();
  });
  $("#closeAll").click(function () {
    $(".panel").slideUp();
  });

  // Task 5 - add and remove
  $("#addSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill == "") {
      $("#skillError").text("Skill can't be empty!");
      return;
    }
    $("#skillError").text("");
    $("#skillList").append("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#prependSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill == "") {
      $("#skillError").text("Skill can't be empty!");
      return;
    }
    $("#skillError").text("");
    $("#skillList").prepend("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#removeSkill").click(function () {
    $("#skillList li:last").remove(); // removes last skill
  });

  // Task 6 - attr
  $("#changeLink").click(function () {
    $("#myLink").attr("href", "https://www.linkedin.com").text("My LinkedIn");
  });

  // Task 7 - form
  $("#nameInput").keyup(function () {
    $("#nameOut").text($(this).val());
  });
  $("#emailInput").keyup(function () {
    $("#emailOut").text($(this).val());
  });

  // Task 8 - animate bars
  var barsOpen = false;
  $("#animateBtn").click(function () {
    if (barsOpen == false) {
      $(".bar").each(function () {
        $(this).animate({ width: $(this).data("width") + "%" }, 1000);
      });
      barsOpen = true;
    } else {
      $(".bar").animate({ width: "0%" }, 1000);
      barsOpen = false;
    }
  });

});
