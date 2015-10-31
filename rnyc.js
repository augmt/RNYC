(function () {
    "use strict";

    var nyc = {
        Bronx: {
            neighborhoods: [
                "Wakefield", "Co-op City", "Eastchester", "Fieldston",
                "Riverdale", "Kingsbridge", "Woodlawn", "Norwood",
                "Williamsbridge", "Baychester", "Pelham Parkway",
                "City Island", "Bedford Park", "University Heights",
                "Morris Heights", "Fordham", "East Tremont", "West Farms",
                "Highbridge", "Melrose", "Mott Haven", "Port Morris",
                "Longwood", "Hunts Point", "Morrisania", "Soundview",
                "Clason Point", "Throggs Neck", "Country Club", "Parkchester",
                "Westchester Square", "Van Nest", "Morris Park", "Belmont",
                "Spuyten Duyvil", "North Riverdale", "Pelham Bay",
                "Schuylerville", "Edgewater Park", "Castle Hill", "Olinville",
                "Pelham Gardens", "Concourse", "Unionport", "Edenwald",
                "Claremont Village", "Concourse Village",  "Mount Eden",
                "Mount Hope"
            ]
        },
        Brooklyn: {
            neighborhoods: [
                "Bay Ridge", "Bensonhurst", "Sunset Park", "Greenpoint",
                "Gravesend", "Brighton Beach", "Sheepshead Bay",
                "Manhattan Terrace", "Flatbush", "Crown Heights",
                "East Flatbush", "Kensington", "Windsor Terrace",
                "Prospect Heights", "Brownsville", "Williamsburg", "Bushwick",
                "Bedford Stuyvesant", "Brooklyn Heights", "Cobble Hill",
                "Carroll Gardens", "Red Hook", "Gowanus", "Fort Greene",
                "Park Slope", "Cypress Hills", "East New York",
                "Starrett City", "Canarsie", "Flatlands", "Mill Island",
                "Manhattan Beach", "Coney Island", "Bath Beach",
                "Borough Park", "Dyker Heights", "Gerritsen Beach",
                "Marine Park", "Clinton Hill", "Sea Gate", "Downtown",
                "Boerum Hill", "Prospect Lefferts Gardens", "Ocean Hill",
                "City Line", "Bergen Beach", "Midwood", "Prospect Park South",
                "Georgetown", "Spring Creek", "East Williamsburg",
                "North Side", "South Side", "Navy Yard", "Ocean Parkway",
                "Fort Hamilton", "Ditmas Park", "Wingate", "Rugby",
                "Remsen Village", "New Lots", "Paerdegat Basin", "Mill Basin",
                "Fulton Ferry", "Vinegar Hill", "Weeksville",
                "Broadway Junction", "Dumbo", "Homecrest", "Highland Park",
                "Madison"
            ]
        },
        Manhattan: {
            neighborhoods: [
                "Marble Hill", "Chinatown", "Washington Heights", "Inwood",
                "Hamilton Heights", "Manhattanville", "Central Harlem",
                "East Harlem", "Upper East Side", "Yorkville", "Lenox Hill",
                "Roosevelt Island", "Upper West Side", "Lincoln Square",
                "Clinton", "Midtown", "Murray Hill", "Chelsea",
                "Greenwich Village", "East Village", "Lower East Side",
                "Tribeca", "Little Italy", "Soho", "West Village",
                "Manhattan Valley", "Morningside Heights", "Gramercy",
                "Battery Park City", "Financial District", "Carnegie Hill",
                "Noho", "Civic Center", "Midtown South", "Sutton Place",
                "Turtle Bay", "Tudor City", "Stuyvesant Town", "Flatiron"
            ]
        },
        Queens: {
            neighborhoods: [
                "Astoria", "Woodside", "Jackson Heights", "Elmhurst",
                "Howard Beach", "South Corona", "Forest Hills", "Kew Gardens",
                "Richmond Hill", "Downtown Flushing", "Long Island City",
                "Sunnyside", "East Elmhurst", "Maspeth", "Ridgewood",
                "Glendale", "Rego Park", "Woodhaven", "Ozone Park",
                "South Ozone Park", "College Point", "Whitestone", "Bayside",
                "Auburndale", "Little Neck", "Douglaston", "Glen Oaks",
                "Bellerose", "Kew Gardens Hills", "Fresh Meadows", "Briarwood",
                "Jamaica Center", "Oakland Gardens", "Queens Village",
                "Hollis", "South Jamaica", "St. Albans", "Rochdale",
                "Springfield Gardens", "Cambria Heights", "Rosedale",
                "Far Rockaway", "Broad Channel", "Breezy Point", "Steinway",
                "Beechhurst", "Bay Terrace", "Edgemere", "Arverne", "Seaside",
                "Neponsit", "Murray Hill", "Floral Park", "Holliswood",
                "Jamaica Estates", "Queensboro Hill", "Hillcrest",
                "Ravenswood", "Lindenwood", "Laurelton", "Lefrak City",
                "Belle Harbor", "Rockaway Park", "Somerville", "Brookville",
                "Bellaire", "North Corona", "Forest Hills Gardens",
                "Jamaica Hills", "Utopia", "Pomonok", "Astoria Heights",
                "Hunters Point", "Sunnyside Gardens", "Blissville", "Roxbury",
                "Middle Village", "Malba"
            ]
        },
        "Staten Island": {
            neighborhoods: [
                "St. George", "New Brighton", "Stapleton", "Rosebank",
                "West Brighton", "Grymes Hill", "Todt Hill", "South Beach",
                "Port Richmond", "Mariner's Harbor", "Port Ivory",
                "Castleton Corners", "New Springville", "Travis", "New Dorp",
                "Oakwood", "Great Kills", "Eltingville", "Annadale", "Woodrow",
                "Tottenville", "Tompkinsville", "Silver Lake", "Sunnyside",
                "Park Hill", "Westerleigh", "Graniteville", "Arlington",
                "Arrochar", "Grasmere", "Old Town", "Dongan Hills",
                "Midland Beach", "Grant City", "New Dorp Beach", "Bay Terrace",
                "Huguenot", "Pleasant Plains", "Butler Manor", "Charleston",
                "Rossville", "Arden Heights", "Greenridge",
                "Heartland Village", "Chelsea", "Bloomfield", "Bulls Head",
                "Richmond Town", "Shore Acres", "Clifton", "Concord",
                "Emerson Hill", "Randall Manor", "Howland Hook", "Elm Park",
                "Manor Heights", "Willowbrook", "Sandy Ground", "Egbertville",
                "Prince's Bay", "Lighthouse Hill", "Richmond Valley"
            ]
        }
    };

    function shuffle(array) {
        // Fisher-Yates shuffle function by CoolAJ86
        var randomIndex, temporaryValue;
        var currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    document.getElementById("generate").addEventListener("click", function () {
        var boroughNodes = document.getElementsByName("borough");
        var neighborhoods = [];

        Array.prototype.forEach.call(boroughNodes, function (boroughNode) {
            if (boroughNode.checked) {
                var borough = boroughNode.parentNode.textContent;
                neighborhoods = neighborhoods.concat(nyc[borough].neighborhoods);
            }
        });

        if (neighborhoods.length) {
            document.getElementById("random").textContent = shuffle(neighborhoods)[0];
        } else {
            document.getElementById("random").textContent = "Select a borough!";
        }
    });
}());
