var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Qro_Pob_dens_1 = new ol.format.GeoJSON();
var features_Qro_Pob_dens_1 = format_Qro_Pob_dens_1.readFeatures(json_Qro_Pob_dens_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qro_Pob_dens_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qro_Pob_dens_1.addFeatures(features_Qro_Pob_dens_1);
var lyr_Qro_Pob_dens_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qro_Pob_dens_1, 
                style: style_Qro_Pob_dens_1,
                interactive: true,
    title: 'Qro_Pob_dens<br />\
    <img src="styles/legend/Qro_Pob_dens_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Qro_Pob_dens_1_1.png" /> 0 - 373<br />\
    <img src="styles/legend/Qro_Pob_dens_1_2.png" /> 373 - 999<br />'
        });
var format_Marginacin_ageb_2 = new ol.format.GeoJSON();
var features_Marginacin_ageb_2 = format_Marginacin_ageb_2.readFeatures(json_Marginacin_ageb_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marginacin_ageb_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marginacin_ageb_2.addFeatures(features_Marginacin_ageb_2);
var lyr_Marginacin_ageb_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marginacin_ageb_2, 
                style: style_Marginacin_ageb_2,
                interactive: true,
    title: 'Marginación_ageb<br />\
    <img src="styles/legend/Marginacin_ageb_2_0.png" /> 1 - 1<br />\
    <img src="styles/legend/Marginacin_ageb_2_1.png" /> 1 - 2.5<br />\
    <img src="styles/legend/Marginacin_ageb_2_2.png" /> 2.5 - 3<br />'
        });
var format_Trafico_PM_3 = new ol.format.GeoJSON();
var features_Trafico_PM_3 = format_Trafico_PM_3.readFeatures(json_Trafico_PM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trafico_PM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trafico_PM_3.addFeatures(features_Trafico_PM_3);
var lyr_Trafico_PM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trafico_PM_3, 
                style: style_Trafico_PM_3,
                interactive: true,
    title: 'Trafico_PM<br />\
    <img src="styles/legend/Trafico_PM_3_0.png" /> 1 - 1.2<br />\
    <img src="styles/legend/Trafico_PM_3_1.png" /> 1.2 - 2<br />'
        });
var format_Trafico_AM_4 = new ol.format.GeoJSON();
var features_Trafico_AM_4 = format_Trafico_AM_4.readFeatures(json_Trafico_AM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trafico_AM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trafico_AM_4.addFeatures(features_Trafico_AM_4);
var lyr_Trafico_AM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trafico_AM_4, 
                style: style_Trafico_AM_4,
                interactive: true,
                title: '<img src="styles/legend/Trafico_AM_4.png" /> Trafico_AM'
            });
var format_Zona_Comercial_5 = new ol.format.GeoJSON();
var features_Zona_Comercial_5 = format_Zona_Comercial_5.readFeatures(json_Zona_Comercial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Comercial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Comercial_5.addFeatures(features_Zona_Comercial_5);
var lyr_Zona_Comercial_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zona_Comercial_5, 
                style: style_Zona_Comercial_5,
                interactive: true,
                title: '<img src="styles/legend/Zona_Comercial_5.png" /> Zona_Comercial'
            });
var format_Qro_BRT_3_6 = new ol.format.GeoJSON();
var features_Qro_BRT_3_6 = format_Qro_BRT_3_6.readFeatures(json_Qro_BRT_3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qro_BRT_3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qro_BRT_3_6.addFeatures(features_Qro_BRT_3_6);
var lyr_Qro_BRT_3_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qro_BRT_3_6, 
                style: style_Qro_BRT_3_6,
                interactive: true,
                title: '<img src="styles/legend/Qro_BRT_3_6.png" /> Qro_BRT_3'
            });
var format_Qro_BRT_2_7 = new ol.format.GeoJSON();
var features_Qro_BRT_2_7 = format_Qro_BRT_2_7.readFeatures(json_Qro_BRT_2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qro_BRT_2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qro_BRT_2_7.addFeatures(features_Qro_BRT_2_7);
var lyr_Qro_BRT_2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qro_BRT_2_7, 
                style: style_Qro_BRT_2_7,
                interactive: true,
                title: '<img src="styles/legend/Qro_BRT_2_7.png" /> Qro_BRT_2'
            });
