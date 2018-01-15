var map;

var visitedParks = [
    {latlng:{lat: 48.3693, lng:-88.8046}, name: "Sleeping Giant Provincial Park"},
    {latlng:{lat: 52.8734, lng:-117.9543}, name: "Jasper National Park"},
    {latlng:{lat: 51.4968, lng:-115.9281}, name: "Banff National Park"},
    {latlng:{lat: 51.4667, lng:-116.5833}, name: "Yoho National Park"},
    {latlng:{lat: 47.8021, lng:-123.6044}, name: "Olympic National Park"},
]

var visitedLocations =[
    //USA
    {latlng:{lat: 42.3314, lng:-83.0458}, name: "Detroit, MI"},
    {latlng:{lat: 43.3222, lng:-70.5805}, name: "Wells, ME", wiki: "Wells, Maine"},
    {latlng:{lat: 40.7128, lng:-74.0060}, name: "New York City, NY"},
    {latlng:{lat: 42.3601, lng:-71.0589}, name: "Boston, MA"},
    {latlng:{lat: 27.9506, lng:-82.4572}, name: "Tampa Bay, FL"},
    {latlng:{lat: 25.7617, lng:-80.1918}, name: "Miami, FL"},
    {latlng:{lat: 28.5383, lng:-81.3792}, name: "Orlando, FL", wiki: "Orlando, Florida"},
    {latlng:{lat: 30.2672, lng:-97.7431}, name: "Austin, TX", wiki: "Austin, Texas"},
    //maybe add waco and college station
    {latlng:{lat: 29.4241, lng:-98.4936}, name: "San Antonio, TX"},
    {latlng:{lat: 29.9511, lng:-90.0715}, name: "New Orleans, LA"},
    {latlng:{lat: 37.7749, lng:-122.4194}, name: "San Francisco, CA"},
    {latlng:{lat: 33.3879, lng:-118.4163}, name: "Catalina Island, CA", wiki:"Santa Catalina Island, California"},
    {latlng:{lat: 32.7157, lng:-117.1611}, name: "San Diego, CA"},
    {latlng:{lat: 39.0968, lng:-120.0324}, name: "Lake Tahoe, CA"},
    {latlng:{lat: 36.1699, lng:-115.1398}, name: "Las Vegas, NV"},
    {latlng:{lat: 45.5231, lng:-122.6765}, name: "Portland, OR"},
    {latlng:{lat: 47.6062, lng:-122.3321}, name: "Seattle, WA"},
    
    //Canada
    {latlng:{lat: 49.2827, lng:-123.1207}, name: "Vancouver, BC"},
    {latlng:{lat: 53.5444, lng:-113.4909}, name: "Edmonton, AB"},
    {latlng:{lat: 51.0486, lng:-114.0708}, name: "Calgary, AB"},
    {latlng:{lat: 50.4452, lng:-104.6189}, name: "Regina, SK", wiki: "Regina, Saskatchewan"},
    {latlng:{lat: 49.8998, lng:-97.1375}, name: "Winnipeg, MB"},
    {latlng:{lat: 48.3809, lng:-89.2477}, name: "Thunder Bay, ON"},
    {latlng:{lat: 46.3091, lng:-79.4608}, name: "North Bay, ON", wiki: "North Bay, Ontario"},
    {latlng:{lat: 48.4758, lng:-81.3305}, name: "Timmins, ON"},
    {latlng:{lat: 43.0582, lng:-79.2902}, name: "Niagara Falls, ON"},
    {latlng:{lat: 44.2759, lng:-81.5596}, name: "Kincardine, ON", wiki: "Kincardine, Ontario"},
    {latlng:{lat: 43.6532, lng:-79.3832}, name: "Toronto, ON"},
    {latlng:{lat: 45.5017, lng:-73.5673}, name: "Montreal, QC"},
    {latlng:{lat: 46.8139, lng:-71.2080}, name: "Quebec, QC"},
    
    //Carribean
    {latlng:{lat: 12.1696, lng:-68.9900}, name: "Curaçao"},
    {latlng:{lat: 12.5211, lng:-69.9683}, name: "Aruba"},
    {latlng:{lat: 18.0179, lng:-76.8099}, name: "Kingston", wiki: "Kingston, Jamaica"},
    {latlng:{lat: 21.1619, lng:-86.8515}, name: "Cancún"},
    {latlng:{lat: 20.4230, lng:-86.8223}, name: "Cozumel"},
    {latlng:{lat: 25.0480, lng:-77.3554}, name: "Nassau", wiki: "Nassau, Bahamas"},
    {latlng:{lat: 19.3133, lng:-81.2546}, name: "Cayman Islands"},
    
    //Europe
    {latlng:{lat: 51.5074, lng:-0.1278 }, name: "London"},
    {latlng:{lat: 48.8566, lng: 2.3522}, name: "Paris"},
    
    //Asia
    {latlng:{lat: -6.1745, lng: 106.8227}, name: "Jakarta"},
    {latlng:{lat: -8.3405, lng: 115.0920}, name: "Bali"},
    {latlng:{lat: 1.3521, lng: 103.8198}, name: "Singapore"},
    {latlng:{lat: 3.1390, lng: 101.6869}, name: "Kuala Lumpur"},
    {latlng:{lat: 13.7563, lng: 100.5018}, name: "Bangkok"},
    {latlng:{lat: 22.3964, lng: 114.1095}, name: "Hong Kong"},
    {latlng:{lat: 39.9042, lng: 116.4074}, name: "Beijing"},
    
    //Africa/Middle East
    {latlng:{lat: 25.2854, lng: 51.5310}, name: "Doha"},
    
    //Oceana
    {latlng:{lat: -33.8688, lng: 151.2093}, name: "Sydney"},
    {latlng:{lat: -37.8136, lng: 144.9631}, name: "Melbourne"},
    {latlng:{lat: -27.4698, lng: 153.0251}, name: "Brisbane"},
    {latlng:{lat: -38.1368, lng: 176.2497}, name: "Rotorua"},
    {latlng:{lat: -38.2615, lng: 175.1145}, name: "Waitomo", wiki: "Waitomo Caves"},
    {latlng:{lat: -41.2865, lng: 174.7762}, name: "Wellington"},
    {latlng:{lat: -45.0312, lng: 168.6626}, name: "Queenstown", wiki: "Queenstown, New Zealand"}
];

