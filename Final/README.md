#FINAL

## Live Site Link
You can view my super wonky and super slow site [here](http://mochadroppe.me/coffeeist.html)

## Documentation of My Proccess

### Data Extraction

I first needed data to play around with and the data I used was from [International
Coffee Organization](http://www.ico.org/). Unfortunately, the only version of
coffee consumption data available is in [pdf format](http://www.ico.org/prices/new-consumption-table.pdf).

At first, I converted the pdf to a CSV file but then had to figure out how to turn
it into JSON format for the actual JavaScript application. In the end, I decided
to just manually create the JavaScript objects myself, as seen below.

![alt tag](https://i.gyazo.com/debf0ba04ae5f5b85c02e90c504b7786.png)

### Data Manipulation

Data manipulation is then just a matter of parsing through what I need and don't
need. This, however, proved to be super confusing as, for instance, just getting
the name of a country would require this line of code:

Filtering the data is done through dropdowns and whatever data is extracted.

## Source Code Explanation

### dealing with json data & live server
```javascript
var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'js/exportingCountries.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
```

### populating another dropdown based on selection of previous dropdown
#### current code:
* Problem: keeps populating more dropdowns when any filter is selected
```javascript

function populateSelect(){
  var filter = $('#filter').val();

  if (filter == 'exporting-countries') {
    // some stuff here
    creatingOptions(divId);
    // some stuff here
  }
}

function creatingOptions(id){
}
```
### old code:
* Problem: idk
![alt tag](https://i.gyazo.com/4fc31633594ce2b283abcc9761001a29.png)
[Old code here](https://github.com/ml4963/intro-to-web-dev-hw/blob/master/Final/oldCode.js)

## Issues Encountered
* JSON file manipulation: You must have a live server when dealing with json
files directly which is why I had to do
* Drop Down leading to more DD: I had a hard time figuring out how to lead a drop
down to the next.
* Information parsing & manipulation: Still unsolved.

## Next Steps
* Get main functionality to work. Probably should use MixItUp.
* Refine front end visuals.
* Add more categories & convert to more JSON data.
