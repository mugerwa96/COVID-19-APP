$(document).ready(function(){
// default page load

displayTotal()
function displayTotal()
{$.ajax({
    url:"https://disease.sh/v3/covid-19/all",
    method:"GET",
    success:function(response)
    {

        var result="";
        result+=`
        <P class="font-weight-bold text-center sub mt-5">OVERALL VALUES  WORLD WIDE</P>
        <!-- cases -->
        <div class="cases">
          <div class="row py-5">
              <!-- CovidCases -->
                          <div class="col-lg-4 col-md-6 col-12 mb-5">
                              <div class="card card1" style="width: 15rem;">
                                  
                                  <div class="card-body text-center">
                                      <h5 class="card-title headingApi">TOTAL CASES</h5>
                                      <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.cases)}</p>
                                  
                                  </div>
                              </div>
                          </div>
              <!-- CovidCases -->
              
              <!-- Death -->
                          <div class="col-lg-4 col-md-6 col-12 mb-5">
                              <div class="card card2" style="width: 15rem;">
                                  
                                  <div class="card-body text-center">
                                      <h5 class="card-title headingApi">DEATH</h5>
                                      <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.deaths)}</p>
                                  
                                  </div>
                              </div>
                          </div>
              <!-- Death -->
              <!-- RECOVERY-->
                          <div class="col-lg-4 col-md-6 col-12 mb-5">
                              <div class="card card3" style="width: 15rem;">
                                  
                                  <div class="card-body text-center">
                                      <h5 class="card-title headingApi">RECOVERED</h5>
                                      <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.recovered)}</p>
                                  
                                  </div>
                              </div>
                          </div>
              <!-- RECOVERY-->
              <!-- AFFECTED COUNTRIES -->
                          <div class="col-lg-4 col-md-6 col-12 mb-5">
                              <div class="card card4" style="width: 15rem;">
                                  
                                  <div class="card-body text-center">
                                      <h5 class="card-title headingApi">AFFECTED COUNTRIES</h5>
                                      <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.affectedCountries)}</p>
                                  
                                  </div>
                              </div>
                          </div>
              <!-- AFFECTED COUNTRIES -->
              <!-- POPULATION(TOTAL) -->
                          <div class="col-lg-4 col-md-6 col-12 mb-5">
                              <div class="card card5" style="width: 15rem;">
                                  
                                  <div class="card-body text-center">
                                      <h5 class="card-title headingApi">POPULATION</h5>
                                      <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.population)}</p>
                                  
                                  </div>
                              </div>
                          </div>
              <!-- POPULATION(TOTAL) -->
              <!-- ACTIVE CASES -->
                          <div class="col-lg-4 col-md-6 col-12 mb-5">
                              <div class="card card6" style="width: 15rem;">
                                  
                                  <div class="card-body text-center">
                                      <h5 class="card-title headingApi">ACTIVE CASES</h5>
                                      <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.active)}</p>
                                  
                                  </div>
                              </div>
                          </div>
              <!-- ACTIVE CASES -->
          
                  
          </div>
        </div>
           <!-- cases -->
      
      </div>
          
        
        `
        $('.body').html(result)
    },error:function()
    {
        console.log("Error in obtaing data froms server");
        $('.body').html(`
        <img src="../ajax-loader (2).gif" alt="Img error" style="margin-left:50%">
        <p style="margin-left:40%;color:#ffff">Unable to connect to the server</p>
        `)
    }
})


}

// obtaiing data for given cocuntry 

$('#search').keyup(function(e){
    var input=$(this).val().trim();
  
       if(input.length=="")
       {
        displayTotal()
       }
       else{

      
       $.ajax({
           url:`https://disease.sh/v3/covid-19/countries/${input}?strict=true`,
           method:"GET",
           success:function(response)
           {
               var result="";
            result+=`
            <P class="font-weight-bold text-center sub mt-5">${response.country.toUpperCase()} <img src="${response.countryInfo.flag}" style="width:50px"></P>
           
            <!-- cases -->
            <div class="cases">
              <div class="row py-5">
                  <!-- CovidCases -->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card card1" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">TOTAL CASES</h5>
                                          <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.cases)}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- CovidCases -->
                  
                  <!-- Death -->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card card2" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">DEATH</h5>
                                          <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.deaths)}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- Death -->
                  <!-- RECOVERY-->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card card3" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">RECOVERED</h5>
                                          <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.recovered)}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- RECOVERY-->
                  <!-- COUNTRY POPULATION-->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card card4" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">POPULATION</h5>
                                          <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.population)}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- COUNTRY POPULATION-->
                  <!-- TESTS -->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card card5" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">TESTS</h5>
                                          <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.tests)}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- TESTS -->
                  <!-- CONTINENT -->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card card6" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">CONTINENT</h5>
                                          <p class="card-text numbersApi mt-3 ">${response.continent}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- CONTINENT -->
                  <!-- RECOVERED -->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card cardc" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">RECOVERED</h5>
                                          <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.recovered)}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- RECOVERED -->
                  <!-- TODAY RECOVERED -->
                              <div class="col-lg-4 col-md-6 col-12 mb-5">
                                  <div class="card cardx" style="width: 15rem;">
                                      
                                      <div class="card-body text-center">
                                          <h5 class="card-title headingApi">TODAY RECOVERED</h5>
                                          <p class="card-text numbersApi mt-3 ">${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(response.todayRecovered)}</p>
                                      
                                      </div>
                                  </div>
                              </div>
                  <!-- TODAY RECOVERED -->
              
                      
              </div>
            </div>
               <!-- cases -->
          
          </div>
              
            
            `
            $('.body').html(result)
           },error:function()
           {
               console.log("error in response")
               $('.body').html(`
               <img src="../ajax-loader (2).gif" alt="Img error" style="margin-left:50%">
               <p style="margin-left:40%;color:#ffff">Unable to connect to the server</p>
               `)
           }
       })
    }
  
})

})