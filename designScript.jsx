
//var progressBarCurrent = 0;
//var progressBar100Percent = 0;
//var lastProgress = 0;

#include include\Utilities.jsx

Main();
    
function Main() 
{
   debugLog('///////////////////START///////////////////');

    var store = "team"
    
    var myFolder = Folder("C:\\Users\\a.leusink\\Desktop\\Generated SVGs");  
    var destFolder = Folder("C:\\Users\\a.leusink\\Desktop\\Generated Images");    
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
        
        if  (File(checkName.replace(".svg",".png").replace("%20"," ").replace("%20"," ").replace(" ","-").replace(" ","-").replace("Generated-Images","Generated Images")).exists)
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
                            
                ExportPNG24noClipping("C:\\Users\\a.leusink\\Desktop\\Generated Images\\" + newDocName);
                //ExportPNG24(destFolder + "\\" + newDocName);
                
                //app.executeMenuCommand('doc-color-cmyk');
         
                //ExportEPS("C:\\Users\\a.leusink\\Desktop\\Generated Images\\" + newDocName);
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
                                
                if(doc.layers[0].name == "TeamStoreDesign8" || doc.layers[0].name == "TeamStoreDesign9") 
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
        if(design == "FanStoreDesign1" || design == "TeamStoreDesign2" || design == "testDesign1")
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
            textLine1_1.createOutline().name = "textLine1_1";
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

            textLine1.width = mascotImage.width * .8;
            textLine1.height = mascotImage.height * .2;
            var targetX = (mascotImage.position[0] + (mascotImage.width / 2)) - (textLine1.width / 2);
            var targetY = mascotImage.position[1] - mascotImage.height - (textLine1.height * .2);
            
            $.writeln("targetX: " + targetX);
            $.writeln("targetY: " + targetY);
            $.writeln("textLine1.width: " + textLine1.width);
            $.writeln("textLine1.height: " + textLine1.height);
            
            textLine1.position = [targetX,targetY];
            
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
            
            //resizeArtboard (doc,textLine1, textLine1, textLine1, designElements);
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
            
            var designWidth = designElements.width;
            var designWidthCenter = designWidth / 2;
            
            textLine1.width = designElements.width * .568242;
            var targetX = designElements.position[0] + (designElements.width / 2) - (textLine1.width / 2);
            textLine1.position = [targetX,textLine1.position[1]];
            
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
            
            resizeArtboard (doc,textLine11, textLine11, textLine11, mascotImage);

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
            
            resizeArtboard (doc,rectangle, rectangle, rectangle, mascotImage);
        }
}

function resizeArtboard(doc,left,top,right,bottom)
{
    var activeABindex = doc.artboards.getActiveArtboardIndex();  
    var newAB = doc.artboards[activeABindex];

    var iartBounds = doc.visibleBounds;  

    var ableft = left.controlBounds[0];  
    var abtop =top.controlBounds[1];  
    var abright = right.controlBounds[2];// + right.width;  
    var abbottom = bottom.controlBounds[3];// - bottom.height;  

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