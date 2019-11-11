
//var progressBarCurrent = 0;
//var progressBar100Percent = 0;
//var lastProgress = 0;

#include Utilities.jsx

Main();
    
function Main() 
{
   debugLog('///////////////////START///////////////////');

    var store = "team"
    
    var myFolder = Folder("C:\\Users\\eric.brown\\Desktop\\Generated SVGs");  
    var destFolder = Folder("C:\\Users\\eric.brown\\Desktop\\GeneratedImages");    
    //var myFolder = Folder("F:\\Generated SVGs");  
    //var destFolder = Folder("F:\\Generated Images"); 
    
    var OptionsWindowResults = OptionsWindow(myFolder,destFolder);
    
    myFolder = OptionsWindowResults[0];
    destFolder = OptionsWindowResults[1];

    var fileList = myFolder.getFiles();
   
   //Directory and file/folder list of destination folder
   //var dir = "P:\\InkSoft\Fundraiser\\Images - Print";
   //var folderList = GetFolders(dir);

   for (var iFile = 0; iFile < fileList.length; iFile++) 
   {        
        var newDocName = NewDocName(fileList[iFile].name);
        var checkName = destFolder + "\\" + newDocName + ".png";    
        
        if  (File(checkName.replace(".svg",".png").replace("%20"," ").replace("%20"," ").replace(" ","-").replace(" ","-").replace("Generated-Images","GeneratedImages")).exists)
        {
        }
        else
        {
            $.writeln("");
            $.writeln(fileList[iFile].name);
        
            var doc = app.open(fileList[iFile]);
           
            DesignActions(doc, doc.layers[0].name);

            var newDocName = NewDocName(doc.name);
            
            //Fan Store Embroidery
            if  (doc.layers[0].name.indexOf("emb") >= 0)
            {
                ExportPNG24noClipping("P:\\InkSoft\\Fundraiser\\Fundraising Products\\Mascot Images\\" + newDocName);  
            }        

            //Fan Store Designs
            if  (doc.layers[0].name.indexOf("FanStore") >= 0)
            {
                var dir = "P:\\InkSoft\\Fundraiser\\Images - Print";
                var folderList = GetFolders(dir);
                var printFolder = FolderCreation(folderList, newDocName,dir);
                            
                ExportPNG24("P:\\InkSoft\\Fundraiser\\WhiteOutlingPngs\\" + newDocName);
                ExportPNG24(destFolder + "\\" + newDocName);
                
                app.executeMenuCommand('doc-color-cmyk');
         
                ExportEPS(printFolder + "\\" + newDocName);
            }

            //Fan Store Designs
            if  (doc.layers[0].name.indexOf("test") >= 0)
            {
                //var dir = "P:\\InkSoft\\Fundraiser\\Images - Print";
               // //var folderList = GetFolders(dir);
                //var printFolder = FolderCreation(folderList, newDocName,dir);
                            
                ExportPNG24noClipping("C:\\Users\\eric.brown\\Desktop\\GeneratedImages\\" + newDocName);
                //ExportPNG24(destFolder + "\\" + newDocName);
                
                app.executeMenuCommand('doc-color-cmyk');
         
                ExportEPS("C:\\Users\\eric.brown\\Desktop\\GeneratedImages\\" + newDocName);
            }
        
            //Pick Your Print
            if  (doc.layers[0].name.indexOf("PickYourPrint") >= 0)
            {              
                ExportPNG24noClipping(destFolder + "\\" + newDocName);
            }

            //School Domain Text
            if  (doc.layers[0].name.indexOf("schoolDomain") >= 0 || doc.layers[0].name.indexOf("schoolTitle") >= 0)
            {              
                    ExportPNG24noClipping("P:\\InkSoft\\Fundraiser\\WhiteOutlingPngs\\" + newDocName);
            }

            //Team Stores
            if  (doc.layers[0].name.indexOf("TeamStore") >= 0)
            {
                var dir = "P:\\Team Stores\\Designs\\Images - Print";
                //var dir = "F:\\Images - Print";
                var folderList = GetFolders(dir);
                var printFolder = FolderCreation(folderList, newDocName,dir);

                ExportPNG24(destFolder + "\\" + newDocName);
                                
                if(doc.layers[0].name == "TeamStoreDesign8" || doc.layers[0].name == "TeamStoreDesign9" || doc.layers[0].name == "TeamStoreDesign11" || doc.layers[0].name == "TeamStoreDesign12" || doc.layers[0].name == "TeamStoreDesign13") 
                {            
                    getItemByName("mascotImage");
                    var mascotImage = app.selection[0];   
                    doc.selection = null;

                    mascotImage.remove();

                    if(doc.layers[0].name == "TeamStoreDesign8") 
                    {
                        getItemByName("textLine2");
                        textLine2 = app.selection[0];
                        doc.selection = null;
                        
                        getItemByName("textLine11");
                        textLine11 = app.selection[0];
                        doc.selection = null;   
            
                        resizeArtboard (doc,textLine11, textLine11, textLine11, textLine2); 
                    }
                
                    if(doc.layers[0].name == "TeamStoreDesign9") 
                    {
                        getItemByName("bars");
                        var bars = app.selection[0];   
                        doc.selection = null;
                        
                        resizeArtboard (doc,bars, bars, bars, bars);        
                    }
                    
                    if(doc.layers[0].name == "TeamStoreDesign11")
                    {
                        getItemByName("textLine11");
                        var textLine11 = app.selection[0];
                        doc.selection = null;
                        
                        resizeArtboard(doc, textLine11, textLine11, textLine11, textLine11);
                        
                        //code stuff
                    }
                    if(doc.layers[0].name == "TeamStoreDesign12")
                    {
                        getItemByName("textLine12");
                        var textLine12 = app.selection[0];
                        doc.selection = null;
                        
                        resizeArtboard(doc, textLine12, textLine12, textLine12, textLine12);
                        
                        //code stuff
                    }
                
                    if(doc.layers[0].name == "TeamStoreDesign13")
                    {
                        getItemByName("textLine13");
                        var textLine13 = app.selection[0];
                        doc.selection = null;
                        
                        resizeArtboard(doc, textLine13, textLine13, textLine13, textLine13);
                        
                        //code stuff
                    }
                        
                };
                
               ExportPNG24("P:\\Team Stores\\Designs\\PNGs\\" + newDocName);
                //ExportPNG24("F:\\PNGs\\" + newDocName);
                
                app.executeMenuCommand('doc-color-cmyk');
         
                ExportEPS(printFolder + "\\" + newDocName);
            }
        
            doc.close(SaveOptions.DONOTSAVECHANGES);
        }
    }

    debugLog('///////////////////FINISHED///////////////////');
}

function OptionsWindow(myFolder,destFolder)
{   
    var optionsMenu = new Window('dialog', 'Design Script');
    optionsMenu.frameLoction = (100,100);
    
    optionsMenu.bounds = {x:400, y:250, width:420, height:170};

    optionsMenu.RunButton = optionsMenu.add('button', [20,20,400,85], 'Run'); 
    optionsMenu.MyFolder = optionsMenu.add('button', [20,105,200,150], 'SVG Folder'); 
    optionsMenu.DestFolder = optionsMenu.add('button', [220,105,400,150], 'Destination Folder'); 
        
    optionsMenu.MyFolder.onClick = function()
    {        
        var myFolder = Folder.selectDialog( "Select a folder with design files" );      
    }

    optionsMenu.MyFolder.onClick = function()
    {        
        var destFolder = Folder.selectDialog( "Select destination folder" );  
    }

    //run button
    optionsMenu.RunButton.onClick = function()
    {        
        resultsArray = [myFolder,destFolder];  
        optionsMenu.close();        
    }

    //show menu
    optionsMenu.center();
    optionsMenu.show();
    
    return resultsArray;
}

