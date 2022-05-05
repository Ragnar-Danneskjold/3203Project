const twilio = require("twilio");

$(function () {


    //show the tables/data
    $("#showBtn").on("click", function () {
        Show();
    });

    //show the tables/data
    $('table').on('click', '.view-button', function () {
        console.log("here")
        View();
    });

    $("#sendBtn").on("click", function (Number) {
        console.log("here")
        testsend(Number);
    });

    function View() {
        console.log("here")
        app.views.current.router.navigate("/singleParty.ejs");
    }

    function testsend(Number){
        client.messages
          .create({
             body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
             from: '+19705288981',
             to: Number
           })
          .then(message => console.log(message.sid));
        };

    function Show() {
        $.ajax({
            type: 'GET',
            url: '/yourParties/show',
            dataType: "json",
            success: function (response) {
                console.log(response);
                // let tbodyEl = $('tbody');
                let tbodyEl = $("#partyTable > tbody")

                tbodyEl.html('');

                response.forEach(function (party) {
                    tbodyEl.append('\
                        <tr>\
                        <td class="name">' + party.name + '</td>\
                        <td class="location">' + party.location + '</td>\
                        <td class="date">' + party.date + '</td>\
                        <td class="dateCreated">' + party.createdDate + '</td>\
                        <td>\
                        <button class="view-button btn btn-secondary">View</button>\
                        </td>\
                        </tr>\
                        ');
                });
            },
            error: function () {
            }
        })
    }

});