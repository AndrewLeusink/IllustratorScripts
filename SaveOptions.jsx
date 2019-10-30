function ExportPNG24 (destFilePath) 
{
    var exportOptions = new ExportOptionsPNG24();
    var type = ExportType.PNG24;
    var fileSpec = new File(destFilePath);
    exportOptions.antiAliasing = false;
    exportOptions.transparency = false;
    exportOptions.saveAsHTML = false;
    exportOptions.artBoardClipping = true;
    app.activeDocument.exportFile( fileSpec, type, exportOptions );
}

function ExportPNG24NoClip (destFilePath) 
{
    var exportOptions = new ExportOptionsPNG24();
    var type = ExportType.PNG24;
    var fileSpec = new File(destFilePath.replace("'",""));
    exportOptions.antiAliasing = false;
    exportOptions.transparency = true;
    exportOptions.saveAsHTML = false;
    app.activeDocument.exportFile( fileSpec, type, exportOptions );
}

function ExportJPG (destFilePath) 
{
    if ( app.documents.length > 0 ) 
    {
        var exportOptions = new ExportOptionsJPEG();
        var type = ExportType.JPEG;
        var fileSpec = new File(destFilePath);
        exportOptions.antiAliasing = false;
        exportOptions.qualitySetting = 70;
        exportOptions.matte = false;
        app.activeDocument.exportFile( fileSpec, type, exportOptions );
    }
}

function ExportJPGWithClipping (destFilePath) 
{
    if ( app.documents.length > 0 ) 
    {
        var exportOptions = new ExportOptionsJPEG();
        var type = ExportType.JPEG;
        var fileSpec = new File(destFilePath);
        exportOptions.antiAliasing = false;
        exportOptions.qualitySetting = 70;
        exportOptions.matte = false;
        exportOptions.artBoardClipping = true;
        app.activeDocument.exportFile( fileSpec, type, exportOptions );
    }
}

function SaveAsPDF (dest) 
{
        var doc = app.activeDocument;
        
        if ( app.documents.length > 0 ) 
        {
            var saveName = new File ( dest );
            saveOpts = new PDFSaveOptions();
            doc.saveAs( saveName, saveOpts );
        }
}