function DesignActions(doc, design)
{
        if(design == "FanStoreDesign1" || design == "TeamStoreDesign2")
        {
            //select textLine1, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            
            var textWidth = textLine1.width;
            var textHeight = textLine1.height;
            var textPosition = textLine1.position;
            
            $.writeln(textWidth);
            $.writeln(textHeight);
            $.writeln(textPosition);
            
            doc.selection = null;
            
            getItemByName("adidasGolfFlag");
            var adidasFlag = app.selection[0];
            doc.selection = null;
            
            getItemByName("adidasText");
            var adidasText = app.selection[0];
            doc.selection = null;
            
            textLine1.width = adidasFlag.width;
           
            var textHeightAdjust = textLine1.width / textWidth;
            
            //$.writeln(textHeightAdjust);
            
            textLine1.height = textHeight * textHeightAdjust;
            
            textLine1.position[1] = adidasFlag.position[1] - (adidasFlag.height - 21.8);
            
            // START OF OUTLINE STUFF
            var strokeColor = new RGBColor();
            strokeColor.red = 255;
            strokeColor.green = 255;
            strokeColor.blue = 255;       
        
            var numPaths = doc.pathItems.length;
            $.writeln(numPaths);
            var thePaths = doc.pathItems;
            $.writeln(thePaths[0].name);
            $.writeln(thePaths[0].strokeAlignment);
            $.writeln(app.version);
           
            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine1");       
                var textLine1 = app.selection[0];
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 3;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
                //pathArt.fillColor = fillColor;

                }
            
            var action = new File (['/p/JordanRunstein/illustratorActions/alignStrokeOutside.aia']);
            app.loadAction(action);
            app.doScript("alignStroke","alignStrokeOutside");
            app.unloadAction("alignStrokeOutside","");
            
            var action = new File (['/p/JordanRunstein/illustratorActions/alignStrokeInside.aia']);
            app.loadAction(action);
            app.doScript("asi","alignStrokeInside");
            app.unloadAction("alignStrokeInside","");
            
            
            
            resizeArtboard (doc,adidasText, adidasText, adidasText, textLine1);
        }

        if(design == "FanStoreDesign2" || design == "TeamStoreDesign4")
        {
            //select textLine1, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //select textLine2, create outlines
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";
            doc.selection = null;
            
            getItemByName("textLine2");
            textLine2 = app.selection[0];     
            doc.selection = null;
            
            //find design-lines
            getItemByName("designElements");
            var designLines = app.selection[0];     
            var designLinesCenterX = designLines.position[0] + designLines.width / 2;
            doc.selection = null;
            
            //resize and move textLine1
            textLine1.width = designLines.width;
            textLine1.position = [designLines.position[0],textLine1.position[1]];
            
            //resize and move textLine2
            textLine2.width = designLines.width * .4879;
            var targetX = designLinesCenterX - (textLine2.width / 2);        
            textLine2.position = [targetX,textLine2.position[1]];
          
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");

            resizeArtboard (doc,designLines, designLines, designLines, textLine2);
        }    


        if(design == "FanStoreDesign3" || design == "TeamStoreDesign5")
        {
            //select textLine1, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;       
            
            //select textLine2, create outlines
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";
            doc.selection = null;
            
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            //find design-lines
            getItemByName("designElements");
            var designElements = app.selection[0];     
            doc.selection = null;

            var designElementsCenter = designElements.position[0] + (designElements.width / 2);

            textLine1.width = designElements.width * 1.0585;
            textLine2.width = designElements.width * .3596;

            var textLine1TargetX = designElementsCenter - (textLine1.width / 2);
            var textLine2TargetX = designElementsCenter - (textLine2.width / 2);
            
            textLine2.position = [textLine2TargetX,textLine2.position[1]];
            textLine1.position = [textLine1TargetX,textLine1.position[1]];
            
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");
            
            if(textLine1.width > designElements.width) resizeArtboard(doc,textLine1,designElements,textLine1,textLine2);
            else resizeArtboard(doc,designElements,designElements,designElements,textLine2);

        }

        if(design == "FanStoreDesign4")
        {          
            //select textLine1-1, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;       
            
            //find design-lines
            getItemByName("designElements");
            var designElements = app.selection[0];     
            doc.selection = null;
            
            //getItemByName("adidasbrandmark");
            //var adidasbrandmark = app.selection[0];     
            //doc.selection = null;
            
            var textStartingWidth = textLine1.width;
            var textStartingHeight = textLine1.height;
            
            if(textLine1.height < (designElements.height* .0407))
            {
                textLine1.height = designElements.height* .0407;
                textLine1.width = textLine1.width * (textLine1.height / textStartingHeight);
            }

            textLine1TargetX = designElements.position[0] + (designElements.width / 2) - (textLine1.width / 2);
            textLine1TargetY = (designElements.position[1] - designElements.height) + (designElements.height * .23189);
            
            textLine1.position = [textLine1TargetX,textLine1TargetY];
            
            resizeArtboard(doc,designElements,designElements,designElements,textLine1);
        }

        if(design == "FanStoreDesign5")
        {
            //select textLine1-1, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;       
            
            //find design-lines
            getItemByName("designElements");
            var designElements = app.selection[0];     
            doc.selection = null;
            
            var textStartingWidth = textLine1.width;
            var textStartingHeight = textLine1.height;

            if (textLine1.width > (designElements.width * .87259))
            {
                textLine1.width = designElements.width;
                textLine1.height = textLine1.height * (textLine1.width / textStartingWidth);
                
                textLine1TargetX = designElements.position[0];
            }
            else
            {
                textLine1TargetX = designElements.position[0] + designElements.width * .02741;
            }

            textLine1TargetY = (designElements.position[1] - designElements.height) - (designElements.height * .06948);
            
            textLine1.position = [textLine1TargetX,textLine1TargetY];
            
            resizeArtboard(doc,designElements,designElements,designElements,textLine1);
        }
    
        if(design == "FanStoreDesign6")
        {                 
            doc.textFrames[1].name = "textLine1";
            
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //select textLine2_1, create outlines
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";
            doc.selection = null;
            
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            getItemByName("mascotImage");        
            var mascotImage = app.selection[0];  
            doc.selection = null;
            
            //$.writeln(mascotImage.name);
            $.writeln(mascotImage.file);
            
            /*
            var buttonBackgroundFile = File(blankPicturesFilePath + "\\buttonBackground.png");  
            doc.groupItems.createFromFile(buttonBackgroundFile).name="buttonBackground";
            getItemByName("buttonBackground");
            var buttonBackgroundImage = app.selection[0];
            doc.selection = null;
            */
        
            getItemByName("SplashColor2");        
            var splashColor = app.selection[0];  
            doc.selection = null;
            
            if(String(mascotImage.file).indexOf("blank.") > -1 || String(mascotImage.file).indexOf("StillDeciding.") > -1 || String(mascotImage.file).indexOf("Blank.") > -1 )
            {
                mascotImage.remove();

                textLine1.width = textLine1.height * 2.4613;
                textLine2.width = textLine1.width;

                textLine2.position = [textLine1.position[0],textLine2.position[1]];    

                var targetX = textLine1.position [0] +(textLine1.width / 2) - (splashColor.width / 2);
                var targetY = textLine1.position [1] - (textLine1.height / 2) + (splashColor.height / 2);

                splashColor.position = [targetX,targetY];

                $.writeln(doc.Artboards);

                resizeArtboard(doc,textLine1,textLine1,textLine1,textLine2);
            }
            else
            {
                mascotTargetWidth = textLine1.width + textLine2.width;
                mascotTargetHeight = textLine1.height + textLine2.height;
                            
                textLine1.remove();
                textLine2.remove();
                splashColor.remove();
                
                $.writeln(mascotTargetWidth);

                var mascotImageWidth = mascotImage.width;
                var mascotImageHeight = mascotImage.height;
                
                if(mascotImageWidth > mascotImageHeight)
                {
                    resizeProportional (mascotImage, "width", 600);
                }
                if(mascotImageWidth < mascotImageHeight)
                {
                    resizeProportional (mascotImage, "height", 340);
                }
                else
                {
                    resizeProportional (mascotImage, "width", 600);
                }
            
                var activeABindex = doc.artboards.getActiveArtboardIndex();  
                var newAB = doc.artboards[activeABindex];

                resizeArtboard(doc,mascotImage,mascotImage,mascotImage,mascotImage);
            }
        }

        if(design == "FanStoreDesign7" || design == "TeamStoreDesign3")
        {
            //select textLine1-3, create outlines
            
            getItemByName("textLine1-1");        
            var textLine1_1 = app.selection[0];  
            $.writeln("test");
            textLine1_1.createOutline().name = "textLine1_1";
            $.writeln("test2");
            doc.selection = null;
            
            getItemByName("textLine1_1");
            textLine1_1 = app.selection[0];
            doc.selection = null;        
            
            //select textLine1-2, create outlines
            getItemByName("textLine1-2");        
            var textLine1_2 = app.selection[0];  
            textLine1_2.createOutline().name = "textLine1_2";
            doc.selection = null;
            
            getItemByName("textLine1_2");
            textLine1_2 = app.selection[0];
            doc.selection = null;
            
            //select textLine2, create outlines
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";
            doc.selection = null;
            
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            //find design-lines
            getItemByName("designElements");
            var designElements = app.selection[0];     
            var designElementsCenterX = designElements.position[0] + designElements.width / 2;
            doc.selection = null;
        
            getItemByName("mascotImage");        
            var mascotImage = app.selection[0];  
            doc.selection = null;
            
            //$.writeln(mascotImage.file);
            
            //resize and move textLine1_1
            textLine1_1.width = designElements.width * .868;
            var targetX = designElementsCenterX - (textLine1_1.width / 2);        
            textLine1_1.position = [targetX,textLine1_1.position[1]];        
            
            //resize and move textLine1_2
            textLine1_2.width = designElements.width * .868;
            var targetX = designElementsCenterX - (textLine1_2.width / 2);        
            textLine1_2.position = [targetX,textLine1_2.position[1]];
            
            //resize and move textLine2
            textLine2.width = designElements.width * .372;
            var targetX = designElementsCenterX - (textLine2.width / 2);        
            textLine2.position = [targetX,textLine2.position[1]];
            
            //START OF THE OUTLINE STUFF
            var strokeColor = new RGBColor();
            strokeColor.red = 255;
            strokeColor.green = 255;
            strokeColor.blue = 255;
            

        
            var numPaths = doc.pathItems.length;
            $.writeln(numPaths);
            var thePaths = doc.pathItems;
            $.writeln(thePaths[0].name);
            $.writeln(thePaths[0].strokeAlignment);
            $.writeln(app.version);
           
            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine1_1");       
                var textLine1 = app.selection[0];
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 3;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
                //pathArt.fillColor = fillColor;

                }
            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine1_2");       
                var textLine1 = app.selection[0];
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 3;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
                //pathArt.fillColor = fillColor;

                }
            
            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine2");       
                var textLine1 = app.selection[0];
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 0;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
                //pathArt.fillColor = fillColor;

                }
            
            var action = new File (['/p/JordanRunstein/illustratorActions/alignStrokeOutside.aia']);
            app.loadAction(action);
            app.doScript("alignStroke","alignStrokeOutside");
            app.unloadAction("alignStrokeOutside","");
            

            if(String(mascotImage.file).indexOf("blank.") > -1 || String(mascotImage.file).indexOf("StillDeciding.") > -1 || String(mascotImage.file).indexOf("Blank.") > -1)
            {
                mascotImage.remove();
                
                resizeArtboard (doc,designElements, textLine1_2, designElements, textLine2);
            }
            else
            {
                var maxWidth = textLine2.width * .45;
                
                if(mascotImage.width > maxWidth)
                {
                        resizeProportional (mascotImage, "width", maxWidth);
                }
            
                var targetX = (designElements.width / 2) - (mascotImage.width / 2);
                var targetY = textLine2.position[1] - textLine2.height - (textLine1_1.position[1] - textLine1_1.height - textLine2.position[1]);
                mascotImage.position = [targetX,targetY];
                
                resizeArtboard (doc,designElements, textLine1_2, designElements, mascotImage);
            }
        
        
            
            
            
        }

        if(design == "FanStoreDesign8")
        {
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";
            doc.selection = null;
            
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            //select text, create outlines
            getItemByName("mascotImage");        
            var mascotImage = app.selection[0];  
            doc.selection = null;
            
            getItemByName("designElements");
            var designElements = app.selection[0];
            doc.selection = null;
            
            var designElementsCenterX = designElements.position[0] + (designElements.width / 2);
            
            //resize and move textLine1_1
            textLine1.width = designElements.width;
            textLine1.position = [designElements.position[0],textLine1.position[1]];
            
            //resize and move textLine1_1
            textLine2.width = designElements.width * .48529;
            textLine2.position[0] = designElements.position[0] + (designElements.width / 2) - (textLine2.width / 2);
            textLine2.position[1] = designElements.position[1] - (designElements.height / 2) + (textLine2.height / 2);
            
            if(String(mascotImage.file).indexOf("blank.") > -1 || String(mascotImage.file).indexOf("StillDeciding.") > -1 || String(mascotImage.file).indexOf("Blank.") > -1)
            {
                mascotImage.remove();
                
                resizeArtboard (doc,designElements, textLine1, designElements, designElements);
            }
            else
            {
                var maxWidth = designElements.width * .2;
                
                if(mascotImage.width > maxWidth)
                {
                        resizeProportional (mascotImage, "width", maxWidth);
                }
            
                var targetX = designElements.position[0] + (designElements.width / 2) - (mascotImage.width / 2);
                var targetY = designElements.position[1] - (designElements.height / 2) - designElements.height;
                
                mascotImage.position = [targetX,targetY];
                
                resizeArtboard (doc,designElements, textLine1, designElements, mascotImage);
            }
        }
    
        if(design == "FanStoreDesign9")
        {       
            getItemByName("designElements");        
            var designElements = app.selection[0];
            doc.selection = null;
                    
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;

            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";
            doc.selection = null;

            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;

            //resize and move textLine1_1
            textLine1.width = designElements.width;
            var textLine1TargetX = designElements.position[0];
            var textLine1TargetY = designElements.position[1] + textLine1.height;

            textLine1.position = [textLine1TargetX,textLine1TargetY];
            
            textLine2.height = designElements.height;
            //textLine2.position[0] = designElements.position[0];
            var textLine2TargetY = designElements.position[1] - (designElements.height / 2) + (textLine2.height / 2);
            
            textLine2.position = [textLine2.position[0],textLine2TargetY];
            
            //select text, create outlines
            getItemByName("mascotImage");        
            var mascotImage = app.selection[0];  
            doc.selection = null;
            
            if(String(mascotImage.file).indexOf("blank.") > -1 || String(mascotImage.file).indexOf("StillDeciding.") > -1 || String(mascotImage.file).indexOf("Blank.") > -1)
            {
                mascotImage.remove();
                
                resizeArtboard (doc,designElements, textLine1, designElements, designElements);
            }
            else
            {
                var maxWidth = designElements.width * .2;
                
                if(mascotImage.width > maxWidth)
                {
                        resizeProportional (mascotImage, "width", maxWidth);
                }
            
                var targetX = designElements.position[0] + (designElements.width * .8) - (mascotImage.width / 2);
                var targetY = designElements.position[1] - (designElements.height / 3.16) - designElements.height;
                
                mascotImage.position = [targetX,targetY];
                
                resizeArtboard (doc,designElements, textLine1, designElements, mascotImage);
            }
        
        
        }  
    
        if(design == "mascot")
        {       
            getItemByName("mascotImage");        
            var mascotImage = app.selection[0];  
            doc.selection = null;

            mascotImage.trace();
            
            resizeArtboard (doc,mascotImage, mascotImage, mascotImage, mascotImage);
        }        
    
        if(design == "FanStoreDesign10")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            textLine1.width = designElements.width;
            textLine1.position = [designElements.position[0],textLine1.position[1]];
            
            resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }        
        
        if(design == "emb-script")
        {
            doc.selection = null;
            debugLog("script");
                       
            getItemByName("text");        
            var text = app.selection[0];  
            text.createOutline().name = "text";
            doc.selection = null;
            
            getItemByName("text");
            text = app.selection[0];  
            doc.selection = null;
            
            getItemByName("design");        
            var design = app.selection[0];  
            doc.selection = null;    
            
            var textX = text.position[0];
            var textWidth = text.width;
            var designWidth = design.width;
            var targetX = textX + (textWidth / 2) - (designWidth / 2);
            var targetY = text.position[1] - text.height - (text.height * .08);
            //design.position[0] = textX + (textWidth / 2) - (designWidth / 2);
            design.position = [targetX,targetY];
        }
    
        if(design == "emb-block")
        {      
            doc.selection = null;
            
            getItemByName("text");        
            var text = app.selection[0];  
            text.createOutline().name = "text";
            doc.selection = null;
            
            getItemByName("text");
            text = app.selection[0];  
            doc.selection = null;
            
            getItemByName("bar1");        
            var bar1 = app.selection[0];  
            doc.selection = null;        
            
            getItemByName("bar2");        
            var bar2 = app.selection[0];  
            doc.selection = null;
            
            var textWidth = text.width;
            
            bar1.width = textWidth;
            bar2.width = textWidth;
            
            var position = text.position[0];
            
            bar1.position[0] = position;
            bar2.position[0] = position;
        }

        if(design == "emb-adidas")
        {      
            doc.selection = null;

            getItemByName("adidas");        
            var text = app.selection[0];  
            text.createOutline().name = "text";
            doc.selection = null;
            
            getItemByName("text");
            text = app.selection[0];  
            doc.selection = null;
            
            getItemByName("design-elements");        
            var designElements = app.selection[0];  
            doc.selection = null;
            
            var textWidth = text.width;
            var textHeight = text.height;
            
            var designWidth = designElements.width;
            var designHeight = designElements.height;
            
            var newTextHeight = designHeight * .63;
            var textWidthAdj = newTextHeight / textHeight;
            var newTextWidth = textWidth * textWidthAdj;
            
            if(newTextWidth > designWidth)
            {
                //debugLog("too wide, adj.");
                newTextWidth = designWidth;
                var textHeightAdj = newTextWidth / textWidth;
                newTextHeight = textHeight * textHeightAdj;
            }

            text.height = newTextHeight;
            text.width = newTextWidth;
            
            var designWidthCenter = designWidth / 2;
            var textWidthCenter = newTextWidth / 2;

            var targetX = (designWidth / 2) - (newTextWidth / 2);
            var targetY = (designHeight / 2) + (newTextHeight / 2);
            
            text.position = [targetX, targetY];
        }

        if(design == "emb-collegiate")
        {      
            doc.selection = null;

            getItemByName("text");        
            var text = app.selection[0];  
            text.createOutline().name = "text";
            doc.selection = null;
            
            getItemByName("text");
            text = app.selection[0];  
            doc.selection = null;
            
            getItemByName("design-elements");        
            var designElements = app.selection[0];  
            doc.selection = null;
            
            var textWidth = text.width;
            var textHeight = text.height;
            
            var designWidth = designElements.width;
            var designHeight = designElements.height;
            
            var newTextHeight = designHeight * .5149;
            var textWidthAdj = newTextHeight / textHeight;
            var newTextWidth = textWidth * textWidthAdj;
            
            text.height = newTextHeight;
            text.width = newTextWidth;
            
            var designWidthCenter = designWidth / 2;
            var textWidthCenter = newTextWidth / 2;

            var targetX = (designElements.position[0] + designWidthCenter) - (text.width / 2);
            
            //text.position[0] = targetX;
            text.position = [targetX,text.position[1]];
            //text.position = [(designElements.width / 2) - (text.width / 2),text.position[1]];
        }
    
        if(design == "marketingFlyer")
        {                         
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //select text, create outlines
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";

            doc.selection = null;
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            textLine1Width = textLine1.width;
            textLine1Height = textLine1.height;
            textLine2Width = textLine2.width;
            textLine2Height = textLine2.height;

            if((textLine1Height/textLine1Wdith) > .08554)
            {
                //if textLine1 ratio means it is too large
                //fixed point is height of textLine1
                textLine2.width = textline1.width;
                textLine2.height = textLine2.height * (textLine2.width / textLine2Width);
                
                textLine2.position = [textLine1.position[0],(textLine1.position[1] - 679)];
            }
            else
            {
                //textLine
            }
        }
    
        if(design == "PickYourPrint1")
        {       
            //select text, create outlines
            getItemByName("textLine1");       
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";

            doc.selection = null;
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;

            textLine2.width = designElements.width * 1.6999617;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine2.width / 2);
            textLine2.position = [targetX,textLine2.position[1]];
            
            textLine1.width = textLine2.width* .3090483;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }
    
        if(design == "PickYourPrint2")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            
            textLine1.width = designElements.width * .295;
            var targetX = designElements.position[0] + (designWidth * .2201523);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }
        
        if(design == "PickYourPrint3")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .568242;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }
    
        if(design == "PickYourPrint4")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .85085077;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }
    
        if(design == "PickYourPrint10")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .8825601;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }   
        if(design == "PickYourPrint11")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElement");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("golfText");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .8825601;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }   
        if(design == "PickYourPrint12")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .8825601;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }   
        if(design == "PickYourPrint13")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .8825601;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }   
        if(design == "PickYourPrint14")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .8825601;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }   
        if(design == "PickYourPrint15")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .8825601;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
        }   
        if(design == "TeamStoreDesign1")
        {       
            //doc.textFrames[1].name = "textLine1";
            
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";
            doc.selection = null;
            
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            getItemByName("mascotImage");        
            var mascotImage = app.selection[0];  
            doc.selection = null;
            $.writeln("mascot image width: " + mascotImage.width);
            
            if (mascotImage.width > 275){
                textLine1.width = mascotImage.width * .75;
                textLine1.height = mascotImage.height * .25;
                }
            else {    
                textLine1.width = mascotImage.width * .8;
                textLine1.height = mascotImage.height * .2;
                }
            var targetX = (mascotImage.position[0] + (mascotImage.width / 2)) - (textLine1.width / 2);
            var targetY = mascotImage.position[1] - mascotImage.height - (textLine1.height * .2);
            
            $.writeln("targetX: " + targetX);
            $.writeln("targetY: " + targetY);
            $.writeln("textLine1.width: " + textLine1.width);
            $.writeln("textLine1.height: " + textLine1.height);
            
            
            textLine1.position = [targetX,targetY];

            
            

            //START OF THE OUTLINE STUFF
            var strokeColor = new RGBColor();
            strokeColor.red = 255;
            strokeColor.green = 255;
            strokeColor.blue = 255;
            

        
            var numPaths = doc.pathItems.length;
            $.writeln(numPaths);
            var thePaths = doc.pathItems;
            $.writeln(thePaths[0].name);
            $.writeln(thePaths[0].strokeAlignment);
            $.writeln(app.version);
           
            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine1");       
                var textLine1 = app.selection[0];
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 3;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
                //pathArt.fillColor = fillColor;

                }
            
            var action = new File (['/p/JordanRunstein/illustratorActions/alignStrokeOutside.aia']);
            app.loadAction(action);
            app.doScript("alignStroke","alignStrokeOutside");
            app.unloadAction("alignStrokeOutside","");
            
            doc.selection = null;
            //code stuff
            textLine1.compoundPathItems[3].position[1] = targetY+targetY*0.02;
            textLine1.compoundPathItems[2].position[1] = targetY+targetY*0.02;
            resizeArtboard(doc,mascotImage,mascotImage,mascotImage,textLine1);

            
        }
    
       if(design == "TeamStoreDesign6")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .85085077;
            var targetX = (designElements.position[0] + designWidthCenter) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            

