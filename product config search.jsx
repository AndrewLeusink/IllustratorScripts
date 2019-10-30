#include "C:\\Program Files\\Adobe\\Adobe Illustrator CC 2017\\Presets\\en_US\\Scripts\\Fundraising\\Include\\ProductInfo.jsx"

Main();

function Main()
{
    var products = SearchForProperties(ProductData,"Process","team");
}


function SearchForProperties(obj, search, term) {
    var list = [];
    
    for (var prop in obj)
    {
            var thingy = obj[prop];
            $.writeln(thingy.Process);
            if(String(thingy[search]).indexOf(term) > -1)
            {
                list.push( String(thingy.name));
            }
    }

    //$.writeln("Search Results: " + list);
    
    return list;
}

