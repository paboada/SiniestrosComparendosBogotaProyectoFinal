/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function dibujar_bars_dom(){
    
    var Localidad = getParameterByName('Localidad');
    console.log(Localidad);
    
    var archivo2015 = Localidad.concat("2015",".csv");
    var archivo2016 = Localidad.concat("2016",".csv");
    var archivo2017 = Localidad.concat("2017",".csv"); 
    clean_dom_barchart_siniestros()
    var seccion = "ano2015";
    var seccion_infowin = "infowin2015";
    var infoyr = "_yr2015";
    var grados = "degrree2015";
    dibujar_barchart_siniestros(seccion,seccion_infowin,infoyr,grados,archivo2015);    
    var seccion = "ano2016";
    var seccion_infowin = "infowin2016";
    var infoyr = "_yr2016";
    var grados = "degrree2016";
    dibujar_barchart_siniestros(seccion,seccion_infowin,infoyr,grados,archivo2016);
    var seccion = "ano2017";
    var seccion_infowin = "infowin2017";
    var infoyr = "_yr2017";
    var grados = "degrree2017";
    dibujar_barchart_siniestros(seccion,seccion_infowin,infoyr,grados,archivo2017);  
}

function dibujar_lines_dom(){
    
    var Localidad = getParameterByName('Localidad');
    console.log(Localidad);    
   var archivo2015 = Localidad.concat("2015");
   var archivo2016 = Localidad.concat("2016");
   var archivo2017 = Localidad.concat("2017");    
    clean_dom_barchart_siniestros()
    var seccion = "linechart2015";
    var archivo = archivo2015;
    dibujar_line_chart(seccion,archivo);    
    var seccion = "linechart2016";
    var archivo = archivo2016;
    dibujar_line_chart(seccion,archivo);  
    var seccion = "linechart2017";
    var archivo = archivo2017;
    dibujar_line_chart(seccion,archivo);  
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}