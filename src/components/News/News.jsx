import React, { Component, useState } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      title:
        "🎥 | Onsportieve Antony misleidt Omonia-smaakmaker door blessure te faken",
      link: "https://sportnieuws.nl/voetbal/buitenland/europa-league-omonia-nicosia-manchester-united-antony-karim-ansarifard-casemiro-actie-geblesseerd-verder-spelen-onsportief-video/",
      keywords: ["Buitenland"],
      creator: ["Sportnieuws.nl"],
      video_url: null,
      description:
        "Manchester United-aanvaller Antony liet zich donderdagavond, net als de rest van zijn teamgenoten op dat moment, van zijn meest onsportieve kant zien in het Europa League-duel met Omonia Nicosia (2-3). De ex-Ajacied deed alsof hij geblesseerd was waarna Omonia-doelpuntenmaker Karim Ansarifard de bal netjes buiten speelde. Nadien stond de buitenspeler ‘gewoon’ weer op en ging… Het bericht 🎥 | Onsportieve Antony misleidt Omonia-smaakmaker door blessure te faken verscheen eerst op Sportnieuws.",
      content: null,
      pubDate: "2022-10-06 20:47:00",
      image_url: null,
      source_id: "sportnieuws",
      country: ["netherland"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title:
        "Biden szabadon engedi a marihuána miatt szövetségi börtönben ülőket",
      link: "https://444.hu/2022/10/06/biden-szabadon-engedi-a-marihuana-miatt-szovetsegi-bortonben-uloket?utm_source=rss_feed&utm_medium=rss&utm_campaign=rss_syndication",
      keywords: null,
      creator: ["Bódog Bálint"],
      video_url: null,
      description: null,
      content:
        "„Több ezren vannak, akiket korábban marihuána birtoklásáért szövetségi szinten elítéltek, megtagadhatják tőlük a munkavállalást, a lakhatást vagy az oktatási lehetőséget. A döntés segít enyhíteni az ítéletekből eredő járulékos következményeket” – írta Joe Biden azzal az intézkedéssel kapcsolatban, amelyben megbocsát minden marihuána birtoklásával kapcsolatos szövetségi bűncselekményt.Biden utasította Merrick Garland főügyészt, hogy dolgozza ki az adminisztratív eljárást a kegyelmi okiratok kibocsátására.Az elnök kérte az államok kormányzóit, hogy kövessék a példáját. Változtatna a marihuána szövetségi szintű besorolásán is, mivel azt jelenleg egy szinten kezelik a heroinnal és az LSD-vel, és magasabb besorolásba tartozik, mint a fentanil és a metamfetamin. (Reuters)",
      pubDate: "2022-10-06 20:45:58",
      image_url: null,
      source_id: "444",
      country: ["hungary"],
      category: ["top"],
      language: "hungarian",
    },
    {
      title:
        'Lega Pro, Ghirelli: "In inverno si giocherà prevalentemente di giorno"',
      link: "https://www.tuttojuve.com/altre-notizie/lega-pro-ghirelli-in-inverno-si-giochera-prevalentemente-di-giorno-617090",
      keywords: ["Altre notizie"],
      creator: null,
      video_url: null,
      description:
        "Il presidente della Lega Pro Francesco Ghirelli ha parlato ad Italpress in merito alla possibilità che in inverno di giochi maggiormente in orari diurni' \"Sto vedendo partite e sono sorpreso dalla qualità tecnica, forse se qual ...",
      content: null,
      pubDate: "2022-10-06 20:45:51",
      image_url:
        "https://net-storage.tcccdn.com/storage/tuttojuve.com/img_notizie/thumb3/78/78fddbdf39969f3741ad4eb49e0f69d6-45632-oooz0000.jpeg",
      source_id: "tuttojuve",
      country: ["italy"],
      category: ["sports"],
      language: "italian",
    },
    {
      title:
        "Op een klein buitje na blijft ‘herfstoffensief’ voorlopig uit boven Groningen",
      link: "https://www.oogtv.nl/2022/10/op-een-klein-buitje-na-blijft-herfstoffensief-voorlopig-uit-boven-groningen/?utm_source=rss&utm_medium=rss&utm_campaign=op-een-klein-buitje-na-blijft-herfstoffensief-voorlopig-uit-boven-groningen",
      keywords: ["Nieuws", "Groningen", "herfst", "weer"],
      creator: ["Tom Veenstra"],
      video_url: null,
      description:
        "Op een klein buitje op zaterdagochtend na blijft het tot na het weekend droog en relatief warm in Groningen. Dat voorspelt OOG-weerman Johan Kamphuis voor de komende dagen. “Vrijdag zijn er perioden met zon, afgewisseld…",
      content:
        "Op een klein buitje op zaterdagochtend na blijft het tot na het weekend droog en relatief warm in Groningen. Dat voorspelt OOG-weerman Johan Kamphuis voor de komende dagen. “Vrijdag zijn er perioden met zon, afgewisseld door wolkenvelden”, aldus Kamphuis. “Het blijft droog en het wordt 17 graden. De zuidwestenwind is matig. Zaterdagochtend is er wel kans op een bui, maar de zon schijnt ook af en toe. In de middag wordt het overal droog en wisselen felle opklaringen en een aantal wolkenvelden elkaar af. Het wordt 14 graden bij een matige wind uit het westen tot noordwesten. Zondag wordt het ronduit zonnig, bij temperaturen tussen de 15 en 16 graden. De zuid- tot zuidoostenwind is matig.” Ook daarna valt de herfst nog niet echt binnen, vervolgt de OOG-weerman: “Na het weekend zien we dat een hogedrukgebied actieve storingen voorlopig op afstand houdt. Maandag is er flink wat zon, naast een aantal wolkenvelden en een kleine kans op een buitje in de loop van de dag. Dinsdag en woensdag blijft een herfstoffensief ook uit. Het blijft op beide dagen overwegend of helemaal droog en met geregeld zon wordt het 15 tot 17 graden. Pas donderdag of vrijdag zet de herfst de aanval in en neemt de kans op regen en wind toe.”",
      pubDate: "2022-10-06 20:45:43",
      image_url: null,
      source_id: "oogtv",
      country: ["netherland"],
      category: ["top"],
      language: "dutch",
    },
    {
      title:
        "LIVE. GOAL! Nilsson hangt de bordjes in de diepe fase alsnog verdiend in evenwicht",
      link: "https://www.hln.be/europa-league/live-goal-nilsson-hangt-de-bordjes-in-de-diepe-fase-alsnog-verdiend-in-evenwicht~a7ecb2ad/",
      keywords: null,
      creator: ["Redactie"],
      video_url: null,
      description:
        "• Europa League • Aftrap: 21u • Braga en Union hebben zes op zes • Estádio Municipal de Braga",
      content: null,
      pubDate: "2022-10-06 20:45:00",
      image_url:
        "https://images0.persgroep.net/rcs/rciTMvx32WSl6ab7cCzxkAlo2Js/diocontent/222364848/_fitwidth/400/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
      source_id: "hln",
      country: ["belgium"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title:
        'Magda Gessler wścieka się w "Kuchennych rewolucjach". "Pogrążysz ten lokal!"',
      link: "https://plejada.pl/newsy/kuchenne-rewolucje-w-kamionkach-magda-gessler-robila-co-mogla/0cw8kbt",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content:
        '"Kuchenne rewolucje" Magdy Gessler dotarły do Kamionek. Gwiazda została poproszona o pomoc przez właścicieli restauracji "Fyrtel Smaków". Czy udało jej się ocalić lokal? Szczegóły poniżej.',
      pubDate: "2022-10-06 20:45:00",
      image_url: null,
      source_id: "plejada",
      country: ["poland"],
      category: ["entertainment"],
      language: "polish",
    },
    {
      title: "Ángela Aguilar le da la bienvenida al otoño con un grueso abrigo",
      link: "https://www.publimetro.com.mx/entretenimiento/2022/10/06/angela-aguilar-da-bienvenida-otono-con-grueso-abrigo/",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "La más joven de la Dinastía Aguilar se declara fanática de la estación otoñal con una serie de fotografías.",
      content: null,
      pubDate: "2022-10-06 20:43:53",
      image_url: null,
      source_id: "publimetro",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title: "Breitling, który poleciał w kosmos",
      link: "https://wiadomosci.onet.pl/swiat/breitling-ktory-polecial-w-kosmos/04crw14",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content:
        "Dla Zachodu to był wielki szok: 12 kwietnia 1961 r. radziecki kosmonauta Jurij Gagarin wykonuje lot wokół Ziemi na pokładzie statku kosmicznego Wostok 1, stając się pierwszym człowiekiem w kosmosie. Jednak Zachód szybko nadrabia zaległości. 24 maja 1962 r. przyszła kolej na astronautę Scotta Carpentera, który na pokładzie Aurory 7 w ramach misji Mercury trzykrotnie okrążył planetę. Na jego nadgarstku znajdował się Breitling Navitimer Cosmonaute zaprojektowany specjalnie do tego celu. Jest to pierwszy szwajcarski zegarek w kosmosie.",
      pubDate: "2022-10-06 20:43:29",
      image_url: null,
      source_id: "wiadomosci",
      country: ["poland"],
      category: ["science", "health"],
      language: "polish",
    },
    {
      title: "Dit zijn alle winnaars van het Gouden Televizier-Ring Gala",
      link: "https://www.ed.nl/show/dit-zijn-alle-winnaars-van-het-gouden-televizier-ring-gala~a7378720/",
      keywords: null,
      creator: ["Denise de Koning & Leon van Wijk"],
      video_url: null,
      description:
        "Alle prijzen van het Gouden Televizier-Ring Galazijn inmiddels uitgereikt. Tijd om alle winnaars van vanavond op een rijtje te zetten. Van Hallo, ik heb kanker, over een kijkje in het leven van tieners met kanker, tot de Boos-documentaire over The voice of holland.",
      content: null,
      pubDate: "2022-10-06 20:43:25",
      image_url: null,
      source_id: "ed",
      country: ["netherland"],
      category: ["entertainment"],
      language: "dutch",
    },
    {
      title:
        "Wall Street cierra en baja ante preocupaciones sobre alza de tasas",
      link: "https://www.forbes.com.mx/wall-street-cierra-en-baja-ante-preocupaciones-sobre-alza-de-tasas/",
      keywords: ["Mercados", "mercados", "Wall Street"],
      creator: ["Forbes Staff"],
      video_url: null,
      description:
        "Forbes México. Wall Street cierra en baja ante preocupaciones sobre alza de tasas Los principales índices de Wall Street cerraron a la baja debido a que aumentaron las preocupaciones por nuevos aumentos en tasas. Wall Street cierra en baja ante preocupaciones sobre alza de tasas Forbes Staff",
      content:
        "Forbes México. Wall Street cierra en baja ante preocupaciones sobre alza de tasas Los principales índices de Wall Street cerraron a la baja el jueves debido a que aumentaron las preocupaciones, antes de las cifras mensuales de nóminas no agrícolas, de que la postura agresiva de la tasa de interés de la Reserva Federal conducirá a una recesión. Según datos preliminares, el S&P 500 .SPX perdió 38.94 puntos o 1.03%, para cerrar a 3,744.34 puntos, mientras que el Nasdaq Composite .IXIC perdió 73.71 puntos, o 0,68%, a 11,074.93. El promedio industrial Dow Jones .DJI cayó 349.04 puntos o 1.15%, a 29,924.83. Los mercados se consolaron brevemente con los datos que mostraron que las solicitudes semanales de desempleo aumentaron al máximo en cuatro meses la semana pasada, lo que generó algunas esperanzas de que la Fed pueda relajar la implementación del aumento más rápido y más alto en las tasas en décadas. Lee más: Con quien llegue a Economía habrá diálogo y seguimiento a la agenda: Empresarios Wall Street cierra en baja ante preocupaciones sobre alza de tasas El mercado de acciones ha tardado en reconocer un mensaje constante de los funcionarios de la Fed de que las tasas subirán por más tiempo hasta que el ritmo de la inflación se desacelere claramente. El presidente de la Fed de Chicago, Charles Evans, fue el último en detallar la perspectiva del banco central el jueves, diciendo que los formuladores de políticas esperan entregar 125 puntos básicos de aumentos de tasas antes de fin de año, ya que las lecturas de inflación han sido decepcionantes. “El mercado ha estado recibiendo lentamente el mensaje de la Fed”, dijo Jason Pride, director de inversiones de patrimonio privado de Glenmede en Filadelfia. “Existe la posibilidad de que la Fed, con nuevas subidas de tasas, lleve a la economía a una recesión para reducir la inflación”, dijo Pride. “No creemos que los mercados se hayan dado cuenta por completo de esto”. Con información de Reuters. Te puede interesar: FOTON quiere que 10% de sus vehículos eléctricos se vendan en México Wall Street cierra en baja ante preocupaciones sobre alza de tasas Forbes Staff",
      pubDate: "2022-10-06 20:43:23",
      image_url: null,
      source_id: "forbes_mx",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "La Mezquita-Catedral contará con casi medio millón de euros de inversión estatal",
      link: "https://www.diariocordoba.com/cordoba-ciudad/2022/10/06/mezquita-catedral-contara-medio-millon-76948779.html",
      keywords: null,
      creator: ["Isabel Leña"],
      video_url: null,
      description:
        "La Mezquita-Catedral contará con casi medio millón de euros de inversión estatal. Ese dinero servirá de ayuda para restaurar la capilla Real, que en los presupuestos vigentes tenía 50.000 euros. Ese dinero no será el único que percibirá el principal monumento de la ciudad, ya que en la proyección temporal de las cuentas aparecen 150.000 euros más para el 2024.",
      content: null,
      pubDate: "2022-10-06 20:43:05",
      image_url:
        "https://estaticos-cdn.prensaiberica.es/clip/1adebcf2-2873-4113-872a-57fdf224aa6f_16-9-aspect-ratio_default_0.jpg",
      source_id: "diariocordoba",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "LIVE Feyenoord leidt in Denemarken, AZ voor de derde keer op voorsprong",
      link: "https://www.telegraaf.nl/sport/1699787728/live-feyenoord-leidt-in-denemarken-az-voor-de-derde-keer-op-voorsprong",
      keywords: ["Voetbal"],
      creator: null,
      video_url: null,
      description:
        "Na twee avondjes Champions League wachten nu de duels in de Europa en Conference League. Er komen drie Nederlandse clubs in actie.",
      content: null,
      pubDate: "2022-10-06 20:43:00",
      image_url:
        "https://www.telegraaf.nl/images/1200x630/filters:format(jpeg):quality(80)/cdn-kiosk-api.telegraaf.nl/9610d3ba-45af-11ed-b238-02d2fb1aa1d7.jpg",
      source_id: "telegraaf",
      country: ["netherland"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title: "Skandal w Lidze Europy. Haniebne zachowanie kibiców [WIDEO]",
      link: "https://www.sport.pl/pilka/7,65042,28995067,skandal-w-lidze-europy-haniebne-zachowanie-kibicow-wideo.html",
      keywords: null,
      creator: ["Mateusz Dziubiński"],
      video_url: null,
      description:
        "Skandal w meczu Ligi Europy pomiędzy Malmoe FF i Unionem Berlin. Na początku drugiej połowy spotkanie musiało zostać przerwane z powodu skandalicznego zachowania kibiców, którzy zaczęli obrzucać się racami.",
      content: null,
      pubDate: "2022-10-06 20:43:00",
      image_url:
        "https://bi.im-g.pl/im/5f/a6/1b/z28995167M,Skandaliczne-zachowanie-kibicow-w-meczu-Malmoe---U.jpg",
      source_id: "sport",
      country: ["poland"],
      category: ["sports"],
      language: "polish",
    },
    {
      title:
        "Müde Beine: Eisbären Berlin zahlen noch immer den Preis des Meistertitels",
      link: "https://www.berliner-zeitung.de/sport-leidenschaft/eishockey-muede-beine-eisbaeren-berlin-zahlen-noch-immer-den-preis-des-meistertitels-li.274085",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Acht Spieler haben dem deutschen Meister beim Aus in der Champions Hockey League gefehlt. Die Personalsorgen sind auch eine Chance für die jungen Spieler.",
      content: null,
      pubDate: "2022-10-06 20:42:58",
      image_url:
        "https://berliner-zeitung.imgix.net/2022/10/06/fe4201de-eaa5-47cb-ac07-f640c2eb5105.jpeg",
      source_id: "berliner-zeitung",
      country: ["germany"],
      category: ["sports"],
      language: "german",
    },
    {
      title:
        "Biden indultará a condenados por posesión de marihuana: “Ha afectado a demasiadas vidas”",
      link: "https://larepublica.pe/mundo/2022/10/06/joe-biden-indultara-a-condenados-por-posesion-de-marihuana-ha-afectado-a-demasidas-vidas-estados-unidos/",
      keywords: ["Mundo"],
      creator: null,
      video_url: null,
      description:
        "“Enviar a la cárcel a gente simplemente por poseer marihuana ha supuesto que haya personas en la cárcel por una conducta que es legal en muchos estados”, señaló el mandatario de EE. UU.",
      content: null,
      pubDate: "2022-10-06 20:42:49",
      image_url:
        "https://larepublica.pe/resizer/NJNkgodd5wYh8kEqT5BgS6RtbMY=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/P63WBNXE3NGEFLAN3G5XU5GJHA.gif",
      source_id: "larepublica",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title: "ผู้นำโลก-ทูต-ยูเอ็น ร่วมแสดงความเสียใจ เหตุ #กราดยิงหนองบัวลำภู",
      link: "https://www.thebangkokinsight.com/news/world-news/963040/",
      keywords: [
        "World News",
        "กราดยิงหนองบัวลำภู",
        "ข่าวต่างประเทศ",
        "จ.หนองบัวลำภู",
        "นายกรัฐมนตรีอังกฤษ",
        "บีบีซี",
        "ผู้บาดเจ็บ",
        "รอยเตอร์ศ",
        "ศูนย์พัฒนาเด็กเล็ก",
        "สื่อต่างประเทศ",
        "เสียชีวิต",
      ],
      creator: ["The Bangkok Insight Editorial Team"],
      video_url: null,
      description:
        "บรรดาผู้นำโลก สถานทูตหลายประเทศ และสหประชาชาติ ร่วมแสดง […]",
      content:
        "บรรดาผู้นำโลก สถานทูตหลายประเทศ และสหประชาชาติ ร่วมแสดงความเสียใจต่อเหตุการณ์กราดยิงหนองบัวลำภู ที่ทำให้มีผู้เสียชีวิตอย่างน้อย 38 ราย โดยกว่าครึ่งหนึ่งเป็นเด็ก สำนักข่าวต่างประเทศ รายงานว่า เหตุกราดยิงที่ศูนย์เด็กเล็กใน จังหวัดหนองบัวลำภู ได้สร้างความสะเทือนใจไปทั่วโลก โดยบรรดาผู้นำโลก สถานทูต สหประชาติ(ยูเอ็น) พร้อมด้วยหน่วยงานในเครือ และสโมสรฟุตบอล ต่างพากันแสดงความเสียใจต่อเหตุสลดที่เกิดขึ้น นายกรัฐมนตรีแอนโธนี่ อัลบานีส ของออสเตรเลีย ทวีตข้อความว่า “เป็นไปไม่ได้เลย ที่จะเข้าใจถึงความรู้สึกของหัวใจที่แตกสลาย ของครอบครัวผู้เสียชีวิต” และว่าชาวออสเตรเลียทุกคนขอส่งความรัก และความเสียใจไปยังครอบครัวผู้เสียชีวิต ขณะที่ นายจอน ธอร์การ์ด เอกอัครราชทูตเดนมาร์กประจำประเทศไทย ทวีตข้อความ แสดงความเสียใจต่อผู้เสียชีวิต และครอบครัว จากเหตุการณ์กราดยิงในประเทศไทย ขอแสดงความเสียใจกับคนไทยทุกคน ก่อนหน้านั้น นายกรัฐมนตรี ลิซ ทรัสส์ แห่งอังกฤษ รีทวีตลิงค์ข่าวของบีบีซี พร้อมระบุว่า รู้สึกตกใจเมื่อได้ทราบข่าวโศกนาฏกรรมที่เกิดขึ้นในประเทศไทย และขอแสดงความเสียใจกับผู้ที่ได้รับผลกระทบ และส่งความห่วงใยไปยังเจ้าหน้าที่ทุกฝ่าย สหราชอาณาจักรจะยืนหยัดเคียงข้างคนไทยในช่วงเวลาที่เลวร้ายนี้ ทางด้าน สถานเอกอัครราชทูตสหรัฐอเมริกา ประจำประเทศไทย ก็ได้ออกแถลงการณ์ แสดงความเสียใจต่อโศกนาฏกรรมในครั้งนี้เช่นกัน โดยระบุว่า สถานเอกอัครราชทูตสหรัฐอเมริกาประจำประเทศไทย สะเทือนใจอย่างยิ่งต่อเหตุการณ์โศกนาฏกรรมที่เกิดขึ้นในจังหวัดหนองบัวลำภู เรายืนหยัดเคียงข้างพี่น้องชาวไทย และขอแสดงความเสียใจอย่างสุดซึ้งต่อผู้บาดเจ็บและผู้เสียชีวิต รวมทั้งครอบครัวของพวกเขาเขา เช่นเดียวกับ สถานทูตรัสเซียประจำประเทศไทย โพสต์ข้อความผ่านเฟซบุ๊ก ว่า สถานเอกอัครราชทูตสหพันธรัฐรัสเซียประจำประเทศไทย​ ขอแสดงความเสียใจต่อเหตุการณ์​กราดยิงในศูนย์พัฒนาเด็กเล็กฯ อำเภอนากลาง จังหวัดหนองบัวลำภู​ ในนามของชาวรัสเซียทุกคน​ เราขอแสดงความเสียใจต่อครอบครัวผู้เสียชีวิตในครั้งนี้ นอกจากนี้ สโมรฟุตบอลเลสเตอร์ ซิตี้ ก็ได้ทวีตข้อความถึงเหตุการณ์ที่เกิดขึ้น ว่า ทุกคนที่สโมสรฟุตบอลเลสเตอร์ ซิตี้ เสียใจอย่างสุดซึ้งกับโศกนาฏกรรมในประเทศไทย พวกเราจะคิดถึง และภาวนาให้เสมอ ยูเอ็น-ยูนิเซฟ-ยูเนสโก ร่วมแสดงความเสียใจเหตุกราดยิงหนองบัวลำภู โฆษกของนายอันโตนิโอ กูเตอร์เรส เลขาธิการสหประชาชาติ (ยูเอ็น) กล่าวว่า นายกูเตอร์เรสรู้สึกตกใจ และเสียใจอย่างสุดซึ้งต่อเหตุการณ์กราดยิงในประเทศไทย ซึ่งทำให้มีผู้เสียชีวิตจำนวนมาก “ท่านเลขาธิการ ขอแสดงความเสียใจต่อครอบครัวของผู้เสียชีวิต และหวังว่าผู้ที่ได้รับบาดเจ็บจะฟื้นตัวอย่างรวดเร็ว” โฆษกกล่าว ขณะที่ กองทุนเด็กแห่งสหประชาชาติ (ยูนิเซฟ) ออกแถลงการณ์ประณามความรุนแรงทุกรูปแบบต่อเด็ก โดยระบุว่า เด็กไม่ควรตกเป็นเป้าหมายการโจมตี หรือถูกกระทำด้วยความรุนแรงไม่ว่าในสถานที่ใด หรือในเวลาใด เช่นเดียวกับ องค์การการศึกษา วิทยาศาสตร์ และวัฒนธรรมแห่งสหประชาชาติ (ยูเนสโก) ได้แสดงความเสียใจต่อเหตุการณ์ดังกล่าว และระบุว่า การโจมตีต่อโรงเรียน นักเรียน และครู ถือเป็นการโจมตีต่อสิทธิในการศึกษา ซึ่งไม่มีผู้ใดควรตกเป็นเป้าการโจมตี อ่านข่าวเพิ่มเติม ‘นายกรัฐมนตรี’ สั่งลดธงครึ่งเสา แสดงความเสียใจ เหตุกราดยิงหนองบัวลำภู ‘ผบ.ตร.’ ขอโทษ! ‘อดีตตำรวจ’ ก่อเหตุกราดยิงหนองบัวลำภู ลั่นต้องไม่ให้เกิดขึ้นอีก แฉประวัติ มือ ‘กราดยิงหนองบัวลำภู’ เสพยาไม่หยุด เพื่อนตำรวจสุดเอือม",
      pubDate: "2022-10-06 20:42:42",
      image_url: null,
      source_id: "thebangkokinsight",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title: "El Issste era ‘el más echado a perder’ del sector salud: AMLO",
      link: "https://vanguardia.com.mx/noticias/el-issste-era-el-mas-echado-a-perder-del-sector-salud-amlo-KY4504158",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "En medio del sector salud el cual “estaba mal”, el Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (ISSSTE) “era lo peor” y era “lo más echado a perder”, sostuvo el presidente Andrés Manuel López Obrador.Al referir que la secretaria de Seguridad y Protección Ciudadana, Rosa Icela Rodríguez, -a quien le solicitó ayudar en el proceso de “limpia” del sector salud- le mostró una amplia carpeta con una recopilación de notas informativas denominada “notas periodistas ISSSTE Guerra Sucia”, apuntó que este proceso ha detonado una reacción de quienes se oponen a ello.Es “un periodicazo diario”.En dichas reacciones, dijo, “están metidos muchos que se sentía influyentes pero ya tomamos la decisión de que se va a limpiar de corrupción, porque era lo más echado a perder del sector salud. Si el sector salud estaba mal, infestado de corrupción, el ISSSTE era lo peor”.Te podría interesar: El ISSSTE está bajo control de la Secretaría de Seguridad y Protección CiudadanaLas acciones en esta materia, detalló, llevarán aún como tres meses más, pero subrayó que ya se definió que no se renovarán los contratos de servicios integrales que estaban subvencionados, ya que la mayoría estaban vinculados con funcionarios o ex funcionarios del ISSSTE; era “una cosa de escándalo”.Reveló que a la par de los procesos de ajustes se han registrado amenazas a los servidores públicos que implementan las medidas. En éste caso se encuentra la directora del DIF, Nuria Fernández, a quien hace tres meses le mandaron mensajes anónimos en los que se le advertía “que se atuviera las consecuencias”.Te podría interesar: Médicos ‘arman’ fiesta en un hospital del ISSSTE y dejan un ‘tiradero’ (video)Ante ello, destacó que a la funcionaria la apoyaron con seguridad para desmontar las estructura de corrupción. “Quienes están metidos en estas tranzas, que sepan que los servidores públicos que están llevando a cabo las reformas para que no haya corrupción tienen todo nuestro apoyo, nuestro respaldo”.Ponderó que se limpió Cofepris, que “estaba infectado” de corrupción y había sótanos para guardar expediente, ya que se daba trámite sólo a los que “había de por medio dinero”.Cuando inició su gobierno, añadió, “todo estaba así. Hacienda, Comunicaciones, Aduanas imagínense, las aduanas se entraban en concesión a gobiernos del norte, estatales, ellos decidían quiénes iban a ser los de aduanas, eso se está limpiando pero sí cuesta porque fueron muchos años”.Tras recordar que sólo diez empresas manejaban la distribución de medicamentos, adujo que por quitarles el “control” surgió una campaña para adjudicar al gobierno una presunta falta de medicamentos para niños con cáncer. Insisto que la política neoliberal es sinónimo de corrupción.Con información de La Jornada",
      content: null,
      pubDate: "2022-10-06 20:42:16",
      image_url: null,
      source_id: "vanguardia",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Oppositie 'zwaar teleurgesteld' dat kabinet nog niet weet hoe prijsplafond wordt betaald",
      link: "https://www.nu.nl/politiek/6228384/oppositie-zwaar-teleurgesteld-dat-kabinet-nog-niet-weet-hoe-prijsplafond-wordt-betaald.html",
      keywords: ["Algemeen", "Politiek"],
      creator: ["Edo van der Goot"],
      video_url: null,
      description:
        "In de Tweede Kamer is er geen partij tegen het prijsplafond, maar er is bij oppositiepartijen wel veel onvrede over het antwoord op de vraag hoe de dure maatregel wordt betaald. Minister Sigrid Kaag (Financiën) denkt niet aan bezuinigingen, maar sluit het ook niet uit. Het is namelijk onzeker wat de totale kosten zullen zijn om de torenhoge energierekening wat te dempen.",
      content: null,
      pubDate: "2022-10-06 20:42:06",
      image_url:
        "https://media.nu.nl/m/xwwxefxa95mo_sqr256.jpg/oppositie-zwaar-teleurgesteld-dat-kabinet-nog-niet-weet-hoe-prijsplafond-wordt-betaald.jpg",
      source_id: "nu",
      country: ["netherland"],
      category: ["top"],
      language: "dutch",
    },
    {
      title:
        'En Lerdo, exigir�n a restaurantes trampas de grasa para evitar "taponamientos" de drenaje',
      link: "https://www.milenio.com/estados/durango-lerdo-exigira-restaurantes-manejo-grasas",
      keywords: null,
      creator: ["Luis Alatorre"],
      video_url: null,
      description:
        "El Sistema de Agua Potable y Alcantarillado de Lerdo (Sapal), lanzar� una campa�a para exigir a los negocios dedicados a la preparaci�n de alimentos para que cuenten con sus trampas de control de grasa y evitar con ello taponamiento del drenaje. Lo anterior fue confirmado por el alcalde Homero Mart�nez Cabrera, quien refiri� que en ello se busca que en etapas de lluvias se eviten problemas de saturaci�n y el agua pluvial tenga un mejor desfogue. Cit� que esto se ha vuelto un problema recurrente, sobre todo cuando se presentan lluvias, ya que provoca que con m�s facilidad las l�neas de drenaje registren taponamiento.Lo que se busca con ello, dijo el alcalde, es que se contrate un servicio particular para la instalaci�n de este tipo de trampas o bien se contrate al propio Sapal para la realizaci�n de este trabajo que se debe hacer en forma recurrente. Por otro lado inform� que se esperan avances en la continuidad de los trabajos del c�rcamo que se construye en la colonia C�sar G. Meraz a cargo de la Comisi�n del Agua del Estado de Durango (CAED). Del mismo modo inform� que espera respuesta de esta misma dependencia estatal a la solicitud hecha para la construcci�n de cuatro c�rcamos m�s para Lerdo, por lo que esperan que las licitaciones salgan pronto y con ello ir resolviendo estos problemas de drenaje.aarp",
      content: null,
      pubDate: "2022-10-06 20:41:42",
      image_url:
        "http://cdn.milenio.com/uploads/media/2022/10/06/alcalde-saturacion-drenaje-problema-recurrente.jpg",
      source_id: "milenio",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Ligue 1: le journaliste Mohamed Sifaoui, nouveau directeur de la communication d'Angers",
      link: "https://rmcsport.bfmtv.com/football/ligue-1/ligue-1-le-journaliste-mohamed-sifaoui-nouveau-directeur-de-la-communication-d-angers_AN-202210060776.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Le journaliste Mohamed Sifaoui est le nouveau directeur de la communication d'Angers, annonce Ouest-France. Il ne vient pas du monde du football, et est connu pour son activité de journaliste autour de l'islamisme radical.",
      content: null,
      pubDate: "2022-10-06 20:41:09",
      image_url:
        "https://images.bfmtv.com/itZs0dh4i1L9A6t8I69QM1aCCRU=/0x171:2048x1323/800x0/images/Algerian-French-journalist-and-writer-Mohamed-Sifaoui-speaks-during-a-seminar-for-the-fight-against-separatism-and-Islamism-in-Albi-southern-France-on-October-27-2020-1496055.jpg",
      source_id: "rmcsport",
      country: ["france"],
      category: ["sports"],
      language: "french",
    },
    {
      title:
        "Disney+: „Star Wars“ schreibt Geschichte – mit nur einem einzigen Wort",
      link: "https://www.derwesten.de/panorama/promi-tv/disney-star-wars-andor-serie-folge-filme-reihenfolge-abo-a-id300014145.html",
      keywords: ["Promi-TV"],
      creator: null,
      video_url: null,
      description:
        "Diese Szene haben sich einige Zuschauer bei Disney+ sicherlich mehr als nur einmal angesehen. In einer neuen Folge der Serie „Andor“, die im „Star Wars“-Universum spielt, ist ein Wort zu hören, dass es so definitiv noch nie in der Geschichte der Skywalker-Familie gegeben hat. Mit einem einzigen Wort scheint Disney+ das sonst so familienfreundliche Setting […]",
      content: null,
      pubDate: "2022-10-06 20:41:07",
      image_url:
        "https://www.derwesten.de/wp-content/uploads/sites/8/2022/09/disney-star-wars.jpg?w=1280",
      source_id: "derwesten",
      country: ["germany"],
      category: ["entertainment"],
      language: "german",
    },
    {
      title:
        "Chile presenta cargos contra minera canadiense por enorme socavón",
      link: "https://www.infobae.com/america/agencias/2022/10/06/chile-presenta-cargos-contra-minera-canadiense-por-enorme-socavon/",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content:
        'La Superintendencia del Medio Ambiente (SMA) de Chile presentó este jueves cargos en contra de la minera Ojos del Salado, propiedad de la canadiense Lundin Mining, por su responsabilidad en el enorme socavón que surgió cerca de una de sus minas en el norte del país.Con un diámetro de 30 metros y 60 metros de profundidad, el socavón generó preocupación en las autoridades y comunidades locales, que pidieron investigar cómo fue que el enorme hoyo apareció en las inmediaciones de las faenas de la mina de cobre Alcaparrosa, en la localidad de Tierra Amarilla, en el desierto de Atacama, a unos 800 km al norte de Santiago."Este proceso sancionatorio se inicia luego de analizar toda la información recabada en terreno", dijo el superintendente del Medio Ambiente en funciones, Emanuel Ibarra, citado en un comunicado de prensa de la SMA.Las infracciones se refieren a incumplimientos de parte de la minera privada de la tasa de producción durante el año 2019 y modificaciones en la infraestructura minera ambientalmente evaluada."La investigación de la oficina regional permitió vincular el socavón con la sobre extracción de mineral. Además, cuando ocurrió el evento comenzó a filtrarse dentro de la mina grandes cantidades de agua desde lugares donde la empresa intervino más allá de lo considerado en la evaluación ambiental", explicó Ibarra.En agosto, el gobierno chileno manifestó preocupación por la aparición de grietas cerca del enorme socavón, que se encuentra al menos 600 metros de viviendas de la población minera de Tierra Amarilla.Chile es el mayor exportador de cobre del mundo, con casi un tercio de la oferta global.pa/apg/gm',
      pubDate: "2022-10-06 20:40:50",
      image_url: null,
      source_id: "infobae",
      country: ["united states of america", "mexico", "argentina", "colombia"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Cellulare alla guida, svolta clamorosa: nessuna pietà per i trasgressori",
      link: "https://www.contocorrenteonline.it/2022/10/06/cellulare-guida/",
      keywords: ["Attualità"],
      creator: ["Valentina Trogu"],
      video_url: null,
      description:
        "Chi usa il cellulare alla guida dovrà essere punito severamente, questa la richiesta della Polizia Locale. La normativa attuale non basta a disincentivarne l’uso. Il numero di incidenti provocati da persone al cellulare durante la guida è sempre più alto. Occorre intervenire per limitare i rischi in strada. Abbiamo due gambe, due braccia, due occhi, […] L'articolo Cellulare alla guida, svolta clamorosa: nessuna pietà per i trasgressori proviene da ContoCorrenteOnline.it.",
      content:
        "Chi usa il cellulare alla guida dovrà essere punito severamente, questa la richiesta della Polizia Locale. La normativa attuale non basta a disincentivarne l’uso. Il numero di incidenti provocati da persone al cellulare durante la guida è sempre più alto. Occorre intervenire per limitare i rischi in strada. window._tgvtag = window._tgvtag || []; window._tgvtag.players = window._tgvtag.players || [];window._tgvtag.players.push( { 'placement': 'videoplayer-outstream','id': 765, 'type': 'outstream'} ); Adobe Stock Abbiamo due gambe, due braccia, due occhi, un naso, una bocca, due piedi e un cellulare. Lo smartphone è diventato una parte di noi e sempre più persone non riescono a distaccarsi nemmeno per un breve tragitto in macchina. Per rispondere ad una chiamata o, peggio, ad un messaggio, aumenta notevolmente il rischio di distrazione e, dunque, di incidenti. Si mette a repentaglio, così, la propria vita, quella dei passeggeri nonché quella di altri automobilisti o dei pedoni. Eppure il pericolo sembra non spaventare così è costretto ad intervenire il Codice della Strada. Se chi sta al volante viene beccato al cellulare scatta una multa e solo in caso di recidività la sospensione della patente da uno a tre mesi. Troppo poco secondo il comandante della Polizia Locale di Verona Luigi Altamura. Cellulare alla guida, una pena più severa per l’infrazione L’articolo 173 del Codice della Strada punisce poco severamente i conducenti che durante la marcia utilizzano smartphone, pc, notebook, tablet e device in generale. Questo è il parere del comandante Altamura. Nasce dalla constatazione che il numero di incidenti – anche mortali – causati dal cellulare alla guida è in costante crescita. Dopo 31 anni di servizio, il comandante è certo della necessità di un cambiamento del CdS con l’introduzione della revoca immediata della patente per chi viene colto in flagranza di reato. Se la paura di incidenti, della morte e dell’uccisione di altre persone non dissuade, serve una pena più severa che funga da deterrente. I dati Istat avvalorano la tesi di Altamura. La distrazione è ai primi posti della classifica delle cause di incidenti stradali, seguita dall’eccessiva velocità e dalle mancate precedenze. Controlli più stringenti per i conducenti di veicoli Secondo il comandate Altamura per identificare il maggior numero di trasgressori della normativa è necessario lasciarsi aiutare proprio dalla tecnologia. Telecamere gestite da remoto potrebbero essere la soluzione per diminuire il numero di incidenti. La tecnica è già usata in Francia e si rivelerebbe utile anche in Italia. In più dovrebbero aumentare i controlli per stanare chi guida ubriaco o sotto l’effetto di sostanze stupefacenti. Sarebbe opportuno, secondo Altamura, introdurre il drogometro oltre all’alcool test. Insomma, il comandante richiede una serie di interventi che rendano le direttive del Codice della Strada più stringenti soprattutto per chi usa il cellulare alla guida. Spetterà al Parlamento decidere come agire nei prossimi mesi o anni. L'articolo Cellulare alla guida, svolta clamorosa: nessuna pietà per i trasgressori proviene da ContoCorrenteOnline.it.",
      pubDate: "2022-10-06 20:40:43",
      image_url: null,
      source_id: "contocorrenteonline",
      country: ["italy"],
      category: ["business"],
      language: "italian",
    },
    {
      title:
        "Liveblog voetbal | Feyenoord leidt met 1-2 bij Midtjylland, AZ geeft voorsprong weg",
      link: "https://www.nu.nl/sport/6228324/feyenoord-leidt-met-1-2-bij-midtjylland-az-geeft-voorsprong-weg.html",
      keywords: ["Sport", "Voetbal"],
      creator: ["onze sportredactie"],
      video_url: null,
      description: null,
      content: null,
      pubDate: "2022-10-06 20:40:43",
      image_url:
        "https://media.nu.nl/m/is8xjlxak961_sqr256.jpg/feyenoord-leidt-met-1-2-bij-midtjylland-az-geeft-voorsprong-weg.jpg",
      source_id: "nu",
      country: ["netherland"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title:
        "Geen Justin Bieber in Sportpaleis: popster schort rest van wereldtournee op",
      link: "https://www.hln.be/celebrities/geen-justin-bieber-in-sportpaleis-popster-schort-rest-van-wereldtournee-op~abb71da4/",
      keywords: null,
      creator: ["SVM"],
      video_url: null,
      description:
        "Justin Bieber heeft alle resterende optredens van zijn wereldtournee geannuleerd en schuift de shows door naar een later moment in 2023. Dat betekent dat de Canadese zanger op 20 en 21 maart niet in het Antwerpse Sportpaleis staat.",
      content: null,
      pubDate: "2022-10-06 20:40:09",
      image_url:
        "https://images0.persgroep.net/rcs/Pm4TjOeEm0N6bHq4Co9S-_T9llc/diocontent/210743828/_fitwidth/400/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
      source_id: "hln",
      country: ["belgium"],
      category: ["entertainment"],
      language: "dutch",
    },
    {
      title:
        "Juventus, multa dalla UEFA per il mancato rispetto delle regole economiche",
      link: "https://www.milannews.it/l-avversario/juventus-multa-dalla-uefa-per-il-mancato-rispetto-delle-regole-economiche-468718",
      keywords: ["L'Avversario"],
      creator: null,
      video_url: null,
      description:
        "Nella relazione finanziaria pubblicata quest'oggi, la Juventus ha reso noti i dettagli della procedura che il Club Financial Control Body di UEFA ha aperto nei confronti del club bianconero. La Juve ha ricevuto una multa di 3.",
      content: null,
      pubDate: "2022-10-06 20:40:00",
      image_url:
        "https://net-storage.tcccdn.com/storage/milannews.it/img_notizie/thumb3/cf/cf87901c0564e9e21bb835c16d01355c-96864-oooz0000.jpeg",
      source_id: "milannews",
      country: ["italy"],
      category: ["sports"],
      language: "italian",
    },
    {
      title:
        "Alcaldesa de Villa Reyes murió en un accidente de tránsito, confirmó FGE",
      link: "https://www.infobae.com/america/mexico/2022/10/06/alcaldesa-de-villa-reyes-murio-en-un-accidente-de-transito-confirmo-fge/",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Horas antes de su muerte, Erika Briones compartió una foto en redes sociales acompañada de un caballo",
      content:
        "La presidenta municipal de Villa de Reyes falleció esta mañana en un accidente automovilístico (foto: Erika Briones Pérez/Twitter)Recientemente la Fiscalía General del Estado (FGE) confirmó el fallecimiento de la presidenta municipal de Villa de Reyes, Erika Irazema Briones Pérez, en un accidente automovilístico.El accidente tuvo lugar en el Libramiento Poniente de San Luis Potosí, la mañana de este jueves. Derivado de ello, cuatro personas resultaron sin vida, entre ellas la alcaldesa.Se suscito cerca de las 11:00 horas en la rúa kilómetro 51 - 800 Villa de Arriaga, entre una camioneta y un tractocamión. El área de Servicios Periciales de la FGE llevó a cabo las diligencias correspondientes para el levantamiento de los cuerpos y poder trasladarlos al Servicio Médico Legal (SEMELE), de tal modo que se puedan llevar a cabo las necropsias correspondientes.La alcaldesa iba acompañada de sus dos escoltas, quienes también fallecieron en el impacto y el director de Relaciones Públicas, Aldo Partida, quien fue trasladado a un hospital de emergencia para ser atendido por las lesiones severas que presentó.La Fiscalía General del Estado, expresa sus más sinceras condolencias y se une a la pena por el sensible fallecimiento de la Presidenta Municipal. Nos solidarizamos con el dolor que embarga a sus familiares y amigos, les deseamos fortaleza y resignación en estos momentos. pic.twitter.com/SIk81iPeFd— Fiscalía San Luis Potosí (@FiscaliaSLP) October 6, 2022Asimismo, se llevan a cabo los peritajes en el lugar del accidente para poder determinar las causas del mismo.Por otro lado, el H. Ayuntamiento de Villa de Reyes también confirmó el accidente en que falleció Erika Briones Pérez, quien como de costumbre se dirigía a sus actividades programadas del jueves 6 de octubre en el municipio.Los primeros informes indican que el tractocamión que transportaba jitomate habría perdido el control en una curva a la altura del kilómetro 55, de tal forma que la caja de la unidad empujó la camioneta hacia un barranco.En la caída al desfiladero murieron un total de cuatro personas, mientras que el conductor de la pesada unidad sobrevivió con heridas, según la información proporcionada por el gobernador Gallardo Cardona.El gobernador de San Luis Potosí mostró sus condolencias ante el deceso de la alcaldesa Erika Briones (foto: Ricardo Gallardo Cardona/Facebook)Al mismo tiempo el gobernador de San Luis Potosí, Ricardo Gallardo Cardona, a través de redes sociales corroboró la noticia: “Hoy perdimos en un accidente automovilístico a una gran mujer, una gran amiga y compañera de años de lucha. Descanse en paz, Erika Briones, presidenta municipal de Villa de Reyes”, se pudo leer en su perfil de Facebook.Acompañó su mensaje con una imagen que portaba un listón negro y unas palabras en las que expresaba sus condolencias a los familiares y amigos de la fallecida.Horas antes de que se diera a conocer la lamentable noticia, la alcaldesa por medio de su perfil personal de Twitter compartió una foto de ella misma junto a caballo, en la que se le veía feliz y motivada.Erika Briones se incorporó a la política con Ricardo Gallardo Juárez, quien es padre del actual gobernador del estado, cuando el grupo político de la Gallardearía abandonó el Partido de la Revolución Democrática (PRD) para incorporarse en el Partido Verde Ecologista de México (PVEM).Bonito día a todas y todos 🥰 pic.twitter.com/PMO0BoheDQ— Erika Briones Pérez (@ErikaBrionesMX) October 6, 2022Su muerte se suma al asesinato de la diputada local de Morelos, Gabriela Marín, quien fue embestida a balazos por un grupo de sicarios a bordo de una motocicleta, mismos que lograron darse a la fuga.Los reportes indicaron que la funcionaria fue interceptada en la colonia El Empleado sobre la avenida Poder Legislativo, alrededor de las 18:00 horas el miércoles 5 de octubre.Ese mismo día se reportó un ataque contra el alcalde de San Miguel Totolapan, Conrado Mendoza Almeda, medios locas informaron que junto con su padre y algunos miembros de la policía fallecieron, derivado de la agresión suscitada en el ayuntamiento.SEGUIR LEYENDO:“El gobierno se escudará atrás del Ejército”: así reaccionó Margarita Zavala al asesinato del alcalde de GuerreroMataron a balazos a diputada Gabriela Marín en CuernavacaMataron al alcalde de San Miguel Totolapan, a su padre y a varios policías",
      pubDate: "2022-10-06 20:40:00",
      image_url: null,
      source_id: "infobae",
      country: ["united states of america", "mexico", "argentina", "colombia"],
      category: ["top"],
      language: "spanish",
    },
    {
      title: "Rescatan a 43 perritos por presunto maltrato animal en Monterrey",
      link: "https://www.publimetro.com.mx/nuevo-leon/2022/10/06/que-va-a-pasar-con-los-perritos-rescatados-por-medio-ambiente-en-monterrey/",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Los canes estaban en condiciones inadecuadas y sin supervisión veterinaria",
      content: null,
      pubDate: "2022-10-06 20:39:57",
      image_url: null,
      source_id: "publimetro",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title: "Biden verleent gratie aan veroordeelden voor marihuanabezit",
      link: "https://nos.nl/l/2447349",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        'President Biden verleent gratie aan iedereen die ooit een federale veroordeling heeft gekregen voor het in bezit hebben van marihuana. Volgens de Amerikaanse regering gaat het om duizenden Amerikanen. Daarmee lost Biden een campagnebelofte in en maakt hij tevens een eerste stap in de richting van de decriminalisering van marihuana. "Mensen naar de gevangenis sturen voor het bezit van marihuana heeft te veel levens overhoop gegooid en mensen zijn opgesloten voor gedrag dat in veel staten niet langer verboden is", zei hij in een verklaring. Die mensen kregen een strafblad waardoor ze moeilijker een baan, huisvesting of onderwijs konden krijgen. Ook werden volgens Biden bruine en zwarte mensen veel vaker veroordeeld voor marihuanabezit dan witte mensen. Momenteel zit er volgens het Witte Huis niemand in een federale gevangenis voor het in bezit hebben van marihuana. Biden geeft het ministerie van Volksgezondheid en procureur-generaal Garland opdracht snel een oordeel te geven over de classificatie van marihuana in de federale wetgeving. Een nieuwe classificatie is een eerste stap naar mogelijke versoepeling of afschaffing van straffen voor het bezit van de drug. Marihuana wordt momenteel gelijkgesteld met heroïne en LSD. Verder werkt het ministerie van Justitie aan een certificaat dat mensen die gratie hebben gekregen, kunnen laten zien aan bijvoorbeeld potentiële werkgevers.',
      content: null,
      pubDate: "2022-10-06 20:39:41",
      image_url: "https://cdn.nos.nl/image/2022/10/06/903454/1008x567.jpg",
      source_id: "nos",
      country: ["netherland"],
      category: ["top"],
      language: "dutch",
    },
    {
      title:
        "Var: des joueurs espoirs du RCT déguisés en policiers américains font polémique",
      link: "https://www.bfmtv.com/var/var-des-joueurs-espoirs-du-rct-deguises-en-policiers-americains-font-polemique_AN-202210060775.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Les joueurs espoirs du Racing club toulonnais ont revêtu un uniforme de l'unité d'intervention des forces de police des États-Unis. Une vidéo a été publiée sur les réseaux sociaux avant d'être supprimée.",
      content: null,
      pubDate: "2022-10-06 20:39:41",
      image_url:
        "https://images.bfmtv.com/9aVC9MEdWzv8DWDnsspMATsouLY=/0x0:1024x576/800x0/images/joueurs-RCT-1496058.jpg",
      source_id: "bfmtv",
      country: ["france"],
      category: ["top"],
      language: "french",
    },
    {
      title:
        "Metrobús cerrará la estación CCH Oriente en CDMX: Estas son las razones",
      link: "https://www.elfinanciero.com.mx/cdmx/2022/10/06/metrobus-cerrara-la-estacion-cch-oriente-en-cdmx-estas-son-las-razones/",
      keywords: null,
      creator: ["Redacción"],
      video_url: null,
      description:
        "El Metrobús anunció el cierre de la estación CCH Oriente de la línea 2, pero, ¿a qué se debe? Autoridades comentan que las afectaciones por vehículos de carga están relacionadas.",
      content:
        "El Metrobús de la Ciudad de México informó que la estación CCH Oriente de la Línea 2 (morada), tendrá un cierre parcial del 10 al 22 de octubre por trabajos de mantenimiento.De acuerdo con un comunicado, el servicio de transporte dijo que el cierre será únicamente para la dirección a Tacubaya, por lo que las personas podrán usar la estación en dirección a Tepalcates. ¿Por qué cerrará la estación CCH Oriente del Metrobús?El Metrobús informó que el cierre se debe a trabajos de mantenimiento y mejoramiento en la infraestructura de la techumbre de la estación en la dirección que va a Tacubaya.Estas labores se deben a los daños provocados por “vehículos de carga que ingresan al carril confinado”, informó el servicio de transporte en un comunicado. Al ser el cierre únicamente en una estación y de manera parcial, el servicio del Metrobús continuará de manera normal y no será necesario que la ruta de los camiones rojos se detenga.Como alternativa al cierre de la estación CCH Oriente del Metrobús, las autoridades informan que las alternativas son ingresar a la línea 2 por las estaciones Leyes de Reforma y Constitución de Apatzingan, ubicadas a 6 minutos caminando.La apertura de la estación CCH Oriente se estima para el 23 de octubre. Evita aglomeraciones: Estas son las nuevas rutas del Metrobús de CDMXA finales de septiembre el Metrobús de la Ciudad de México informó la apertura de nuevas rutas de servicio, esto con la finalidad de hacer recorridos más cortos que funcionen para las personas que no se dirijan hasta las terminales, lo que ayudará dividir a las personas y mejorar el flujo de los convoys.Estas son las rutas del Metrobús que ya operan en las líneas 4, 5, 6 y 7: Línea 4San Lázaro a Terminales 1 y 2 del Aeropuerto (AICM)Buenavista a San Lázaro (Ruta Sur)Buenavista a San Lázaro (Ruta Norte)Pantitlán a HidalgoHidalgo a Alameda OrienteLa nuevas rutas son: Pantitlán a República de Argentina para Ruta NorteSan Lázaro a Museo de la Ciudad para Ruta SurLínea 5Rio de los Remedios a Preparatoria 1Río de los Remedios a San Lázaro (Norte)Las Bombas a San Lázaro (Sur)Se incorpora la ruta:San Lázaro (Sur) a Preparatoria 1.Línea 6Villa de Aragón a El RosarioVilla de Aragón a IPNSe incorpora la ruta:Deportivo 18 de Marzo a El RosarioLínea 7Indios Verdes a Campo MarteHospital Infantil La Villa a Campo MarteGlorieta Cuitláhuac a Campo MarteIndios Verdes a La DianaHospital Infantil La Villa a La DianaSe incorporan las siguientes rutas:Garibaldi a La DianaIndios Verdes a Hamburgo",
      pubDate: "2022-10-06 20:39:40",
      image_url: null,
      source_id: "elfinanciero",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title: "LAGOS presenta el sencillo ‘Permanente’",
      link: "https://www.publimetro.com.mx/entretenimiento/2022/10/06/lagos-presenta-nueva-cancion-permanente-en-vivo-en-concierto-auditorio-bb-de-la-cdmx/",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "A la par, se preparan para su primer show en la CDMX el próximo 8 de octubre",
      content: null,
      pubDate: "2022-10-06 20:39:34",
      image_url: null,
      source_id: "publimetro",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "ProSieben: Jenke spricht mit einem Mörder – Zuschauer reagieren schockiert! „Absolute Blamage“",
      link: "https://www.derwesten.de/panorama/promi-tv/prosieben-jenke-crime-dieter-gurkasch-e-id300018553.html",
      keywords: ["Promi-TV"],
      creator: null,
      video_url: null,
      description:
        "Es ist wohl für manche schwer auszuhalten. Der Sender ProSieben hat am Dienstagabend (27.09) eine neue Folge von „Jenke Crime“ ausgestrahlt. Dort spricht der investigative Journalist  Jenke von Wilmsdorff mit Kriminellen und konfrontiert diese mit ihren Taten. Für manche Zuschauer von ProSieben ist das allerdings nur schwer auszuhalten. Denn schließlich ist die Frage der Sendung […]",
      content: null,
      pubDate: "2022-10-06 20:39:18",
      image_url:
        "https://www.derwesten.de/wp-content/uploads/sites/8/2022/09/Prosieben-Jenke.jpg?w=1568",
      source_id: "derwesten",
      country: ["germany"],
      category: ["entertainment"],
      language: "german",
    },
    {
      title:
        "Piden transparentar sorteo de la Fiesta de las Culturas Indígenas en CDMX",
      link: "https://www.publimetro.com.mx/noticias/2022/10/06/piden-transparentar-sorteo-de-la-fiesta-de-las-culturas-indigenas-cdmx/",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Comunidades indígenas denuncia que no hay transparencia en el sorteo para poder vender la Fiesta de las Culturas Indígenas.",
      content: null,
      pubDate: "2022-10-06 20:38:34",
      image_url: null,
      source_id: "publimetro",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Mazzu trekt zich op aan inzet van zijn spelers: “Dit is de weg om uit de donkere tunnel te geraken”",
      link: "https://www.hln.be/champions-league-en-europa-league/mazzu-trekt-zich-op-aan-inzet-van-zijn-spelers-dit-is-de-weg-om-uit-de-donkere-tunnel-te-geraken~aa7b6863/",
      keywords: null,
      creator: ["Kjell Doms"],
      video_url: null,
      description:
        "Frustrerende avond voor Felice Mazzu. Anderlecht speelde verdienstelijk tegen West Ham, maar kreeg toch weer een nieuwe opdoffer te verwerken. “We verdienen deze nederlaag niet.”",
      content: null,
      pubDate: "2022-10-06 20:38:29",
      image_url:
        "https://images0.persgroep.net/rcs/y7guVLdBphfUPWsptlRkH1Pc-OQ/diocontent/222354273/_fitwidth/400/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
      source_id: "hln",
      country: ["belgium"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title: "Kreml: Selenskyj will den Dritten Weltkrieg",
      link: "https://www.berliner-zeitung.de/news/kreml-wolodymyr-selenskyj-will-den-dritten-weltkrieg-gegen-russland-li.274175",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Die Nato muss den Einsatz russischer Atomwaffen verhindern – notfalls mit eigenen Präventivschlägen, so Selenskyj. Sein Sprecher rudert zurück. Russland ist entsetzt.",
      content: null,
      pubDate: "2022-10-06 20:38:29",
      image_url:
        "https://berliner-zeitung.imgix.net/2022/10/04/ab4c5fec-dc1e-488e-86b1-ab51d3bd4539.jpeg",
      source_id: "berliner-zeitung",
      country: ["germany"],
      category: ["top"],
      language: "german",
    },
    {
      title:
        'Angela Merkel: Frieden in Europa "nur unter Einbeziehung Russlands"',
      link: "https://www.t-online.de/nachrichten/deutschland/id_100062654/angela-merkel-frieden-in-europa-nur-unter-einbeziehung-russlands-.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Die Altkanzlerin warnt davor, die russischen Drohungen auf die leichte Schulter zu nehmen. Auch ihre politischen Anfänge kommen zur Sprache.",
      content: null,
      pubDate: "2022-10-06 20:38:29",
      image_url:
        "https://images.t-online.de/2022/10/nFmrSMJVlj1v/0x0:2048x1152/fit-in/0x0/angela-merkel-die-altkanzlerin-war-zu-gast-bei-einem-festakt-der-sueddeutschen-zeitung.jpg",
      source_id: "t-online",
      country: ["germany"],
      category: ["politics"],
      language: "german",
    },
    {
      title:
        "Roma-Betis: nouveau coup dur pour Fekir, qui sort encore sur blessure",
      link: "https://rmcsport.bfmtv.com/football/europa-league/roma-betis-nouveau-coup-dur-pour-fekir-qui-sort-encore-sur-blessure_AV-202210060774.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Alors qu’il venait tout juste de faire son retour sur les terrains après un mois d’absence, Nabil Fekir est sorti sur blessure ce jeudi soir après 22 minutes de jeu contre l’AS Roma en Ligue Europa.",
      content: null,
      pubDate: "2022-10-06 20:38:25",
      image_url:
        "https://images.bfmtv.com/7RC_lItO0ZlHYlkjI4TV6g5r2PM=/0x20:1808x1037/800x0/images/Fekir-contre-l-AS-Roma-1496061.jpg",
      source_id: "rmcsport",
      country: ["france"],
      category: ["sports"],
      language: "french",
    },
    {
      title: "Les expositions immersives à vivre à Paris et en Île-de-France",
      link: "https://www.sortiraparis.com/arts-culture/exposition/guides/263322-les-expositions-immersives-a-vivre-a-paris-et-en-ile-de-france",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "À Paris, les expositions insolites se multiplient dans la capitale. Entre expériences immersives, oeuvres interactives, et balades sensorielles, ces expos ont de quoi vous faire planer. On vous embarque à la découverte de ces évènements canons à ne pas manquer !",
      content: null,
      pubDate: "2022-10-06 20:38:15",
      image_url:
        "https://cdn.sortiraparis.com/images/800/99390/791144-foire-foraine-d-art-contemporain-l-exposition-ludique-et-immersive-du-104-nos-photos.jpg",
      source_id: "sortiraparis",
      country: ["france"],
      category: ["top"],
      language: "french",
    },
    {
      title:
        "Vacances de la Toussaint 2022 en famille : les expositions et musées pour enfants à Paris",
      link: "https://www.sortiraparis.com/enfant-famille/guides/150466-vacances-de-la-toussaint-2022-en-famille-les-expositions-et-musees-pour-enfants-a-paris",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Les vacances scolaires de la Toussaint arrivent à toute vitesse. Il est temps pour les enfants de décompresser un peu. Sortiraparis vous aide dans votre organisation pour trouver de quoi divertir vos enfants du samedi 22 octobre au dimanche 6 novembre 2022, qu'il fasse beau ou pas. C'est décidé, pendant les vacances, on s'amuse !",
      content: null,
      pubDate: "2022-10-06 20:38:15",
      image_url:
        "https://cdn.sortiraparis.com/images/800/91912/583888-bio-inspiree-la-nouvelle-expo-permanente-a-la-cite-des-sciences-et-de-l-industrie.jpg",
      source_id: "sortiraparis",
      country: ["france"],
      category: ["top"],
      language: "french",
    },
    {
      title:
        "Tintin, l'aventure immersive à l'Atelier des Lumières, l'exposition insolite à découvrir",
      link: "https://www.sortiraparis.com/arts-culture/exposition/articles/280644-tintin-l-aventure-immersive-a-l-atelier-des-lumieres-l-exposition-insolite-a-decouvrir",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Le plus célèbre des reporters vient mener son enquête à l'Atelier des Lumières : du 21 octobre au 20 novembre 2022, Culturespaces et Moulinsart présentent Tintin, l'aventure immersive, une exposition inédite à découvrir sans attendre.",
      content: null,
      pubDate: "2022-10-06 20:38:15",
      image_url:
        "https://cdn.sortiraparis.com/images/800/88384/788242-tintin-l-aventure-immersive-une-exposition-insolite-a-decouvrir-a-l-atelier-des-lumieres.jpg",
      source_id: "sortiraparis",
      country: ["france"],
      category: ["top"],
      language: "french",
    },
    {
      title:
        "Les 15 expositions incontournables à découvrir en ce moment à Paris et en Île-de-France",
      link: "https://www.sortiraparis.com/arts-culture/exposition/guides/272438-les-15-expositions-incontournables-a-decouvrir-en-ce-moment-a-paris-et-en-ile-de-france",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Chaque mois, les musées et les galeries de Paris et d'Île-de-France nous proposent des expositions toujours plus nombreuses. Pour vous aider à choisir votre prochaine sortie dans cette foule de propositions, nous avons sélectionné pour vous les 15 expositions incontournables à voir en octobre 2022.",
      content: null,
      pubDate: "2022-10-06 20:38:15",
      image_url:
        "https://cdn.sortiraparis.com/images/800/99520/794780-entree-carnavalet.jpg",
      source_id: "sortiraparis",
      country: ["france"],
      category: ["top"],
      language: "french",
    },
    {
      title:
        '"¡La OEA es atea!", exclaman miles de ultraconservadores en protesta en Lima',
      link: "https://www.infobae.com/america/agencias/2022/10/06/la-oea-es-atea-exclaman-miles-de-ultraconservadores-en-protesta-en-lima/",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content:
        '"¡La OEA es atea, te quiere sin dios y sin familia!", corearon este jueves miles de activistas de la derecha religiosa durante una marcha en rechazo a la "agenda progresista" de la asamblea anual del organismo en Lima, que aborda los derechos de las minorías sexuales.Los manifestantes marcharon durante casi tres horas hacia el Centro de Convenciones de Lima, lanzando a viva voz consignas en contra del aborto y la "ideología de género"."No OEA, aquí no decides" y "OEA basta de interferir" fueron parte de los lemas que acompañaron la marcha caracterizada por las pañoletas celestes que vestían los activistas.Los miembros de los colectivos rechazan lo que califican de "agenda progresista" de la Organización de los Estados Americanos (OEA) debido a que el cónclave tiene como lema "Juntos contra la desigualdad y la discriminación"."La OEA es atea, es una organización que no cree en dios, no temen a dios", dijo a la AFP Abdiel Caico, de 58 años, un pastor evangélico del Movimiento Misionero Mundial.Entre los activistas marcharon ciudadanos de México, El Salvador, Argentina, Costa Rica y Uruguay, entre otros países representados en la OEA."Estamos aquí defendiendo la familia, defendiendo la vida por el alma de América. No podemos sexualizar la vida, las comunidades y naciones", afirmó la congresista de República Dominicana Soraya Suárez, presente en el lugar.Como un mantra, los manifestantes no cesaban de corear "Somos provida", "no al aborto, escucha OEA", mientras avanzaban hacia la sede de la Asamblea General."Hemos venido a hacer conocer nuestra voz a la OEA, queremos que vean que toda Latinoamérica defiende la vida. Hay una ideología de género que están tratando de imponer", afirmó de su lado la argentina Mirtha Cocinero, del Movimiento para el Liderazgo.- Agenda progresista -La discriminación y los derechos de las minorías, como LGTBIQ+, fueron parte del debate de la sesión del miércoles entre los delegados de los países y los grupos de la sociedad civil. En dicha sesión se gritaron consignas y alzaron pancartas en favor del "aborto libre"."La discriminación surge de la conciencia de clase alta o clase apoderada, del machismo, de la conciencia de la piel blanca (...) A partir de esos actos conscientes se discrimina a pobres, mujeres, población LGBTI, a población indígena y afrodescendiente, pequeños campesinos o pobladores rurales", dijo el secretario general de la OEA, Luis Almagro, al inaugurar la cita el miércoles.La marcha de este jueves no es la primera muestra de rechazo contra la OEA. El lunes, frente al edificio del Congreso de Perú, se estacionó un camión con el cartel "OEA: a la mujer la define la biología, no la ideología".Hace unos años protestaban contra la OEA movimientos de izquierda, que la acusaban de ser instrumento de Estados Unidos, país que aporta más del 50% de su presupuesto anual.En Lima la OEA retomó las asambleas presenciales, después de dos encuentros en formato virtual por la pandemia de covid-19.cm/ljc/dl',
      pubDate: "2022-10-06 20:38:01",
      image_url: null,
      source_id: "infobae",
      country: ["united states of america", "mexico", "argentina", "colombia"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Europejscy przywódcy spotkali się w Pradze. Morawiecki: Rosja jest w pełnej izolacji",
      link: "https://wiadomosci.onet.pl/swiat/szczyt-w-pradze-morawiecki-rosja-jest-w-pelnej-izolacji/j2bcdmg",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content:
        "Szczyt Europejskiej Wspólnoty Politycznej w Pradze potwierdził, że Rosja jest w pełnej izolacji i to nie tylko od państw UE; wszystkie one potępiają agresję Rosji — powiedział w czwartek w Pradze premier Mateusz Morawiecki na konferencji prasowej.",
      pubDate: "2022-10-06 20:37:59",
      image_url: null,
      source_id: "wiadomosci",
      country: ["poland"],
      category: ["science", "health"],
      language: "polish",
    },
    {
      title:
        "Elon Musk afirmó que Twitter rechazó suspender el juicio en su contra y vuelve a peligrar el acuerdo de compra",
      link: "https://www.infobae.com/america/eeuu/2022/10/06/elon-musk-afirmo-que-twitter-rechazo-suspender-el-juicio-en-su-contra-y-vuelve-a-peligrar-el-acuerdo-de-compra/",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Con la carta enviada este lunes, el magnate buscó evitar la instancia judicial en Delaware, en la que no se vería favorecido, pero la empresa se niega a cerrar el proceso a pesar de aceptar la oferta",
      content:
        "Elon Musk afirmó que Twitter rechazó suspender el juicio en su contra y peligra el acuerdo de compra (REUTERS) (DADO RUVIC/)Un nuevo capítulo en la interna Musk-Twitter tuvo lugar este jueves cuando el CEO de Tesla y SpaceX afirmó que la red social rechazó suspender su querella judicial.Con esto, peligra la fusión acordada a principios de la semana entre el hombre más rico del mundo y la popular red social, ya que una de las condiciones que figuraban en la carta enviada era el cese de todos los procesos judiciales en su contra, lo cual Twitter se niega a hacer.Los abogados de Musk pidieron al tribunal de Delaware -donde aún está previsto que el 17 de octubre comience el juicio por inumplimiento- que dé por concluida esta instancia -con la que se buscaba que avance con la compra de la empresa tras haberse comprometido a ello y, luego, dar marcha atrás-.Inclusive, Musk lo había puesto como condición para cerrar el acuerdo esta semana. Sin embargo, si bien Twitter hizo mención este martes a su voluntad por cerrar el trato bajo las condiciones que se mencionaron en la última carta del CEO, no hicieron referencia al pedido sobre los litigios.Twitter se niega a finalizar los juicios contra Musk, a pesar de su reciente oferta de compra (AFP) (EDEN EZRA/)Asimismo, la jueza de Delaware Kathaleen McCormick dijo que no le han solicitado suspender el encuentro que se avecina, por lo que ella planea seguir adelante con el proceso judicial.Según un documento que la agencia AFP pudo constatar, los letrados de Musk argumentaron que el multimillonario propuso el lunes honrar su compromiso y lamentan que Twitter “insista en continuar el proceso, poniendo en peligro la transacción y jugando con los intereses de los accionistas”.También mencionaron que “no hay necesidad de realizar un juicio en el que se solicite hacer lo que ya se está haciendo” e insistieron en que no hay motivos para pensar que el hombre más rico del mundo no va a obtener de los bancos los fondos que necesita para completar la operación.Por último, la defensa mencionó en el comunicado que seguir adelante con la medida sería un “enorme desperdicio de recursos” que “socavará la capacidad de las partes para cerrar la transacción”.Ahora, una cuestión clave será la financiación de la operación, ya que Musk había negociado con varios bancos para que lo ayudaran a pagar la compra. Habrá que ver si esos compromisos se mantienen o si las entidades exigen condiciones diferentes, lo que podría ponerlo nuevamente en un incumplimiento del acuerdo.Tras meses de polémica, a comienzos de la semana, las partes involucradas anunciaron que, finalmente, se había cerrado el acuerdo por la compra-venta de Twitter.A comienzos de la semana, las partes habían mostrado su voluntad por cerrar el acuerdo por un valor de 44.000 millones de dólares (AFP) (EDEN EZRA/)La transacción fue acordada por 44.000 millones de dólares “en términos y sujeto a las condiciones establecidas en el escrito de fusión del 25 de abril del 2022″, informó Musk en una carta enviada a la compañía y a la Comisión del Mercado de Valores de Estados Unidos (SEC sus siglas en inglés).Sin embargo, muchos especialistas afirmaron que este repentino cambio de postura del CEO tuvo un fuerte componente estratégico ya que se dio a dos semanas del comienzo de un juicio que habría sido poco favorable para él.Eric Talley, profesor en la Universidad de Columbia, explicó que esto no le resultó extraño ya que “en el aspecto legal, su caso no era muy fuerte. Parecía un típico escenario de un comprador arrepentido”.Además, agregó que si perdía el caso, no sólo se hubiera visto a concretar la compra sino también a afrontar el pago de intereses que hubieran aumentado el precio.(Con información de AFP y EFE)SEGUIR LEYENDO:Elon Musk habló tras la confirmación de que comprará Twitter y reveló que planea lanzar una nueva appTras meses de polémica, Elon Musk será el dueño de Twitter: la empresa aceptará la nueva ofertaLos planes de Elon Musk para Twitter siguen siendo un misterio",
      pubDate: "2022-10-06 20:37:53",
      image_url: null,
      source_id: "infobae",
      country: ["united states of america", "mexico", "argentina", "colombia"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Los Presupuestos del Estado del 2023 prevén más dinero para ampliar El Cabril y para el aeropuerto",
      link: "https://www.diariocordoba.com/cordoba-ciudad/2022/10/06/presupuestos-2023-preven-dinero-ampliar-76948601.html",
      keywords: null,
      creator: ["Isabel Leña"],
      video_url: null,
      description:
        "La ampliación de El Cabril, que afronta una nueva reforma, aparece en el proyecto de presupuestos estatales con una partida de casi 6 millones en dos epígrafes distintos (5,3, por un lado, y 523.000 para una planta fotovoltaica, por otro, frente a los 4,9 millones reflejados en las cuentas de este ejercicio). No obstante, el inicio de la ampliación de El Cabril está prevista para el 2025. La autorización para dar más espacio al almacén nuclear no se espera que llegue antes del 2024, año para el que el documento refleja 10 millones, que en el 2025 ascenderán a 24,1 y en el 2028, a 21,1.",
      content: null,
      pubDate: "2022-10-06 20:37:44",
      image_url:
        "https://estaticos-cdn.prensaiberica.es/clip/14e736c2-06de-4a49-a025-4560900099ff_16-9-aspect-ratio_default_0.jpg",
      source_id: "diariocordoba",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Senador de EEUU confronta y amenaza a Elon Musk por su postura ante conflicto en Ucrania",
      link: "https://sputniknews.lat/20221006/senador-de-eeuu-confronta-y-amenaza-a-elon-musk-por-su-postura-ante-conflicto-en-ucrania--1131249480.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Luego de que el empresario Elon Musk publicara una propuesta de paz para el conflicto entre Kiev y Moscú, fue confrontado por el senador Lindsey Graham, quien le sugirió formarse una mejor opinión sobre el tema.",
      content: null,
      pubDate: "2022-10-06 20:37:34",
      image_url: null,
      source_id: "sputnik_mundo",
      country: ["spain"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Anna Sorokin permanecerá detenida en su domicilio mientras espera para apelar contra su deportación",
      link: "https://www.infobae.com/america/eeuu/2022/10/06/anna-sorokin-permanecera-detenida-en-su-domicilio-mientras-espera-para-apelar-contra-su-deportacion/",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "La mujer que se volvió viral a raíz de la serie de Netflix “Inventing Anna” fue beneficiada con esta decisión tras haber pasado más de tres años tras las rejas",
      content:
        "Anna Sorokin permanecerá con prisión domiciliaria mientras espera poder apelar en su caso por inmigración (AP) (Richard Drew/)Este miércoles, un juez de inmigración de los Estados Unidos facilitó a Anna Sorokin el beneficio de detención domiciliaria. La acusada está a la espera de poder apelar contra su deportación. Las autoridades migratorias explican que su visa está excedida y, por tanto, debe ser devuelta a Alemania.Ella quiere “limpiar su nombre”, señaló en oportunidades anteriores su abogada Audrey A. Thomas. “Es de su interés continuar con la apelación porque tiene toda su identidad en juego”.Sorokin, de 31 años, está bajo custodia del Servicio de Control de Inmigración y Aduanas (ICE) desde marzo de 2021, tras haber estado tres años tras las rejas. Su caso se volvió viral ya que se la investiga por estafar a bancos, hoteles y amigos para financiar un lujoso estilo de vida. Para esto, la joven decía ser hija de un magnate del petróleo e, incluso, de un diplomático.Netflix se inspiró en su historia para hacer la serie “Inventing Anna”, donde muestran que bajo el nombre Anna Delvey simuló una vida de lujos con la que llevó a cabo múltiples estafas.Bajo el nombre Anna Delvey, la muejr simuló una vida de lujos con la que llevó a cabo múltiples estafasSegún explicó el juez de inmigración de Manhattan, Charles Conroy, para acceder a la detención domiciliaria, Sorokin deberá pagar una fianza de 10.000 dólares, proporcionar una dirección residencial donde permanecerá durante la duración de su caso por inmigración y abstenerse de publicar cualquier tipo de contenido en sus redes sociales.Esta última condición se da a raíz de que la joven estafadora creó una cuenta de Twitter después de su liberación en febrero de 2021, bajo el nombre de Anna Delvey. En ella escribió una serie de cosas como “Buen trabajo @ManhattanDA” y, en su biografía lo único que señaló fue “I´m back”.También, abrió una nueva cuenta de Instagram, en la que estaba muy activa y compartía fotos y videos a menudo.Perfil de Twitter de Ana Sorokin, abierto bajo el nombre de Ana Delvey su seudónimo como estafadora.Por su parte, otro de sus abogados, Duncan Levin, dijo que están “extremadamente satisfechos” con la última resolución del juzgado que le permite la salida del penal.“El juez reconoció legítimamente que Anna no es un peligro para la comunidad”, mencionó Levin en un comunicado por escrito, a lo que agregó: “Si bien todavía hay algunos obstáculos que superar en las condiciones de su liberación, Anna está encantada de salir para poder concentrarse en apelar su condena injusta”.El famoso caso de “Inventing Anna”Sorokin fue condenada en 2019 por múltiples cargos de hurto. A raíz de ello, fue sentenciada a entre 4 y 12 años de prisión, aunque fue liberada por buena conducta al poco tiempo, en febrero de 2021.Sin embargo, unas semanas después fue nuevamente puesta tras las rejas, esta vez por las autoridades de inmigración, quienes explican que la mujer ingresó en el país con una visa, la cual está excedida.Al poco tiempo de haber sido liberada, Sorokin fue nuevamente puesta tras las rejas (AP) (Richard Drew/)Bajo el nombre de Anna Delvey, la mujer se abrió paso entre la élite de Nueva York y se creó una vida inmersa en lujos. Según explicaron los fiscales, simuló tener una fortuna de 67 millones de dólares en el extranjero y aseguraba ser hija de un diplomático o de un magnate del petróleo.Para darle más credibilidad a su historia, Sorokin falsificó documentos, mintió para poder acceder a créditos en diversos bancos, hospedarse en hoteles de lujo y hasta conseguir que personas acaudaladas le pagaran boletos de avión, entre otros gastos. Los fiscales estiman que sus robos ascienden a un total de 275.000 dólares.De acuerdo a Insider, en enero de 2021 Sorokin pagó una restitución de 320.000 dólares a sus víctimas, dinero que recibió de Netflix.(Con información de AP)SEGUIR LEYENDO:“Inventando a Anna”: los personajes de la miniserie que existen en la vida realFingió ser millonaria y engañó a todos: la verdadera historia de Anna, la joven estafadora de la serie furor en Netflix“Inventando a Anna”: por qué la mujer real en la que se basa la historia no ha visto aún la serie",
      pubDate: "2022-10-06 20:37:29",
      image_url: null,
      source_id: "infobae",
      country: ["united states of america", "mexico", "argentina", "colombia"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Martin Rütter: Traurige Szenen! Hunde-Halterin muss TV-Dreh unterbrechen",
      link: "https://www.derwesten.de/panorama/promi-tv/martin-ruetter-hundeprofi-die-grossen-hunde-rtl-sendung-hund-b-id236395837.html",
      keywords: ["Promi-TV", "Martin Rütter"],
      creator: null,
      video_url: null,
      description:
        "Martin Rütter: Beunruhigende Szenen vor der Kamera! Hundehalterin unterbricht TV-Dreh",
      content: null,
      pubDate: "2022-10-06 20:37:27",
      image_url:
        "https://www.derwesten.de/wp-content/uploads/sites/8/2022/09/Martin-Ruetter-e1663838668191.jpg?w=1200",
      source_id: "derwesten",
      country: ["germany"],
      category: ["entertainment"],
      language: "german",
    },
    {
      title:
        "Krystian Bielik zmuszony do zimowego transferu? „Jest taka szansa”",
      link: "https://transfery.info/aktualnosci/krystian-bielik-zmuszony-do-zimowego-transferu-jest-taka-szansa/173819",
      keywords: null,
      creator: ["Patryk Krenz"],
      video_url: null,
      description: null,
      content:
        "Krystian Bielik będzie mógł szybciej powrócić do Derby County, z którego jest wypożyczony do Birmingham City. W umowie 24-latka znajduje się specjalna klauzula zezwalająca na taki ruch. Wszystko zależy od poczynań „Baranów” w tym sezonie, o czym poinformował sam piłkarz.",
      pubDate: "2022-10-06 20:37:18",
      image_url: null,
      source_id: "transfery",
      country: ["poland"],
      category: ["sports"],
      language: "polish",
    },
  ];
  constructor() {
    super();
    this.state = {
      news: this.article,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <h1 style={{ textTransform: "capitalize" }}>top headlines today </h1>
        {this.state.news.map((element, index) => {
          return <NewsItem key={index} news={element} />;
        })}
      </>
    );
  }
}

export default News;
