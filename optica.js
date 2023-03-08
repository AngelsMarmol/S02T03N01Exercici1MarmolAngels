/*
 * Script per crear la BBDD 
 * 
 */

print("INICIANT SCRIPT");
//Connexió
conn = new Mongo("localhost");
//Nom de la BBDD 
db = conn.getDB("optica");

/*creació de col.leccions*/
db.createCollection("proveidor");
db.createCollection("ullera");
db.createCollection("client");
db.createCollection("empleat");


/* Proveïdor */
print("***********creant proveïdors*********");

proveidor1 = {
  
"_id" : "0",
"nif" : "B71265498",
"nom" : "Ulleres Ponts",
"carrer" : "C/ Ramon y Cajal",
"num_carrer": 22,
"pis": 0,
"porta": 0,
"ciutat": "Barcelona",
"codi_postal": 08647,
"pais": "Espanya",
"telefon": 875698742,
"fax": 931854723

}

proveidor2 = {
  
"_id" : "1",
"nif" : "A85412685",
"nom" : "Lents Tramuntana",
"carrer" : "C/ del Vent",
"num_carrer": 105,
"pis": 1,
"porta": 2,
"ciutat": "Girona",
"codi_postal": 09874,
"pais": "Espanya",
"telefon": 854718233,
"fax": 976248571

}



/* Ullera */
print("***********creant ulleres*********");

ullera1 = {
  
"_id" : "0",
"marca" : "D&G",
"graduacio_esqra" : 0.5,
"graduacio_drta" : 0.2,
"tipus_montura": "plàstic",
"color_vidre_esqra": "transparent",
"color_vidre_drta": "transparent",
"preu": 150,
"proveidor" : [proveidor2]

}

ullera2 = {
  
"_id" : "1",
"marca" : "Armani",
"graduacio_esqra" : 1.5,
"graduacio_drta" : 1.2,
"tipus_montura": "metall",
"color_vidre_esqra": "transparent",
"color_vidre_drta": "transparent",
"preu": 300,
"proveidor" : [proveidor1]

}

ullera3 = {
  
"_id" : "2",
"marca" : "Mango",
"graduacio_esqra" : 1.0,
"graduacio_drta" : 0.5,
"tipus_montura": "metall",
"color_vidre_esqra": "transparent",
"color_vidre_drta": "transparent",
"preu": 90,
"proveidor" : [proveidor1, proveidor2]

}


/* Client */
print("***********creant clients*********");

client1 = {
  
"_id" : "0",
"nif" : "12345678Y",
"nom" : "Jordi Martin",
"adreca_postal" : "C/ Ample,35",
"telefon": 612478598,
"correu_electronic": "martin@jordi.com",
"data_registre" : "01/01/1999",
"recomanat": "",
"ulleres_comprades": [ullera2]

}

client2 = {
  
"_id" : "1",
"nif" : "87469825Z",
"nom" : "Maria Pou",
"adreca_postal" : "C/ Sevilla,109",
"telefon": 612478598,
"correu_electronic": "pou@maria.com",
"data_registre" : "01/01/2000",
"recomanat": client1,
"ulleres_comprades": [ullera3]

}

client3 = {
  
"_id" : "2",
"nif" : "74621598Q",
"nom" : "Anna Garriga",
"adreca_postal" : "C/ Sant Quirze, 1",
"telefon": 685321799,
"correu_electronic": "garriga@anna.com",
"data_registre" : "01/01/2001",
"recomanat": client2,
"ulleres_comprades": [ullera1]

}


/* Empleat */
print("***********creant empleats*********");

empleat1 = {
  
"_id" : "0",
"nom" : "Carol Garcia",
"ulleres_venudes" : [ullera2, ullera3]

}

empleat2 = {
  
"_id" : "1",
"nom" : "Josep Castro",
"ulleres_venudes" : [ullera1]

}

print("***********guardant proveïdors*********");
db.proveidor.save(proveidor1);
db.proveidor.save(proveidor2);

print("***********guardant ulleres*********");
db.ullera.save(ullera1);
db.ullera.save(ullera2);
db.ullera.save(ullera3);

print("***********guardant clients*********");
db.client.save(client1);
db.client.save(client2);
db.client.save(client3);

print("***********guardant empleats*********");
db.empleat.save(empleat1);
db.empleat.save(empleat2);

print("SCRIPT FINALITZAT");
