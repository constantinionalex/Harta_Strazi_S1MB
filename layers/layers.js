var wms_layers = [];


        var lyr_DarkVoyager_0 = new ol.layer.Tile({
            'title': 'Dark Voyager',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Sector_1_1 = new ol.format.GeoJSON();
var features_Sector_1_1 = format_Sector_1_1.readFeatures(json_Sector_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_1_1.addFeatures(features_Sector_1_1);
var lyr_Sector_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sector_1_1, 
                style: style_Sector_1_1,
                interactive: false,
                title: '<img src="styles/legend/Sector_1_1.png" /> Sector_1'
            });
var format_StraziadministratedeASB_2 = new ol.format.GeoJSON();
var features_StraziadministratedeASB_2 = format_StraziadministratedeASB_2.readFeatures(json_StraziadministratedeASB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StraziadministratedeASB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StraziadministratedeASB_2.addFeatures(features_StraziadministratedeASB_2);
var lyr_StraziadministratedeASB_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StraziadministratedeASB_2, 
                style: style_StraziadministratedeASB_2,
                interactive: false,
                title: '<img src="styles/legend/StraziadministratedeASB_2.png" /> Strazi administrate de ASB'
            });
var format_StraziadministratedeS1MB_3 = new ol.format.GeoJSON();
var features_StraziadministratedeS1MB_3 = format_StraziadministratedeS1MB_3.readFeatures(json_StraziadministratedeS1MB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StraziadministratedeS1MB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StraziadministratedeS1MB_3.addFeatures(features_StraziadministratedeS1MB_3);
var lyr_StraziadministratedeS1MB_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StraziadministratedeS1MB_3, 
                style: style_StraziadministratedeS1MB_3,
                interactive: true,
                title: '<img src="styles/legend/StraziadministratedeS1MB_3.png" /> Strazi administrate de S1MB'
            });
var format_Lucrarioperatoriutilitati_4 = new ol.format.GeoJSON();
var features_Lucrarioperatoriutilitati_4 = format_Lucrarioperatoriutilitati_4.readFeatures(json_Lucrarioperatoriutilitati_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lucrarioperatoriutilitati_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lucrarioperatoriutilitati_4.addFeatures(features_Lucrarioperatoriutilitati_4);
var lyr_Lucrarioperatoriutilitati_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lucrarioperatoriutilitati_4, 
                style: style_Lucrarioperatoriutilitati_4,
                interactive: false,
                title: '<img src="styles/legend/Lucrarioperatoriutilitati_4.png" /> Lucrari operatori utilitati'
            });
var format_Ordindeinceperecadastrareavizeacorduri_5 = new ol.format.GeoJSON();
var features_Ordindeinceperecadastrareavizeacorduri_5 = format_Ordindeinceperecadastrareavizeacorduri_5.readFeatures(json_Ordindeinceperecadastrareavizeacorduri_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ordindeinceperecadastrareavizeacorduri_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ordindeinceperecadastrareavizeacorduri_5.addFeatures(features_Ordindeinceperecadastrareavizeacorduri_5);
var lyr_Ordindeinceperecadastrareavizeacorduri_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ordindeinceperecadastrareavizeacorduri_5, 
                style: style_Ordindeinceperecadastrareavizeacorduri_5,
                interactive: false,
                title: '<img src="styles/legend/Ordindeinceperecadastrareavizeacorduri_5.png" /> Ordin de incepere cadastrare/avize/acorduri'
            });
var format_StrazivotatedeCLS1_6 = new ol.format.GeoJSON();
var features_StrazivotatedeCLS1_6 = format_StrazivotatedeCLS1_6.readFeatures(json_StrazivotatedeCLS1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrazivotatedeCLS1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrazivotatedeCLS1_6.addFeatures(features_StrazivotatedeCLS1_6);
var lyr_StrazivotatedeCLS1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrazivotatedeCLS1_6, 
                style: style_StrazivotatedeCLS1_6,
                interactive: false,
                title: '<img src="styles/legend/StrazivotatedeCLS1_6.png" /> Strazi votate de CLS1'
            });
