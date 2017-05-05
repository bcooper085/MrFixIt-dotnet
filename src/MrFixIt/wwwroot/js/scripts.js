$(document).ready(function () {
    $('#claim-job').submit(function () {
        event.preventDefault();
        $.ajax({
            url: 'Jobs/Claim',
            type: 'POST',
            data: { JobId: $('#JobId').val() },
            dataType: 'json',
            success: function (result) {
                $("results").html("<h2>This Job is claimed by" + result.Worker.FirstName + " " + job.Worker.LastName + "</h2>")
            }
        })
    })
});