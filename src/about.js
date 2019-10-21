function generateHTML(){
  var people = '1wheel Azgaar Chi-Loong EE2dev EfratVil EmbeddedMike Fil GerHobbelt Golodhros GordyD Gouayave HarryStevens Hypercubed IPWright IanHopkinson JaapSuter Jay-Oh-eN JulienAssouline Kcnarf KristinHenry LonRiesberg Marithia MartynJones87 MatthewSchumwinger MikeCostelloe NPashaP Nastasi7 NelsonMinar NickDiakopoulos PatMartin PatrickStotz RandomEtc ResidentMario Rich-Harris Rnhatch SkiWether SpaceActuary SpencerCarstens StewartNoyce Sumbera TennisVisuals TheNeuralBit ThomasG77 VizzzHu ZJONSSON aaizemberg adewes aemkei aendrew ajzeigert alandunning alanmclean alansmithy alexandersimoes alexmacy alignedleft almccon amccartney amundo anatolyg andrew12 andrewthornton andrewxhill annabsmylie anonymous ariaz armollica arnicas arrayjam arthurwelle asielen asparagino atmccann aubergene awoodruff badraufran bdilday bdon bessiec bhvaleri bill-kidwell biovisualize bjtucker blacki blob bmershon boeric bollwyvl bowmanmc bradoyler brattonc bricedev bricof bryankennedy brylie bumbu bunkat burritojustice bvancil bycoffe c-johnson carlvlewis cavedave chantalgo chemplexity cherdarchuk chriscanipe christophermanning chule cjrd ckuijjer cmackay cmgiven cmpolis corykendrick couchand cpbotha curran d3noob dabos danharr dannyko danroberts dansabo darshit-shah datummm davidbeijinho davidwatkins73 davo dcabo dehuszar denisemauldin devgru dhoboy djokicx dlwjiang dmann99 dmijalkovic dnomadb dnprock domitry dougdowson dribnet drifkin drzax duhoang dwatkins dwtkns ee2dev eesur eglassman eins78 ejb ekerstein emacgillavry emarschner emeeks emi-lp enjalot enoex epmoyer ericcitaire erikhazzard erlenstar erohinaelena esjewett estk etpinard faniepotgieter fernoftheandes fil finiterank fogleman fogonwater gabrielflorit gelicia gengisb georgemurphy georules geraldarthur giorgi-ghviniashvili gisminister gka guilhermesimoes harasaki harrystevens hashcacher heavysixer helderdarocha herrstucki hlvoorhees hobbes7878 hollasch howarddd hsuh hugolpz hwangmoretime igb ilyabo inspired12 iros ivyywang jacquestardie jalapic jamescwaters jarandaf jasondavies javidhsueh jckr jcnesci jczaplew jdarling jeffcatania jensgrub jensgrubert jeremybuis jeremycflin jermspeaks jeromefroe jessihamel jfsiii jhellier jieqianzhang jkutianski jm3 jmahabal jmuyskens john-guerra johnburnmurdoch jonolave jonsadka joyrexus jrbalsano jrrickard jsanch jsundram jtibbutt jtremblay jugglingnutcase justlebeau jwilber k-izzo karenpeng katirg kcsluis kedarvaidya kennelliott kenpenn kerryrodden kevmo kforeman khoomeister kiddphunk koalaboy808 kpq kristw krsanford larskotthoff lelandlee lewis500 lightjs lindep littletitans m-arnold maartenzam madelfio magrawala majomo malgarianirudh mapearlson mapsam maptastik martgnz matt81m mattdh666 mbostock mccannf melalj meveritt mgold mhkeller micahstubbs michaeljules michalskop migurski mikeyao milroc mimno mitchparker mjhoy mkfreeman mmazanec22 mmmatthew monfera mox-1 mpmckenna8 mr23 mrchrisadams mstanaland muratabur mushon mza n1n9-jp nascif natebates nbremer ngopal nikcub ninjaPixel nitaku nivas8292 njvack nmu noahvelman nsonnad nstawski nstrayer nthitz nydame ofutondaisuki oikonang oluckyman owen-dall palewire patricksurry paulgovan paulirish pberden pbogden pcj peatroot peterbsmith2 petercook petulla phil-pedruco phillipadsmith phoebebright pierrelorioux pjsier playwellsteve pnavarrc podviaznikov poezn prabhasp prcweb proclamo pstuffa ptrikutam ptvans quinnhj ramnathv raw rcrocker13 redblobgames renecnielsen rflow rfrankel riccardoscalco rickdg rkirsling rmarimon roachhd robinhouston rocket3989 rogerfischer romsson roundrobin rpgove rveciana samehelhakim sampathweb samselikoff samuelleach saraquigley sathomas seemantk seliopou sethkontny shancarter shaundunne shawnbot shimizu shobhitg shrego shubhgo simonbreton simzou smilli soccermatics sorcereral srinivashavanur ssdatar stephanieguo steveharoz sugi2000 susielu sxv sxywu syntagmatic tanykim tarekrached thadk thomasgwatson thomasthoren thordav thrakt timelyportfolio tmcw tomgp tomstove tonyhschu tophtucker treboresque trinary tvirot upphiminn vanceingalls vanshady vasturiano veltman veritas1uxmea vicapow vijithassar vlandham walkerjeffd wardcunningham wazaahhh wboykinm wereHamster whatsthebeef widged wiinci wilson428 wmerrow xaranke xiaonaitong yesoreyeram yonitru zachmargolis zanarmstrong zeffii zjhiphop zjonsson zuzap'
    .split(' ').sort()

  return `<!DOCTYPE html>
  <meta charset='utf-8'>
  <link rel="icon" href="data:;base64,iVBORw0KGgo=">
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' href='/static/style.css'>
  <title>blocks</title>
  <div class='username'>blocks</div>

  <p><a href='github.com'>Open source</a> clone of <a href='https://bl.ocks.org/-/about'>bl.ocks.org</a>. 

  <p>Get started with <a href='https://bost.ocks.org/mike/block/'>Let’s Make a Block</a> and <a href='https://github.com/1wheel/d3-init'>d3-init</a>, or edit in the browser with <a href='https://blockbuilder.org/'>blockbuilder</a>.

  <p id='people'>${people.map(d => `<a href='/${d}'>${d}</a> `).join('')}
  `
}

module.exports = async function get(req, res, next) {
  var html = generateHTML()
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(html)
}


if (require.main === module){
}