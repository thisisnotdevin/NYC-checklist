const readMoreBtn =  document.querySelector('.read-more-btn');
const text = document.querySelector('.text');
const infoBox = document.getElementsByClassName('vertical-menu')[0];
var map;
var infowindow;
var service;
var service2;
var service3;
var service4;
var service5;
var newYork = {lat: 40.7549, lng: -73.9840};

 // WORKING! allows the server to load anything inside the env file

// function initMap() {
//     var location = {lat: 40.712776, lng: -74.005974};
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 12,
//         center: location
//     }); 
// }

function getMusic() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: newYork,
        zoom: 14
    });
    var request = {
        location: newYork,
        radius: '5500',
        keyword: ['music'], //also work with types, look at APi suported types
      };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    var request2 = {
        location: newYork,
        radius: '5500',
        type: ['night_club'], 
      };

    service2 = new google.maps.places.PlacesService(map);
    service2.nearbySearch(request2, callback);

    var request3 = {
        location: newYork,
        radius: '5500',
        keyword: ['song'], //also work with types, look at APi suported types
      };

    service3 = new google.maps.places.PlacesService(map);
    service3.nearbySearch(request3, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          
          var place = results[i];
         
          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>
          
          Rating: ${place.rating}<br/>`;
          

          var marker = new google.maps.Marker({
            title: place.name,
            map : map,
            position : place.geometry.location,
            animation: google.maps.Animation.DROP,
            
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            
        });
        clearBox(infoBox);
        results.forEach((place) => {
            
            let photos = place.photos;
            let itemHR = document.createElement('HR');
            let itemP = document.createElement('h3');
            let img = document.createElement('img');
            let itemL = document.createElement('p');

            if(photos != "" && photos != null){
             img.src = photos[0].getUrl({maxWidth: 99, maxHeight: 99});
            }else{
                img.src = "/img/no-image.png";
            }

            let itemPText = document.createTextNode(`${place.name}`);
            let itemLText = document.createTextNode(`${place.vicinity}`);
            
            itemP.appendChild(itemPText);
            itemL.appendChild(itemLText);

            infoBox.appendChild(img);
            infoBox.appendChild(itemP);
            infoBox.appendChild(itemL);
            infoBox.appendChild(itemHR);
            img.addEventListener("click", function(){
                createMarker(place);
                //infowindow.open(map,marker);
            });
        });

        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map);
        }
      }
    }
    function clearBox(elementID)
            {
                elementID.innerHTML = "";
            }
   

    function bindInfoWindow(marker, map, infowindow, html){
        marker.addListener('click', function(){
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map : map,
            position : placeLoc,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        
        });
           
    }

    infowindow = new google.maps.InfoWindow();
}
function getArt() { 
    var map = new google.maps.Map(document.getElementById('map'), {
        center: newYork,
        zoom: 14
    });
    var request = {
        location: newYork,
        radius: '5500',
        keyword: ['art'], //also work with types, look at APi suported types
        
      };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    var request2 = {
        location: newYork,
        radius: '5500',
        type: ['art_gallery'],
    };
    service2 = new google.maps.places.PlacesService(map);
    service2.nearbySearch(request2, callback);

    var request3 = {
        location: newYork,
        radius: '5500',
        type: ['museum'],
    };
    service3 = new google.maps.places.PlacesService(map);
    service3.nearbySearch(request3, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          
          var place = results[i];
         
          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>
          
          Rating: ${place.rating}<br/>`;
          

          var marker = new google.maps.Marker({
            title: place.name,
            map : map,
            position : place.geometry.location,
            animation: google.maps.Animation.DROP,
            
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            
        });
        clearBox(infoBox);
        results.forEach((place) => {
            
            let photos = place.photos;
            let itemHR = document.createElement('HR');
            let itemP = document.createElement('h3');
            let img = document.createElement('img');
            let itemL = document.createElement('p');

            if(photos != "" && photos != null){
             img.src = photos[0].getUrl({maxWidth: 99, maxHeight: 99});
            }else{
                img.src = "/img/no-image.png";
            }

            let itemPText = document.createTextNode(`${place.name}`);
            let itemLText = document.createTextNode(`${place.vicinity}`);
            
            itemP.appendChild(itemPText);
            itemL.appendChild(itemLText);

            infoBox.appendChild(img);
            infoBox.appendChild(itemP);
            infoBox.appendChild(itemL);
            infoBox.appendChild(itemHR);
            img.addEventListener("click", function(){
                createMarker(place);
                //infowindow.open(map,marker);
            });
        });

        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map);
        }
      }
    }
    function clearBox(elementID)
            {
                elementID.innerHTML = "";
            }
   

    function bindInfoWindow(marker, map, infowindow, html){
        marker.addListener('click', function(){
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map : map,
            position : placeLoc,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        
        });
           
    }

    infowindow = new google.maps.InfoWindow();
}
function getOutdoor() { 
    var map = new google.maps.Map(document.getElementById('map'), {
        center: newYork,
        zoom: 14
    });
    var request = {
        location: newYork,
        radius: '5500',
        keyword: ['outdoor'], //also work with types, look at APi suported types
        
      };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    var request2 = {
        location: newYork,
        radius: '5500',
        type: ['park'], //also work with types, look at APi suported types
        
      };

    service2 = new google.maps.places.PlacesService(map);
    service2.nearbySearch(request2, callback);

    
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          
          var place = results[i];
         
          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>
          
          Rating: ${place.rating}<br/>`;
          

          var marker = new google.maps.Marker({
            title: place.name,
            map : map,
            position : place.geometry.location,
            animation: google.maps.Animation.DROP,
            
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            
        });
        clearBox(infoBox);
        results.forEach((place) => {
            
            let photos = place.photos;
            let itemHR = document.createElement('HR');
            let itemP = document.createElement('h3');
            let img = document.createElement('img');
            let itemL = document.createElement('p');

            if(photos != "" && photos != null){
             img.src = photos[0].getUrl({maxWidth: 99, maxHeight: 99});
            }else{
                img.src = "/img/no-image.png";
            }

            let itemPText = document.createTextNode(`${place.name}`);
            let itemLText = document.createTextNode(`${place.vicinity}`);
            
            itemP.appendChild(itemPText);
            itemL.appendChild(itemLText);

            infoBox.appendChild(img);
            infoBox.appendChild(itemP);
            infoBox.appendChild(itemL);
            infoBox.appendChild(itemHR);
            img.addEventListener("click", function(){
                createMarker(place);
                //infowindow.open(map,marker);
            });
        });

        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map);
        }
      }
    }
    function clearBox(elementID)
            {
                elementID.innerHTML = "";
            }
   

    function bindInfoWindow(marker, map, infowindow, html){
        marker.addListener('click', function(){
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map : map,
            position : placeLoc,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        
        });
           
    }

    infowindow = new google.maps.InfoWindow();
}
function getRestaurant() { 
    var map = new google.maps.Map(document.getElementById('map'), {
        center: newYork,
        zoom: 14
    });
    var request = {
        location: newYork,
        radius: '5500',
        keyword: ['restaurant'], //also work with types, look at APi suported types
        
      };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    
    var request2 = {
        location: newYork,
        radius: '5500',
        type: ['bakery'],
        
      };
    service2 = new google.maps.places.PlacesService(map);
    service2.nearbySearch(request2, callback);

    var request3 = {
        location: newYork,
        radius: '5500',
        type: ['bar'],
        
      };
    service3 = new google.maps.places.PlacesService(map);
    service3.nearbySearch(request3, callback);

    var request4 = {
        location: newYork,
        radius: '5500',
        type: ['cafe'],
        
      };
    service4 = new google.maps.places.PlacesService(map);
    service4.nearbySearch(request4, callback);

    var request5 = {
        location: newYork,
        radius: '5500',
        type: ['restaurant'], //first one is keyword, this is type
        
      };
    service5 = new google.maps.places.PlacesService(map);
    service5.nearbySearch(request5, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          
          var place = results[i];
          let price = createPrice(place.price_level);
          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>
          <p>Price: ${price}<br/>
          Rating: ${place.rating}<br/>`;
          

          var marker = new google.maps.Marker({
            title: place.name,
            map : map,
            position : place.geometry.location,
            animation: google.maps.Animation.DROP,
            
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            
        });
        clearBox(infoBox);
        results.forEach((place) => {
            
            let photos = place.photos;
            let itemHR = document.createElement('HR');
            let itemP = document.createElement('h3');
            let img = document.createElement('img');
            let itemL = document.createElement('p');
            if(photos != "" && photos != null){
                img.src = photos[0].getUrl({maxWidth: 99, maxHeight: 99});
               }else{
                   img.src = "/img/no-image.png";
               }
            

            let itemPText = document.createTextNode(`${place.name}: $${price}`);
            
            
            let itemLText = document.createTextNode(`${place.vicinity}`);
            
            itemP.appendChild(itemPText);
            itemL.appendChild(itemLText);

            infoBox.appendChild(img);
            infoBox.appendChild(itemP);
            infoBox.appendChild(itemL);
            infoBox.appendChild(itemHR);
            img.addEventListener("click", function(){
                createMarker(place);
                //infowindow.open(map,marker);
            });
        });

        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map);
        }
      }
    }
    function clearBox(elementID)
            {
                elementID.innerHTML = "";
            }
    function createPrice(level){
        if(level != "" && level != null){
            let out = "";
            for (var x =0; x < level; x++){
                out += "$";
            }
            return out;
        }else {
            return "?";
        }
    }

    function bindInfoWindow(marker, map, infowindow, html){
        marker.addListener('click', function(){
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map : map,
            position : placeLoc,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        
        });
           
    }

    infowindow = new google.maps.InfoWindow();
}
function getExercise() { 
    var map = new google.maps.Map(document.getElementById('map'), {
        center: newYork,
        zoom: 14
    });
    var request = {
        location: newYork,
        radius: '5500',
        keyword: ['exercise'], //also work with types, look at APi suported types
        
      };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    var request2 = {
        location: newYork,
        radius: '5500',
        type: ['gym'],
        
      };

    service2 = new google.maps.places.PlacesService(map);
    service2.nearbySearch(request2, callback);

    var request3 = {
        location: newYork,
        radius: '5500',
        keyword: ['workout'], 
        
      };

    service3 = new google.maps.places.PlacesService(map);
    service3.nearbySearch(request3, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          
          var place = results[i];
         
          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>
          
          Rating: ${place.rating}<br/>`;
          

          var marker = new google.maps.Marker({
            title: place.name,
            map : map,
            position : place.geometry.location,
            animation: google.maps.Animation.DROP,
            
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            
        });
        clearBox(infoBox);
        results.forEach((place) => {
            
            let photos = place.photos;
            let itemHR = document.createElement('HR');
            let itemP = document.createElement('h3');
            let img = document.createElement('img');
            let itemL = document.createElement('p');

            if(photos != "" && photos != null){
             img.src = photos[0].getUrl({maxWidth: 99, maxHeight: 99});
            }else{
                img.src = "/img/no-image.png";
            }

            let itemPText = document.createTextNode(`${place.name}`);
            let itemLText = document.createTextNode(`${place.vicinity}`);
            
            itemP.appendChild(itemPText);
            itemL.appendChild(itemLText);

            infoBox.appendChild(img);
            infoBox.appendChild(itemP);
            infoBox.appendChild(itemL);
            infoBox.appendChild(itemHR);
            img.addEventListener("click", function(){
                createMarker(place);
                //infowindow.open(map,marker);
            });
        });

        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map);
        }
      }
    }
    function clearBox(elementID)
            {
                elementID.innerHTML = "";
            }
   

    function bindInfoWindow(marker, map, infowindow, html){
        marker.addListener('click', function(){
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map : map,
            position : placeLoc,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        
        });
           
    }

    infowindow = new google.maps.InfoWindow();
}
function getEntertainment() { 
    var map = new google.maps.Map(document.getElementById('map'), {
        center: newYork,
        zoom: 14
    });
    var request = {
        location: newYork,
        radius: '5500',
        keyword: ['entertainment'], //also work with types, look at APi suported types
        
      };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    var request2 = {
        location: newYork,
        radius: '5500',
        type: ['museum'], //also work with types, look at APi suported types
        
      };

    service2 = new google.maps.places.PlacesService(map);
    service2.nearbySearch(request2, callback);

    var request3 = {
        location: newYork,
        radius: '5500',
        type: ['movie_theater'],
    };
    service3 = new google.maps.places.PlacesService(map);
    service3.nearbySearch(request3, callback);

    var request4 = {
        location: newYork,
        radius: '5500',
        type: ['casino'],
    };
    service4 = new google.maps.places.PlacesService(map);
    service4.nearbySearch(request4, callback);
    
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          
          var place = results[i];
         
          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>
          
          Rating: ${place.rating}<br/>`;
          

          var marker = new google.maps.Marker({
            title: place.name,
            map : map,
            position : place.geometry.location,
            animation: google.maps.Animation.DROP,
            
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            
        });
        clearBox(infoBox);
        results.forEach((place) => {
            
            let photos = place.photos;
            let itemHR = document.createElement('HR');
            let itemP = document.createElement('h3');
            let img = document.createElement('img');
            let itemL = document.createElement('p');

            if(photos != "" && photos != null){
             img.src = photos[0].getUrl({maxWidth: 99, maxHeight: 99});
            }else{
                img.src = "/img/no-image.png";
            }

            let itemPText = document.createTextNode(`${place.name}`);
            let itemLText = document.createTextNode(`${place.vicinity}`);
            
            itemP.appendChild(itemPText);
            itemL.appendChild(itemLText);

            infoBox.appendChild(img);
            infoBox.appendChild(itemP);
            infoBox.appendChild(itemL);
            infoBox.appendChild(itemHR);
            img.addEventListener("click", function(){
                createMarker(place);
                //infowindow.open(map,marker);
            });
        });

        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map);
        }
      }
    }
    function clearBox(elementID)
            {
                elementID.innerHTML = "";
            }
   

    function bindInfoWindow(marker, map, infowindow, html){
        marker.addListener('click', function(){
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map : map,
            position : placeLoc,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        
        });
           
    }

    infowindow = new google.maps.InfoWindow();
}
function getFun() { 
    var map = new google.maps.Map(document.getElementById('map'), {
        center: newYork,
        zoom: 14
    });
    var request = {
        location: newYork,
        radius: '5500',
        keyword: ['fun'], //also work with types, look at APi suported types
        
    };
    
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    var request2 = {
        location: newYork,
        radius: '5500',
        type: ['amusement_park'],
    };
    service2 = new google.maps.places.PlacesService(map);
    service2.nearbySearch(request2, callback);

    var request3 = {
        location: newYork,
        radius: '5500',
        type: ['aquarium'],
    };
    service3 = new google.maps.places.PlacesService(map);
    service3.nearbySearch(request3, callback);
    
    var request4 = {
        location: newYork,
        radius: '5500',
        type: ['zoo'],
    };
    service4 = new google.maps.places.PlacesService(map);
    service4.nearbySearch(request4, callback);
    

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          
          var place = results[i];
         
          let content = `<h3>${place.name}</h3>
          <h4>${place.vicinity}</h4>
          
          Rating: ${place.rating}<br/>`;
          

          var marker = new google.maps.Marker({
            title: place.name,
            map : map,
            position : place.geometry.location,
            animation: google.maps.Animation.DROP,
            
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            
        });
        clearBox(infoBox);
        results.forEach((place) => {
            
            let photos = place.photos;
            let itemHR = document.createElement('HR');
            let itemP = document.createElement('h3');
            let img = document.createElement('img');
            let itemL = document.createElement('p');

            if(photos != "" && photos != null){
             img.src = photos[0].getUrl({maxWidth: 99, maxHeight: 99});
            }else{
                img.src = "/img/no-image.png";
            }

            let itemPText = document.createTextNode(`${place.name}`);
            let itemLText = document.createTextNode(`${place.vicinity}`);
            
            itemP.appendChild(itemPText);
            itemL.appendChild(itemLText);

            infoBox.appendChild(img);
            infoBox.appendChild(itemP);
            infoBox.appendChild(itemL);
            infoBox.appendChild(itemHR);
            img.addEventListener("click", function(){
                createMarker(place);
                //infowindow.open(map,marker);
            });
        });

        bindInfoWindow(marker, map, infowindow, content);
        marker.setMap(map);
        }
      }
    }
    function clearBox(elementID)
            {
                elementID.innerHTML = "";
            }
   

    function bindInfoWindow(marker, map, infowindow, html){
        marker.addListener('click', function(){
            infowindow.setContent(html);
            infowindow.open(map, this);
        });
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map : map,
            position : placeLoc,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        
        });
           
    }

    infowindow = new google.maps.InfoWindow();
}
      


//The initial map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.712776, lng: -74.005974},
      zoom: 13
    });
    var input = document.getElementById('searchInput');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        if (!place.geometry) {
            window.alert("No details available for input: ");
            return;
        }
  
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        var address = '';
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
       
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
      
    });
}


//dropdown menu for media size
document.addEventListener('click', e=> {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })

})

//about-page stuff
// readMoreBtn.addEventListener('click', (e)=>{
//     text.classList.toggle('show-more');
//     if(readMoreBtn.innerText === 'Read More'){
//         readMoreBtn.innerText = 'Read Less';
//     } else {
//         readMoreBtn.innerText = 'Read More';
//     }
// })