var format_Qro_BRT_1_8 = new ol.format.GeoJSON();
var features_Qro_BRT_1_8 = format_Qro_BRT_1_8.readFeatures(json_Qro_BRT_1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qro_BRT_1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qro_BRT_1_8.addFeatures(features_Qro_BRT_1_8);
var lyr_Qro_BRT_1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qro_BRT_1_8, 
                style: style_Qro_BRT_1_8,
                interactive: true,
                title: '<img src="styles/legend/Qro_BRT_1_8.png" /> Qro_BRT_1'
            });
var format_qro_walmartWalmartQro_9 = new ol.format.GeoJSON();
var features_qro_walmartWalmartQro_9 = format_qro_walmartWalmartQro_9.readFeatures(json_qro_walmartWalmartQro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qro_walmartWalmartQro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qro_walmartWalmartQro_9.addFeatures(features_qro_walmartWalmartQro_9);
var lyr_qro_walmartWalmartQro_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_qro_walmartWalmartQro_9, 
                style: style_qro_walmartWalmartQro_9,
                interactive: true,
                title: '<img src="styles/legend/qro_walmartWalmartQro_9.png" /> qro_walmart Walmart Qro'
            });
var format_Qro_unis_10 = new ol.format.GeoJSON();
var features_Qro_unis_10 = format_Qro_unis_10.readFeatures(json_Qro_unis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qro_unis_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qro_unis_10.addFeatures(features_Qro_unis_10);
var lyr_Qro_unis_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qro_unis_10, 
                style: style_Qro_unis_10,
                interactive: true,
                title: '<img src="styles/legend/Qro_unis_10.png" /> Qro_unis'
            });
var format_Centro_comercial_11 = new ol.format.GeoJSON();
var features_Centro_comercial_11 = format_Centro_comercial_11.readFeatures(json_Centro_comercial_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centro_comercial_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centro_comercial_11.addFeatures(features_Centro_comercial_11);
var lyr_Centro_comercial_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centro_comercial_11, 
                style: style_Centro_comercial_11,
                interactive: true,
                title: '<img src="styles/legend/Centro_comercial_11.png" /> Centro_comercial'
            });
var format_Sol_15m_auto_12 = new ol.format.GeoJSON();
var features_Sol_15m_auto_12 = format_Sol_15m_auto_12.readFeatures(json_Sol_15m_auto_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sol_15m_auto_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sol_15m_auto_12.addFeatures(features_Sol_15m_auto_12);
var lyr_Sol_15m_auto_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sol_15m_auto_12, 
                style: style_Sol_15m_auto_12,
                interactive: true,
                title: '<img src="styles/legend/Sol_15m_auto_12.png" /> Sol_15m_auto'
            });
var format_Area_sol_Inmediata_13 = new ol.format.GeoJSON();
var features_Area_sol_Inmediata_13 = format_Area_sol_Inmediata_13.readFeatures(json_Area_sol_Inmediata_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_sol_Inmediata_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_sol_Inmediata_13.addFeatures(features_Area_sol_Inmediata_13);
var lyr_Area_sol_Inmediata_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_sol_Inmediata_13, 
                style: style_Area_sol_Inmediata_13,
                interactive: true,
                title: '<img src="styles/legend/Area_sol_Inmediata_13.png" /> Area_sol_Inmediata'
            });
var format_Qro_transporte2_14 = new ol.format.GeoJSON();
var features_Qro_transporte2_14 = format_Qro_transporte2_14.readFeatures(json_Qro_transporte2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qro_transporte2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qro_transporte2_14.addFeatures(features_Qro_transporte2_14);
var lyr_Qro_transporte2_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qro_transporte2_14, 
                style: style_Qro_transporte2_14,
                interactive: true,
                title: '<img src="styles/legend/Qro_transporte2_14.png" /> Qro_transporte2'
            });
var group_Qro_v5 = new ol.layer.Group({
                                layers: [lyr_Qro_Pob_dens_1,lyr_Marginacin_ageb_2,lyr_Trafico_PM_3,lyr_Trafico_AM_4,lyr_Zona_Comercial_5,lyr_Qro_BRT_3_6,lyr_Qro_BRT_2_7,lyr_Qro_BRT_1_8,lyr_qro_walmartWalmartQro_9,lyr_Qro_unis_10,lyr_Centro_comercial_11,lyr_Sol_15m_auto_12,lyr_Area_sol_Inmediata_13,lyr_Qro_transporte2_14,],
                                title: "Qro_v5"});
