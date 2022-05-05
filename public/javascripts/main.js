$(function () {

       //update data in the table
       $('table').on('click', '.view-button', function () {
        let rowEl = $(this).closest('tr');
        let name = rowEl.find('.name').text

        //
        $.ajax({
            url: '/party/' + name,
            type: 'GET',
            dataType: "json",
            success: function (response) {
                console.log(response);
                
            }
        });

    });

    //show the tables/data
    $("#showBtn").on("click", function () {
        Show();
    });


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