$(document).ready(function () {

    //show the tables/data
    $("#showBtn").click(function () {
        Show();
    });


    function Show() {
        $.ajax({
            type: 'GET',
            url: '/show',
            dataType: "json",
            success: function (response) {
                console.log(response);
                // let tbodyEl = $('tbody');
                let tbodyEl = $("#myTable > tbody")

                tbodyEl.html('');

                response.forEach(function (party) {
                    tbodyEl.append('\
                        <tr>\
                        <td class="name">' + party.name + '</td>\
                        <td><input type="date" class="location form-control" value="' + party.location + '"></td>\
                        <td><input type="location" class="date form-control" value="' + party.date + '"></td>\
                        <td><input type="invites" class="age form-control" value="' + party.createdDate + '"></td>\
                        <td>\
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