function getItemByName(name)
{
        app.activeDocument.pageItems.getByName(name).selected=true;    
}

function ERROR()
{
    Error.runtimeError(9999, "Exit Script");
}

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function Rand(num)
{
    return Math.floor(Math.random() * num);
}

function ColorAdjust(type,color,currentProduct) {
    switch(type)
    {
        case "design":
            switch(color)
            {
                case "red":
                    return "red";
                    break;
                case "kelly green":
                    return "kellygreen";
                    break;
                case "dark green":
                    return "darkgreen";
                    break;
                case "gold":
                    return "athleticgold";
                    break;
                case "vegas":
                    return "vegasgold"; 
                    break;
                case "charcoal":
                    return "dark";
                    break;
                case "white":
                case "grey":    
                case "sky blue":
                case "pink":
                case "nickel":
                    return "light";
                    break;
                case "onix":
                case "black":
                case "graphite":
                    return "dark"
                    break;
                default:
                    return color;
                    break;
            }
        case "stitchColor" :
            switch(currentProduct.name.replace("p",""))
                {
                    case "1852":        
                    case "1793":        
                    case "1799":        
                    case "1874":        
                    case "1828":        
                    case "1829":        
                    case "1850":
                    case "226T":
                    case "6813":
                    case "6702":
                    case "1892":
                    case "6783":
                    case "6710":
                    case "6785":
                    case "cscPolo":
                    case "wpPolo":
                    case "6692":
                        switch(color)
                        {
                            case "orange":
                            case "athletic gold":
                            case "gold":
                            case "yellow":
                            case "navy":
                            case "purple":
                            case "royal":
                            case "dark green":
                            case "maroon":
                            case "red":
                            case "black":
                            case "grey":
                            case "green":
                            case "kelly green":
                                return "white";
                                break;
                            case "white":
                                return "black";
                                break;
                        }
                    case "pPolo":
                    case "wwJacket":
                        switch(color)
                        {
                            case "black": 
                            case "brightRoyal": 
                            case "dark green": 
                            case "maroon": 
                            case "navy": 
                            case "purple": 
                            case "royal":
                            case "royal blue":
                            case "yellow":
                            case "gold":
                            case "kelly green":
                            case "grey": 
                                return "white";
                                break;
                            case "athletic gold":
                            case "techForest": 
                            case "tech forest": 
                            case "white": 
                            case "heatheredGrey": 
                            case "orange": 
                            case "red":
                            case "stone":
                            case "heathered grey": 
                            case "vista grey": 
                                return "black";
                                break;
                        }        
                    case "3slt":
                    case "3sPolo":
                    case "c3sPolo":
                    case "wsrJacket":
                        switch(color)
                        {
                            case "black": 
                            case "navy": 
                            case "royal":
                            case "mineralNavy":
                                return "white";
                                break;
                            case "white": 
                            case "red":
                            case "grey":
                            case "stone":
                                return "black";
                                break;
                        }        
                    case "cwJacket":
                    case "3scqz":
                    case "welj":
                        switch(color)
                        {
                            case "navy": 
                            case "black": 
                            case "royal":
                            case "red":
                            case "dark green":
                                return "white";
                                break;
                            case "white": 
                            case "grey":
                                return "black";
                                break;
                        }                
                case "p3sPolo":
                        switch(color)
                        {
                            case "maroon":
                            case "dark green":
                            case "navy":
                            case "orange":
                            case "red":
                            case "white":
                                return "black";
                                break;
                            case "black":
                            case "royal":
                                return "white";
                                break;    
                        }
                    default:
                        debugLog("I do not know what thread color to use. Please check PUID and Color combination v the picture names.");
                        break;
                }   
        case "filename":
            switch(color)
            {
                case "gold":
                    return "athletic-gold";
                    break;
                case "kelly green":
                    return "kelly-green";
                    break;
                case "dark green":
                    return "dark-green";
                    break;
                case "sky blue":
                    return "sky-blue";
                    break;
                default:
                    return color;
                    break;
            }   
    }
}

