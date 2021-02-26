
$('.content').richText();

$('#btn-alert').on('click', function () {
    $.alert('Message here', {
        type:'success',
        position: ['top-right', [-0.42, 0]]
    });
});

$('#barcode_generate').click(function () {
    let number = $("#barcode_number").val();
    console.log(number);
    $("#demo").barcode(
        number,// Value barcode (dependent on the type of barcode)
        "ean13" // type (string)
    );
});