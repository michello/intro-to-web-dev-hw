$(function() {
      $('#filter').change(function(){
        populateSelect();
      });

      $('#exportCountries').change(function(){
        populateResult();
      });

      $('#compareCountries').change(function(){
        populateCompare();
      });

      $(function(){
        $('#country1').change(function(){

        });

        $('#country2').change(function(){

        });
      })
});

//

function populateSelect(){
    filter=$('#filter').val();
    $('#eCountries').html('');
    $('#compareCountries').html('');

    if(filter=='exporting-countries'){
      targetDiv = "exportCountries";
      selectingCountry(targetDiv);
    }
    if(filter=='importing-countries'){
      targetDiv = "exportCountries";
      selectingCountry(targetDiv);
    }

    if(filter=='regional'){}

    if(filter=='compare'){
      selectingCountry("country1");
      selectingCountry("country2");
      // hide other classes
      $('#exportCountries').addClass('invisible');
      $('#importCountries').addClass('invisible');
    }



}


// add coffee images

function show_image(src) {
    var img = new Image();
    img.id = "coffee-cup";
    img.src = src;
    $('#canvas').append(img);
}

function addImage(numCoffee){

  if (document.getElementById('coffee-cup') != null) {
    $('#canvas').empty();
  }

  numCoffee = Math.round(numCoffee);

  for (var i=0; i < numCoffee; i++) {
    var src = "http://images.neopets.com/items/coffeandmarsh.gif";
    show_image(src);
  }

}


function selectingCountry(c){ // c = country1
  $('#'+c).append('<option value = "default">Select Your Choice</option>');
  listOfcountries.forEach(function(t) {
      $('#'+c).append('<option>'+t+'</option>');
  });
  $('#'+c).removeClass('invisible');
  console.log($('#'+c).val());
  populateResult($("#"+c).val());

}

function populateResult(value){
//  console.log(hello);
  var selCountry =value; // name of country
  console.log(value);
  if (selCountry != 'default') {
    var numofCoffee = json[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['2015/16'];
    var growthRate = json[0]["Exporting countries"][exportingCountries[selCountry]][selCountry]['Growth Rate'];
    numofCoffee = Math.round(numofCoffee/1000);
    addImage(numofCoffee);
  }
}