/*          START OF THE OUTLINE STUFF
            var strokeColor = new RGBColor();
            strokeColor.red = 255;
            strokeColor.green = 255;
            strokeColor.blue = 255;
            

            var numPaths = doc.pathItems.length;
            $.writeln(numPaths);
            var thePaths = doc.pathItems;
            $.writeln(thePaths[0].name);
            $.writeln(thePaths[0].strokeAlignment);
            $.writeln(app.version);
           
            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine1");       
                var textLine1 = app.selection[0];
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 3;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
                //pathArt.fillColor = fillColor;

                }
            
            var action = new File (['/p/JordanRunstein/illustratorActions/alignStrokeOutside.aia']);
            app.loadAction(action);
            app.doScript("alignStroke","alignStrokeOutside");
            app.unloadAction("alignStrokeOutside","");
            
            doc.selection = null;
            //code stuff
            */
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");
            resizeArtboard (doc,designElements, textLine1, designElements, designElements);
        }
    
        if(design == "TeamStoreDesign7")
        {       
            //select text, create outlines
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;
            
            //find design-words-unleash-your
            getItemByName("designElements");
            var designElements = app.selection[0];   
            doc.selection = null;
            
            //find the rects
            getItemByName("rects");
            var rects = app.selection[0];
            doc.selection = null;
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .568242;
            var targetX = designElements.position[0] + (designElements.width / 2) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            pathlength = rects.pathItems.length;
            golfLength = designElements.width;
            $.writeln("width golf: " + golfLength);

            
            for (var pathi = 0; pathi < pathlength; pathi++){
                $.writeln("before length change: " + rects.pathItems[pathi].length);
                rects.pathItems[pathi].resize((golfLength/rects.pathItems[pathi].length)*200, 100);
                $.writeln("after length change: " + rects.pathItems[pathi].length);
                var transmatrix = app.getTranslationMatrix((548.24-537.43),0);
                rects.pathItems[pathi].transform(transmatrix);
                
                }
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");

            
            resizeArtboard (doc,designElements, textLine1, designElements, designElements);
            
        }
    
        if(design == "TeamStoreDesign8")
        {       
            $.writeln("TeamStoreDesign8");

            getItemByName("textLine2");       
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";

            doc.selection = null;
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine11");       
            var textLine11 = app.selection[0];  
            textLine11.createOutline().name = "textLine11";

            doc.selection = null;
            getItemByName("textLine11");
            textLine11 = app.selection[0];
            doc.selection = null;

            /*
            getItemByName("textLine12");       
            var textLine12 = app.selection[0];  
            textLine12.createOutline().name = "textLine12";

            doc.selection = null;
            getItemByName("textLine12");
            textLine12 = app.selection[0];
            doc.selection = null;   
            */
            getItemByName("mascotImage");
            var mascotImage = app.selection[0];   
            doc.selection = null;

            textLine2.width = textLine11.width * .9;
            
            textLine2.position = [textLine11.position[0] + (textLine11.width / 2) - (textLine2.width / 2), textLine11.position[1] - textLine11.height - (textLine2.height / 2)] ;
            
            ResizeProportionally(mascotImage,textLine11,.5,1.2,"");
            mascotImage.position = [textLine11.position[0] + (textLine11.width / 2) - (mascotImage.width / 2),textLine2.position[1] - (textLine2.height * 3)];
            
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");
            
            resizeArtboard (doc,textLine11, textLine11, textLine11, mascotImage);

            doc.selection = null;
        }
    
            if(design == "TeamStoreDesign10")
        {
            //select text, create outlines
            getItemByName("textLine1");
            var textLine1 = app.selection[0];
            textLine1.createOutline().name = "textLine1";

            doc.selection = null;
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            doc.selection = null;

            //find design-words-unleash-your
            getItemByName("rectangle");
            var rectangle = app.selection[0];
            doc.selection = null;

            getItemByName("mascotImage");
            var mascotImage = app.selection[0];
            doc.selection = null;

            var designWidth = rectangle.width;
            var designWidthCenter = designWidth / 2;

            textLine1.width = rectangle.width * .96;
            var targetX = rectangle.position[0] + (rectangle.width / 2) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];

            var targetX = rectangle.position[0] + (rectangle.width / 2) - (mascotImage.width / 2);
            mascotImage.position = [targetX,mascotImage.position[1]];

            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");

            resizeArtboard (doc,rectangle, rectangle, rectangle, mascotImage);
        }
        
        if(design == "TeamStoreDesign11")
        {

            getItemByName("textLine11");       
            var textLine11 = app.selection[0];  
            textLine11.createOutline().name = "textLine11";
            getItemByName("mascotImage");
            var mascotImage = app.selection[0];
            
            var lenCPI = doc.groupItems[0].compoundPathItems.length - 1;            

            $.writeln("///// BEFORE CHANGE /////");
            $.writeln("mascotimage x: " + mascotImage.position[0]);
            $.writeln("mascotimage y: " + mascotImage.position[1]);
            $.writeln("mascot height: " + mascotImage.height);
            
            if(mascotImage.height > mascotImage.width){
                var SF = 250/mascotImage.height * 100;
                }
            else {
                var SF = 250/mascotImage.width * 100;
                }
            mascotImage.resize(SF,SF);
            
            if( lenCPI % 2 == 1){
                var midx = (doc.groupItems[0].compoundPathItems[lenCPI/2 - 0.5].position[0] + doc.groupItems[0].compoundPathItems[lenCPI/2 + 0.5].position[0])/2 - mascotImage.width/2; //take the average of the middle two characters; need to factor in that x position is based off of the left and not the center of the image.
                //var midy = doc.groupItems[0].compoundPathItems[lenCPI].position[1] - mascotImage.height + 100* doc.groupItems[0].compoundPathItems[0].height/mascotImage.height; //y position is the same.      
                var midy = 474-372;
                }
            else {
                var midx = doc.groupItems[0].compoundPathItems[lenCPI/2].position[0] + doc.groupItems[0].compoundPathItems[lenCPI/2].width/2-  mascotImage.width/2;
                //var midy = doc.groupItems[0].compoundPathItems[lenCPI/2].position[1] - mascotImage.height + 100* doc.groupItems[0].compoundPathItems[0].height/mascotImage.height;
                var midy = 474 - 372
                }
            
            var midx = doc.groupItems[0].width/2;
            var midy = 450 - 372
            
            
            mascotImage.translate(midx - mascotImage.position[0], midy - mascotImage.position[1]); //this needs a delta x and y, not a desired position.
            

            //app.unloadAction("alignText", "");
            
            $.writeln("///// AFTER CHANGE /////");
            $.writeln("mascot height: " + mascotImage.height);
            $.writeln("letter height: " + doc.groupItems[0].compoundPathItems[0].height);


            
            var activeABindex = doc.artboards.getActiveArtboardIndex();  
            var newAB = doc.artboards[activeABindex];

            
            doc.selection = null;
            getItemByName("textLine11");
            textLine11 = app.selection[0];
            var shearFactor = 0.125;
            var theta = Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360)); //math.sin and math.cos take values in radians
            var phi = -Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360));
            
            matrix1 = app.getRotationMatrix(phi*360/(2*Math.PI)); //rotation matrix only takes degrees
            matrix2 = app.getScaleMatrix(100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) - shearFactor), 100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) + shearFactor));
            matrix3 = app.getRotationMatrix(theta*360/(2*Math.PI));
            matrix4 = app.getRotationMatrix(-7);
            var concat1 = app.concatenateMatrix(matrix4,matrix3);
            var concat2 = app.concatenateMatrix(concat1,matrix2);
            var finalMatrix = app.concatenateMatrix(concat2,matrix1);
            


            for (var sheari = 0; sheari < doc.groupItems[0].compoundPathItems.length; sheari++){
                

                doc.selection = null;
                getItemByName("textLine11");
                textLine11 = app.selection;
                doc.groupItems[0].compoundPathItems[sheari].transform(finalMatrix);
                }
            
            getItemByName("mascotImage");        
            var mascotImage = app.selection[0];  
            doc.selection = null;
            textLine11.width = mascotImage.width * .8;
            textLine11.height = mascotImage.height * .2;
            var targetX = (mascotImage.position[0] + (mascotImage.width / 2)) - (textLine11.width / 2);
            var targetY = mascotImage.position[1] - mascotImage.height - (textLine11.height * .2);
            $.writeln("text line length: " + doc.groupItems[0].width);
           
            
            //mascotImage.position = [targetX,targetY];
            //resizeArtboard(doc, textLine11, mascotImage, textLine11, textLine11)
            //var action = new File (['/p/JordanRunstein/illustratorActions/alignTextwStroke.aia']);
            //app.loadAction(action);
            //app.doScript("AWTS","alignTextwStroke");
            //app.unloadAction("alignTextwStroke", "");
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");

            
            newAB.artboardRect = [doc.groupItems[0].compoundPathItems[lenCPI].visibleBounds[0] -3, doc.groupItems[0].compoundPathItems[lenCPI].visibleBounds[1] + 3, doc.groupItems[0].compoundPathItems[0].visibleBounds[2] + 3, mascotImage.visibleBounds[3] - 3]; 
            
           
            //resizeArtboard (doc, doc.groupItems[0].compoundPathItems[lenCPI], mascotImage, doc.groupItems[0].compoundPathItems[0], doc.groupItems[0].compoundPathItems[0]);

            
           /* START OF OUTLINE STUFF
            var action = new File (['/p/JordanRunstein/illustratorActions/alignStrokeOutside.aia']);
            app.loadAction(action);
            app.doScript("alignStroke","alignStrokeOutside");
            app.unloadAction("alignStrokeOutside","");

            var strokeColor = new RGBColor();
            strokeColor.red = 255;
            strokeColor.green = 255;
            strokeColor.blue = 255;
            

        
            var numPaths = doc.pathItems.length;
            $.writeln(numPaths);
            var thePaths = doc.pathItems;
            $.writeln(thePaths[0].name);
            $.writeln(thePaths[0].strokeAlignment);
            $.writeln(app.version);
           
            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine11");       
                var textLine11 = app.selection[0];
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 6;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
                //pathArt.fillColor = fillColor;

                }
            */

            

            doc.selection = null;
            //code stuff

        }
    
        if(design == "TeamStoreDesign12")
        {
            getItemByName("textLine12");
            var textLine12 = app.selection[0];
            textLine12.createOutline().name = "textLine12";
            doc.selection = null;
            
            getItemByName("textLine12");
            var matrix1 = app.getTranslationMatrix(0,0);
            doc.groupItems[0].transform(matrix1);
            doc.selection = null;

            getItemByName ("textLine12");
            textLine12 = app.selection[0];
            var numLetters = doc.groupItems[0].compoundPathItems.length;
            $.writeln(numLetters);
            var phi =15;
            var alpha = (180-phi)/2;
            var gamma2 = phi/(numLetters-1); //how much the angle will change
            var radius = doc.groupItems[0].width; //the width of the entire text
            var s = radius*phi;
            var k = s/(-1+numLetters);
            var gamma = k/radius;
            
            $.writeln("gamma2: " + gamma2);
            $.writeln("gamma1: " + gamma);
            
            for(var arci = 0; arci<numLetters; arci++){
                doc.selection = null;
                getItemByName("textLine12");
                textLine12 = app.selection[0];
                var theta = alpha+gamma*arci;
                var rho = alpha+(phi-gamma*arci);
                var beta = 180-(90+rho);
                xn = radius*Math.cos((theta)*(Math.PI*2/360));
                yn = radius*Math.sin((theta)*(Math.PI*2/360));
                $.writeln("x" + arci + ": " + xn + ", " + "y" + arci + ": " + yn);
                $.writeln(arci + ": " + beta);
                

                var matrix2 = app.getTranslationMatrix(xn,yn);
                var matrix3 = app.getRotationMatrix(beta);
                var finalMatrix = app.concatenateMatrix(matrix2,matrix3);
                doc.groupItems[0].compoundPathItems[arci].transform(finalMatrix);
            }
        
         var strokeColor = new RGBColor();
            strokeColor.red = 255;
            strokeColor.green = 255;
            strokeColor.blue = 255;
            
            var fillColor = new RGBColor();
            fillColor.red = 0;
            fillColor.green = 0;
            fillColor.blue = 0;
            
            var numPaths = doc.pathItems.length;
            $.writeln(numPaths);
            var thePaths = doc.pathItems;
            $.writeln(thePaths[0].name);
            $.writeln(thePaths[0].strokeAlignment);
            //thePaths[0].strokeAlignment = doc.pathItems[0].StrokeAlignment.OUTSIDE_ALIGNMENT;
            $.writeln(app.version);
           

            for (var colori = 0; colori < numPaths; colori++){
                doc.selection = null;
                getItemByName("textLine12");       
                var textLine12 = app.selection[0];
      //          textLine11.strokeAlignment = StrokeAlignment.OUTSIDE_ALIGNMENT;
                var pathArt = thePaths[colori];
                pathArt.selected = true;
                pathArt.stroked = true;

                pathArt.strokeColor = strokeColor;

                pathArt.strokeWidth = 6;
                pathArt.strokeCap = StrokeCap.ROUNDENDCAP;
                pathArt.strokeMiterLimit = 5;
 //               pathArt.strokeAlignment = StrokeAlignment.OUTSIDE_ALIGNMENT;
                pathArt.fillColor = fillColor;

                }

            

            
 
            
            doc.selection = null;
            //code stuff

        error();
            doc.selection = null;
        }
    
     if(design == "TeamStoreDesign13")
        {
            getItemByName("textLine13");
            var textLine13 = app.selection[0];
            textLine13.createOutline().name = "textLine13";
            doc.selection = null;
            
            getItemByName("textLine13");
            var matrix1 = app.getTranslationMatrix(0,0);
            doc.groupItems[0].transform(matrix1);
            doc.selection = null;

            getItemByName ("textLine13");
            textLine13 = app.selection[0];
            var numLetters = doc.groupItems[0].compoundPathItems.length;
            $.writeln(numLetters);
            var phi =15;
            var alpha = (180-phi)/2;
            var gamma2 = phi/(numLetters-1); //how much the angle will change
            var radius = doc.groupItems[0].width; //the width of the entire text
            var s = radius*phi;
            var k = s/(-1+numLetters);
            var gamma = k/radius;
            
            $.writeln("gamma2: " + gamma2);
            $.writeln("gamma1: " + gamma);
            
            var shearFactor = -0.125;
            var theta = Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360)); //math.sin and math.cos take values in radians
            var phi = -Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360));
            matrix2 = app.getRotationMatrix(phi*360/(2*Math.PI)); //rotation matrix only takes degrees
            matrix3 = app.getScaleMatrix(100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) - shearFactor), 100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) + shearFactor));
            matrix4 = app.getRotationMatrix(theta*360/(2*Math.PI));
            matrix5 = app.getRotationMatrix(-7);
            var concat1 = app.concatenateMatrix(matrix5,matrix4);
            var concat2 = app.concatenateMatrix(concat1,matrix3);
            var firstTransformation = app.concatenateMatrix(concat2,matrix2);
            var temp = doc.groupItems[0].compoundPathItems.length/2;

            
            for (var sheari = 0; sheari < doc.groupItems[0].compoundPathItems.length; sheari++){
                var shearStart = 0.2
                var k = shearStart*2;
                var shearChange = k/(-1+doc.groupItems[0].compoundPathItems.length);
                var shearFactor = shearChange*sheari;
                $.writeln("shear factor" + " " + sheari + ": "  + shearFactor);
                
                var theta = Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360)); //math.sin and math.cos take values in radians
                var phi = -Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360));
                matrix2 = app.getRotationMatrix(phi*360/(2*Math.PI)); //rotation matrix only takes degrees
                matrix3 = app.getScaleMatrix(100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) - shearFactor), 100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) + shearFactor));
                matrix4 = app.getRotationMatrix(theta*360/(2*Math.PI));
                
                matrix5 = app.getRotationMatrix(16+ temp + sheari);
                $.writeln("temp: " + temp);
                var concat1 = app.concatenateMatrix(matrix5,matrix4);
                var concat2 = app.concatenateMatrix(concat1,matrix3);
                var firstTransformation = app.concatenateMatrix(concat2,matrix2);
                doc.selection = null;
                getItemByName("textLine13");
                textLine13 = app.selection[0];
                doc.groupItems[0].compoundPathItems[sheari].transform(firstTransformation);
                }
            
            for(var arci = 0; arci<numLetters; arci++){
                doc.selection = null;
                getItemByName("textLine13");
                textLine13 = app.selection[0];
                var theta = alpha+gamma*arci;
                var rho = alpha+(phi-gamma*arci);
                var beta = 180-(90+rho);
                xn = radius*Math.cos((theta)*(Math.PI*2/360));
                yn = radius*Math.sin((theta)*(Math.PI*2/360));
                $.writeln("x" + arci + ": " + xn + ", " + "y" + arci + ": " + yn);
                $.writeln(arci + ": " + beta);
                
                
                

                var matrix6 = app.getTranslationMatrix(xn,yn);
                var matrix7 = app.getRotationMatrix(beta);
                var finalMatrix = app.concatenateMatrix(matrix7,matrix6);
                //doc.groupItems[0].compoundPathItems[arci].transform(finalMatrix);
            }
       
        
        
        error();
            doc.selection = null;
        }
    
        if(design == "TeamStoreDesign9")
        {       
            $.writeln("TeamStoreDesign9");


            /*getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";

            doc.selection = null;
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine11");       
            var textLine11 = app.selection[0];  
            textLine11.createOutline().name = "textLine11";

            doc.selection = null;
            getItemByName("textLine11");
            textLine11 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine12");       
            var textLine12 = app.selection[0];  
            textLine12.createOutline().name = "textLine12";

            doc.selection = null;
            getItemByName("textLine12");
            textLine12 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine13");       
            var textLine13 = app.selection[0];  
            textLine13.createOutline().name = "textLine13";

            doc.selection = null;
            getItemByName("textLine13");
            textLine13 = app.selection[0];
            doc.selection = null;
            
            getItemByName("bars");
            var bars = app.selection[0];   
            doc.selection = null;
            
            getItemByName("mascotImage");
            var mascotImage = app.selection[0];   
            doc.selection = null;
            
            textLine11.width = bars.width;
            textLine12.width = bars.width;
            textLine13.width = bars.width;
            textLine11.position = [bars.position[0], bars.position[1] - (bars.height / 2) + (textLine11.height / 2)];
            textLine12.position = [bars.position[0], bars.position[1] - (bars.height / 2) + (textLine12.height / 2)];
            textLine13.position = [bars.position[0], bars.position[1] - (bars.height / 2) + (textLine13.height / 2)];
            textLine2.position[0] = bars.position[0] + (bars.width / 2) - textLine2.width;
            
            ResizeProportionally(mascotImage,textLine11,.5,1.2,"");
            mascotImage.position = [textLine11.position[0] + (textLine11.width / 2) - (mascotImage.width / 2),textLine2.position[1] - (textLine2.height * 4)];
            
            resizeArtboard (doc,bars, bars, bars, mascotImage);*/
        
        getItemByName("textLine2");        
            var textLine2 = app.selection[0];  
            textLine2.createOutline().name = "textLine2";

            doc.selection = null;
            getItemByName("textLine2");
            textLine2 = app.selection[0];
            doc.selection = null;
            
            getItemByName("textLine11");       
            var textLine11 = app.selection[0];  
            textLine11.createOutline().name = "textLine11";

            doc.selection = null;
            getItemByName("textLine11");
            textLine11 = app.selection[0];
            doc.selection = null;
            
            getItemByName("bars");
            var bars = app.selection[0];   
            doc.selection = null;
            
            getItemByName("mascotImage");
            var mascotImage = app.selection[0];   
            doc.selection = null;
            
            textLine11.width = bars.width;
            textLine11.position = [bars.position[0], bars.position[1] - (bars.height / 2) + (textLine11.height / 2)];
            textLine2.position[0] = bars.position[0] + (bars.width / 2) - textLine2.width;
            
            ResizeProportionally(mascotImage,textLine11,.5,1.2,"");
            mascotImage.position = [textLine11.position[0] + (textLine11.width / 2) - (mascotImage.width / 2),textLine2.position[1] - (textLine2.height * 4)];
            
            resizeArtboard (doc,bars, bars, bars, mascotImage);
        }

  if(design == "TeamStoreDesign15"){
      
      getItemByName("textgroup");
      var textgroup = app.selection[0];
      $.writeln("textgroup typename: " + textgroup.typename);
      rotMatrix = app.getRotationMatrix(-90);
      textgroup.transform(rotMatrix);
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");
            
      resizeArtboard(doc,textgroup,textgroup,textgroup,textgroup);
      
      

      
      }
  
  if(design == "TeamStoreDesign16"){
            getItemByName("textLine1");        
            var textLine1 = app.selection[0];  
            test1 = textLine1.createOutline()
            test1.name = "textLine1";
            doc.selection = null;
      
            getItemByName("textLine2");
            var textLine2 = app.selection[0];
            $.writeln("text contents: " + textLine2.contents);

            test2 = textLine2.createOutline();
            test2.name = "textLine2";
            
            doc.selection = null;
            
            getItemByName("mascotImage");
            getItemByName("textLine1");
            textLine11 = app.selection[0];
            var shearFactor = 0.125;
            var theta = Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360)); //math.sin and math.cos take values in radians
            var phi = -Math.PI/4 - 1/2*Math.atan(shearFactor*(Math.PI*2/360));
            
            matrix1 = app.getRotationMatrix(phi*360/(2*Math.PI)); //rotation matrix only takes degrees
            matrix2 = app.getScaleMatrix(100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) - shearFactor), 100*(Math.sqrt( Math.pow(shearFactor,2) +1 ) + shearFactor));
            matrix3 = app.getRotationMatrix(theta*360/(2*Math.PI));
            matrix4 = app.getRotationMatrix(-7);
            var concat1 = app.concatenateMatrix(matrix4,matrix3);
            var concat2 = app.concatenateMatrix(concat1,matrix2);
            var finalMatrix = app.concatenateMatrix(concat2,matrix1);

            for (var sheari = 0; sheari < test1.compoundPathItems.length; sheari++){
          
                test1.compoundPathItems[sheari].transform(finalMatrix);

                }
            for (var sheari2 = 0; sheari2 < test2.compoundPathItems.length; sheari2++){
                test2.compoundPathItems[sheari2].transform(finalMatrix);
                }
            
            newTest1Pos = test2.height;
            transMatrix = app.getTranslationMatrix(0, newTest1Pos+10);
            test1.transform(transMatrix);
            doc.selection = null;
            test1.selected = true;
            test2.selected = true;
            
            
            var action = new File (['/p/JordanRunstein/illustratorActions/rotate15deg.aia']);
            app.loadAction(action);
            app.doScript("rotate","rotate15deg");
            app.unloadAction("rotate15deg", "");
            height = 71.35;
            width = 106.25;
            //scaleMatrix = app.getScaleMatrix(width/mascotImage.width*100, height/mascotImage.height*100);

            //mascotImage.transform(scaleMatrix);
            left = test2.left + .15*test2.height;
            top = test2.width;
            temprect = doc.pathItems.rectangle(left,top,width,height);
            
            getItemByName("rects");
            var rects = app.selection[0];
            
            
            }
        
        if(design == "TeamStoreDesign17"){
            getItemByName("textline1");
            textline1 = app.selection[0];
            text1 = textline1.createOutline();
            text1.name = "textline1";
            doc.selection = null;
            
            getItemByName("golfteam");
            golfteam = app.selection[0];
            text2 = golfteam.createOutline();
            text2.name = "golfteam";
            doc.selection = null;
            
            getItemByName("arch");
            arch = app.selection[0];
            doc.selection = null;
            
            midx = arch.position[0] + arch.width/2;
            dx1 = midx-text1.position[0] - text1.width/2;
            dx2 = midx-text2.position[0] - text2.width/2;
            $.writeln(dx1 + " " + dx2);
            transMatrix1 = app.getTranslationMatrix(dx1,0);
            transMatrix2 = app.getTranslationMatrix(dx2,0);
            
            text1.transform(transMatrix1);
            text2.transform(transMatrix2);
            
            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");            
            
            resizeArtboard(doc, text2, arch, text2, text2);
            
            
            }
        
         if(design == "TeamStoreDesign18"){
             
            getItemByName("textLine1");
            textLine1 = app.selection[0];
            $.writeln(textLine1.textFrames[0].contents);
            
            for(var t18i = 0; t18i<textLine1.textFrames[0].characters.length; t18i++){
                        textLine1.textFrames[0].characters[t18i].characterAttributes.strokeColor = textLine1.textFrames[0].characters[t18i].characterAttributes.fillColor;
                        textLine1.textFrames[0].characters[t18i].characterAttributes.strokeWeight = 5;
                        
                        
                    }
             

             
           

            str = textLine1.textFrames[0].contents;
            str = str+"GOLF";
            textLine1.textFrames[0].contents = str;
            $.writeln(textLine1.textFrames[0].contents);
            
             for(var t18j = 0; t18j<textLine1.textFrames[0].characters.length; t18j++){
                 if( t18j >= textLine1.textFrames[0].characters.length - 4){
                        textLine1.textFrames[0].characters[t18j].characterAttributes.strokeColor = textLine1.textFrames[0].characters[t18j].characterAttributes.fillColor;
                        textLine1.textFrames[0].characters[t18j].characterAttributes.strokeWeight = 0;
                        }
                        
                        
                    }            
            
            getItemByName("golfclubs");
            golfclubs = app.selection[0];
            
            textLine1.translate(golfclubs.position[0]+golfclubs.width/2 - textLine1.width/2 - textLine1.position[0],0);
            
                        var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");
            
            resizeArtboard(doc, textLine1, golfclubs, textLine1, golfclubs);

        
             
             }
            
            if(design == "TeamStoreDesign19"){
                getItemByName("textLine1");
                textLine1 = app.selection[0];
                for(var t19i = 0; t19i<textLine1.characters.length; t19i++){
                    if(t19i == 0 || t19i == textLine1.characters.length - 1){
                        textLine1.characters[t19i].characterAttributes.size = 139;
                        }
                    }
                text1 = textLine1.createOutline();
                text1.name = "textLine1";
                doc.selection = null;
                
                getItemByName("textLine2");
                textLine2 = app.selection[0];
                text2 = textLine2.createOutline();
                text2.name = "textLine2";
                doc.selection = null;
                
                targetPointx = text1.position[0]+text1.width/2 - text2.width/2;
                targetPointy = text1.position[1] - text2.height;
                transMatrix = app.getTranslationMatrix(targetPointx-text2.position[0], -0.72*text2.height);
                text2.transform(transMatrix);
                getItemByName("mascotImage");
                mascotImage = app.selection[0];
                targetMascotx = text1.position[0]+text1.width/2 - mascotImage.width/2;
                targetMascoty = text1.position[1]+mascotImage.height;
                mascotImage.translate(targetMascotx-mascotImage.position[0], targetMascoty - mascotImage.position[1]);
                
                            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");
                
                resizeArtboard(doc,text1,mascotImage,text1,text2);


                }
            
            if(design == "TeamStoreDesign20"){
                getItemByName("bigletter");
                bigletter = app.selection[0];
                $.writeln("bigletter typename: " + bigletter.groupItems[0].textFrames[1].name);
                blockletter = bigletter.groupItems[0].textFrames[0].createOutline();
                
                doc.selection = null;
                
                
                
                getItemByName("textLine1");
                textLine1 = app.selection[0];
                $.writeln("text1 typename: " +textLine1.typename);
                doc.selection = null;

                
                getItemByName("textLine2");
                textLine2 = app.selection[0];
                $.writeln("text2 typename: " +textLine2.typename);
                doc.selection = null;
                
                midpointx = textLine2.position[0] + textLine2.width/2 - blockletter.width/2 - blockletter.width/10;
                midpointy = textLine2.position[0] + 4.40*blockletter.height/2;
                
                midtext1x =  textLine2.position[0] + textLine2.width/2 -textLine1.width/2;
                
                transMatrixt1 = app.getTranslationMatrix(midtext1x-textLine1.position[0],0);
            
                textLine1.transform(transMatrixt1);
                
                transMatrix = app.getTranslationMatrix(midpointx-bigletter.position[0], midpointy-blockletter.position[1]);
                bigletter.transform(transMatrix);
                
                scaleMatrix = app.getScaleMatrix(200,150);
                bigletter.transform(scaleMatrix,true,false,false,false, 0, Transformation.CENTER);
                
                
                            var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");

                resizeArtboard(doc, textLine2,blockletter,textLine2,blockletter);


                }
            
            if(design == "TeamStoreDesign21"){
                getItemByName("bigGroup");
                bigGroup = app.selection[0];
                 var activeABindex = doc.artboards.getActiveArtboardIndex();  
                var newAB = doc.artboards[activeABindex];

                var iartBounds = doc.visibleBounds;  

                
                getItemByName("textLine1");
                textLine1 = app.selection[0];
                doc.selection = null;
                
                getItemByName("textLine2");
                textLine2 = app.selection[0];
                
                doc.selection = null;
                
                getItemByName("middleDesign");
                middleDesign = app.selection[0];
                doc.selection = null;
                
                text2 = textLine2.textFrames[0].createOutline();
                
               targetx1 = middleDesign.position[0] + middleDesign.width/2 - textLine1.width/2 + middleDesign.width*(0.1);
                
                targetx2 = middleDesign.position[0] + middleDesign.width/2 - text2.width/2;
                //$.writeln(targetx);
                textLine2.translate(targetx2-textLine2.position[0],0);
                textLine1.translate(targetx1-textLine1.position[0],0);
                
                if (textLine1.width > middleDesign.width){
                    ableft = textLine1.controlBounds[0] - 5;
                    abright = textLine1.controlBounds[2] + 5;
                    abtop = textLine1.controlBounds[1] -225;
                    abbottom = textLine1.controlBounds[3] - 5;
                    }
                else{
                    ableft = middleDesign.controlBounds[0]-5;
                    abtop = textLine1.controlBounds[1]-225;
                    abright = middleDesign.controlBounds[2]+5;
                    abbottom = textLine2.controlBounds[3]-5;
                    }
                
                


                newAB.artboardRect = [ableft, abtop, abright, abbottom];
//                resizeArtboard(doc, bigGroup, bigGroup, bigGroup, bigGroup);


                }
            
            if(design == "TeamStoreDesign22"){
                
            getItemByName("textLine1");  
            textLine1 = app.selection[0];

            var action = new File (['/p/JordanRunstein/illustratorActions/lowerArc50.aia']);
            app.loadAction(action);
            app.doScript("applyEffect","lowerArc50");
            app.unloadAction("lowerArc50", "");
            doc.selection = null;

            
            
            getItemByName("mascotImage");
            app.copy();
            app.paste();
            doc.selection = null;
            
            getItemByName("mascotImage");
            mascotImage = app.selection[0];
            scaleMatrix = app.getScaleMatrix(100/mascotImage.width*100,100*100/mascotImage.height);
            mascotImage.transform(scaleMatrix);
            
            targetx = textLine1.position[0] + textLine1.width/2 - mascotImage.width/2;
            targety = textLine1.position[1] - mascotImage.height/4;
            transMatrix = app.getTranslationMatrix(targetx-mascotImage.position[0], targety-mascotImage.position[1]);
            mascotImage.transform(transMatrix);
                
                
                              var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");     
                /*
            text = textLine1.textFrames[0].createOutline();
            //text = textLine1.textFrames;
            $.writeln(textLine1);
            $.writeln(text.contents);
            text1 = text[0].createOutline();
            text2 = text[1].createOutline();
            
            scaleMatrix2 = app.getScaleMatrix(100,125);
            text.transform(scaleMatrix2);
            */
        
                        var activeABindex = doc.artboards.getActiveArtboardIndex();  
                var newAB = doc.artboards[activeABindex];

                var iartBounds = doc.visibleBounds;  

                var ableft = textLine1.controlBounds[0]*.8;  
                var abtop =textLine1.controlBounds[1]*1.15;  
                var abright = textLine1.controlBounds[2]*.8; // + right.width;  
                var abbottom = mascotImage.controlBounds[3];// - bottom.height;  



                newAB.artboardRect = [ableft, abtop, abright, abbottom];

                }
            
            if(design == "TeamStoreDesign23"){
                getItemByName("bigGroup");
                bigGroup = app.selection[0];
                
                var activeABindex = doc.artboards.getActiveArtboardIndex();  
                var newAB = doc.artboards[activeABindex];

                var iartBounds = doc.visibleBounds;  

                var ableft = bigGroup.controlBounds[0] +128;  
                var abtop =bigGroup.controlBounds[1] - 260;  
                var abright = bigGroup.controlBounds[2] -3; // + right.width;  
                var abbottom = bigGroup.controlBounds[3];// - bottom.height;  

                newAB.artboardRect = [ableft, abtop, abright, abbottom];

                
//                resizeArtboard(doc,bigGroup,bigGroup,bigGroup,bigGroup);

                }
            
            if(design == "TeamStoreDesign24"){
                getItemByName("bigGroup");
                bigGroup = app.selection[0];
                doc.selection = null;
                
                scaleMatrix = app.getScaleMatrix(500,500);
                bigGroup.transform(scaleMatrix);
                
                getItemByName("textLine1");
                textLine1 = app.selection[0];
                
                
                $.writeln(textLine1.typename);
                $.writeln(textLine1.kind);
                $.writeln(textLine1.textFrames[0].contents);
                $.writeln(textLine1.textFrames[0].characters.length);
                
                len = textLine1.textFrames[0].characters.length;
                
                //rect = doc.pathItems.rectangle(textLine1.position[1],textLine1.position[0], 211.5, 57.92);                
                //newareatext = doc.textFrames.areaText(rect);
                //newareatext.contents = textLine1.textFrames[0].contents;
                
                
                
                
                //textLine1.textFrames.areaText = newareatext;
                
                
                

                

                
                
                if(len == 4){
                    textLine1.textFrames[0].contents = textLine1.textFrames[0].contents + "  GOLF";
                    for(t24i = 0; t24i < textLine1.textFrames[0].characters.length; t24i++){
                        textLine1.textFrames[0].characters[t24i].characterAttributes.horizontalScale = 85;
                        }
                    }
                else{
                    textLine1.textFrames[0].contents = textLine1.textFrames[0].contents + " GOLF";
                     for(t24i = 0; t24i < textLine1.textFrames[0].characters.length; t24i++){
                        textLine1.textFrames[0].characters[t24i].characterAttributes.horizontalScale = 115;
                        }
                    }
                
                //charstyle = doc.characterStyles.add("desiredText");
                //charstyle = textLine1.textFrames[0].characterStyles;
                
                //charstyle.applyTo(newareatext.characters);
                
                posx = textLine1.position[0];
                if(len == 4){
                    
                    scaleMatrix2 = app.getScaleMatrix(120,100);
                    }
                else{
                    
             var action = new File (['/p/JordanRunstein/illustratorActions/textAreaAdjust.aia']);
            app.loadAction(action);
            app.doScript("TAA","textAreaAdjust");
            app.unloadAction("textAreaAdjust","");
            scaleMatrix2 = app.getScaleMatrix(100,100);

                    }
                    
                textLine1.transform(scaleMatrix2);
                textLine1.translate(posx - textLine1.position[0]);
                
              var action = new File (['/p/JordanRunstein/illustratorActions/duplicateWithStroke.aia']);
            app.loadAction(action);
            app.doScript("DWS","duplicateWithStroke");
            app.unloadAction("duplicateWithStroke", "");              
                
                

                resizeArtboard(doc,bigGroup,bigGroup,bigGroup,bigGroup);
                }
            
    
}


