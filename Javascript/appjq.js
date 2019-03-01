$(document).ready(function(){
    "use strict"
    const countryApi = "https://restcountries.eu/rest/v2/all";
    function fetchCountries(){
        console.log("asdas")
        $.ajax({
            url: countryApi,
            type: "GET",
        }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
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