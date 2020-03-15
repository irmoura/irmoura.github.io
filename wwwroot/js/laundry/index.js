$(document).ready(function () {
    $("#nivelAgua").on('change', function () {
        var switch_on = $("#nivelAgua option:selected").index()
        switch (switch_on) {
            case 0:
                $('#txtConsumo').val('62 litros.')
                break
            case 1:
                $('#txtConsumo').val('84 litros.')
                break
            case 2:
                $('#txtConsumo').val('112 litros.')
                break
            case 3:
                $('#txtConsumo').val('146 litros.')
                break
            default:
        }
    });

    $("#programa").on('change', function () {
        var switch_on = $("#programa option:selected").index()
        switch (switch_on) {
            case 0:
                $('#txtTempoPrograma').val('19 min.')
                break
            case 1:
                $('#txtTempoPrograma').val('50 min.')
                break
            case 2:
                $('#txtTempoPrograma').val('1h 18min.')
                break
            case 3:
                $('#txtTempoPrograma').val('1h 25min.')
                break
            default:
        }
    });
});