function resizeArtboard(doc,left,top,right,bottom)
{
    var activeABindex = doc.artboards.getActiveArtboardIndex();  
    var newAB = doc.artboards[activeABindex];

    var iartBounds = doc.visibleBounds;  

    var ableft = left.controlBounds[0] - 3;  
    var abtop =top.controlBounds[1] + 3;  
    var abright = right.controlBounds[2] + 3;// + right.width;  
    var abbottom = bottom.controlBounds[3] - 3;// - bottom.height;  

    newAB.artboardRect = [ableft, abtop, abright, abbottom];
}

function resizeProportional (target,resize,resizeBy)
{
    if (resize == "width")
    {
        var beginningWidth = target.width;
        target.width = resizeBy;
        target.height = target.height * (target.width / beginningWidth);
        
    }
    else if (resize == "height")
    {
        var beginningHeight = target.height;
        target.height = resizeBy;
        target.width = target.width * (target.height / beginningHeight);
    }
    else if (resize != "width" || resize != "height")
    {
        alert("No target for resizeProportional");
    }
}

function NewDocName(name)
{
    //change name if embroidery file
    var tempName = name.replace(".svg","");
    tempName = tempName.replace("-","_");
    tempName = tempName.replace("-","_");
    tempName = tempName.replace("-","_");
    
    return tempName;
}
    
