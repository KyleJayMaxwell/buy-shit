// add scripts

$(document).on('ready', function() {
  // console.log('sanity check!');

  // take this out before launch
  localStorage.clear();


  seedLocalStorage();
  addDataFromLocalStorageToDom();
  $('table').on('click', '#increment', function(){
    var button = this;
    var itemName = $(button).attr('data-name');
    var newArray = [];
    //get data from local storage
    var currentStateOfLocalStorage = JSON.parse(localStorage.getItem('items'));
    //update quantity 
    for (var i = 0; i < currentStateOfLocalStorage.length; i++) {
      if(currentStateOfLocalStorage[i].name === itemName){
        currentStateOfLocalStorage[i].quantity++;
      }
      newArray.push(currentStateOfLocalStorage[i]);
    }
    //set data back to local storage
    localStorage.setItem('items', JSON.stringify(newArray));
    //up date the dom
    addDataFromLocalStorageToDom();
  });

});

function seedLocalStorage() {

var data =[
  {
    id: 'woodAnalog21',
    name: 'Carlton',
    material: 'wood',
    style: 'analogue',
    price: 349.99,
    quantity: 0
  },
  {
    id: 'woodAnalog23',
    name: 'Pendelton',
    material: 'wood',
    style: 'analogue',
    price: 600.66,
    quantity: 0
  },
  {
    id: 'woodAnalog25',
    name: 'Hamilton',
    material: 'wood',
    style: 'analogue',
    price: 475.89,
    quantity: 0
  },
  {
    id: 'woodDigital21',
    name: 'Arlington',
    material: 'wood',
    style: 'digital',
    price: 550.45,
    quantity: 0
  },
  {
    id: 'metalDigital21',
    name: 'Tyler',
    material: 'wood',
    style: 'digital',
    price: 250.55,
    quantity: 0
  },
  {
    id: 'metalDigital23',
    name: 'Kevin',
    material: 'metal',
    style: 'digital',
    price: 111.11,
    quantity: 0
  },
  {
    id: 'metalAnalogue23',
    name: 'Louisa',
    material: 'metal',
    style: 'digital',
    price: 357.99,
    quantity: 0
  },
  {
    id: 'metalAnalogue27',
    name: 'Dennis',
    material: 'wood',
    style: 'digital',
    price: 401.99,
    quantity: 0
  }
];

  if(!JSON.parse(localStorage.getItem('items'))) {
  localStorage.setItem('items', JSON.stringify(data));
  }

}

function addDataFromLocalStorageToDom(){
  $('#all-items').empty();
  var allItems = JSON.parse(localStorage.getItem('items'));
  allItems.forEach(function(obj){
    $('#all-items').append('<tr><td>'+obj.name+'</td><td>'+obj.price+'</td><td>'+obj.quantity+'</td><td><a id="increment" class="btn btn-sm btn-primary" data-name="'+obj.name+'">+</button></td></tr>');
  });
}