var format_LucrarideReparatii_7 = new ol.format.GeoJSON();
var features_LucrarideReparatii_7 = format_LucrarideReparatii_7.readFeatures(json_LucrarideReparatii_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LucrarideReparatii_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LucrarideReparatii_7.addFeatures(features_LucrarideReparatii_7);
var lyr_LucrarideReparatii_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LucrarideReparatii_7, 
                style: style_LucrarideReparatii_7,
                interactive: false,
                title: '<img src="styles/legend/LucrarideReparatii_7.png" /> Lucrari de Reparatii'
            });
var format_StrazirespinsedeCLS1_8 = new ol.format.GeoJSON();
var features_StrazirespinsedeCLS1_8 = format_StrazirespinsedeCLS1_8.readFeatures(json_StrazirespinsedeCLS1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrazirespinsedeCLS1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrazirespinsedeCLS1_8.addFeatures(features_StrazirespinsedeCLS1_8);
var lyr_StrazirespinsedeCLS1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrazirespinsedeCLS1_8, 
                style: style_StrazirespinsedeCLS1_8,
                interactive: false,
                title: '<img src="styles/legend/StrazirespinsedeCLS1_8.png" /> Strazi respinse de CLS1'
            });
var format_Sectorul1poligon_9 = new ol.format.GeoJSON();
var features_Sectorul1poligon_9 = format_Sectorul1poligon_9.readFeatures(json_Sectorul1poligon_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectorul1poligon_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectorul1poligon_9.addFeatures(features_Sectorul1poligon_9);
var lyr_Sectorul1poligon_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectorul1poligon_9, 
                style: style_Sectorul1poligon_9,
                interactive: false,
                title: '<img src="styles/legend/Sectorul1poligon_9.png" /> Sectorul 1 poligon'
            });

