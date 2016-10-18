var standardPrice = 9.50;
var lowPrice = 7.00;
var numTickets;

var movies = ["", "", "", "", ""]

function Ticket(fName, lName, movieTitle, showTime, ticketType, rating, price) {
  this.fName = fName;
  this.lName = lName;

  this.movieTitle = title;
  this.showTime = showTime;
  this.ticketType = ticketType;
  this.rating = rating;
  this.price = price;
}

function priceTicket() {
  if (ticketType === "Adult")
  {
    Ticket.price = standardPrice;
  }
  else
  {
    Ticket.price = lowPrice;
  }
}

function createTicket() {
  // This function will build the ticket object
  // by calling the constructor/prototype.

  var usersTicket = new Ticket(); // THIS LINE...
  // Should construct the ticket object based on
  // the data provided by the user.
}

//Front-end

$(document).ready(function() {
  $("#userInput form").submit(function(event) {
    // this is where all the parseInt should go,
    // and where all front-end data should be
    // interpreted and manipulated.
    event.preventDefault();
    // $("#ticketOutput").show();
    priceTicket();
    numTickets = parseInt($("input#userInput").val());
  });
});