var livedLocations =[
    {latlng:{lat: 54.1424, lng:-115.6850}, name: "Whitecourt, AB"},
    {latlng:{lat: 1.2596, lng: 101.2131}, name: "Duri, Indonesia", wiki:"Riau"},
    {latlng:{lat: 10.4806, lng:-66.9036}, name: "Caracas, Venezuela"},
    {latlng:{lat: 30.1658, lng:-95.4613}, name: "Houston, TX"},
    {latlng:{lat: 45.4223, lng:-76.0203}, name: "Ottawa, ON"},
    {latlng:{lat: -31.9505, lng:115.8605}, name: "Perth, WA"},
    {latlng:{lat: 43.4643, lng: -80.5204}, name: "Waterloo, ON", wiki:"Waterloo, Ontario"},
];
var livedMarker= [];
var parkMarker= [];
var visitedMarker= [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 20,
            lng: 0
        },
        zoom: 3
    });

    
    for(var i = 0; i < visitedLocations.length; i++){
        visitedMarker.push( new google.maps.Marker({
            position: visitedLocations[i].latlng,
            map: map,
            title: visitedLocations[i].name,
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }));
        
        (function () {
            var marker = visitedMarker[i];
            var wiki = visitedLocations[i].wiki;
            visitedMarker[i].addListener('click', function () {
                openWiki(map, marker, wiki);
            });
        }());
    }
    
    
    for(var i = 0; i < visitedParks.length; i++){
        parkMarker.push( new google.maps.Marker({
            position: visitedParks[i].latlng,
            map: map,
            title: visitedParks[i].name,
            icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        }));
        
        (function () {
            var marker = parkMarker[i];
            var wiki = visitedParks[i].wiki;
            parkMarker[i].addListener('click', function () {
                openWiki(map, marker, wiki);
            });
        }());
    }
    
    
    for(var i = 0; i < livedLocations.length; i++){
        livedMarker.push( new google.maps.Marker({
            position: livedLocations[i].latlng,
            map: map,
            title: livedLocations[i].name,
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }));
        
        (function () {
            var marker = livedMarker[i];
            var wiki = livedLocations[i].wiki;
            livedMarker[i].addListener('click', function () {
                openWiki(map, marker, wiki);
            });
        }());
    }

//      livedMarker[6].addListener('click', function () {
//            openWiki(map, livedMarker[6]);
//      });

}

function openWiki(map, marker, wiki) {
    
    var url;
    
    if(wiki){
        url= "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles="+encodeURI(wiki)+"&callback=?";
        $.getJSON(url ,function(data) {
                    $.each(data.query.pages, function(i, item) {
                        openInfoTab(map,marker, item.extract);

                    });
            });
    }else{
        if(marker.title.indexOf(",")>0){
            var wikiName= marker.title.slice(0, marker.title.indexOf(","))
            url= "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles="+encodeURI(wikiName)+"&callback=?";
            $.getJSON(url ,function(data) {
                    $.each(data.query.pages, function(i, item) {
                        openInfoTab(map,marker, item.extract);

                    });
            });
        }else{
            url= "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles="+encodeURI(marker.title)+"&callback=?";
            $.getJSON(url ,function(data) {
                    $.each(data.query.pages, function(i, item) {
                        openInfoTab(map,marker, item.extract);

                    });
            });
        }
        
    }
}

var lastInfoTab;

function openInfoTab(map, marker, extract) {
    var infoTab = new google.maps.InfoWindow({
        content: 
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">'+marker.title+'</h1>' +
        '<div id="bodyContent">' +
         extract+
        '</div>' +
        '</div>' 
    });
    
    if(lastInfoTab && lastInfoTab.infoTab){
        lastInfoTab.infoTab.close();
    }
    
    if(lastInfoTab && lastInfoTab.title === marker.title){
        lastInfoTab={infoTab: undefined, title: ""};
    }else{
        infoTab.open(map,marker);
        lastInfoTab= {infoTab: infoTab, title: marker.title};
    }
    
    
}

function closeOpenTabs(){
    
}




