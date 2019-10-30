﻿#include Utilities.jsx
#include ProductInfo.jsx
#include OptionsWindows.jsx
#include SaveOptions.jsx

Main();

function Main()
{
    $.writeln("///////////// Start /////////////");

    var products = SearchForProperties(ProductInfo,"stores","team");
    
    var store = "team";
    
    if(store == "team")
    {
        var OptionsWindowResults = TeamStoreOptionsWindow(); //opens window where the school's information is pasted. Returns an array of strings

        var schools = OptionsWindowResults; //tears out the string of CMHs
        
    }
    
    var blanksFolder = '/p/Team Stores/Pictures/'; //blank product images 
    var str1 = '/c/Users/';
    var user = Window.prompt('Enter your user name found in C:\\Users');
    var str2 = '/Desktop/GeneratedImages/';
    var destFolder = str1.concat(user, str2); 
    var f = new Folder(destFolder);
    if(!f.exists){
        f.create();
        Window.alert('Creating folder'); 
        }
    

    var designsFolder = '/p/Team Stores/Designs/PNGs/'; //
    var publicDestFolder = '/p/team24x7/fundraising/images/'; //
    
    //str copied from clipboard
    //var schools = '950553: {    GM1: "478907",    CMH: "950553",    primary: "navy",    secondary: "silver",    mascot: "knights",    mascotImage: "\\AWS-OFFLOAD\DesignLibrary\478907\Marketing\mascot_950553_light.png",    apparelImage: "\\AWS-OFFLOAD\DesignLibrary\478907\Marketing\team_950553_light.PNG",    headwearImage: "\\AWS-OFFLOAD\DesignLibrary\478907\source\headwear_950553_light.png"},491610: {    GM1: "491609",    CMH: "546879",    primary: "royal",    secondary: "white",    mascot: "falcons",    mascotImage: "\\AWS-OFFLOAD\EmbroideryLogos\584762\Marketing\mascot_546879.png",    apparelImage: "\\AWS-OFFLOAD\EmbroideryLogos\584762\Marketing\mascot_546879.png",    headwearImage: "\\AWS-OFFLOAD\EmbroideryLogos\584762\Marketing\mascot_546879.png"}';
    
    //modify string to parse it and elimate whitespace
    schools = String(schools);
    schools = schools.replace(/\s/g,'');    
    var res = schools.split(',');
    //Window.alert(res);
    //Window.alert(res[1]);
    var test = res[1].length; 
    var temp = res[0].split('"');
     //declare empty lists to be populated
    GM1s = [];
    CMHs =  [];
    primaries = [];
    secondaries = [];
    mascots = [];
    mascotImages = [];
    apparelImages = [];
    headwearImages = [];
    schoolNames = [];
    //school name object constructor
    function SchoolName(GM1, CMH, primary, secondary, mascot, mascotImage, apparelImage, headwearImage){
        this.GM1 = GM1;
        this.CMH = CMH;
        this.primary = primary;
        this.secondary = secondary;
        this.mascot = mascot;
        this.mascotImage = mascotImage;
        this.apparelImage = apparelImage;
        this.headwearImage = headwearImage;
        }

function StoreSchoolData(dataString){
        //modify string to parse it and elimate whitespace
        dataString = dataString.replace(/\s/g,'');
        var res = dataString.split(',');
        //Window.alert(res[1]);
        var test = res[1].length;
        var temp = res[0].split('"');
        
        //for loop with if statements to populate the empty lists
        for (var index = 0; index < res.length; index++){
            if (index % 8 == 0) {   // mod 8 == 0 will give GM1. repeated 8 times for each data entry desired
                var tempGM1 = res[index].split('"');    //parse the string given to yield the value wanted. 
                GM1s.push(tempGM1[1]);  //store the string in the list
                }
            if (index % 8 == 1){
                var tempCMH = res[index].split('"');
                CMHs.push(tempCMH[1]);
                }
            
            if (index % 8 == 2){
                var tempPrimaries = res[index].split('"');
                primaries.push(tempPrimaries[1]);
                }
            
            if (index % 8 == 3){
               var tempSecondaries = res[index].split('"');
               secondaries.push(tempSecondaries[1]);
               }
           
            if (index % 8 == 4){
               var tempMascots = res[index].split('"');
               mascots.push(tempMascots[1]);
               }
           
            if (index % 8 == 5){
               var tempMascotImages = res[index].split('"');
               mascotImages.push(tempMascotImages[1]);
               }
           
            if (index % 8 == 6){
               var tempApparelImages = res[index].split('"');
               apparelImages.push(tempApparelImages[1]);
               }
           
            if (index % 8 == 7){
               var tempHeadwearImages = res[index].split('"');
               headwearImages.push(tempHeadwearImages[1]);
               }
                    
            }
    
    }

    function GenerateSchoolObjects(GM1s, CMHs, primaries, secondaries, mascots, mascotImages, apparelImages, headwearImages){
        for (var iCMH = 0; iCMH < GM1s.length; iCMH++){
            var newSchool = new SchoolName(GM1s[iCMH], CMHs[iCMH], primaries[iCMH], secondaries[iCMH], mascots[iCMH], mascotImages[iCMH], apparelImages[iCMH], headwearImages[iCMH]);
            schoolNames.push(newSchool);
            }
        }
    
    StoreSchoolData (schools);
    GenerateSchoolObjects(GM1s, CMHs, primaries, secondaries, mascots, mascotImages, apparelImages, headwearImages);

    for (var icmh = 0; icmh < schoolNames.length; icmh++){
        
        currentSchool = schoolNames[icmh];
       
        if (currentSchool.cmh == "0")
        {
             $.writeln("currentCMH: " + currentSchool);
             $.writeln("Skip");
        }
        else
        {           
            CreateProductPictures(currentSchool);
            $.writeln("");
        }
    }
        
    $.writeln("///////////// Finish /////////////");


    function NewDocName(name)
    {
        //change name if embroidery file
        var tempName = name.replace(".svg","");
        tempName = tempName.replace("-","_");
        tempName = tempName.replace("-","_");
        tempName = tempName.replace("-","_");
        
        return tempName;
    }

    function CreateProductPictures(schoolNames) {  
        //for each product
            
            schoolNames.mascotImage.replace(".PNG", ".png");
            schoolNames.apparelImage.replace(".PNG", ".png");
            schoolNames.headwearImage.replace(".PNG", ".png");
            /*
        currentSchoolColor = currentSchool.primary;
        currentMascot = currentSchool.mascot;
        currentMascotImage = currentSchool.mascotImage.replace(".PNG",".png");
        currentApparelEmb = currentSchool.apparelImage.replace(".PNG",".png");
        currentHeadwearEmb = currentSchool.headwearImage.replace(".PNG",".png");
        */
        
                
            for (ip = 0; ip < products.length; ip++)
            {
                var currentProduct = ProductInfo[products[ip]];
                $.writeln("");
                $.writeln("currentProduct: " + currentProduct.name);

                var allProductColors = currentProduct.allColors;
                //$.writeln("allProductColors: " + allProductColors);
                
                var productColorsToProcess = [];
                
                if(currentProduct.name.indexOf("button") > -1)
                {
                    if(String(allProductColors).indexOf(schoolNames.primary) > -1) {productColorsToProcess.push(schoolNames.primary);}
                    else {productColorsToProcess.push(String(currentProduct.fallback));}
                }
                else
                {
                    var colors = ["grey","white","black","charcoal","onix",String(schoolNames.primary)]; //Create list of default colors and the current school color so we know what color products we need to create for this particular school.
                    
                    for (ic = 0; ic < colors.length; ic++){
                        if (String(allProductColors).indexOf(colors[ic]) > -1 && String(productColorsToProcess).indexOf(colors[ic]) == -1){
                        productColorsToProcess.push(colors[ic]);
                        }
                    }
                }
            

                    
                //$.writeln("productColorsToProcess: " + productColorsToProcess);
                
                //for each product color
                for(ipc = 0;ipc < productColorsToProcess.length;ipc++) {
                    var currentProductColor = productColorsToProcess[ipc];
                    
                    var designsToProcess = currentProduct.designs; //Returns an array of all designs that go on that product for a particular store.
                    
                    //for each design
                    for (id = 0; id < designsToProcess.length; id++)
                    {
                       var currentDesign = designsToProcess[id];
                       $.writeln("///////////// 1st skip check/////////////");
                       
                       var skipCheck = SkipCheck(destFolder,publicDestFolder,GetFileName(["product","dest"],schoolNames.CMH,currentProduct,currentProductColor,currentDesign,destFolder,schoolNames.mascotImage,schoolNames.mascot,store,schoolNames.apparelImage,schoolNames.headwearEmb));
                       $.writeln("skip check result: " + skipCheck);
                       $.writeln("///////////// Passed 1st skip check/////////////");

                       if (currentDesign == "mascot" && (schoolNames.mascotImage.replace("stillDeciding","skip").replace("blank","skip").replace("Blank","skip").replace("StillDeciding","skip").indexOf("skip") > -1)) {

                           skipCheck = true;
                           }
                       
                       $.writeln("///////////// Up to 1st getfile check/////////////");         
                       
                       var currentDesignImage = GetFileName(["design",currentDesign],schoolNames.CMH,currentProduct,currentProductColor,currentDesign,designsFolder,schoolNames.mascotImage,schoolNames.mascot,store,schoolNames.apparelImage,schoolNames.headwearImage);
                       $.writeln("currentDesignImage: " + currentDesignImage);
                       
                       
                       if (currentDesignImage.indexOf("light") != -1 && currentDesignImage.indexOf("blank") == -1){ //********************ORIGNALLY COMMENTED OUT currentDesignImage.indexof("light") != -1********************************
                           $.writeln("///////// Entering Save Design function ///////////");
                           SaveDesign(currentDesignImage,currentDesign,schoolNames.CMH,destFolder,blanksFolder,designsFolder,store);
                           
                           }
                       
                       $.writeln("///////////// Passed Save Design if statement/////////////");
                       
                       if (skipCheck == false)  //The file doesn't already exist, so it needs to be created. Otherwise, skip creating the picture. No need to do more work than required. This does mean you will need to delete the picture if you want to recreate it.
                       {    
                             $.writeln("///////////// Up to Doc /////////////");
                            var doc = app.documents.add();
                             $.writeln("///////////// Passed Doc /////////////");

                            doc.RulerUnits = "Pixels";
                            
                            var productImage = getImage(doc,GetFileName(["product","blank"],schoolNames.CMH,currentProduct,currentProductColor,currentDesign,blanksFolder,schoolNames.mascotImage,schoolNames.mascot,store,schoolNames.apparelImage,schoolNames.headwearImage),"productImage");

                            var designImage = getImage(doc,currentDesignImage,"designImage");
                            $.writeln("///////////// Passed Design Image Get Image/////////////");

                            //var designImage = getImage(doc,GetFileName(["design",currentDesign],currentCMH,currentProduct,currentProductColor,currentDesign,designsFolder,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb),"designImage");

                            if(currentProduct.designLocationInformation[currentProductColor] == undefined) {
                                var productDimensionsInfo = currentProduct.designLocationInformation["all"];
                            }
                            else {                        
                                var productDimensionsInfo = currentProduct.designLocationInformation[currentProductColor];
                            }
                                
                            if(currentProduct.designLocationInformation["all"] != undefined && currentProduct.designLocationInformation["all"].name.indexOf ("bag") > -1){
                                
                                //$.writeln("ball pocket");
                                var designImage2 = getImage(doc,schoolNames.mascotImage,"mascotImage");
                                ResizeEverything(productImage,designImage2,currentProduct.designLocationInformation["bag-ball"]);
                                PositionEverything(productImage,designImage2,currentProduct.designLocationInformation["bag-ball"]);
                            }

                            if(currentProduct.designLocationInformation["all"] != undefined && currentProduct.designLocationInformation["all"].name.indexOf ("multiLocations") > -1){
                                
                                //$.writeln("ball pocket");
                                var designImage2 = getImage(doc,currentDesignImage,"designImage");
                                ResizeEverything(productImage,designImage2,currentProduct.designLocationInformation["secondLocation"]);
                                PositionEverything(productImage,designImage2,currentProduct.designLocationInformation["secondLocation"]);
                            }
                        
                            ResizeEverything(productImage,designImage,productDimensionsInfo);
                            PositionEverything(productImage,designImage,productDimensionsInfo);

                            ExportJPG(GetFileName(["product","dest"],schoolNames.CMH,currentProduct,currentProductColor,currentDesign,destFolder,schoolNames.mascotImage,schoolNames.mascot,store,schoolNames.apparelImage,schoolNames.headwearImage));

                            doc.close(SaveOptions.DONOTSAVECHANGES);
                            //$.writeln("");
                        }
                        else {
                            //$.writeln("Skip");
                        }

                    }

            }
            //$.writeln("");
        }
    }

    function ResizeEverything(productImage,designImage,productDimensionsInfo) {
        
        app.activeDocument.artboards[0].artboardRect = [0,productImage.height,productImage.width,0];

        if(productDimensionsInfo.rule == undefined) {
            rule = "";
        }
        else if(productDimensionsInfo.rule != undefined){ 
            rule = productDimensionsInfo.rule;
        }

        ResizeProportionally(designImage,productImage,productDimensionsInfo.designMaxWidth,productDimensionsInfo.designMaxHeight,rule);
    }


    function GetFileName(type,currentCMH,currentProduct,currentProductColor,currentDesign,folderPath,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb) {  
        //$.writeln("Current Process: " + currentProduct.process);
        
        if(type[0] == "design")
        {
            //$.writeln(ProductInfo.all.overrides.dark);
            // $.writeln(currentProduct.process);
            //$.writeln(currentProduct.process);
            
            var stitchColor = currentProductColor;
            
            if(currentProduct.overrides != undefined)//|| currentProduct.overrides.light != undefined || currentProduct.overrides.dark != undefined))
            {
                if(String(ProductInfo.all.overrides.light).indexOf(currentProductColor) > -1){stitchColor = "light"}
                if(String(ProductInfo.all.overrides.dark).indexOf(currentProductColor) > -1){stitchColor = "dark"}
                if(currentProduct.overrides.light != undefined && (String(currentProduct.overrides.light).indexOf(currentProductColor) > -1 || String(currentProduct.overrides.light).indexOf("all") > -1)) {stitchColor = "light"}
                if(currentProduct.overrides.dark != undefined && (String(currentProduct.overrides.dark).indexOf(currentProductColor) > -1 || String(currentProduct.overrides.dark).indexOf("all") > -1)) {stitchColor = "dark"}
            }
        }
                        
        switch (type[0])
        {
            case "design":
                //$.writeln("");
                //$.writeln("design: " + type[1]);
                switch (type[1])
                {
                    case "d1":
                    case "d2":
                    case "d3":
                    case "d4":
                    case "d5":
                    case "d6":
                    case "d7":
                    case "d8":
                    case "d9":
                    case "d10":
                    case "d11":
                        fileName = folderPath + type[1] + "_" + currentCMH + "_" + ColorAdjust("design",currentProductColor,"") + ".png"; 
                        //$.writeln("dtg fileName: " + fileName);
                        return fileName;                     
                        break;
                    case "mascot":
                        fileName = currentMascotImage; //$.writeln("mascot name: " + fileName); 
                        //$.writeln("mascot fileName: " + fileName);
                        return fileName; 
                        break;
                    case "script":
                    case "block":
                    case "adidas":
                    case "collegiate":
                        fileName = folderPath.replace("WhiteOutlingPngs\\","Fundraising Products\\Mascot Images\\").replace("PNGs","Public Embroidery") + currentMascot + "_" + type[1] + "_" + stitchColor + ".png";  
                        //$.writeln("emb fileName: " + fileName);
                        return fileName; 
                        break;
                    case "team" :  
                        //fileName = folderPath + currentCMH + "_" + type[1] + ".png";
                        fileName = currentApparelEmb.replace("light",stitchColor);
                        //$.writeln("team emb fileName: " + fileName);
                        return fileName;
                        break;
                    case "headwear" : 
                        //fileName = folderPath + currentCMH + "_" + type[1] + ".png";
                        fileName = currentHeadwearEmb.replace("light",stitchColor);
                        //$.writeln("team headwear emb fileName: " + fileName);
                        return fileName;
                        break;
                    case "none" : 
                        fileName = "P:/Team Stores/Pictures/blank.png";
                        return fileName;
                        break;
                    default: $.writeln("I don't know what design filename to use");
                }
            case "product":
                switch(type[1])
                {
                    case "blank": 
                        //fileName = folderPath + currentProduct.name.replace("p","") + '-' + currentProductColor + ".png"; 
                        fileName = folderPath + currentProduct.name.replace("p","") + '-' + currentProductColor + ".jpg"; 
                        //////DEV//////
                        var store = "team";
                        //$.writeln("store: " + store);
                        //////END DEV//////
                        if(store == "team") {fileName.replace(".png",".jpg");}
                        //$.writeln("Blank fileName: " + fileName);
                        return fileName; 
                        break;
                    case "dest": 
                        switch(currentProduct.process)
                        {
                            case "emb":
                                //$.writeln(currentDesign);
                                switch(currentDesign)
                                {
                                    case "mascot":
                                    case "teamemb":
                                    case "team":
                                    case "headwear":
                                        //$.writeln("1"); 
                                        fileName = folderPath + currentCMH + "_" + currentProduct.name.replace("p","") + "_" + ColorAdjust("filename",currentProductColor,currentProduct) + "_" + String(currentDesign) + ".jpg";
                                        //$.writeln("team dest fileName:" + fileName);
                                        return fileName;
                                        break;
                                    default:
                                        //$.writeln("2"); 
                                        fileName = folderPath + currentProduct.name.replace("p","") + "_" + ColorAdjust("filename",currentProductColor,currentProduct) + "_" + currentMascot + "_" + String(currentDesign) + ".jpg"; 
                                        //$.writeln("not mascot dest fileName:" + fileName);
                                        return fileName;
                                        break;
                                }
                            case "dtg": 
                            case "sub": 
                            case "ht": 
                            case "uv": 
                                fileName = folderPath + currentCMH + "_" + currentProduct.name.replace("p","") + "_" + ColorAdjust("filename",currentProductColor,currentProduct) + "_" + String(currentDesign).replace("d","design") + ".jpg"; 
                                //$.writeln("final print name"); 
                                return fileName; 
                                break;
                            case "button": 
                                fileName = folderPath + currentCMH + "_" + currentProduct.name.replace("p","").replace("button","").replace("mobile","_mobile") + ".jpg"; 
                                //$.writeln("final print name"); 
                                return fileName; 
                                break;
                            default: $.writeln("I don't know what dest product filetname to use"); return fileName; break;
                        }
                    default: $.writeln("I don't know what product filetname to use"); return fileName; break;
                }
            default: $.writeln("I don't know what filetname to use"); return fileName; break;
            }
    }

//~ function StripFilePathAndType(fileName) {
//~         fileName = fileName.replace(".png","").replace(".jpg","").replace(".svg","").replace("\\\\AWS-OFFLOAD\\DesignLibrary\\","").replace("P:\\Team Stores\\Designs\\PNGs\\","");
//~         return fileName;
//~ }

    function getImage(doc,imagePath,imageName) {
        $.writeln("imagePath: " + imagePath);
        var getFile = File(String(imagePath));
        //Window.alert("Image Path: ".concat(imagePath, " ", imageName));
        doc.groupItems.createFromFile(getFile).name= imageName;
        getItemByName(String(imageName));
        var newImage = app.selection[0];
        doc.selection = null;
        return newImage;
    }

    function SaveDesign(currentDesignImage,currentDesign,currentCMH,destFolder,blanksFolder,designsFolder,store){
        

        //currentMascotName = updateMascotFileName(currentMascot);

        //GetFileName(["design",currentDesign],currentCMH,currentProduct,currentProductColor,currentDesign,designsFolder,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb)
        //var currentDesignImage = GetFileName(["design",currentDesign],currentCMH,"design","white",currentDesign,designsFolder,"","",store,"","");

        //if(currentDesignImage.indexOf("light") > 0)
        //{
    //~     $.writeln("");
    //~         $.writeln("SAVEDESIGN");
    //~         $.writeln("currentDesignImage: " + currentDesignImage);
            //$.writeln("currentDesignImage: " + StripFilePathAndType(currentDesignImage));
            
    //~         $.writeln("currentDesign: " + currentDesign);
    //~         $.writeln("currentCMH: " + currentCMH);
    //~         $.writeln("destFolder: " + destFolder);
    //~         $.writeln("blanksFolder: " + blanksFolder);
    //~         $.writeln("designsFolder: " + designsFolder);
    //~         $.writeln("store: " + store);
    //~         $.writeln("");

            var pattern = /.*\_/g;
            var extractedColor = StripFilePathAndType(currentDesignImage).replace(pattern,"");
            if (currentDesign == "mascot"){extractedColor = "light";}

            var SkipCheckVar = true;
            var SkipCheckVarString = "/c/Users/".concat(user,"/Desktop/GeneratedImages/"); //"C:\\Users\\A.Leusink\\Desktop\\Generated Images\\"
            $.writeln("//////////// Entering skip check function /////////////");
            SkipCheckVar = SkipCheck("/p/team24x7/fundraising/images/", SkipCheckVarString, currentDesign + "_" + currentCMH + "_" + ColorAdjust("design",extractedColor,extractedColor).toLowerCase()+ ".png");
            //SkipCheckVar = SkipCheck("F:\\Generated Images\\", "F:\\Generated Images\\", currentDesign + "_" + currentCMH + "_" + ColorAdjust("filename",extractedColor,extractedColor).toLowerCase()+ ".png");
            //$.writeln("SkipCheck: " + currentDesign + "_" + currentCMH + "_light.png");
            //$.writeln("SkipCheck: " + SkipCheckVar);
            $.writeln("//////// Passed skip check function ///////////"); 
            if(SkipCheckVar == false && currentDesignImage.indexOf("d8") < 0 && currentDesignImage.indexOf("d9") < 0) 
            { 
                //Window.alert("current design image: " + currentDesignImage);
                $.writeln("//////// Creating new doc ///////////");
                var doc = app.documents.add(); 
                $.writeln("//////// Entering first getImage call ///////////");
                var backgroundImage = getImage(doc, blanksFolder + "blank-500-square.png","blank");
                $.writeln("currenDesignImage: " + currentDesignImage);
                var designImage = getImage(doc,currentDesignImage,"designImage");
                //$.writeln("designImage: " + designImage);
                            
                backgroundImage.position = [0,backgroundImage.height];
                             
                var embMaxHeight = .9; 
                var embMaxWidth = .9; 
                            
                ResizeProportionally(designImage,backgroundImage,embMaxWidth,embMaxHeight,"square");
                
                targetX = (backgroundImage.width / 2) - (designImage.width / 2);
                targetY = (backgroundImage.height / 2) + (designImage.height / 2);
                
                designImage.position = [targetX,targetY];
                
                //backgroundImage.remove();
                backgroundImage.visible = false;
                
                var destFilePath = destFolder + "/" + currentDesign + "_" + currentCMH + "_" + ColorAdjust("design",extractedColor,extractedColor).toLowerCase();
               //$.writeln("destFilePath: " + destFilePath);
                ExportPNG24NoClip(destFilePath);

                doc.close(SaveOptions.DONOTSAVECHANGES);
                $.writeln("///////// Doc created ////////");
                
                //error();
            }
        //}       
    }
}
