function TeamStoreOptionsWindow()
{   
    var optionsMenu = new Window('dialog', 'Product Images');
    optionsMenu.frameLoction = (100,100);
    
    optionsMenu.bounds = {x:400, y:250, width:1000, height:655};
    
    optionsMenu.CollectDataText = optionsMenu.add('statictext', [50,30,105,60],"Input data string: ");
    optionsMenu.CollectData = optionsMenu.add('edittext', [155,30,950,60],"");
    
 /*   
    optionsMenu.CollectCMHsText = optionsMenu.add('statictext', [50,30,105,60],"CMH(s):");
    optionsMenu.CollectCMHs = optionsMenu.add('edittext', [155,30,950,60],"");
    
    optionsMenu.CollectSchoolColorsText = optionsMenu.add('statictext', [50,70,145,100],"School Color(s):");
    optionsMenu.CollectSchoolColors = optionsMenu.add('edittext', [155,70,950,100],"");
    
    optionsMenu.CollectSchoolMascotsText = optionsMenu.add('statictext', [50,110,175,140],"Mascot(s):");
    optionsMenu.CollectSchoolMascots = optionsMenu.add('edittext', [155,110,950,140],"");
    
    optionsMenu.CollectSchoolMascotImagesText = optionsMenu.add('statictext', [50,150,175,180],"Mascot Image(s):");
    optionsMenu.CollectSchoolMascotImages = optionsMenu.add('edittext', [155,150,950,180],"");
    
    optionsMenu.CollectSchoolApparelEmbText = optionsMenu.add('statictext', [50,190,175,220],"Apparel Emb(s):");
    optionsMenu.CollectSchoolApparelEmb = optionsMenu.add('edittext', [155,190,950,220],"");
    
    optionsMenu.CollectSchoolHeadwearEmbText = optionsMenu.add('statictext', [50,230,175,260],"Headwear Emb(s):");
    optionsMenu.CollectSchoolHeadwearEmb = optionsMenu.add('edittext', [155,230,950,260],"");
    
    optionsMenu.CollectCMHs.onChange = function() {CMHsCollected = optionsMenu.CollectCMHs.text.split(",");}
    optionsMenu.CollectSchoolColors.onChange = function() {ColorsCollected = optionsMenu.CollectSchoolColors.text.split(",");}
    optionsMenu.CollectSchoolMascots.onChange = function() {MascotsCollected = optionsMenu.CollectSchoolMascots.text.split(",");}
    optionsMenu.CollectSchoolMascotImages.onChange = function() {MascotImagesCollected = optionsMenu.CollectSchoolMascotImages.text.split(",");}
    optionsMenu.CollectSchoolApparelEmb.onChange = function() {ApparelEmbImagesCollected = optionsMenu.CollectSchoolApparelEmb.text.split(",");}
    optionsMenu.CollectSchoolHeadwearEmb.onChange = function() {HeadwearEmbImagesCollected = optionsMenu.CollectSchoolHeadwearEmb.text.split(",");}
    
    */
        optionsMenu.CollectData.onChange = function() {DataCollected = optionsMenu.CollectData.text;}
        optionsMenu.RunButton = optionsMenu.add('button', [800,590,950,645], 'Run'); //x,800,560,950,605
        
        optionsMenu.RunButton.onClick = function()
        {        
            resultsArray = onClose();  
            optionsMenu.close();        
        }

        function onClose()
        {       
            //var returnValues = [CMHsCollected,ColorsCollected,MascotsCollected,MascotImagesCollected,ApparelEmbImagesCollected,HeadwearEmbImagesCollected];
            var returnValues = [DataCollected];
            return returnValues;
        }

        optionsMenu.center();
        optionsMenu.show();
 
    
    return resultsArray; 
}

