
$('body').append($('<div id="main-div">'));
$('<ul id="list">').appendTo('body');


$('#btnSubmit').on('click', function (e) {
    e.preventDefault()
    //When the submit button is clicked, alert the value & make <h2>, <li>
    let $value = $('input').val();
    let $h2 = $('<h2>' + $value + '</h2>')
    let $newLi = $('<li>' + $value + '</li>')
    alert($value);
    //Append h2 to #main-div 
    $h2.appendTo('#main-div');
    //When mouse is over the h2, change the background-color/border-radius
    $("#main-div h2").mouseover(function () {

        $(this).css({
            "background-color": "yellow",
            "border-radius": "25px"
        });

    })
    //Append<li> to <ul id="list">
    $newLi.appendTo('#list');
    //When the list is clicked, the font color changes
    $newLi.click(function (e) {
        event.preventDefault();

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let rgbCol = `rgb(${r},${g},${b})`
        $(this).css('color', rgbCol);

    })

    //when the list is dblclicked, it is removed.
    $newLi.dblclick(function () {
        $(this).remove();
    })

})




$('input[type="text"]').keyup(function (e) {
    event.preventDefault();

    if ($(this).val() == '') {
        $('#btnSubmit').prop('disabled', true);

    } else if ($(this).val() !== '') {
        $('#btnSubmit').prop('disabled', false);
    }
})









