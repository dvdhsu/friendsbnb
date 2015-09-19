
var API_KEY = 'tbhEc981XTUnSqaDUMgVczBP7Z6KeC1U';

function getAirportsByLocation(location) {
  var url = 'http://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=' + API_KEY + '&term=' + location;

}

function getDate(d) {
  return d.getFullYear() + '-' + (d.getMonth()+1);
}

function getFlights(from, to) {
  var today = new Date();
  var dateString = getDate(today);
  today.setMonth(today.getMonth() + 2);
  dateString += '--' + getDate(today);
  var url = 'http://api.sandbox.amadeus.com/v1.2/flights/extensive-search?origin=' + from + '&destination=' + to + '&departure_date=' + dateString + '&duration=2--3&apikey=' + API_KEY;
}
