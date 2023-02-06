ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [65.40666, 94.09768],
        zoom: 3
    });

    let data = ["ул. Гагарина, 59, Рязань", "Институтский пер., 9, Долгопрудный", "2-я Бауманская ул., 5, стр. 1, Москва"]

    for (i=0; i < 4; i++) {
        ymaps.geocode(data[i], {
        
        }).then(function (res) {
                
                var firstGeoObject = res.geoObjects.get(0),
                    
                    coords = firstGeoObject.geometry.getCoordinates(),
                  
                    bounds = firstGeoObject.properties.get('boundedBy');
    
                firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
    
                
                myMap.geoObjects.add(firstGeoObject);
              
            });
    }
    
}