var group_zBasemap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "zBasemap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Qro_Pob_dens_1.setVisible(true);lyr_Marginacin_ageb_2.setVisible(true);lyr_Trafico_PM_3.setVisible(true);lyr_Trafico_AM_4.setVisible(true);lyr_Zona_Comercial_5.setVisible(true);lyr_Qro_BRT_3_6.setVisible(true);lyr_Qro_BRT_2_7.setVisible(true);lyr_Qro_BRT_1_8.setVisible(true);lyr_qro_walmartWalmartQro_9.setVisible(true);lyr_Qro_unis_10.setVisible(true);lyr_Centro_comercial_11.setVisible(true);lyr_Sol_15m_auto_12.setVisible(true);lyr_Area_sol_Inmediata_13.setVisible(true);lyr_Qro_transporte2_14.setVisible(true);
var layersList = [group_zBasemap,group_Qro_v5];
lyr_Qro_Pob_dens_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_AGEB': 'CVE_AGEB', 'CVE_ENT': 'CVE_ENT', 'CVE_LOC': 'CVE_LOC', 'CVE_MUN': 'CVE_MUN', 'Pob_Act_gr': 'Pob_Act_gr', 'Qro_Pob_fid': 'Qro_Pob_fid', 'Qro_Pob_Field2': 'Qro_Pob_Field2', });
lyr_Marginacin_ageb_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Intensidad': 'Intensidad', 'Name_2': 'Name_2', 'description_2': 'description_2', 'timestamp_2': 'timestamp_2', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', 'snippet': 'snippet', });
lyr_Trafico_PM_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Intensidad': 'Intensidad', });
lyr_Trafico_AM_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Zona_Comercial_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Qro_BRT_3_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Qro_BRT_2_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Qro_BRT_1_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_qro_walmartWalmartQro_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Qro_unis_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Centro_comercial_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sol_15m_auto_12.set('fieldAliases', {'id': 'id', });
lyr_Area_sol_Inmediata_13.set('fieldAliases', {'id': 'id', });
lyr_Qro_transporte2_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Qro_Pob_dens_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_AGEB': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_LOC': 'TextEdit', 'CVE_MUN': 'TextEdit', 'Pob_Act_gr': 'TextEdit', 'Qro_Pob_fid': 'Range', 'Qro_Pob_Field2': 'TextEdit', });
lyr_Marginacin_ageb_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Intensidad': 'Range', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'timestamp_2': 'TextEdit', 'begin_2': 'TextEdit', 'end_2': 'TextEdit', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'TextEdit', 'icon_2': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Trafico_PM_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Intensidad': 'Range', });
lyr_Trafico_AM_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Zona_Comercial_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Qro_BRT_3_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Qro_BRT_2_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Qro_BRT_1_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_qro_walmartWalmartQro_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Qro_unis_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Centro_comercial_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Sol_15m_auto_12.set('fieldImages', {'id': 'Range', });
lyr_Area_sol_Inmediata_13.set('fieldImages', {'id': 'Range', });
lyr_Qro_transporte2_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Qro_Pob_dens_1.set('fieldLabels', {});
lyr_Marginacin_ageb_2.set('fieldLabels', {});
lyr_Trafico_PM_3.set('fieldLabels', {});
lyr_Trafico_AM_4.set('fieldLabels', {});
lyr_Zona_Comercial_5.set('fieldLabels', {});
lyr_Qro_BRT_3_6.set('fieldLabels', {});
lyr_Qro_BRT_2_7.set('fieldLabels', {});
lyr_Qro_BRT_1_8.set('fieldLabels', {});
lyr_qro_walmartWalmartQro_9.set('fieldLabels', {});
lyr_Qro_unis_10.set('fieldLabels', {});
lyr_Centro_comercial_11.set('fieldLabels', {});
lyr_Sol_15m_auto_12.set('fieldLabels', {});
lyr_Area_sol_Inmediata_13.set('fieldLabels', {});
lyr_Qro_transporte2_14.set('fieldLabels', {});
lyr_Qro_transporte2_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});