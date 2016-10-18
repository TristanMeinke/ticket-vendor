var standardPrice = 9.50;
var lowPrice = 7.00;

var movies = ["", "", "", "", ""]

function Ticket(fName, lName, movieTitle, showTime, ticketType, price) {
  this.fName = fName;
  this.lName = lName;

  this.movieTitle = title;
  this.showTime = showTime;
  this.ticketType = ticketType;
  this.price = price;
}

function priceTicket() {
  if (ticketType === "Adult")
  {
    ticketPrice = standardPrice;
    return ticketPrice;
  }
  else
  {
    ticketPrice = lowPrice;
    return ticketPrice;
  }
}

function createTicket() {
  // This function will build the ticket object
  // by calling the constructor/prototype.

  var firstName = $("input#firstName").val();
  var lastName = $("input#lastName").val();
  var numTickets = parseInt($("input#userInput").val());
  var movieTitle = $("select#title").val();
  var ticketType = $("select#type").val();
  var price = priceTicket();

  var usersTicket = new Ticket(firstName, lastName, movieTitle, showTime, ticketType, price); // THIS LINE...
  // Should construct the ticket object based on
  // the data provided by the user.
}

function printTicket() {
   $("#ticketOutput").append("<li>" + "First Name:" + firstName + "</li>");
   $("input#ticketOutput").append("<li>" + "Last Name:" + lastName + "</li>");
   $("#ticketOutput").append("<li>" + "Number Admitted:" + numTickets + "</li>");
   $("#ticketOutput").append("<li>" + "Title:" + movieTitle + "</li>");
   $("#ticketOutput").append("<li>" + "Ticket Type:" + ticketType + "</li>");
   $("#ticketOutput").append("<li>" + "Price:" + price + "</li>");
}

//Front-end

$(document).ready(function() {
  $("#userInput form").submit(function(event) {
    // this is where all the parseInt should go,
    // and where all front-end data should be
    // interpreted and manipulated.
    event.preventDefault();
    // $("#ticketOutput").show();
    createTicket();
    printTicket();
  });
});
