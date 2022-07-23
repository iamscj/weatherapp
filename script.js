const ENDPOINT = "https://api.openweathermap.org/data/2.5/weather?appid=c45daca181d8b7416b83f5688bc10152&units=metric";

// const icon = weatherData.weather[0].icon;
        // const imgUrl = "http://openweathermap.org/img/wn/weatherData.weather[0].icon@2x.png";

function getCountries() {
    $.ajax({
        url: ENDPOINT + "&q=Bangalore",
        method: 'GET',
        success: function (res) {
            console.log(res.name);
            $("#countries").html(`<tr>
            <td >${res.name}</td>
            <td scope="row">${res.main.temp}</td>
            <td >${res.weather[0].description}</td>
            <td><img style="width:50px" src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"></td>
            <td >${res.main.pressure}</td>
            <td >${res.main.humidity}</td>
            <td >${res.main.sea_level}</td>
            <td >${res.wind.speed}</td>
            <td >${res.coord.lon}</td>            
            <td >${res.coord.lat}</td>            



          </tr>`)
        }
    })
}

function searchCountry(query) {
    // if ($("#option :selected").text() === "Country") {
    //     $.ajax({
    //         url: ENDPOINT + `/name/${query}`,
    //         method: 'GET',
    //         success: function (res) {
    //             $("#countries").html(res.map(country => template.country(country)).join(' '))
    //         }
    //     })
    // } else if ($("#option :selected").text() === "Code") {
    //     $.ajax({
    //         url: ENDPOINT + `/alpha/${query}`,
    //         method: 'GET',
    //         success: function (res) {
    //             $("#countries").html(`<tr>
    //             <td scope="row">${res.name}</td>
    //             <td><img style="width:50px" src="${res.flag}"></td>
    //             <td>${res.alpha3Code}</td>
    //           </tr>`)
    //         }
    //     })
    // } else if ($("#option :selected").text() === "Currency") {
    //     $.ajax({
    //         url: ENDPOINT + `/currency/${query}`,
    //         method: 'GET',
    //         success: function (res) {
    //             $("#countries").html(res.map(country => template.country(country)).join(' '))
    //         }
    //     })
    // }

        $.ajax({
             url: ENDPOINT + `&q=${query}`,
             method: 'GET',
             success: function (res) {
                 $("#countries").html(`<tr>
                 <td >${res.name}</td>
                 <td scope="row">${res.main.temp}</td>
                 <td >${res.weather[0].description}</td>
                 <td><img style="width:50px" src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png"></td>
                 <td >${res.main.pressure}</td>
            <td >${res.main.humidity}</td>
            <td >${res.main.sea_level}</td>
            <td >${res.wind.speed}</td>
            <td >${res.coord.lon}</td>            
            <td >${res.coord.lat}</td>      
               </tr>`)
             }
         })
}

// const template = {
//     country: function (country) {
//         return `<tr>
//         <td scope="row">${country.name}</td>
//         <td><img style="width:50px" src="${country.temp}"></td>
//       </tr>`;
//     }
// }
getCountries();

$("#search").on("click", function (e) {
    e.preventDefault();
    // let query = $(this).find('[name = "query"]').val()
    let value = $("#input").val()
    // console.log(value);
    searchCountry(value);
})