$('#searchButton').on("click", function() {
    var startYear= '20180101',
    endYear = '',
    searchTerm = 'trump',
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "&q=" + searchTerm + "&sort=newest&api-key=2kAiBkTCaykGuXcHuA3nyoG09A2G4ey4";

 $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);


  })
});

