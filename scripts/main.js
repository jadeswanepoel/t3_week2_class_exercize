// -------------------------------------------
// plants array

const arrPlants = [
    {
        name: "Ficus Tree",
        price:250,
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        image:"plant1.png"
    },
    {
        name: "White Sprite Succulent",
        price:250,
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        image:"plant1.png"
    },
    {
        name: "Snake Plant",
        price:250,
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        image:"plant1.png"
    },
];



// When the document loads
// ----------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $("#hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // browse page

    loadPlants();
    

}); 

// ---------------------------------------------
// load all plants

function loadPlants(){
    
    for (let i = 0; i < arrPlants.length; i++) {
        const plant = arrPlants [i];
        
        console.log(plant.name);

        // 1:Select the plants container add the plant card to it
        $("#plantsContainer").append($("#plantCardTemplate").html());
    
        // 2: Create a variable that contains the most recently added plant card
          let currentChild = $("#plantsContainer").children().eq(i+1);
    
          // 3: Set the content for the plant card from the plants list
      $(currentChild).find(".card-img-top").attr('src','assets/' + plant.image);
      $(currentChild).find("#nameText").text(plant.name);
      $(currentChild).find("#priceText").text('R' + plant.price);
      $(currentChild).find("#descriptionText").text(plant.description);

         // 4: Hide the description text from the plant card
         $(currentChild).find("#descriptionText").hide();
    }

}
    

   
   

// when a card is clicked
$("#plantsContainer").on('click', '.card', function(){

    // Toggle the price & description text
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additional content
    $(this).find(".card-img-top").toggleClass("small");
  
  });


  $(document).ready(function() {
    $(".remove-button").click(function() {
      $(this).closest("tr").remove();
    });
  });