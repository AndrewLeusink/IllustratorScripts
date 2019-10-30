#include Utilities.jsx
#include ProductInfo.jsx
#include OptionsWindows-old.jsx
#include SaveOptions.jsx

Main();

function Main()
{
    $.writeln("///////////// Start /////////////");

    //$.writeln(SearchForProperties(ProductInfo,"stores","team"));

    var products = SearchForProperties(ProductInfo,"stores","team");
    //products = SearchForProperties(ProductInfo,"stores","team");    
    //$.writeln("Products: " + products);
    //$.writeln("") ;
    
    var store = "team";
    
    if(store == "team")
    {
        var OptionsWindowResults = TeamStoreOptionsWindow();

        var CMHs = OptionsWindowResults[0];
        var schoolColors = OptionsWindowResults[1]; 
        var mascots = OptionsWindowResults[2];
        var mascotImages = OptionsWindowResults[3];
        var apparelEmbs = OptionsWindowResults[4];
        var headwearEmbs = OptionsWindowResults[5];
    }

    //////TESTING//////
           /*/////TEAM//////
            var CMHs = ["950553","846565","866495"];
            var schoolColors = ["navy","red","red"];
            var mascots = ["navy","red","red"];
            var mascotImages = ["\\\\AWS-OFFLOAD\\DesignLibrary\\478907\\Marketing\\mascot_950553_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\59915\\Marketing\\mascot_846565_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\737094\\Marketing\\mascot_866495_light.png"];
            var apparelEmbs = ["\\\\AWS-OFFLOAD\\DesignLibrary\\478907\\Marketing\\team_950553_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\59915\\Marketing\\team_846565_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\737094\\Marketing\\team_866495_light.png"];
            var headwearEmbs = ["\\\\AWS-OFFLOAD\\DesignLibrary\\478907\\Marketing\\headwear_950553_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\59915\\Marketing\\headwear_846565_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\737094\\Marketing\\headwear_866495_light.png"];
            //////END TEAM/////*/

            /*
                //////TEAM///////
                var CMHs = ["343913","949021","797414","694291","824939","945583","812430","955397","464176","906720","946577","779457","946562","37600","822257","800236","862897","793762","969324","865763","193345","863020","805969","970415","63715","915209","903994","805304","888239","790401","359116","860269","929445","203524","967757","760671","953881","952300","865973","969274","779371","378336","596764","912062","805262","937745","834911","907769","462037","907099","808404","949287","876250","330899","824296","954933","870274","757582","809512","893669","857957","916197","937406","497207","969587","850198","953181","954702","856003","904024","813877","969262","924097","854467","802962","892152","950539","970790","969544","873147","967767","913156","764329","853624","840214","865143","777388","884989","433175","154340","933453","912406","462617","854915","479314","942661","505653","120004","512504","959851","788473","941573","966558","945872","824473","939988","785176","845072","926901","966643","819680","467576","911723","946244","970527","786021","875676","847475","781878","901987","359225","969687","921487","931933","970655","853610","928502","972348","829989","862648","737283","950490","880607","columbia","gold","maroon","columbia","navy","royal","761012","906720","969324","865763","193345","863020","805969","870274","757582","809512","893669","857957","969262","924097","854467","479314","786021","875676","847475","781878","901987","359225","928502"];
                var schoolColors = ["columbia","columbia","columbia","columbia","columbia","gold","gold","gold","gold","gold","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","kelly green","kelly green","kelly green","kelly green","kelly green","kelly green","kelly green","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","purple","purple","purple","purple","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","grey","grey","vegas gold","vegas gold","vegas gold","vegas gold","gold","gold","dark green","dark green","dark green","dark green","dark green","navy","navy","navy","navy","navy","orange","orange","orange","royal","red","red","red","red","red","red","vegas gold"];
                var mascots = ["columbia","columbia","columbia","columbia","columbia","gold","gold","gold","gold","gold","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","dark green","kelly green","kelly green","kelly green","kelly green","kelly green","kelly green","kelly green","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","navy","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","purple","purple","purple","purple","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","royal","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","grey","grey","vegas gold","vegas gold","vegas gold","vegas gold","gold","gold","dark green","dark green","dark green","dark green","dark green","navy","navy","navy","navy","navy","orange","orange","orange","royal","red","red","red","red","red","red","vegas gold"];
                var mascotImages = ["\\\\AWS-OFFLOAD\\DesignLibrary\\343912\\Marketing\\mascot_343913_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\327614\\Marketing\\mascot_949021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\794900\\Marketing\\mascot_797414_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\694290\\Marketing\\mascot_694290_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\464001\\Marketing\\mascot_824939_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\44632\\Marketing\\mascot_945583_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\812429\\Marketing\\mascot_812430_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\955396\\Marketing\\mascot_955397_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\464175\\Marketing\\mascot_464176_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\338112\\Marketing\\mascot_906720_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\875884\\Marketing\\mascot_946577_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\466814\\Marketing\\mascot_779457_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\661781\\Marketing\\mascot_946562_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\37585\\Marketing\\mascot_37600_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\650239\\Marketing\\mascot_822257_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\160052\\Marketing\\mascot_160052_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462435\\Marketing\\mascot_462435_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\135924\\Marketing\\mascot_793762_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\40775\\Marketing\\mascot_969324_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\595661\\Marketing\\mascot_865763_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\193344\\Marketing\\mascot_193345_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\192155\\Marketing\\mascot_863020_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\629301\\Marketing\\mascot_805969_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\970414\\Marketing\\mascot_970415_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\63714\\Marketing\\mascot_63715_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\673149\\Marketing\\mascot_915209_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\678050\\marketing\\678050_Logo01.png","\\\\AWS-OFFLOAD\\DesignLibrary\\476442\\Marketing\\mascot_805304_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\888238\\Marketing\\mascot_888239_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\724073\\Marketing\\mascot_790401_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\359108\\Marketing\\359108_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\520145\\Marketing\\mascot_520145_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\929444\\Marketing\\mascot_929445_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\203523\\Marketing\\mascots_203524_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\486157\\Marketing\\mascot_967757_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\523393\\Marketing\\mascot_760671_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\189806\\Marketing\\mascot_953881_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\478066\\Marketing\\mascot_952300_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\486157\\Marketing\\mascot_967757_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\969273\\Marketing\\969273_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\468786\\Marketing\\mascot_779371_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\378335\\Marketing\\mascot_378336_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596763\\Marketing\\mascot_593764_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\912061\\Marketing\\mascot_912062_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\323148\\Marketing\\mascot_805262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\673758\\Marketing\\mascot_937745_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\371114\\Marketing\\mascot_834911_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\34076\\Marketing\\mascot_907769_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462029\\Marketing\\mascot_462037_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\673004\\Marketing\\mascot_907099_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\220343\\marketing\\mascot_808404_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\949286\\Marketing\\mascot_949287_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\241397\\Marketing\\mascot_876250_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\330891\\Marketing\\mascot_330891_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\378074\\Marketing\\mascot_824296_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809419\\Marketing\\mascot_954933_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596009\\Marketing\\mascot_870274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\696088\\Marketing\\mascot_757582_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809511\\Marketing\\mascot_809512_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\144450\\Marketing\\mascot_893669_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\857956\\Marketing\\mascot_857957_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\916196\\Marketing\\916196_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\136794\\Marketing\\136794_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\497206\\marketing\\497206_Logo01.png","\\\\AWS-OFFLOAD\\DesignLibrary\\551494\\Marketing\\mascot_969587_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\25724\\Marketing\\mascot_850198_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\547666\\Marketing\\mascot_953181_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\64787\\Marketing\\mascot_954702_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\461333\\Marketing\\mascot_856003_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\623762\\Marketing\\mascot_904024_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\342955\\Marketing\\mascot_813877_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\487259\\Marketing\\mascot_969262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\151120\\Marketing\\mascot_924097_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\395155\\Marketing\\mascot_854467_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\333791\\Marketing\\mascot_802962_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\521276\\Marketing\\mascot_892152_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\262393\\Marketing\\mascot_950539_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\496800\\Marketing\\Kearney Golf logo.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\329818\\Marketing\\329818_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\316942\\Marketing\\316942_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\327498\\Marketing\\327498_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\913155\\Marketing\\mascot_913155_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\133488\\Marketing\\mascot_764329_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\332979\\Marketing\\mascot_332979_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\175683\\Marketing\\mascot_840214_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\865142\\Marketing\\mascot_865143_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\81259\\Marketing\\mascot_777388_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\67716\\Marketing\\mascot_884989_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\433174\\Marketing\\mascot_433175_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\154339\\Marketing\\mascot_154340_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\933452\\Marketing\\mascot_933453_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\651747\\Marketing\\mascot_912406_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462609\\Marketing\\mascot_462617_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\41210\\Marketing\\mascot_854915_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\479313\\Marketing\\mascot_479314_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\508951\\Marketing\\mascot_942661_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\505645\\Marketing\\505645_mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\120003\\Marketing\\120003_Mascot.png","\\\\AWS-OFFLOAD\\EmbroideryLibrary\\512489\\Marketing\\512489_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\426301\\Marketing\\426301_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\210106\\Marketing\\210106_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\415165\\Marketing\\415165_Mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\492276\\Marketing\\mascot_966558_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\415165\\Marketing\\mascot_945872_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\350495\\Marketing\\mascot_824473_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\939987\\Marketing\\mascot_939988_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\356411\\Marketing\\mascot_785176_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\617875\\Marketing\\mascot_845072_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\705919\\Marketing\\mascot_926901_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\337271\\Marketing\\mascot_966643_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\124092\\Marketing\\mascot_819680_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\467568\\Marketing\\mascot_467576_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\666247\\Marketing\\mascot_911723_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\482213\\Marketing\\mascot_946244_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\176582\\Marketing\\mascot_970527_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\522146\\Marketing\\mascot_786021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\526525\\Marketing\\mascot_875676_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\517506\\Marketing\\mascot_847475_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\488332\\Marketing\\mascot_781878_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\901986\\Marketing\\mascot_901987_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\359224\\Marketing\\mascot_359225_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\478994\\Marketing\\mascot_969687_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\622834\\Marketing\\mascot_921487_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\693652\\Marketing\\mascot_931933_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\294612\\Marketing\\mascot_970655_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\149264\\Marketing\\mascot_853610_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\56232\\Marketing\\mascot_928502_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\836701\\Marketing\\mascot_972348_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\119568\\Marketing\\mascot_829989_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\798765\\Marketing\\mascot_862648_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\737268\\Marketing\\mascot_737283_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\944606\\Marketing\\mascot_950490_Light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\405015\\Marketing\\mascot_880607_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\698437\\Marketing\\mascot_761012_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\338112\\Marketing\\mascot_906720_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\40775\\Marketing\\mascot_969324_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\595661\\Marketing\\mascot_865763_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\193344\\Marketing\\mascot_193345_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\192155\\Marketing\\mascot_863020_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\629301\\Marketing\\mascot_805969_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596009\\Marketing\\mascot_870274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\696088\\Marketing\\mascot_757582_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809511\\Marketing\\mascot_809512_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\144450\\Marketing\\mascot_893669_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\857956\\Marketing\\mascot_857957_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\487259\\Marketing\\mascot_969262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\151120\\Marketing\\mascot_924097_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\395155\\Marketing\\mascot_854467_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\479313\\Marketing\\mascot_479314_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\522146\\Marketing\\mascot_786021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\526525\\Marketing\\mascot_875676_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\517506\\Marketing\\mascot_847475_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\488332\\Marketing\\mascot_781878_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\901986\\Marketing\\mascot_901987_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\359224\\Marketing\\mascot_359225_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\56232\\Marketing\\mascot_928502_light.png"];
                var apparelEmbs = ["\\\\AWS-OFFLOAD\\DesignLibrary\\343912\\Marketing\\team_343913_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\327614\\Marketing\\team_949021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\794900\\Marketing\\team_797414_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\694290\\Marketing\\team_694290_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\464001\\Marketing\\team_824939_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\44632\\Marketing\\team_945583_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\812429\\Marketing\\team_812430_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\955396\\Marketing\\team_955397_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\464175\\Marketing\\team_464176_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\338112\\Marketing\\team_906720_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\875884\\Marketing\\team_946577_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\466814\\Marketing\\team_779457_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\661781\\Marketing\\team_946562_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\37585\\Marketing\\team_37600_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\650239\\Marketing\\team_822257_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\160052\\Marketing\\team_160052_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462435\\Marketing\\team_462435_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\135924\\Marketing\\team_793762_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\40775\\Marketing\\team_969324_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\595661\\Marketing\\team_865763_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\193344\\Marketing\\mascot_193345_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\192155\\Marketing\\team_863020_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\629301\\Marketing\\team_805969_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\970414\\Marketing\\team_970415_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\63714\\Marketing\\team_63715_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\673149\\Marketing\\team_915209_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\678050\\Marketing\\team_903994_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\476442\\Marketing\\team_805304_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\888238\\Marketing\\team_888239_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\724073\\Marketing\\team_790401_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\359108\\Marketing\\team_359108_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\520145\\Marketing\\team_520145_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\929444\\Marketing\\team_929445_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\203523\\Marketing\\team_203524_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\486157\\Marketing\\team_967757_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\523393\\Marketing\\team_760671_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\189806\\Marketing\\team_953881_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\478066\\Marketing\\team_952300_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\486157\\Marketing\\team_967757_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\969273\\Marketing\\team_969274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\468786\\Marketing\\team_779371_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\378335\\Marketing\\team_378336_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596763\\Marketing\\team_593764_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\912061\\Marketing\\team_912062_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\323148\\Marketing\\team_805262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\673758\\Marketing\\team_937745_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\371114\\Marketing\\team_834911_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\34076\\Marketing\\team_907769_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462029\\Marketing\\team_462037_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\673004\\Marketing\\team_907099_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\220343\\marketing\\team_808404_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\949286\\Marketing\\team_949287_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\241397\\Marketing\\team_876250_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\330891\\Marketing\\team_330891_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\378074\\Marketing\\team_824296_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809419\\Marketing\\team_954933_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596009\\Marketing\\team_870274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\696088\\Marketing\\team_757582_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809511\\Marketing\\team_809512_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\144450\\Marketing\\team_893669_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\857956\\Marketing\\team_857957_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\916196\\Marketing\\916196_team_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\136794\\Marketing\\headwear_937406_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\497206\\Marketing\\team_497207_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\551494\\Marketing\\team_969587_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\25724\\Marketing\\team_850198_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\547666\\Marketing\\team_953181_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\64787\\Marketing\\team_954702_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\461333\\Marketing\\team_856003_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\623762\\Marketing\\team_904024_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\342955\\Marketing\\team_813877_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\487259\\Marketing\\mascot_969262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\151120\\Marketing\\team_924097_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\395155\\Marketing\\team_854467_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\333791\\Marketing\\team_802962_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\521276\\Marketing\\team_892152_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\262393\\Marketing\\team_950539_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\496800\\Marketing\\K logo.jpg","\\\\AWS-OFFLOAD\\DesignLibrary\\329818\\Marketing\\329818_team_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\316942\\Marketing\\316942_team_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\327498\\Marketing\\team_967767_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\913155\\Marketing\\team_913155_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\133488\\Marketing\\team_764329_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\332979\\Marketing\\team_332979_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\175683\\Marketing\\team_840214_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\865142\\Marketing\\team_865143_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\81259\\Marketing\\team_777388_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\67716\\Marketing\\team_884989_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\433174\\Marketing\\team_433175_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\154339\\Marketing\\team_154340_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\933452\\Marketing\\team_933453_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\651747\\Marketing\\team_912406_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462609\\Marketing\\team_462617_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\41210\\Marketing\\team_854915_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\479313\\Marketing\\team_479314_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\508951\\Marketing\\team_942661_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\505645\\Marketing\\505645_team_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\120003\\Marketing\\120003_team_light.png","\\\\AWS-OFFLOAD\\EmbroideryLibrary\\512489\\Marketing\\team_512489_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\426301\\Marketing\\team_959851_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\210106\\Marketing\\team_788473_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\415165\\Marketing\\team_941573_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\492276\\Marketing\\team_966558_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\415165\\Marketing\\team_941572_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\350495\\Marketing\\team_824473_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\939987\\Marketing\\team_939988_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\356411\\Marketing\\team_785176_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\617875\\Marketing\\team_845072_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\705919\\Marketing\\team_926901_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\337271\\Marketing\\team_966643_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\124092\\Marketing\\team_819680_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\467568\\Marketing\\team_467576_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\666247\\Marketing\\team_911723_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\482213\\Marketing\\team_946244_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\176582\\Marketing\\team_970527_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\522146\\Marketing\\team_786021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\526525\\Marketing\\team_875676_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\517506\\Marketing\\team_847475_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\488332\\Marketing\\team_781878_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\901986\\Marketing\\team_901987_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\359224\\Marketing\\team_359225_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\478994\\Marketing\\team_969687_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\622834\\Marketing\\team_921487_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\693652\\Marketing\\team_931933_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\294612\\Marketing\\team_970655_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\149264\\Marketing\\team_853610_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\56232\\Marketing\\team_928502_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\836701\\Marketing\\team_972348_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\119568\\Marketing\\team_829989_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\798765\\Marketing\\team_862648_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\737268\\Marketing\\team_737283_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\944606\\Marketing\\team_950490_Light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\405015\\Marketing\\team_880607_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\698437\\Marketing\\team_761012_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\338112\\Marketing\\team_906720_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\40775\\Marketing\\team_969324_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\595661\\Marketing\\team_865763_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\193344\\Marketing\\mascot_193345_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\192155\\Marketing\\team_863020_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\629301\\Marketing\\team_805969_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596009\\Marketing\\team_870274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\696088\\Marketing\\team_757582_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809511\\Marketing\\team_809512_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\144450\\Marketing\\team_893669_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\857956\\Marketing\\team_857957_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\487259\\Marketing\\mascot_969262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\151120\\Marketing\\team_924097_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\395155\\Marketing\\team_854467_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\479313\\Marketing\\team_479314_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\522146\\Marketing\\team_786021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\526525\\Marketing\\team_875676_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\517506\\Marketing\\team_847475_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\488332\\Marketing\\team_781878_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\901986\\Marketing\\team_901987_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\359224\\Marketing\\team_359225_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\56232\\Marketing\\team_928502_light.png"];
                var headwearEmbs = ["\\\\AWS-OFFLOAD\\DesignLibrary\\343912\\Marketing\\headwear_343913_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\327614\\Marketing\\headwear_949021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\794900\\Marketing\\headwear_797414_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\694290\\Marketing\\headwear_694290_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\464001\\Marketing\\headwear_824939_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\44632\\Marketing\\headwear_945583_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\812429\\Marketing\\headwear_812430_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\955396\\Marketing\\headwear_955397_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\464175\\Marketing\\headwear_464176_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\338112\\Marketing\\headwear_906720_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\875884\\Marketing\\headwear_946577_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\466814\\Marketing\\headwear_779457_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\661781\\Marketing\\headwear_946562_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\37585\\Marketing\\headwear_37600_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\650239\\Marketing\\headwear_822257_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\160052\\Marketing\\headwear_160052_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462435\\Marketing\\headwear_462435_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\135924\\Marketing\\headwear_793762_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\40775\\Marketing\\headwear_969324_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\595661\\Marketing\\headwear_865763_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\193344\\Marketing\\mascot_193345_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\192155\\Marketing\\headwear_863020_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\629301\\Marketing\\headwear_805969_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\970414\\Marketing\\headwear_970415_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\63714\\Marketing\\headwear_63715_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\673149\\Marketing\\headwear_915209_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\678050\\Marketing\\headwear_903994_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\476442\\Marketing\\headwear_805304_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\888238\\Marketing\\headwear_888239_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\724073\\Marketing\\headwear_790401_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\359108\\Marketing\\headwear_359108_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\520145\\Marketing\\headwear_520145_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\929444\\Marketing\\headwear_929445_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\203523\\Marketing\\headwear_203524_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\486157\\Marketing\\headwear_967757_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\523393\\Marketing\\headwear_760671_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\189806\\Marketing\\headwear_953881_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\478066\\Marketing\\headwear_952300_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\486157\\Marketing\\headwear_967757_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\969273\\Marketing\\headwear_969274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\468786\\Marketing\\headwear_779371_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\378335\\Marketing\\headwear_378336_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596763\\Marketing\\headwear_593764_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\912061\\Marketing\\headwear_912062_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\323148\\Marketing\\headwear_805262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\673758\\Marketing\\headwear_937745_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\371114\\Marketing\\headwear_834911_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\34076\\Marketing\\headwear_907769_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462029\\Marketing\\headwear_462037_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\673004\\Marketing\\headwear_907099_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\220343\\marketing\\headwear_808404_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\949286\\Marketing\\headwear_949287_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\241397\\Marketing\\headwear_876250_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\330891\\Marketing\\headwear_330891_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\378074\\Marketing\\headwear_824296_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809419\\Marketing\\headwear_954933_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596009\\Marketing\\headwear_870274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\696088\\Marketing\\headwear_757582_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809511\\Marketing\\headwear_809512_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\144450\\Marketing\\headwear_893669_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\857956\\Marketing\\headwear_857957_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\916196\\Marketing\\916196_headwear_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\136794\\Marketing\\team_937406_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\497206\\Marketing\\headwear_497207_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\551494\\Marketing\\headwear_969587_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\25724\\Marketing\\headwear_850198_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\547666\\Marketing\\headwear_953181_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\64787\\Marketing\\headwear_954702_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\461333\\Marketing\\headwear_856003_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\623762\\Marketing\\headwear_904024_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\342955\\Marketing\\headwear_813877_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\487259\\Marketing\\mascot_969262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\151120\\Marketing\\headwear_924097_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\395155\\Marketing\\headwear_854467_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\333791\\Marketing\\headwear_802962_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\521276\\Marketing\\headwear_892152_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\262393\\Marketing\\headwear_950539_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\496800\\Marketing\\Bulldog logo.jpg","\\\\AWS-OFFLOAD\\DesignLibrary\\329818\\Marketing\\329818_headwear_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\316942\\Marketing\\316942_headwear_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\327498\\Marketing\\headwear_967767_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\913155\\Marketing\\headwear_913155_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\133488\\Marketing\\headwear_764329_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\332979\\Marketing\\headwear_332979_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\175683\\Marketing\\headwear_840214_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\865142\\Marketing\\headwear_865143_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\81259\\Marketing\\headwear_777388_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\67716\\Marketing\\headwear_884989_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\433174\\Marketing\\headwear_433175_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\154339\\Marketing\\headwear_154340_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\933452\\Marketing\\headwear_933453_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\651747\\Marketing\\headwear_912406_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\462609\\Marketing\\headwear_462617_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\41210\\Marketing\\headwear_854915_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\479313\\Marketing\\headwear_479314_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\508951\\Marketing\\headwear_942661_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\505645\\Marketing\\505653_headwear_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\120003\\Marketing\\120003_headwear_light.png","\\\\AWS-OFFLOAD\\EmbroideryLibrary\\512489\\Marketing\\headwear_512489_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\426301\\Marketing\\headwear_959851_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\210106\\Marketing\\headwear_788473_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\415165\\Marketing\\headwear_941573_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\492276\\Marketing\\headwear_966558_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\415165\\Marketing\\headwear_941572_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\350495\\Marketing\\headwear_824473_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\939987\\Marketing\\headwear_939988_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\356411\\Marketing\\headwear_785176_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\617875\\Marketing\\headwear_845072_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\705919\\Marketing\\headwear_926901_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\337271\\Marketing\\headwear_966643_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\124092\\Marketing\\headwear_819680_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\467568\\Marketing\\mascot_467576_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\666247\\Marketing\\headwear_911723_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\482213\\Marketing\\headwear_946244_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\176582\\Marketing\\headwear_970527_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\522146\\Marketing\\headwear_786021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\526525\\Marketing\\headwear_875676_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\517506\\Marketing\\headwear_847475_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\488332\\Marketing\\headwear_781878_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\901986\\Marketing\\headwear_901987_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\359224\\Marketing\\headwear_359225_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\478994\\Marketing\\headwear_969687_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\622834\\Marketing\\headwear_921487_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\693652\\Marketing\\headwear_931933_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\294612\\Marketing\\headwear_970655_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\149264\\Marketing\\headwear_853610_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\56232\\Marketing\\headwear_928502_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\836701\\Marketing\\headwear_972348_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\119568\\Marketing\\headwear_829989_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\798765\\Marketing\\headwear_862648_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\737268\\Marketing\\headwear_737283_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\944606\\Marketing\\headwear_950490_Light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\405015\\Marketing\\headwear_880607_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\698437\\Marketing\\headwear_761012_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\338112\\Marketing\\headwear_906720_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\40775\\Marketing\\headwear_969324_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\595661\\Marketing\\headwear_865763_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\193344\\Marketing\\mascot_193345_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\192155\\Marketing\\headwear_863020_light.PNG","\\\\AWS-OFFLOAD\\DesignLibrary\\629301\\Marketing\\headwear_805969_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\596009\\Marketing\\headwear_870274_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\696088\\Marketing\\headwear_757582_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\809511\\Marketing\\headwear_809512_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\144450\\Marketing\\headwear_893669_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\857956\\Marketing\\headwear_857957_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\487259\\Marketing\\mascot_969262_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\151120\\Marketing\\headwear_924097_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\395155\\Marketing\\headwear_854467_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\479313\\Marketing\\headwear_479314_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\522146\\Marketing\\headwear_786021_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\526525\\Marketing\\headwear_875676_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\517506\\Marketing\\headwear_847475_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\488332\\Marketing\\headwear_781878_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\901986\\Marketing\\headwear_901987_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\359224\\Marketing\\headwear_359225_light.png","\\\\AWS-OFFLOAD\\DesignLibrary\\56232\\Marketing\\headwear_928502_light.png"];
                ///////END TEAM//////
                */
            
            //////FAN//////
            
            /*
                var CMHs = ["904001","954702"];
                var schoolColors = ["maroon","orange"];
                var mascots = ["wolverines","unicorns"];
                var mascotImages = ["\\\\AWS-OFFLOAD\\DesignLibrary\\652298\\Marketing\\652298-mascot.png","\\\\AWS-OFFLOAD\\DesignLibrary\\common\\StillDeciding.png"];
                var apparelEmbs = ["\\\\AWS-OFFLOAD\\DesignLibrary\\652298\\Marketing\\652298_teamemb.png",""];
                var headwearEmbs = ["\\\\AWS-OFFLOAD\\DesignLibrary\\652298\\Marketing\\652298_headwear.png","""];
                //////END FAN//////
    //////END TESTING//////
    /*
    if (store == "fan")
    {
        var blanksFolder = "P:\\InkSoft\\Fundraiser\\Fundraising Products\\";
        var destFolder = "C:\\Users\\A.Leusink\\Desktop\\Generated Images\\";
        var designsFolder = "P:\\InkSoft\\Fundraiser\\WhiteOutlingPngs\\";
        var publicDestFolder = "P:\\team24x7\\fundraising\\images\\";
    }
    if (store == "team")
    {*/
        var blanksFolder = "P:\\Team Stores\\Pictures\\";
        var destFolder = "C:\\Users\\A.Leusink\\Desktop\\Generated Images\\";
        var designsFolder = "P:\\Team Stores\\Designs\\PNGs\\";
        var publicDestFolder = "P:\\team24x7\\fundraising\\images\\";
        /*var blanksFolder = "F:\\Pictures\\";
        var destFolder = "F:\\Generated Images\\";
        var designsFolder = "F:\\PNGs\\";
        var publicDestFolder = "F:\\images\\";*/
    //}

    for (var icmh = 0; icmh < CMHs.length; icmh++){
        currentCMH = CMHs[icmh];
       
        if (currentCMH == "0")
        {
             $.writeln("currentCMH: " + currentCMH);
             $.writeln("Skip");
        }
        else
        {
            currentSchoolColor = schoolColors[icmh];
            currentMascot = mascots[icmh];
            currentMascotImage = mascotImages[icmh].replace(".PNG",".png");
            currentApparelEmb = apparelEmbs[icmh].replace(".PNG",".png");
            currentHeadwearEmb = headwearEmbs[icmh].replace(".PNG",".png");
            
            $.writeln("currentCMH: " + currentCMH);
            $.writeln("Progress: " + Math.floor((icmh / CMHs.length) * 100) + "%");
            
            //CreateButtonImages(currentCMH,currentSchoolColor,blankPicturesFilePath,destFolder);
            //SaveDesign(currentMascotImage,currentCMH,"mascot",blanksFolder,currentSchoolColor);
            //SaveDesign(currentApparelEmb,currentCMH,"team",blanksFolder,currentSchoolColor);
            //SaveDesign(currentHeadwearEmb,currentCMH,"headwear",blanksFolder,currentSchoolColor);
            CreateProductPictures(store,products,currentCMH,currentSchoolColor,currentMascot,currentMascotImage,currentApparelEmb,currentHeadwearEmb,destFolder,publicDestFolder,blanksFolder,designsFolder,store);
            //CreateButtonPictures(store,currentCMH,currentSchoolColor,currentMascot,currentMascotImage,currentApparelEmb,currentHeadwearEmb,destFolder,publicDestFolder,blanksFolder,designsFolder,store);
            $.writeln("");
        }
    }
        
    $.writeln("///////////// Finish /////////////");
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

function CreateProductPictures(store,products,currentCMH,currentSchoolColor,currentMascot,currentMascotImage,currentApparelImage,currentHeadwearEmb,destFolder,publicDestFolder,blanksFolder,designsFolder,store) {  
    //for each product
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
            if(String(allProductColors).indexOf(currentSchoolColor) > -1) {productColorsToProcess.push(currentSchoolColor);}
            else {productColorsToProcess.push(String(currentProduct.fallback));}
        }
        else
        {
            var colors = ["grey","white","black","charcoal","onix",String(currentSchoolColor)]; //Create list of default colors and the current school color so we know what color products we need to create for this particular school.
            
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

               var skipCheck = SkipCheck(destFolder,publicDestFolder,GetFileName(["product","dest"],currentCMH,currentProduct,currentProductColor,currentDesign,destFolder,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb));

               if (currentDesign == "mascot" && (currentMascotImage.replace("stillDeciding","skip").replace("blank","skip").replace("Blank","skip").replace("StillDeciding","skip").indexOf("skip") > -1)) {skipCheck = true;}
                          
               var currentDesignImage = GetFileName(["design",currentDesign],currentCMH,currentProduct,currentProductColor,currentDesign,designsFolder,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb);
               
               if (currentDesignImage.indexOf("Source") == -1)
               {
                   if (/*currentDesignImage.indexOf("light") != -1 && */currentDesignImage.indexOf("blank") == -1){SaveDesign(currentDesignImage,currentDesign,currentCMH,destFolder,blanksFolder,designsFolder,store);}
                   
                   if (skipCheck == false)  //The file doesn't already exist, so it needs to be created. Otherwise, skip creating the picture. No need to do more work than required. This does mean you will need to delete the picture if you want to recreate it.
                   {                
                        var doc = app.documents.add();
                        doc.RulerUnits = "Pixels";

                        var productImage = getImage(doc,GetFileName(["product","blank"],currentCMH,currentProduct,currentProductColor,currentDesign,blanksFolder,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb),"productImage");
                        var designImage = getImage(doc,currentDesignImage,"designImage");

                        //var designImage = getImage(doc,GetFileName(["design",currentDesign],currentCMH,currentProduct,currentProductColor,currentDesign,designsFolder,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb),"designImage");

                        if(currentProduct.designLocationInformation[currentProductColor] == undefined) {
                            var productDimensionsInfo = currentProduct.designLocationInformation["all"];
                        }
                        else {                        
                            var productDimensionsInfo = currentProduct.designLocationInformation[currentProductColor];
                        }
                            
                        if(currentProduct.designLocationInformation["all"] != undefined && currentProduct.designLocationInformation["all"].name.indexOf ("bag") > -1){
                            
                            //$.writeln("ball pocket");
                            var designImage2 = getImage(doc,currentMascotImage,"mascotImage");
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

                        ExportJPG(GetFileName(["product","dest"],currentCMH,currentProduct,currentProductColor,currentDesign,destFolder,currentMascotImage,currentMascot,store,currentApparelEmb,currentHeadwearEmb));

                        doc.close(SaveOptions.DONOTSAVECHANGES);
                        //$.writeln("");
                }
                else {
                    //$.writeln("Skip");
                }
            }
            else{
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
                    fileName = folderPath + type[1] + "_" + currentCMH + "_" + ColorAdjust("design",stitchColor,"") + ".png"; 
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
                    fileName = "P:\\Team Stores\\Pictures\\blank.png";
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
    var getFile = File(imagePath);  
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
        SkipCheckVar = SkipCheck("P:\\team24x7\\fundraising\\images\\", "C:\\Users\\A.Leusink\\Desktop\\Generated Images\\", currentDesign + "_" + currentCMH + "_" + ColorAdjust("design",extractedColor,extractedColor).toLowerCase()+ ".png");
        //SkipCheckVar = SkipCheck("F:\\Generated Images\\", "F:\\Generated Images\\", currentDesign + "_" + currentCMH + "_" + ColorAdjust("filename",extractedColor,extractedColor).toLowerCase()+ ".png");
        //$.writeln("SkipCheck: " + currentDesign + "_" + currentCMH + "_light.png");
        //$.writeln("SkipCheck: " + SkipCheckVar);
        
        if(SkipCheckVar == false && currentDesignImage.indexOf("d8") < 0 && currentDesignImage.indexOf("d9") < 0)
        {
            var doc = app.documents.add();
            
            var backgroundImage = getImage(doc,blanksFolder + "blank-500-square.png","blank");
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
            
            var destFilePath = destFolder + "\\" + currentDesign + "_" + currentCMH + "_" + ColorAdjust("design",extractedColor,extractedColor).toLowerCase();
           //$.writeln("destFilePath: " + destFilePath);
            ExportPNG24NoClip(destFilePath);

            doc.close(SaveOptions.DONOTSAVECHANGES);
            
            //error();
        }
    //}       
}
