const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    /*-----index-----*/
    ipart:String,
    iparc:String,
    
    /*----- Noticias---- */
    noticias:String,

    /*------ Comentarios -----*/
    comhead: String,
    combody: String,
    comhead1: String,
    combody1: String,

    /*---- Jugadores ----- */
    jnombre: String,
    jimg: String,
    japellido: String,
    jcedula: String,
    jgenero: String,
    jgoles: String,
    jtarjetasam: String,
    jtarjestasroj: String,
    jamonestaciones: String,
    jequipo: String,
    jdivision: String,

    /*------ Equipos ----- */
    enombre: String,
    eescudo: String,
    egenero: String,
    edivision: String,
    edelegado: String,
    edelcedula: String,
    epuntos: String,
    epartidosj: String,
    epartidosg: String,
    epartidosempatados: String,
    epartidosperdidos: String,
    egolesmas: String,
    egolesmenos: String,
    esaldo: String,
    efairplay: String,

    /*------- Torneos ------*/
    tfecha: String,
    tnombre: String,
    thora: String,
    tea: String,
    teb: String,
    tinfo: String,
    testado: String,

    /*------- Partidos ------*/
    pfecha: String,
    pequipoa: String,
    pequipob: String,
    peamarcador: Number,
    pebmarcador: Number,
    peagoles: String,
    pebgoles: String,
    pamarillasa: String,
    pamarillasb: String,
    projasa: String,
    projasb: String,
    pfpa: String,
    pfpb: String,
    parbitro: String,
    pobservaciones: String,

    /*---- Seguridad------*/
    paneladmin: String,
    delegado:String,

    /*----- Mensaje ----*/
    msgemail: String,
    msgbody: String,

    /*---- Kaygua ----*/
    msgname: String,
    msgmail: String,
    msgtel: String,
    msgtext: String


});

module.exports= mongoose.model('Data', Data);