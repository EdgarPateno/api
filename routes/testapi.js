var express = require ("express");

var router = express.Router();

let city = [
  {"name":"ADAMS","prov_code":"0128","mun_code":"012801"},
  {"name":"BACARRA","prov_code":"0128","mun_code":"012802"},
  {"name":"BADOC","prov_code":"0128","mun_code":"012803"},
  {"name":"BANGUI","prov_code":"0128","mun_code":"012804"},
  {"name":"CITY OF BATAC","prov_code":"0128","mun_code":"012805"},
  {"name":"BURGOS","prov_code":"0128","mun_code":"012806"},
  {"name":"CARASI","prov_code":"0128","mun_code":"012807"},
  {"name":"CURRIMAO","prov_code":"0128","mun_code":"012808"},
  {"name":"DINGRAS","prov_code":"0128","mun_code":"012809"},
  {"name":"DUMALNEG","prov_code":"0128","mun_code":"012810"},
  {"name":"BANNA (ESPIRITU)","prov_code":"0128","mun_code":"012811"},
  {"name":"LAOAG CITY (Capital)","prov_code":"0128","mun_code":"012812"},
  {"name":"MARCOS","prov_code":"0128","mun_code":"012813"},
  {"name":"NUEVA ERA","prov_code":"0128","mun_code":"012814"},
  {"name":"PAGUDPUD","prov_code":"0128","mun_code":"012815"},
  {"name":"PAOAY","prov_code":"0128","mun_code":"012816"},
  {"name":"PASUQUIN","prov_code":"0128","mun_code":"012817"},
  {"name":"PIDDIG","prov_code":"0128","mun_code":"012818"},
  {"name":"PINILI","prov_code":"0128","mun_code":"012819"},
  {"name":"SAN NICOLAS","prov_code":"0128","mun_code":"012820"},
  {"name":"SARRAT","prov_code":"0128","mun_code":"012821"},
  {"name":"SOLSONA","prov_code":"0128","mun_code":"012822"},
  {"name":"VINTAR","prov_code":"0128","mun_code":"012823"},
  {"name":"ALILEM","prov_code":"0129","mun_code":"012901"},
  {"name":"BANAYOYO","prov_code":"0129","mun_code":"012902"},
  {"name":"BANTAY","prov_code":"0129","mun_code":"012903"},
  {"name":"BURGOS","prov_code":"0129","mun_code":"012904"},
  {"name":"CABUGAO","prov_code":"0129","mun_code":"012905"},
  {"name":"CITY OF CANDON","prov_code":"0129","mun_code":"012906"},
  {"name":"CAOAYAN","prov_code":"0129","mun_code":"012907"},
  {"name":"CERVANTES","prov_code":"0129","mun_code":"012908"},
  {"name":"GALIMUYOD","prov_code":"0129","mun_code":"012909"},
  {"name":"GREGORIO DEL PILAR (CONCEPCION)","prov_code":"0129","mun_code":"012910"},
  {"name":"LIDLIDDA","prov_code":"0129","mun_code":"012911"},
  {"name":"MAGSINGAL","prov_code":"0129","mun_code":"012912"},
  {"name":"NAGBUKEL","prov_code":"0129","mun_code":"012913"},
  {"name":"NARVACAN","prov_code":"0129","mun_code":"012914"},
  {"name":"QUIRINO (ANGKAKI)","prov_code":"0129","mun_code":"012915"},
  {"name":"SALCEDO (BAUGEN)","prov_code":"0129","mun_code":"012916"},
  {"name":"SAN EMILIO","prov_code":"0129","mun_code":"012917"},
  {"name":"SAN ESTEBAN","prov_code":"0129","mun_code":"012918"},
  {"name":"SAN ILDEFONSO","prov_code":"0129","mun_code":"012919"},
  {"name":"SAN JUAN (LAPOG)","prov_code":"0129","mun_code":"012920"},
  {"name":"SAN VICENTE","prov_code":"0129","mun_code":"012921"},
  {"name":"SANTA","prov_code":"0129","mun_code":"012922"},
  {"name":"SANTA CATALINA","prov_code":"0129","mun_code":"012923"},
  {"name":"SANTA CRUZ","prov_code":"0129","mun_code":"012924"},
  {"name":"SANTA LUCIA","prov_code":"0129","mun_code":"012925"},
  {"name":"SANTA MARIA","prov_code":"0129","mun_code":"012926"},
  {"name":"SANTIAGO","prov_code":"0129","mun_code":"012927"},
  {"name":"SANTO DOMINGO","prov_code":"0129","mun_code":"012928"},
  {"name":"SIGAY","prov_code":"0129","mun_code":"012929"},
  {"name":"SINAIT","prov_code":"0129","mun_code":"012930"},
  {"name":"SUGPON","prov_code":"0129","mun_code":"012931"},
  {"name":"SUYO","prov_code":"0129","mun_code":"012932"},
  {"name":"TAGUDIN","prov_code":"0129","mun_code":"012933"},
  {"name":"CITY OF VIGAN (Capital)","prov_code":"0129","mun_code":"012934"},
  {"name":"AGOO","prov_code":"0133","mun_code":"013301"},
  {"name":"ARINGAY","prov_code":"0133","mun_code":"013302"},
  {"name":"BACNOTAN","prov_code":"0133","mun_code":"013303"},
  {"name":"BAGULIN","prov_code":"0133","mun_code":"013304"},
  {"name":"BALAOAN","prov_code":"0133","mun_code":"013305"},
  {"name":"BANGAR","prov_code":"0133","mun_code":"013306"},
  {"name":"BAUANG","prov_code":"0133","mun_code":"013307"},
  {"name":"BURGOS","prov_code":"0133","mun_code":"013308"},
  {"name":"CABA","prov_code":"0133","mun_code":"013309"},
  {"name":"LUNA","prov_code":"0133","mun_code":"013310"},
  {"name":"NAGUILIAN","prov_code":"0133","mun_code":"013311"},
  {"name":"PUGO","prov_code":"0133","mun_code":"013312"},
  {"name":"ROSARIO","prov_code":"0133","mun_code":"013313"},
  {"name":"CITY OF SAN FERNANDO (Capital)","prov_code":"0133","mun_code":"013314"},
  {"name":"SAN GABRIEL","prov_code":"0133","mun_code":"013315"},
  {"name":"SAN JUAN","prov_code":"0133","mun_code":"013316"},
  {"name":"SANTO TOMAS","prov_code":"0133","mun_code":"013317"},
  {"name":"SANTOL","prov_code":"0133","mun_code":"013318"},
  {"name":"SUDIPEN","prov_code":"0133","mun_code":"013319"},
  {"name":"TUBAO","prov_code":"0133","mun_code":"013320"},
  {"name":"AGNO","prov_code":"0155","mun_code":"015501"},
  {"name":"AGUILAR","prov_code":"0155","mun_code":"015502"},
  {"name":"CITY OF ALAMINOS","prov_code":"0155","mun_code":"015503"},
  {"name":"ALCALA","prov_code":"0155","mun_code":"015504"},
  {"name":"ANDA","prov_code":"0155","mun_code":"015505"},
  {"name":"ASINGAN","prov_code":"0155","mun_code":"015506"},
  {"name":"BALUNGAO","prov_code":"0155","mun_code":"015507"},
  {"name":"BANI","prov_code":"0155","mun_code":"015508"},
  {"name":"BASISTA","prov_code":"0155","mun_code":"015509"},
  {"name":"BAUTISTA","prov_code":"0155","mun_code":"015510"},
  {"name":"BAYAMBANG","prov_code":"0155","mun_code":"015511"},
  {"name":"BINALONAN","prov_code":"0155","mun_code":"015512"},
  {"name":"BINMALEY","prov_code":"0155","mun_code":"015513"},
  {"name":"BOLINAO","prov_code":"0155","mun_code":"015514"},
  {"name":"BUGALLON","prov_code":"0155","mun_code":"015515"},
  {"name":"BURGOS","prov_code":"0155","mun_code":"015516"},
  {"name":"CALASIAO","prov_code":"0155","mun_code":"015517"},
  {"name":"DAGUPAN CITY","prov_code":"0155","mun_code":"015518"},
  {"name":"DASOL","prov_code":"0155","mun_code":"015519"},
  {"name":"INFANTA","prov_code":"0155","mun_code":"015520"},
  {"name":"LABRADOR","prov_code":"0155","mun_code":"015521"},
  {"name":"LINGAYEN (Capital)","prov_code":"0155","mun_code":"015522"}
];

router.get("/", (req, res, next) => {
    res.send("API is working properly");
  });
  
  module.exports = router;