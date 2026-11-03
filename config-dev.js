// tpStoneOverlay - pokazywanie obrazkow na teleportach do wybranych map 

!function() {
  const config = {
//Tytani
//orla
"189":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/dziewicza_orlica.gif",
//kic
"1746":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/zabojczy_krolik.gif",
//rene
"6949":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/renegat_baulus.gif",
//arcy
"7060":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/archdemon.gif",
//zoons
"7477":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/versus-zoons.gif",
//Ĺowka
"6477":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/lowcz-wspo-driady.gif",
//goblin
"6478":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/titangoblin.gif",
//przyzy
"6476":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/przyz_demon_sekta.gif",
//magua
"2024":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/maddok-tytan.gif",
"7848":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/maddok_magua-1b.gif",
//teza
"5709":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/tezcatlipoca.gif",
"5708":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/tezcatlipoca.gif",
//barba
"3312":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/hebrehoth_smokoludzie.gif",
//th
"2355": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/ice_king.gif",


//kolosy
//lambo
"3361":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/mamlambo_final2.gif",
//regulus
"3883":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif",
"3884":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif",
//regulus2
"202":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif",
//umibozu
"7353":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif",
//umibozu2
"1739":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif",
//amion
"4046":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/soploreki.gif",
//amion2
"1387":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/soploreki.gif",
//hydra
"4066":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif",
//hydra2
"3535":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif",
//waszka
"4161":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif",
//waszka2
"349":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif",
//lulukav
"4196":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolkrucz.gif",
//lulukav2
"6052":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolkrucz.gif",
//arachin
"4206":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif",
//arachin2
"1131":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif",
//rauzen
"4266":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif",
//rauzen2
"3596":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif",
//drako
"4268":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif",
//drako2
"3037":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif",

//E2 300-200
// Artenius
"2353":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu03.gif",
// Zorin
"2354":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu01.gif",
// Furion
"2356":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu02.gif",
// Nymphemonia
"6064":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/nymphemonia.gif",
"6065":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/nymphemonia.gif",
// Mazurnik
"8532":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mazurnik_przybrzezny-1a.gif",
// Terrozaur
"3327":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus2.gif",
"3334":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus.gif",
// Vaenra
"3340":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smoczyca.gif",
// Chaegd
"3341":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smokoszef.gif",
// Set
"3039":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/neferkar_set-1a.gif",
"3038":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/szkiel_set.gif",
// Chopesz
"3035":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/chopesh2.gif",
// Fovos
"8554":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/fovos-1.gif",
// Wyslannik Tellarow
"8541":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wyslannik_tellarow-1a.gif",
// Sybilia
"4057":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri2_witch_e2.gif",
"4056":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri2_witch_e2.gif",
// Wabicielka
"8187":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/trist2_wabicielka-1a.gif",
// Quetzalcoatl
"5685":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/quetzalcoatl-1a.gif",
// Yaotl
"5695":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mahoplowca.gif",
// Cuaitl Citlalin
"5672":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/maho-cuaitl.gif",
"1901":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/maho-cuaitl.gif",
// Tolypeutes
"5662":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/bolita.gif",
"5657":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/bolita.gif",
// Silvanasus
"3628":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/silvanasus.gif",
// Dendroculus
"3597":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dendroculus.gif",
// Luna (Nocna Pustelnia p.2)
"8556":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/elgary_luna-1b.gif",
"8555":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/elgary_luna-1b.gif",
// Noumenia (ta sama mapa co Luna)
//"8556":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/elgary_noumenia-1a.gif",
// Fangaj
"8181":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/grzyb-humanoid-1b.gif",
// Mocny Maddoks
"7843":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mocny_maddoks-1b.gif",
// Arytodam olbrzymi
"7827":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/arytodam_olbrzymi-1b.gif",
// Marloth
"7864":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/drider-marlloth.gif",
"2766":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/marlloth.gif",
// Al'diphrin
"7859":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/drow-aldiphrin-wladca.gif",
// Arachniregina (Arachnitopia p.6)
"1159":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/regina-e2.gif",
"1142":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/regina-e2.gif",
// Rycerz z za malym mieczem (ta sama mapa co Arachniregina)
//"1159":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/pajeczy16.gif",
// Furb
"1912":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/forbol03.gif",
// Zufulus
"5943":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-zufulus.gif",
// Sataniel
"7695":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sataniel.gif",
"5942":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sataniel.gif",
// Bergermona
"5945":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-bergermona.gif",
// Annaniel (Tajemnicza Siedziba)
"5941":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-annaniel.gif",
// Gothardus (ta sama mapa co Annaniel)
//"5941":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-gothardus.gif",


//E2 199-100
// Sadolia
"5940":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sadolia.gif",
// Mysiur
"7701":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mysiur_myswiorowy_krol-1a.gif",
// Cerasus
"7689":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/cerasus-1a.gif",
// Breh
"2063":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/draki-breheret-1b.gif",
// Pieknotka
"4185":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/zmutowana-roslinka.gif",
// Torka
"6053":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/thuz-patr1.gif",
"6051":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/thuz-patr1.gif",
// Ogr Stalowy Pazur
"7693":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_stalowy_pazur-1a.gif",
// Ogr Drapak
"2526":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_drapak.gif",
// Chryz (Drzewo Dusz p.2)
"6055":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/chryzoprenia-1a.gif",
// Drzewo
"6057":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/drzewoe2.gif",
// Wrzosera (ta sama mapa)
//"6055":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wrzosera-1b.gif",
// Cantedewia (ta sama mapa)
//"6055":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/cantedewia-1a.gif",
// Krolowa
"7345":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolowa-sniegu.gif",
// SK
"5862":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/prakrolowa.gif",
// Ziuggrael (Sala Rady Orkow)
"5861":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_woj_elita.gif",
// Bragarth (ta sama mapa)
//"5861":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_low_elita.gif",
// Fursharag (ta sama mapa)
//"5861":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_mag_elita.gif",
// dwk
"5872":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/duch_wladcy_kl.gif",
// Sheba (Grota Orczych Szamanow p.3 s.1)
"5851":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/r_orc_sheba.gif",
// Shakkru (ta sama mapa)
//"5851":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/r_orc_shakkru.gif",
// Burkog
"5856":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/orkczd.gif",
// Adariel
"1322":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri_adariel.gif",
// Goons
"7474":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goons_asterus-1a.gif",
// Fodug
"7441":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/fodug_zolash.gif",
"716":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/fodug_zolash.gif",
// Amuno
"7454":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif",
"3265":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif",
// Tesciowa Rumcajsa
"7338":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-tesciowa-rumcajsa.gif",
// Wojt Fistula
"7340":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-wojt-fistula.gif",
// Worundiel
"7466":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/worundriel02.gif",
"1276":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/worundriel02.gif",
//stworek
"7375":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/stworzyciel.gif",
"7372":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/stworzyciel.gif",
//eol
"7352":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/piaskowy_potwor-6a.gif",
"7351":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/piaskowy_potwor-6a.gif",
//morski potwor
"7357":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/osmiornica-1b.gif",
//byk
"7368":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/ingotia_minotaur-7a.gif",
"1740":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/ingotia_minotaur-7a.gif",
//Fodug
"7441":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/fodug_zolash.gif",        
//Sheba
"5851":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/r_orc_sheba.gif",        
//amuno
"7454":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif",
//gruber
"6955":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif",
"6956":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif",
//burek
"5856":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/orkczd.gif",
//piracie2
"1525":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif",
//henry
"1526":"https://micc.garmory-cdn.cloud/obrazki/npc/e1/pirat5b.gif",
//helga
"1527":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat-2b.gif",
//jack
"3409":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif",
//Ifryt
"7057":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/magradit_ifryt.gif",
//Tesciowa
"351":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-tesciowa-rumcajsa.gif",
//Krab
"1741":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif",
//Krab2
"7369":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif",
//Wojt
"7339":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-wojt-fistula.gif",
//ozirus
"7069":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mumia-ozirus.gif",
//czacha
"7065":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/alghul-czaszka-1a.gif",
"7066":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/alghul-czaszka-1a.gif",
//Milek magii
"6946":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_magii.gif",
//Milek lowcow
"6945": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_lowcow.gif",
//Milek rycy
"6944":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_rycerzy.gif",
//Dzertek moxos
"6937":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/moloch-jertek.gif",
"6938":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/moloch-jertek.gif",
//Kambion
"229":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kambion.gif",
"4998":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kambion.gif",
//Maddok
"1481":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok5.gif",
"1463":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok_roz.gif",
//Krol szczur
"972":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolszczur.gif",
//Mech goblin
"359":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mechgoblin4.gif",

//E2 99-
//Centaur
"3765":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/cent-zyfryd.gif",
//Figlid
"6781":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnom_figlid.gif",
//Gopa
"1150":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goplana.gif",
"1151":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goplana.gif",
//Widmo
"1324":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/lesne_widmo.gif",
"1325":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/lesne_widmo.gif",
//ochyd
"3466":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/ugrape2.gif",
//Morthen
"6773":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krasnolud_boss.gif",
"6774":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krasnolud_boss.gif",
//nadzo
"6772":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/nadzorczyni_krasnoludow.gif",
//czolg
"6636":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif",
"6634":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif",
//Stopa
"1204":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wlochacze_wielka_stopa.gif",
"3530":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wlochacze_wielka_stopa.gif",
//zbrojek
"6615":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/magaz_zbrojmistrz.gif",
//grabarz
"6623":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/nieu_mnich_grabarz.gif",
//Lisz
"6625":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/lisz_demilisze.gif",
"6627":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/lisz_demilisze.gif",
//tollok
"6632":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_atamatu.gif",
"6633":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_utumatu.gif",
//Jotun
"6537":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kam_olbrzym-b.gif",
"6535":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kam_olbrzym-b.gif",
//Kozug
"3436":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll12.gif",
"3437":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll12.gif",
//gnoll
"333":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll11.gif",
"2646":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll11.gif",
//owadzia
"5395":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/zadlak-e2-owadzia-matka.gif",
//kobold
"816":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kobold07.gif",
"2729":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kobold07.gif",
//agar
"177":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/glut_agar.gif",
//razuglag
"125":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/razuglag.gif",
//tollok
"5293":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_shimger.gif",
//szczet
"2308":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-szczet.gif",
//dzik
"4156":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dzik.gif",
"4157":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dzik.gif",
//wladek
"727":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobmag2.gif",
//goblin samuraj
"3149":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobsamurai.gif",
//zorg
"2532":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-e2-zorg.gif",
//shea
"5738":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/demonszef.gif",
"5740":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/demonszef.gif",
//kotolak
"632":"https://micc.garmory-cdn.cloud/obrazki/npc/e1/kotolak_lowca.gif",
//muszita
"1060":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/st-puma.gif",
"580":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/st-puma.gif",
//goral
"2761":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral05.gif",
//tuz
"630":"https://micc.garmory-cdn.cloud/obrazki/npc/woj/tuz01.gif",

//herosi
//smok
"3315":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3320":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3333":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3331":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3332":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3325":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3322":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3336":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3338":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3339":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3326":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3330":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3329":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
"3328":"https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
//negotep

//tep
"1926":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5678":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5679":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5680":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5681":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5682":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5683":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5684":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5688":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5689":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5690":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5691":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5692":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5693":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5694":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5697":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5698":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5699":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5700":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5701":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5702":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5703":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5704":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5705":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5706":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5707":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5665":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5666":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5667":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
"5670":"https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
//dębo

//vapor

//demonis

//mulher

//viva

//lichwa

//obło

//baca
"350":"https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
"7334":"https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
"7335":"https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
"7336":"https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
"7337":"https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
"352":"https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
//roger
"1262":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"1337":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"1338":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"1339":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"1340":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"1341":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"1342":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"3220":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"1528":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"2871":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"2872":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
"2873":"https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
//brat
"1738":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2337":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2391":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2490":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2493":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2494":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2495":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2496":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2497":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2498":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2499":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2501":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2502":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"2509":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"1742":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"1743":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
"1744":"https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
//pers
"1154":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"2864":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"1233":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"2865":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"7063":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"7064":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"2866":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"2867":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"7067":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"7068":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"2868":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"2869":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
"2870":"https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
//kocha
"268":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"330":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"331":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"332":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"339":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"3758":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"246":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"6777":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"6778":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"6779":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
"6780":"https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
//koziec
"500":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"701":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"1137":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"3890":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"1141":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"3758":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"3759":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"3760":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"3761":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"3762":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
"3763":"https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
//kostek
"6628":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
"6629":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
"6635":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
"6636":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
"6771":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
"6773":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
"6775":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
"6776":"https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
//opek

//przewo

//złod

//karm

//patryk
  }

  // Zwoje przywolania druzyny na herosa - dopasowanie po nazwie herosa w nazwie przedmiotu
  // Klucz = fragment nazwy herosa (bez wielkosci liter i polskich znakow), wartosc = obrazek
  const heroConfig = {
    "domine ecclesiae": "https://micc.garmory-cdn.cloud/obrazki/npc/her/domina.gif",
    "mietek zul": "https://micc.garmory-cdn.cloud/obrazki/npc/her/zulek.gif",
    "mroczny patryk": "https://micc.garmory-cdn.cloud/obrazki/npc/her/bardzozlypatryk.gif",
    "karmazynowy msciciel": "https://micc.garmory-cdn.cloud/obrazki/npc/her/gnom_msciciel.gif",
    "zlodziej": "https://micc.garmory-cdn.cloud/obrazki/npc/her/zlodziej.gif",
    "zly przewodnik": "https://micc.garmory-cdn.cloud/obrazki/npc/her/mnich-zly2.gif",
    "opetany paladyn": "https://micc.garmory-cdn.cloud/obrazki/npc/her/opetanypaladyn02.gif",
    "piekielny kosciej": "https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
    "koziec maciciel sciezek": "https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
    "kochanka nocy": "https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
    "ksiaze kasim": "https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
    "swiety braciszek": "https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif",
    "zloty roger": "https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
    "baca bez lowiec": "https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
    "czarujaca atalia": "https://micc.garmory-cdn.cloud/obrazki/npc/her/czarujaca-atalia.gif",
    "oblakany lowca orkow": "https://micc.garmory-cdn.cloud/obrazki/npc/her/oblakany_ac1dae9d.gif",
    "lichwiarz grauhaz": "https://micc.garmory-cdn.cloud/obrazki/npc/her/lichwiarz_grauhaz.gif",
    "viviana nandin": "https://micc.garmory-cdn.cloud/obrazki/npc/her/viv_nandin_i3bd1.gif",
    "przeraza": "https://micc.garmory-cdn.cloud/obrazki/npc/her/przeraza.gif",
    "demonis pan nicosci": "https://micc.garmory-cdn.cloud/obrazki/npc/her/sekta_demon_cz_s.gif",
    "mulher ma": "https://micc.garmory-cdn.cloud/obrazki/npc/her/mulher_ma.gif",
    "vapor veneno": "https://micc.garmory-cdn.cloud/obrazki/npc/her/joziniec_bagienny.gif",
    "deborozec": "https://micc.garmory-cdn.cloud/obrazki/npc/her/zwierz_kniei.gif",
    "tepeyollotl": "https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
    "widmo triady": "https://micc.garmory-cdn.cloud/obrazki/npc/her/trist2_widmo_triady.gif",
    "negothep czarny kaplan": "https://micc.garmory-cdn.cloud/obrazki/npc/her/negthotep.gif",
    "mlody smok": "https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
  }

  function normalizeName(s) {
      return (s || "").toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function getHeroImage(it) {
      const name = normalizeName(it.name);
      if (!name.includes("przywolania druzyny")) {
          return undefined;
      }
      for (const key in heroConfig) {
          if (name.includes(normalizeName(key))) {
              return heroConfig[key];
          }
      }
      return undefined;
  }

  const NI = typeof window.Engine != "undefined";

  function loadItemImage(url) {
      const $newImg = document.createElement("img");
      $newImg.src = url;
      $newImg.classList.add("priw8-item-overlay");
      return new Promise(resolve => {
          $newImg.addEventListener("load", () => {
              let w = $newImg.width, h = $newImg.height;
              if (h > 32) {
                  w = w * (32 / h);
                  h = 32;
              }
              if (w > 32) {
                  h = h * (32 / w);
                  w = 32;
              }
              const offset = (32 - w) / 2;
              $newImg.width = w;
              $newImg.height = h;
              $newImg.style.left = `${offset}px`;
              $newImg.style.display = "block";

              resolve($newImg);
          });
      });
  }

  async function appendItemOverlay(id, url) {
      if (NI) {
          const $it = document.querySelector(`.item-id-${id}`);
          if ($it) {
              $it.classList.add("priw8-item-small-icon");
              const $newImg = await loadItemImage(url);
              $newImg.style.position = "absolute";
              $newImg.zIndex = 1;
              const $canv = $it.querySelector("canvas");
              $canv.parentElement.appendChild($newImg);
              console.log($it);
          }
      } else {
          g.loadQueue.push({
              fun: async () => {
                  const $it = document.querySelector(`#item${id}`);
                  if ($it) {
                      $it.classList.add("priw8-item-small-icon");
                      const $newImg = await loadItemImage(url);

                      const $img = $it.querySelector("img");
                      if ($img) {
                          $img.parentElement.appendChild($newImg);
                      }
                  }
              }
          });
      }
  }

  function onItem(items) {
      for (const id in items) {
          const it = items[id];
          const tp = getItemTp(it);
          const tpMap = getTpMap(tp);
          const entry = config[tp] ?? config[tpMap] ?? getHeroImage(it);
          if (entry) {
              appendItemOverlay(id, entry);
          }
      }
  }

  function init() {
      const org = NI ? window.Engine.communication.parseJSON : window.parseInput;
      const override = function(data) {
          const res = org.apply(this, arguments);
          if (data.item) {
              onItem(data.item);
          }
          return res;
      }
      if (NI)
          window.Engine.communication.parseJSON = override;
      else
          window.parseInput = override;

      const css = `
          /* SI */
          .priw8-item-small-icon img:not(.priw8-item-overlay) {
              width: 20px;
              height: 20px;
              top: 12px;
              z-index: 1;
          }

          /* NI */
          .priw8-item-small-icon canvas.canvas-icon {
              width: 20px;
              height: 20px;
              top: 12px;
              z-index: 1;
          }
          .priw8-item-small-icon .amount, .priw8-item-small-icon .cooldown {
              z-index: 2;
          }
      `;

      const $style = document.createElement("style");
      $style.innerHTML = css;
      document.head.appendChild($style);
  }

  function parseStats(stats) {
      if (!stats)
          return {};

      const spl = stats.split(";");
      const res = {};
      for (const entry of spl) {
          const pair = entry.split("=");
          res[pair[0]] = pair[1] ?? "true";
      }
      return res;
  }

  function getItemStats(it) {
      return it._cachedStats ?? parseStats(it.stat);
  }

  function getItemTp(it) {
      const stats = getItemStats(it);
      if (stats.teleport || stats.custom_teleport && stats.custom_teleport != "true") {
          return stats.teleport ?? stats.custom_teleport;
      }
      return "";
  }

  function getTpMap(tp) {
      return tp.split(",")[0];
  }

  function getLocationItems(loc) {
      return NI ? Engine.items.fetchLocationItems(loc).map(it => it) : Object.values(g.item).filter(it => it.loc == loc);
  }

  window.listStones = function() {
      getLocationItems("g").forEach(it => {
          const stats = getItemStats(it);

          const tp = getItemTp(it);

          if (tp != "") {
              const tpMap = getTpMap(tp);
              window.log(`${it.name} (${stats.opis}): ${tpMap} (${tp})`);
          }
      });
  }

  // Wypisuje w konsoli zwoje przywolania z plecaka - przydatne do uzupelnienia heroConfig
  window.listSummons = function() {
      getLocationItems("g").forEach(it => {
          if (normalizeName(it.name).includes("przywolania druzyny")) {
              window.log(`${it.name} -> ${getHeroImage(it) ? "OK" : "BRAK obrazka"}`);
          }
      });
  }

  init();
}();