function GetFolders(dir) 
{
    var myFileList = Folder(dir).getFiles();

    var editFolders = [];

    for (var i = 0; i < myFileList.length; i++) 
    {
        var folder = myFileList[i];
        
        if (folder instanceof Folder) 
        {
                editFolders.push(folder);
        }
    }
    
    return editFolders;
}

function getItemByName(name)
{
        $.writeln("Getting: " + name);
        app.activeDocument.pageItems.getByName(name).selected=true;    
}

function debugLog (log)
{
        $.writeln(log); 
}

function ExportEPS (destFilePath) 
{
var newFile = new File(destFilePath);
var saveDoc;
    if ( app.documents.length == 0 )
        saveDoc = app.documents.add();
    else
        saveDoc = app.activeDocument;
        var saveOpts = new EPSSaveOptions();
        saveOpts.cmykPostScript = true;
        saveOpts.embedAllFonts = true;
        saveOpts.includeDocumentThumbnails = true;
            saveOpts.embedLinkedFiles=true;
        saveDoc.saveAs( newFile, saveOpts );
}

function ExportPNG24 (destFilePath) 
{
    var exportOptions = new ExportOptionsPNG24();
    var type = ExportType.PNG24;
    var fileSpec = new File(destFilePath);
    exportOptions.antiAliasing = false;
    exportOptions.transparency = true;
    exportOptions.saveAsHTML = true;
    exportOptions.artBoardClipping = true;

    app.activeDocument.exportFile( fileSpec, type, exportOptions );
}