function getItemByName(name) {
        app.activeDocument.pageItems.getByName(name).selected=true;    
}

function SearchForProperties(obj, search, term) {
    var list = [];
    
    for (var prop in obj)
    {
            var thingy = obj[prop];
            
            if(String(thingy[search]).indexOf(term) > -1)
            {
                list.push( String(thingy.name));
            }
    }

    //$.writeln("Search Results: " + list);
    
    return list;

}

function SkipCheck(destPath,publicDestPath,fileName) {
    
    fileName = fileName.replace(destPath,"").toLowerCase();

    //$.writeln("filename: " + fileName);
    
    checkFile1 = destPath + fileName;
    checkFile2 = publicDestPath + fileName;
    
    if (File(checkFile1).exists == true || File(checkFile2).exists == true) return true;
    if (File(checkFile1).exists != true && File(checkFile2).exists != true) 
    {
        //$.writeln("checkFile1: " + checkFile1);
        //$.writeln("checkFile2: " + checkFile2);
        return false;
    }
}


function PositionEverything (productImage,designImage,productDimensionsInfo){
        
        var designCenterX = productDimensionsInfo.designCenter;
        var designHeight = productDimensionsInfo.designHeight;
        
        productImage.position = [0,productImage.height];  
        
        if(productDimensionsInfo.rotate != undefined){
            designImage.rotate(productDimensionsInfo.rotate);
        }
    
        logoTargetX = (productImage.width * productDimensionsInfo.designCenter) - (designImage.width / 2);
        
        if(productDimensionsInfo.align != undefined && productDimensionsInfo.align == "center"){
            logoTargetY = ((productImage.height * productDimensionsInfo.designHeight) - ((productImage.height * productDimensionsInfo.designMaxHeight) / 2)) + (designImage.height / 2);
            //$.writeln("align top");
        }
        if(productDimensionsInfo.align != undefined && productDimensionsInfo.align == "bottom") {
            logoTargetY = ((productImage.height * productDimensionsInfo.designHeight) - ((productImage.height * productDimensionsInfo.designMaxHeight))) + (designImage.height);
            //$.writeln("align bottom");
        }
        else if (productDimensionsInfo.align == undefined){
            logoTargetY = (productImage.height * productDimensionsInfo.designHeight);
        }
    
        designImage.position = [logoTargetX,logoTargetY];
}

