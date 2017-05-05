
$(document).ready(function () {
    $('#claim-job').submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: '/Jobs/ClaimJob/' + jobId,
            type: 'POST',
            dataTyle: 'json',
            data: $(this).serialize(),
            success: function (result) {
                var resultMessage = "Job has been claimed";
                $('#result1').html(resultMessage);
            }
        })
    })
});