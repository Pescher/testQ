var wms_layers = [];

var format_admindepartement_0 = new ol.format.GeoJSON();
var features_admindepartement_0 = format_admindepartement_0.readFeatures(json_admindepartement_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admindepartement_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admindepartement_0.addFeatures(features_admindepartement_0);
var lyr_admindepartement_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_admindepartement_0, 
                style: style_admindepartement_0,
                interactive: true,
                title: '<img src="styles/legend/admindepartement_0.png" /> admin-departement'
            });
var format_mel_communes_1 = new ol.format.GeoJSON();
var features_mel_communes_1 = format_mel_communes_1.readFeatures(json_mel_communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mel_communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mel_communes_1.addFeatures(features_mel_communes_1);
var lyr_mel_communes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mel_communes_1, 
                style: style_mel_communes_1,
                interactive: true,
                title: '<img src="styles/legend/mel_communes_1.png" /> mel_communes'
            });

lyr_admindepartement_0.setVisible(true);lyr_mel_communes_1.setVisible(true);
var layersList = [lyr_admindepartement_0,lyr_mel_communes_1];
lyr_admindepartement_0.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', });
lyr_mel_communes_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'ut': 'ut', 'territoire': 'territoire', 'surface': 'surface', 'perimetre': 'perimetre', 'code_posta': 'code_posta', });
lyr_admindepartement_0.set('fieldImages', {'code_insee': '', 'nom': '', 'nuts3': '', 'wikipedia': '', });
lyr_mel_communes_1.set('fieldImages', {'insee': '', 'nom': '', 'ut': '', 'territoire': '', 'surface': '', 'perimetre': '', 'code_posta': '', });
lyr_admindepartement_0.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts3': 'no label', 'wikipedia': 'no label', });
lyr_mel_communes_1.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'ut': 'no label', 'territoire': 'no label', 'surface': 'no label', 'perimetre': 'no label', 'code_posta': 'no label', });
lyr_mel_communes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});