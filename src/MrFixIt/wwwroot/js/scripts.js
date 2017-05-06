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

    $('#pending-jobs').submit(function () {
        event.preventDefault();
        $.ajax({
            url: 'Jobs/Start',
            type: 'POST',
            data: { JobId: $('#JobId').val() },
            dataType: 'json',
            success: function (result) {
                $(".completed").html("<h2>This Job is Pending</h2>")
            }
        })
    })

    $('#completed-jobs').submit(function () {
        event.preventDefault();
        $.ajax({
            url: 'Jobs/Completed',
            type: 'POST',
            data: { JobId: $('#JobId').val() },
            dataType: 'json',
            success: function (result) {
                $(".pending").html("<h2>This Job is Done</h2>")
            }
        })
    })
});