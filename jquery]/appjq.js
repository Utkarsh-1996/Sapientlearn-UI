$(document).ready(function(){
    "use strict"
    const countryApi = "https://restcountries.eu/rest/v2/all";
    function fetchCountries(){
        $.ajax({
            url: countryApi,
            type: "GET",
            async: false,
            success: function(result){
                console.log("I am first");
                bindCountries(result);
            },
            failure: (err) => function(){
                console.log(err)
            }
        });
        console.log("I am synchronus")
    }
    function bindCountries(data){
        data.forEach((x,i)=>{
            console.log(x.name);
            console.log(x.alpha2Code);
            let option = $('<option/>').val(x.alpha2Code).text(x.name);
            $("#ddlCountry").append(option);
        });
    }
    fetchCountries();
    
});