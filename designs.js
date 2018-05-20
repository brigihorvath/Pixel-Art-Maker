$(function() {


    //declarations
    let oldTableHeight;
    let oldTableWidth;
    const inputWidth = document.getElementById("input_width");
    const inputHeight = document.getElementById("input_height");
    const colorPicker = document.getElementById("colorPicker");



    const makeGrid = () =>  {
        
        //Retrieve the value of the input elements
        const tableWidth = Number(inputWidth.value);
        const tableHeight = Number(inputHeight.value);

        //if the pixel_canvas table is empty, creates from scratch
        if ($('#pixel_canvas').is(':empty')) {
            for (let x = 0; x < tableHeight; x++) {
                $("#pixel_canvas").append("<tr></tr>");
                for (let y = 0; y < tableWidth; y++) {
                    $("tr:last").append("<td></td>");
                }
            }
            oldTableHeight = tableHeight;
            oldTableWidth = tableWidth;
            
        }
        //if the user wants more rows
        if (oldTableHeight < tableHeight) {
            var addRows = tableHeight - oldTableHeight;
            for (let z = 0; z < addRows; z++) {
                $("#pixel_canvas").append("<tr></tr>");
                for (let y = 0; y < oldTableWidth; y++) {
                    $("tr:last").append("<td></td>");
                }
            }
            oldTableHeight = tableHeight;
            
        }
        //if the user need more coloumns
        if (oldTableWidth < tableWidth) {
            var addColoumns = tableWidth - oldTableWidth;
            $('tr').each(function() {
                for (let u = 0; u < addColoumns; u++) {
                    $(this).append("<td></td>");
                };
            });
            oldTableWidth = tableWidth;
        }

        //if user wants less coloumns
        if (oldTableWidth > tableWidth) {
            var lessColoumns = oldTableWidth - tableWidth;
            for (let y = 0; y < lessColoumns; y++) {
                $("#pixel_canvas td:last-child").remove();
            }
            oldTableWidth = tableWidth;
        }

        //if user wants less rows
        if (oldTableHeight > tableHeight) {
            var lessRows = oldTableHeight - tableHeight;
            for (let y = 0; y < lessRows; y++) {
                $("#pixel_canvas tr:last-child").remove();
            }
            oldTableHeight = tableHeight;

        }

        //end of makeGrid()
    }


    //sizePicker preventdefault
    $('#sizePicker').submit(function(e) {
        e.preventDefault();
        makeGrid();
    });



    //td EventListener to color the pixels
    $('#pixel_canvas').on('click', 'td', function() {
        $(this).css('background-color', colorPicker.value);

    });

    //reset button
    $('#resetButton').on('click', function() {
        $('#pixel_canvas').empty();
    });


});