function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (var i = 0; i < uiBathrooms.length; i++) {
    if (uiBathrooms[i].checked) {
      return parseInt(uiBathrooms[i].value);
    }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (var i = 0; i < uiBHK.length; i++) {
    if (uiBHK[i].checked) {
      return parseInt(uiBHK[i].value);
    }
  }
  return -1; // Invalid Value
}

function getApiUrl(endpoint) {
  // If run locally via double-clicking HTML (file:/// protocol), point directly to local flask server
  if (window.location.protocol === 'file:') {
    return "http://127.0.0.1:5000" + endpoint;
  }
  // Otherwise, use relative URLs (works for both Nginx proxying /api and direct Flask serving)
  return endpoint;
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = getApiUrl("/api/predict_home_price");

  $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
  }, function(data, status) {
      console.log(data.estimated_price);
      if (data && data.estimated_price !== undefined) {
          estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      } else {
          estPrice.innerHTML = "<h2>Error calculating price</h2>";
      }
      console.log(status);
  });
}

function onPageLoad() {
  console.log("document loaded");
  var url = getApiUrl("/api/get_location_names");
  $.get(url, function(data, status) {
      console.log("got response for get_location_names request");
      if (data) {
          var locations = data.locations;
          var uiLocations = document.getElementById("uiLocations");
          $('#uiLocations').empty();
          // Add default option
          var defaultOpt = new Option("Choose a Location", "");
          defaultOpt.disabled = true;
          defaultOpt.selected = true;
          $('#uiLocations').append(defaultOpt);
          
          for (var i in locations) {
              var opt = new Option(locations[i]);
              $('#uiLocations').append(opt);
          }
      }
  });
}

window.onload = onPageLoad;
