
function calculateParallelogramArea(){
    // get Parallelogram base value.
    const ParallelogramBaseInput = document.getElementById('parallelogram-base');
    const ParallelogramBaseText = ParallelogramBaseInput.value;
    const base = parseFloat(ParallelogramBaseText);
    //console.log(base);


    // get Parallelogram  height value.
    const ParallelogramHeightInput = document.getElementById('Parallelogram-height');
    const ParallelogramHeightText = ParallelogramHeightInput.value;
    const height =  parseFloat(ParallelogramHeightText);
    //console.log(height);


    // calculate Parallelogram  area
    const area = base * height;
    //console.log('area of triangle is:', area);


    // display Parallelogram  area
    const parallelogramAreaSpan = document.getElementById('Parallelogram-area');
    parallelogramAreaSpan.innerText = area;
    //console.log(area);  

}