function ExportPNG24noClipping (destFilePath) 
{
    var exportOptions = new ExportOptionsPNG24();
    var type = ExportType.PNG24;
    var fileSpec = new File(destFilePath);
    exportOptions.antiAliasing = false;
    exportOptions.transparency = true;
    exportOptions.saveAsHTML = true;
    exportOptions.artBoardClipping = false;

    app.activeDocument.exportFile( fileSpec, type, exportOptions );
}

function FolderCreation(folderList, newDocName, prefix)
{
    var CMH = newDocName.split("_");
    var currentCMH = CMH[1];
        
    //var prefix = "P:\\InkSoft\\Fundraiser\\Images - Print\\";

    var cmhWithSpace = currentCMH.concat(" ");
    var cmhWithSpaceAndHyphen = currentCMH.concat(" -");
    var cmhWithUnderscore = currentCMH.concat("_");
        
    for (var i = 0; i < folderList.length; i++) 
    {
        var folder = folderList[i];

        var fileName = folder.name.replace(prefix,"").replace("%20"," ");       

        if (fileName == currentCMH || fileName.indexOf(cmhWithSpace) == 0 || fileName.indexOf(cmhWithSpaceAndHyphen) == 0 || fileName.indexOf(cmhWithUnderscore) == 0) //folder name includes CMH
        {
            existingFolder = folder;
            //debugLog ("Found a folder: " + folder);
            return existingFolder;
        }
    }

    //if folder with CMH cannot be found, we will create one
    var newFolder = new Folder(prefix + "\\" + currentCMH);
    newFolder.create();
    //debugLog("Created a folder");
    return newFolder;    
}

function exportFileToSVG (dest) {
if ( app.documents.length > 0 ) {
var exportOptions = new ExportOptionsSVG();
var type = ExportType.SVG;
var fileSpec = new File(dest);
app.activeDocument.exportFile( fileSpec, type, exportOptions );
}
}