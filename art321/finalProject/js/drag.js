$(function() {

    $(".draggableClone").draggable({
        revert: 'invalid'
    });

    $(".draggable").draggable({
        revert: 'invalid',
        helper: 'clone',
        scroll: false
    });

    $("#droppable").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            $(this).append($(ui.helper).clone().removeClass("draggable").addClass("draggableClone").draggable({
                helper: "original",
                containment: "parent"
            }));
        }
    });

    $("#trash").droppable({
        accept: ".draggableClone",
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
});