/*
function ResizeProportionally(image,relationalImage,maxWidth,maxHeight,override)
{
     var beginningImageWidth = image.width;
     var beginningImageHeight = image.height;
     
     if (beginningImageWidth > beginningImageHeight || beginningImageWidth == beginningImageHeight && override != "height")
     {
        imageWidth = maxWidth * relationalImage.width;
        imageHeightAdj = imageWidth/beginningImageWidth;
        imageHeight =image.height * imageHeightAdj;
     }
     else
     {
        imageHeight = maxHeight * relationalImage.height;
        //imageHeight = maxWidth * relationalImage.width; //Bandaid
        imageWidthAdj = imageHeight / beginningImageHeight; 
        imageWidth = image.width * imageWidthAdj;
     }
    
    image.width = imageWidth;
    image.height = imageHeight;
}
*/
function ResizeProportionally(image,relationalImage,maxWidth,maxHeight,rule)
{
     var beginningImageWidth = image.width;
     var beginningImageHeight = image.height;
     
     //$.writeln(maxWidth);
     //$.writeln(maxHeight);
     //$.writeln(image.width);
     //$.writeln(image.height);
    //$.writeln(relationalImage.width);
    //$.writeln(relationalImage.height);
     
     //for (i = 0; i < 2; i++)
    //{

        if(image.width < image.height || rule == "height")
        {
            //$.writeln("image.width < image.height || rule == height");
            imageHeight = maxHeight * relationalImage.height;
            if (rule == "square") {imageHeight = maxWidth * relationalImage.width;}
            imageWidthAdj = imageHeight / beginningImageHeight; 
            imageWidth = image.width * imageWidthAdj;
        }
        else if(image.width > image.height || image.width == image.height)
        {
            //$.writeln("(image.width > image.height || image.width == image.height) && rule != height");
            imageWidth = maxWidth * relationalImage.width;
            imageHeightAdj = imageWidth/beginningImageWidth;
            imageHeight =image.height * imageHeightAdj;
        }
    
        image.width = imageWidth;
        image.height = imageHeight;
        
        beginningImageWidth = image.width;
        beginningImageHeight = image.height;
        
        //$.writeln("w: " + image.width +" | mw: " + maxWidth * relationalImage.width);
        //$.writeln("h: " + image.height +" | mh: " + maxHeight * relationalImage.height);
        
        if(image.width > (maxWidth * relationalImage.width))
        {
            //$.writeln("adjust width");
            beginningImageWidth = image.width;
            beginningImageHeight = image.height;
            imageWidth = maxWidth * relationalImage.width;
            imageHeightAdj = imageWidth/beginningImageWidth;
            imageHeight =image.height * imageHeightAdj;
            image.width = imageWidth;
            image.height = imageHeight;
        }
        if(image.height > (maxHeight * relationalImage.height))
        {
            //$.writeln("adjust height");
            beginningImageWidth = image.width;
            beginningImageHeight = image.height;
            imageHeight = maxHeight * relationalImage.height;
            imageWidthAdj = imageHeight / beginningImageHeight; 
            imageWidth = image.width * imageWidthAdj;
            image.width = imageWidth;
            image.height = imageHeight;
        }
        if(image.width > (maxWidth * relationalImage.width))
        {
                       // $.writeln("adjust width");
            beginningImageWidth = image.width;
            beginningImageHeight = image.height;
            imageWidth = maxWidth * relationalImage.width;
            imageHeightAdj = imageWidth/beginningImageWidth;
            imageHeight =image.height * imageHeightAdj;
            image.width = imageWidth;
            image.height = imageHeight;

        }
        if(image.height > (maxHeight * relationalImage.height))
        {
                        //$.writeln("adjust height");
            beginningImageWidth = image.width;
            beginningImageHeight = image.height;
            imageHeight = maxHeight * relationalImage.height;
            imageWidthAdj = imageHeight / beginningImageHeight; 
            imageWidth = image.width * imageWidthAdj;
            image.width = imageWidth;
            image.height = imageHeight;
        }
        if(rule == "hypotenuse")
        {
            var hypotenuse = Math.sqrt((image.width * image.width) + (image.height * image.height));
            
            if (hypotenuse > maxWidth || hypotenuse > maxWidth)
            {
                if(maxWidth > maxHeight){
                    var circleAdj = (relationalImage.width * maxWidth) / hypotenuse;
                    imageHeight = image.height * circleAdj;
                    imageWidth = image.width * circleAdj;
                    }
                else{
                    var circleAdj = (relationalImage.height * maxHeight) / hypotenuse;
                    imageHeight = image.height * circleAdj;
                    imageWidth = image.width * circleAdj;
                    }
            }
        }

        image.width = imageWidth;
        image.height = imageHeight;
}

function StripFilePathAndType(fileName) {
        fileName = StripFilePath(fileName);
        fileName = StripFileType(fileName);
        return fileName;
}
function StripFilePath(fileName) {
        //fileName = fileName.replace("\\\\AWS-OFFLOAD\\EmbroideryLogos\\","").replace("\\\\AWS-OFFLOAD\\DesignLibrary\\","").replace("P:\\Team Stores\\Designs\\PNGs\\","").replace("P:\\Team Stores\\Designs\\PNGs\\","");
        var pattern = /.*\\/g;
        fileName = fileName.replace(pattern,"");
        return fileName;
}
function StripFileType(fileName){
        fileName = fileName.replace(".png","").replace(".jpg","").replace(".svg","");
        return fileName;
}