lyr_DarkVoyager_0.setVisible(true);lyr_Sector_1_1.setVisible(true);lyr_StraziadministratedeASB_2.setVisible(true);lyr_StraziadministratedeS1MB_3.setVisible(true);lyr_Lucrarioperatoriutilitati_4.setVisible(true);lyr_Ordindeinceperecadastrareavizeacorduri_5.setVisible(true);lyr_StrazivotatedeCLS1_6.setVisible(true);lyr_LucrarideReparatii_7.setVisible(true);lyr_StrazirespinsedeCLS1_8.setVisible(true);lyr_Sectorul1poligon_9.setVisible(true);
var layersList = [lyr_DarkVoyager_0,lyr_Sector_1_1,lyr_StraziadministratedeASB_2,lyr_StraziadministratedeS1MB_3,lyr_Lucrarioperatoriutilitati_4,lyr_Ordindeinceperecadastrareavizeacorduri_5,lyr_StrazivotatedeCLS1_6,lyr_LucrarideReparatii_7,lyr_StrazirespinsedeCLS1_8,lyr_Sectorul1poligon_9];
lyr_Sector_1_1.set('fieldAliases', {'fid': 'fid', 'natcode': 'natcode', 'name': 'name', 'natLevName': 'natLevName', 'countyId': 'countyId', 'countyCode': 'countyCode', 'county': 'county', 'countyMn': 'countyMn', 'regionId': 'regionId', 'regionCode': 'regionCode', 'region': 'region', 'pop2011': 'pop2011', 'pop2012': 'pop2012', 'pop2013': 'pop2013', 'pop2014': 'pop2014', 'pop2015': 'pop2015', 'pop2020': 'pop2020', 'version': 'version', });
lyr_StraziadministratedeASB_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'Nume str.': 'Nume str.', 'LOT': 'LOT', });
lyr_StraziadministratedeS1MB_3.set('fieldAliases', {'full_id': 'full_id', 'Nume str.': 'Nume str.', 'Lot': 'Lot', 'Emitere OI': 'Emitere OI', 'Et parcurs': 'Et parcurs', 'Et in curs': 'Et in curs', 'Data fin.': 'Data fin.', 'Comentarii': 'Comentarii', 'Tipul luc.': 'Tipul luc.', 'Interventi': 'Interventi', 'L. utilist': 'L. utilist', });
lyr_Lucrarioperatoriutilitati_4.set('fieldAliases', {'full_id': 'full_id', 'name': 'name', 'Intervnet2': 'Intervnet2', });
lyr_Ordindeinceperecadastrareavizeacorduri_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'Name str.': 'Name str.', 'Votata de': 'Votata de', });
lyr_StrazivotatedeCLS1_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Votata de': 'Votata de', });
lyr_LucrarideReparatii_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Obiectiv d': 'Obiectiv d', });
lyr_StrazirespinsedeCLS1_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Votata de': 'Votata de', });
lyr_Sectorul1poligon_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Sector_1_1.set('fieldImages', {'fid': '', 'natcode': '', 'name': '', 'natLevName': '', 'countyId': '', 'countyCode': '', 'county': '', 'countyMn': '', 'regionId': '', 'regionCode': '', 'region': '', 'pop2011': '', 'pop2012': '', 'pop2013': '', 'pop2014': '', 'pop2015': '', 'pop2020': '', 'version': '', });
lyr_StraziadministratedeASB_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'Nume str.': 'TextEdit', 'LOT': 'TextEdit', });
lyr_StraziadministratedeS1MB_3.set('fieldImages', {'full_id': 'Hidden', 'Nume str.': 'TextEdit', 'Lot': 'Hidden', 'Emitere OI': 'TextEdit', 'Et parcurs': 'TextEdit', 'Et in curs': 'TextEdit', 'Data fin.': 'TextEdit', 'Comentarii': 'TextEdit', 'Tipul luc.': 'TextEdit', 'Interventi': 'Hidden', 'L. utilist': 'TextEdit', });
lyr_Lucrarioperatoriutilitati_4.set('fieldImages', {'full_id': '', 'name': '', 'Intervnet2': '', });
lyr_Ordindeinceperecadastrareavizeacorduri_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'Name str.': '', 'Votata de': 'TextEdit', });
lyr_StrazivotatedeCLS1_6.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Votata de': '', });
lyr_LucrarideReparatii_7.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Obiectiv d': '', });
lyr_StrazirespinsedeCLS1_8.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Votata de': '', });
lyr_Sectorul1poligon_9.set('fieldImages', {'fid': '', 'id': '', });
lyr_Sector_1_1.set('fieldLabels', {'fid': 'no label', 'natcode': 'no label', 'name': 'no label', 'natLevName': 'no label', 'countyId': 'no label', 'countyCode': 'no label', 'county': 'no label', 'countyMn': 'no label', 'regionId': 'no label', 'regionCode': 'no label', 'region': 'no label', 'pop2011': 'no label', 'pop2012': 'no label', 'pop2013': 'no label', 'pop2014': 'no label', 'pop2015': 'no label', 'pop2020': 'no label', 'version': 'no label', });
lyr_StraziadministratedeASB_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'Nume str.': 'no label', 'LOT': 'no label', });
lyr_StraziadministratedeS1MB_3.set('fieldLabels', {'Nume str.': 'header label', 'Emitere OI': 'header label', 'Et parcurs': 'header label', 'Et in curs': 'header label', 'Data fin.': 'header label', 'Comentarii': 'header label', 'Tipul luc.': 'header label', 'L. utilist': 'header label', });
lyr_Lucrarioperatoriutilitati_4.set('fieldLabels', {'full_id': 'no label', 'name': 'no label', 'Intervnet2': 'no label', });
lyr_Ordindeinceperecadastrareavizeacorduri_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'Name str.': 'no label', 'Votata de': 'no label', });
lyr_StrazivotatedeCLS1_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Votata de': 'no label', });
lyr_LucrarideReparatii_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Obiectiv d': 'no label', });
lyr_StrazirespinsedeCLS1_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Votata de': 'no label', });
lyr_Sectorul1poligon_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Sectorul1poligon_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});