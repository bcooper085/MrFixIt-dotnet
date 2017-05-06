$(document).ready(function () {
    $('#claim-job').submit(function () {
        event.preventDefault();
        $.ajax({
            url: 'Jobs/Claim',
            type: 'POST',
            data: { JobId: $('#JobId').val() },
            dataType: 'json',
            success: function (result) {
                var string = "<h2>This Job is claimed by" + result.Worker.FirstName + " " + job.Worker.LastName + "</h2>";
                $(".results").html(string)
            }
        })
    })

    $('.done-form').submit(function () {
        event.preventDefault();
        $.ajax({
            url: 'Jobs/Done',
            type: 'POST',
            data: { JobId: $('#JobId').val() },
            dataType: 'json',
            success: function (result) {
                $(".completed").html("<h2>This Job is Done</h2>")
            }
        })
    })

    $('.pending-form').submit(function () {
        event.preventDefault();
        $.ajax({
            url: 'Jobs/Working',
            type: 'POST',
            data: { JobId: $('#JobId').val() },
            dataType: 'json',
            success: function (result) {
                $(".pending").html("<h2>This Job is Pending</h2>")
            }
        })
    })
});