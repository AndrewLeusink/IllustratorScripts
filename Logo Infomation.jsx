
Main();

function Main ()
{
    var doc = app.activeDocument;
    var currentLayer = doc.activeLayer;

    var designMaxWidth = (currentLayer.bounds[2] - currentLayer.bounds[0]) / doc.width;
    var designMaxHeight = (currentLayer.bounds[3] - currentLayer.bounds[1]) / doc.height;
    var centerX = (currentLayer.bounds[0] + ((currentLayer.bounds[2] - currentLayer.bounds[0]) / 2)) / doc.width;
    var topOfLogo = 1 - (currentLayer.bounds[1] / doc.height);
        
    alert(
                    "Center X: " + (centerX.toFixed(6) * 1) +
                    "\nY : " + (topOfLogo.toFixed(6) * 1) +
                    "\nMaxWidth : " + (designMaxWidth.toFixed(6) * 1) +
                    "\nMaxHeight: " + (designMaxHeight.toFixed(6) * 1) 
            );
    $.writeln();
}