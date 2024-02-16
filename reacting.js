
// get rectangle length value.
function calculateRectangleArea(){
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    //console.log(length);


    // get rectangle width value.
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    //console.log(width);


     // calculate rectangle area.
     const area = length * width;
     //console.log(area);


      // display rectangle area
      const rectangleAreaSpan = document.getElementById('rectangle-area')
      rectangleAreaSpan.innerText = area;
      console.log(area);

}

