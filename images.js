$(document).ready(function () {

    $("button").click(runLoops);


    function runLoops() {
        // Clear out all existing images
        $(".imageHolder").empty();

        // Get the number from the box
        var num = parseInt($("#numPics").val());

        // Print the desired number of images for each loop
        $("#while-num").text(num + 1);
        $("#do-while-num").text(num - 1);
        $("#for-num").text(num);


        /*
         Create a while loop that runs "num + 1" times.

         The body of the loop should contain the statement:
         addImageToDiv("#while-loop");
        */
        var x = 0;
        while (x !== num+1)
        {
            addImageToDiv("#while-loop");
            x++;
        }


        /*
         Create a do-while loop that runs "num - 1" times.

         The body of the loop should contain the statement:
         addImageToDiv("#do-while-loop");
        */
        var y = 0;
        do
        {
            addImageToDiv("#do-while-loop");
            y++;
        }
        while (y !== num-1);




        /*
         Create a for loop that runs exactly "num" times.

         The body of the loop should contain the statement:
         addImageToDiv("#for-loop");
        */
        for (z=0; z !== num; z++)
        {
            addImageToDiv("#for-loop");
        }




    }

    function addImageToDiv(divId) {
        var fileName = $(":radio[name='pictureSelect']:checked").val();
        // Create a new image element
        var imageElement = $("<img>");
        // Set its source attribute
        imageElement.attr("src", `img/${fileName}`);
        // Add it as a child of another element
        $(divId).append(imageElement);
    }

});