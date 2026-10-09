/* ============================================================
   GUION DE MAMMA MIA
   ------------------------------------------------------------
   Cada escena:  {n:"número", acto:1|2, lugar:"título", lineas:[ ... ]}
   Cada línea es una de estas:
     {a:`acotación`}
     {p:`PERSONAJE`, t:`texto`}
     {p:`PERSONAJE`, cancion:`NOMBRE DE LA CANCIÓN`, t:`verso
   otro verso`}
     {p:`A y B`, ps:[`A`,`B`], t:`texto que dicen juntos`}
   Los textos van entre comillas invertidas ` ` y pueden tener varias líneas.
   Después de corregir algo, subí el número VERSION en sw.js.
   ============================================================ */
const GUION = [
{n:"1", acto:1, lugar:"El buzón de correo", lineas:[
{a:`Sophie está sentada donde se puede ver la boca de un buzón de correo. Tiene en la mano tres sobres blancos.`},
{p:`SOPHIE`, cancion:`AYER SOÑÉ`, t:`Mi sueño es
mi gran canción
Me hará vencer
cualquier temor
Todo cuento de hadas
Puede ser real.
Cree en tu futuro…`},
{a:`Sophie para de cantar y habla.`},
{p:`SOPHIE`, t:`...aunque salga mal.`},
{a:`Se para y va hasta el buzón. Lee los nombres en voz alta y deposita una carta por cada uno.`},
{p:`SOPHIE`, t:`Sam Carmichael. Bill Austin. Harry Bright. ¡Buena suerte!`},
{a:`Como si se tratara de un sueño se oyen las voces de Lisa y Ali llamando.`},
{p:`LISA`, t:`(En off) Sophie…`},
{p:`ALI`, t:`(En off) Sophie…`}
]},

{n:"2", acto:1, lugar:"Llegan Ali y Lisa", lineas:[
{a:`Es un hermoso día soleado en la mañana previa al casamiento de Sophie y Sky. Ali y Lisa tiran sus bolsos en el piso.`},
{p:`ALI y LISA`, ps:[`ALI`,`LISA`], t:`¡Sophie!`},
{p:`SOPHIE`, t:`Chicas, ¿dónde estaban? ¡Hace un montón que estoy esperando!`},
{p:`ALI`, t:`Adivina quién se olvidó los pasajes sobre la mesa de la cocina.`},
{p:`LISA`, t:`Tuvimos que pedirles por favor que nos dejaran subir al avión. ¡Nuestra mejor amiga se casa mañana!`},
{p:`ALI`, t:`¡No sabes el lío que hicimos! ¡Pero no íbamos a dejar que te cases sin tus damas de honor!`},
{a:`Rutina de saludo.`},
{p:`SOPHIE`, t:`¡Ay, me estaba muriendo por que lleguen! Tengo un secreto y ustedes dos son las únicas que pueden saberlo.`},
{p:`LISA`, t:`Lo sabía... ¡Estás embarazada!`},
{p:`SOPHIE`, t:`¡No! Invité a mi papá al casamiento.`},
{p:`ALI`, t:`¿A tu papá?`},
{p:`LISA`, t:`¿O sea que por fin lo encontraste?`},
{p:`SOPHIE`, t:`No exactamente... ¡Miren! (Saca un libro) Encontré esto en el cuarto de mamá.`},
{p:`LISA`, t:`¡Sophie, no! No es común andar leyendo el diario íntimo de tu mamá.`},
{p:`ALI`, t:`No, lo más común es que ella lea el tuyo.`},
{p:`SOPHIE`, t:`Miren, miren: 1979. Es el diario del año que quedó embarazada. Ustedes saben muy bien que ella no habla de papá y dice que no se acuerda nada del pasado, pero escuchen: "17 de julio, ¡qué noche! Después del show, Sam me llevó hasta la pequeña isla. Bailamos en la playa, nos besamos y..." Puntos suspensivos.`},
{p:`ALI y LISA`, ps:[`ALI`,`LISA`], t:`¿Qué?`},
{p:`SOPHIE`, t:`Puntos suspensivos. Antes... decían así para dar a entender otra cosa. "Sam es el hombre para mí, lo sé. Nunca antes me había sentido así"...`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`Honey honey,
es un fuego, ah hah,
honey honey
Honey honey,
yo me entrego, ah hah,
honey honey.
Yo quiero saber quién sos,
contame algo más de vos.
Sos mucho que más que un galán,
Sos como un volcán
y me vuelvo loca.`},
{p:`ALI`, cancion:`HONEY, HONEY`, t:`¿Un volcán?`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`¡Eso no es nada!
Honey honey,
tu sonrisa, ah hah,
honey honey.
Honey honey,
me hipnotiza, ah hah,
honey honey.
La forma en que me besás…`},
{p:`ALI y LISA`, ps:[`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`La forma en que vos me besás…`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`El modo en que me abrazás…`},
{p:`ALI y LISA`, ps:[`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`El modo en que vos me abrazás…`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`Me dan ganas de gritar…`},
{p:`SOPHIE, ALI y LISA`, ps:[`SOPHIE`,`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`¡Vamos una más!`},
{p:`LISA`, t:`O sea que este Sam es tu papá.`},
{p:`SOPHIE`, t:`La historia se pone todavía más interesante. Sam le dijo a mamá que se volvía a su casa para casarse…`},
{p:`LISA`, t:`¡Ah, qué turro!`},
{p:`ALI`, t:`¡Típico de los hombres!`},
{p:`SOPHIE`, t:`¡Esperen, hay más! "4 de agosto, ¡qué noche! Todavía estaba deprimida por Sam pero después del show Bill alquiló un bote a motor y lo llevé hasta la isla. Una cosa llevó a la otra y puntos suspensivos."`},
{p:`LISA`, t:`¿Bill?`},
{p:`SOPHIE`, t:`"15 de agosto, ¡qué noche! De la nada apareció Harry y lo llevé a conocer la isla. ¿Me estaré volviendo loca? Pero fue tan dulce, que no lo pude evitar y..."`},
{p:`SOPHIE y LISA`, ps:[`SOPHIE`,`LISA`], t:`¡Puntos suspensivos!`},
{p:`ALI`, t:`¡¿Harry?!`},
{p:`SOPHIE`, t:`El donante de esperma tiene tres nombres... Sam, Bill o Harry.`},
{p:`SOPHIE, ALI y LISA`, ps:[`SOPHIE`,`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`Honey honey,
abrazame, ah hah,
honey honey.
Honey, honey,
y besame, ah hah,
honey honey.`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`Te miro y sos como un dios…`},
{p:`ALI y LISA`, ps:[`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`Creo que sos como un dios.`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`Me gusta pensar en vos..`},
{p:`ALI y LISA`, ps:[`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`Quiero pensar sólo en vos.`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`Tan dulce como la miel…`},
{p:`SOPHIE, ALI y LISA`, ps:[`SOPHIE`,`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`Y una bestia cruel.`},
{p:`ALI`, t:`¿Y todos vienen al casamiento?`},
{p:`SOPHIE`, t:`¡Sí!`},
{p:`LISA`, t:`¡Ay, por dios Sophie! ¿Pero ellos saben?`},
{p:`SOPHIE`, t:`¿Qué le escribís a un desconocido? ¿"Te invito a mi casamiento porque podrías ser mi papá"? ¡No! Ellos piensan que mamá les mandó la invitación. ¡Y después de leer este diario no me sorprende que todos dijeran que sí!`},
{p:`LISA`, t:`¡Ay, Dios mío, Sophie! ¿Estás segura de lo que estás haciendo?`},
{p:`SOPHIE`, t:`Sí. Quiero el casamiento perfecto y quiero que mi papá me lleve hasta el altar.`},
{p:`ALI`, t:`Esperemos que el pasillo de la iglesia sea bien ancho.`},
{p:`SOPHIE`, t:`Tenemos que tener a mi mamá afuera de esto. No quiero que los espante antes de que yo pueda conocerlos. Con un poco de suerte voy a reconocer a mi papá apenas lo vea.`},
{p:`LISA`, t:`¿Y qué pasa si no lo reconoces?`},
{p:`SOPHIE`, t:`Entonces... ¡Tengo 24 horas para averiguarlo!`},
{p:`SOPHIE, ALI y LISA`, ps:[`SOPHIE`,`ALI`,`LISA`], cancion:`HONEY, HONEY`, t:`Honey honey,
es un fuego, ah hah,
honey honey.
Honey honey,
yo me entrego, ah hah,
honey honey.`},
{p:`SOPHIE`, cancion:`HONEY, HONEY`, t:`Yo quiero saber quién sos,
contame algo más de vos.
Y ahora por fin tendré
lo que yo soñé.`}
]},

{n:"3", acto:1, lugar:"El patio — llegan Tanya y Rosie", lineas:[
{a:`El patio. 3 hombres en una mesa. Una mujer cosiendo al costado. Entran Rosie y Tanya con su equipaje.`},
{p:`TANYA`, t:`Ay, por Dios, ¿cuánto tiempo más voy a tener que caminar con estos malditos tacos?`},
{p:`ROSIE`, t:`¿Y qué esperabas? ¿Un chofer con una limousine a la orilla del mar?`},
{p:`TANYA`, t:`Y sí, claro. Donna sabe que odio caminar.`},
{p:`DONNA`, t:`(Entra desde el interior de la taberna) ¡Ah, bueno, pero miren lo que trajo la marea!`},
{p:`ROSIE`, t:`¡Por una noche!`},
{p:`TANYA`, t:`¡Y sólo por una noche!`},
{p:`DONNA`, t:`¡Donna...!`},
{p:`DONNA, ROSIE y TANYA`, ps:[`DONNA`,`ROSIE`,`TANYA`], t:`¡...Y las Dynamos!`},
{a:`Las tres se abrazan y se saludan siguiendo la vieja rutina.`},
{p:`ROSIE`, t:`¿Pero cómo está la mamá de la novia?`},
{p:`DONNA`, t:`Mucho mejor ahora que las veo. ¡Mierda, Tanya, 8 años!`},
{p:`TANYA`, t:`Sí, ya sé, mi amor, perdoname... ¡Es que fue un millonario atrás de otro!`},
{p:`DONNA`, t:`Sí, ya lo sé. En cambio, yo estoy encadenada a este lugar y en guerra constante con el gerente del banco.`},
{p:`ROSIE`, t:`¡Pobre gerente!`},
{p:`SOPHIE`, t:`(Entra corriendo) ¡Tía Rosie!`},
{p:`ROSIE`, t:`¡Sophie Sheridan! ¿Puede ser que cada vez que te vea estés más linda? ¿No me merezco un besote enorme por haberme cruzado medio planeta para venir a tu casamiento?`},
{p:`TANYA`, t:`¡A que no te acordás de mí!`},
{p:`ROSIE`, t:`Y no... con tanta cirugía.`},
{p:`SOPHIE`, t:`¡Claro que me acuerdo, tía Tanya!`},
{p:`DONNA`, t:`Ay, miren a mi bebé con toda la vida por delante…`},
{p:`SOPHIE`, t:`Mamá, me estoy casando, no me estoy metiendo a monja.`},
{p:`SKY`, t:`(Entra y escucha el comentario) A mí no me eches la culpa, Donna. No fue idea mía.`},
{p:`DONNA`, t:`Chicas, les presento al protagonista del gran evento de mañana. Él es Sky. Ellas son Rosie y Tanya, mis antiguas coristas y eternas amigas.`},
{p:`ROSIE`, t:`¡Che, che, che, coristas las pelotas! Hola, ¿qué tal?`},
{p:`SKY`, t:`¡Hola, me hablaron muchísimo de ustedes!`},
{p:`TANYA`, t:`¡Ay, espero que mal!`},
{p:`PEPPER`, t:`(A Tanya) Yassu Kukla Moo. Pass E-Say.`},
{p:`TANYA`, t:`Efkhareesto pole dhen kanee trepota.`},
{p:`EDDIE`, t:`No se gaste, él no habla griego. Soy Eddie. ¡Bonjour, Madam!`},
{p:`TANYA`, t:`Bonjour Eddie, enchantée de fais votre connaisance.`},
{p:`EDDIE`, t:`Ehm... ¿Bon appetit?`},
{p:`PEPPER`, t:`¡Soy Pepper!`},
{p:`TANYA`, t:`¿Porque sos picante como la pimienta?`},
{p:`EDDIE`, t:`¡No, porque es chiquito y molesto!`},
{p:`DONNA`, t:`Bueno, bueno, Tanya ellos son Pepper y Eddie. Atienden el bar, manejan los botes y se ocupan de tareas varias. Aunque casi nunca se ocupan de nada. ¿Y no tienen cosas que hacer ustedes? ¡Vamos, a moverse!`},
{p:`TANYA`, t:`¡Donna, la taberna está bárbara!`},
{p:`DONNA`, t:`Ay, gracias, ¡pero hay que agradecerle a Sky!`},
{p:`TANYA`, t:`¿Por qué? ¿Qué hiciste?`},
{p:`ROSIE`, t:`¿No hace mucho que estás acá, no?`},
{p:`SKY`, t:`Estaba cansado de hacer negocios sin conocer el mundo entonces me tomé unas vacaciones del mundo de las finanzas y nunca volví.`},
{p:`DONNA`, t:`Pero tienen que ver lo que hizo por mi mundo: ¡me llevó al ciberespacio! Ahora estoy enredada, internetizada, computarizada, y tecnológicamente esclavizada.`},
{p:`SKY`, t:`Tenés que modernizarte, Donna. Basta de guardar la plata abajo del colchón.`},
{p:`DONNA`, t:`¿Y por qué no hacés una máquina que me haga las camas también?`},
{p:`SOPHIE`, t:`Porque estarías todo el día detrás de la máquina haciéndolas de nuevo. ¡Te conocemos mamá!`},
{p:`DONNA`, t:`¿Me estás cargando? Me encantaría quedarme sentada de brazos cruzados esperando que me llegue la suerte navegando en algún bote. Bueno, chicas, esta es mi gran apuesta, necesito un descanso…`},
{p:`DONNA`, t:`...Unas buenas vacaciones. Trabajo en este lugar desde hace quince años y nunca tuve un día libre.`},
{p:`DONNA`, cancion:`MONEY, MONEY, MONEY`, t:`No hago más que trabajar y hay muchas cuentas que pagar.`},
{p:`ELENCO`, cancion:`MONEY, MONEY, MONEY`, t:`¡Es verdad!`},
{p:`DONNA`, cancion:`MONEY, MONEY, MONEY`, t:`Y aun así no conseguí
ni un centavo para mí.`},
{p:`ELENCO`, cancion:`MONEY, MONEY, MONEY`, t:`¡Qué crueldad!`},
{p:`DONNA`, cancion:`MONEY, MONEY, MONEY`, t:`Mi ilusión es encontrar
un magnate y no trabajar.
Y así el mundo recorrer
pensando sólo en el placer.`},
{p:`TODOS`, cancion:`MONEY, MONEY, MONEY`, t:`Money, money, money,
con dinero puedo ser feliz.
Money, money, money
eso quiero para ser feliz.`},
{p:`DONNA`, cancion:`MONEY, MONEY, MONEY`, t:`Ah hah, si pudiera tener…`},
{p:`TODOS`, cancion:`MONEY, MONEY, MONEY`, t:`Sólo un poco de dinero
para ser feliz.
Para ser feliz.`},
{p:`DONNA`, cancion:`MONEY, MONEY, MONEY`, t:`¿El hombre ideal a dónde está?,
yo no lo dejo de buscar.`},
{p:`ELENCO`, cancion:`MONEY, MONEY, MONEY`, t:`¡Es verdad!`},
{p:`DONNA`, cancion:`MONEY, MONEY, MONEY`, t:`Y si aparece por acá
seguro ni me va a mirar.`},
{p:`ELENCO`, cancion:`MONEY, MONEY, MONEY`, t:`¡Qué crueldad!`},
{p:`DONNA`, cancion:`MONEY, MONEY, MONEY`, t:`Ya me cansé, por eso hoy a Las Vegas mejor me voy,
a la ruleta ganaré
y así mi suerte cambiaré.`},
{p:`DONNA`, t:`¡Vamos, a trabajar!`}
]},

{n:"4", acto:1, lugar:"Llegan Sam, Bill y Harry", lineas:[
{a:`El patio. Entra Sam. Ve la taberna y se detiene. Harry y Bill llegan detrás suyo.`},
{p:`HARRY`, t:`¡Qué bueno haber bajado de ese bote!`},
{p:`BILL`, t:`Eso no fue nada, ¡probá atravesar en kayak el Amazonas!`},
{p:`HARRY`, t:`Es verdad, lo leí en tu libro "Aventura en el Amazonas".`},
{p:`BILL`, t:`¡Gracias, Harry! Me habían dicho que en algún lado se había vendido un ejemplar.`},
{p:`HARRY`, t:`Tengo pasión por los libros de viajes. Me distraen del caos de la hora pico en los subtes de Londres.`},
{p:`SAM`, t:`¿Quieren oír algo interesante? ¿Ven esta taberna?`},
{p:`HARRY`, t:`¡Impresionante! Recuerdo que acá sólo había una vieja cabaña. Pensaba que iba a tener que dormir entre las cabras.`},
{p:`BILL`, t:`Prefiero las cabras a los camellos. Una vez en el desierto de Kalahari, con el sol calcinándonos y nosotros…`},
{p:`SAM`, t:`Perdón por interrumpirte... Indiana Jones. El punto fue que esta es mi taberna. ¡Yo la construí! Bueno, más bien la diseñé. Yo dibujé estos planos hace unos veintiún años. ¡No puedo creer que la construyera!`},
{p:`BILL`, t:`¿Quién?`},
{p:`SAM`, t:`¡Donna!`},
{p:`BILL`, t:`¿Y cómo sabés que es tu diseño?`},
{p:`SAM`, t:`Porque los edificios son como los hijos. Siempre sabés cuál es el tuyo.`},
{p:`BILL`, t:`La verdad, no sé nada sobre hijos. Viví casi toda mi vida con una mochila colgada al hombro.`},
{p:`HARRY`, t:`¡Qué feliz trotamundos! ¿Y pensás que la isla pueda inspirarte alguna historia?`},
{p:`BILL`, t:`Bueno, esperemos que sí. Cuando recibí la invitación al casamiento le conté a mi editor la idea de un artículo para una revista: "Visitando los lugares de mi juventud".`},
{p:`HARRY`, t:`¿Sos de acá?`},
{p:`BILL`, t:`No, soy de Australia, pero mi mamá es griega. La única vez que estuve en Grecia fue para visitar a mi tía abuela que vivía en el continente. De esto hará veintiún años.`},
{p:`HARRY`, t:`(Llama en voz alta) ¡¿No hay nadie para atendernos?!`},
{p:`SOPHIE`, t:`(Entra desde la taberna) Buenas tardes, ¿puedo ayudarlos?`},
{p:`BILL`, t:`Soy Bill Austin. Tengo una reserva.`},
{p:`SOPHIE`, t:`(Nerviosa) Sí... ¿Austin?...`},
{p:`HARRY`, t:`Mi nombre es Bright. Harry Bright.`},
{p:`SOPHIE`, t:`Harry. Entonces usted debe ser…`},
{p:`SAM`, t:`Sam Carmichael. Nos esperaban, ¿no?`},
{p:`SOPHIE`, t:`Sí, ¡sí, claro!... Le traigo sus llaves.`},
{p:`HARRY`, t:`Espero tener la oportunidad de disfrutar la lengua de los griegos. (Sam y Bill lo miran. Ríe) No, no, no, quiero decir que no lo hablo desde la última vez que estuve acá, hace veintiún años.`},
{p:`SAM`, t:`¿Veintiún años? ¡Esperen! Esto me está empezando a sonar un poquitito... armado. A ver Bill, acá tenés una historia. Tres hombres desconocidos entre sí reciben una invitación para un casamiento y se los invita a un lugar en el que estuvieron hace veintiún años, por una mujer que no ven hace veintiún años…`},
{p:`BILL`, t:`¿Por qué están acá?`},
{p:`HARRY`, t:`¿Es un reportaje? Bueno... eh, la invitación de Donna me hizo recordar muy buenos momentos. (Ve una guitarra colgada en la pared) ¡Ay, me estás jodiendo!`},
{p:`BILL`, t:`¿Eso lo anoto?`},
{p:`HARRY`, t:`No, no, no, ¡la guitarra! Yo conozco esta guitarra. (La agarra y lee algo en el dorso) "H.B."... Harry Bright. ¡El Heavy Bright! Así me decían en esa época. "D.S." Donna Sheridan. Yo le compré esta guitarra…`},
{p:`HARRY`, t:`Solíamos cantar canciones.`},
{a:`Entra por detrás Sophie; Bill y Harry no se dan cuenta, el único es Sam.`},
{p:`SAM`, t:`¡Ah, pero vos sos la hija de Donna!`},
{p:`SOPHIE`, t:`¡Sí!`},
{p:`BILL`, t:`¡Wow, me pareciste conocida! ¿Sophie? ¿Sophia?`},
{p:`SOPHIE`, t:`No, soy Sophie.`},
{p:`BILL`, t:`Bueno, "Sophia" es en griego. Mi tía abuela se llamaba Sophia.`},
{p:`SOPHIE`, t:`Me llamaron así por una Sophia.`},
{p:`SAM`, t:`Bueno, ¿dónde está Donna? Quiero verla para decirle gracias por la invitación.`},
{p:`HARRY`, t:`¡Sí, fue muy bueno que se acordara de nosotros!`},
{p:`SOPHIE`, t:`¡No! No pueden verla. Ustedes son un secreto. Yo mandé las invitaciones, ella... eh... ella no sabe que están acá.`},
{p:`BILL`, t:`¿Por qué?`},
{p:`SOPHIE`, t:`Porque... porque siempre habla de sus viejos amigos y pensé que le encantaría verlos a todos. Pero está un poco loca con todo esto del casamiento y no está esperando invitados, así que si los ve... le va a dar un ataque…`},
{p:`SAM`, t:`Sophie, Sophie, entonces esperá, vos me estás diciendo que Donna no me invitó.`},
{a:`Sophie saca las llaves y le pasa a cada uno la llave de su habitación.`},
{p:`SOPHIE`, t:`Así que hagan de cuenta que están acá de vacaciones ¡y ella se va a llevar una linda sorpresa cuando los vea a todos en el casamiento! (ríe nerviosa) Y después le contamos nuestro secreto…`},
{p:`SAM`, t:`No, pará, pará…`},
{p:`SOPHIE`, t:`Dicen que pude bailar antes de caminar.`},
{p:`SAM`, t:`Cometiste un grave error. ¡Mirá Sophie, yo no quiero arruinarte la sorpresa, pero la última vez que vi a tu mamá me dijo que no quería verme nunca más en su vida! Así que si fuiste vos la que mandó la invitación, quiere decir que sigo condenado.`},
{p:`SOPHIE`, t:`Pero eso fue hace años... y además quiero que estén acá para que vuelvan a ser amigos.`},
{p:`SAM`, t:`¡Ah, no, pero vos sos igual a tu mamá! ¡Mirá, me alegra que mis chicos no te conozcan!`},
{p:`SOPHIE`, t:`¿Tus chicos? ¿Tenés hijos?`},
{p:`SAM`, t:`Dos varones. Y me encantaría traerlos acá algún día.`},
{p:`SOPHIE`, t:`Así como traías a mi mamá antes.`},
{a:`Se genera un silencio incómodo.`},
{p:`HARRY`, t:`¿Sabés si en la isla hay alguna tintorería?`},
{p:`SOPHIE`, t:`Sí. Vamos, les muestro sus cuartos.`},
{p:`HARRY`, t:`¡Gracias!`},
{a:`Donna sale de la taberna tarareando "Fernando". Empieza a arreglar algo de la taberna sin darse cuenta de la presencia de los hombres.`},
{p:`DONNA`, cancion:`FERNANDO (a capella)`, t:`Algo había en esa oscuridad
de claridad, Fernando...
Que brillaba por nosotros dos,
Fernando…`},
{p:`BILL`, t:`¿Donna?`},
{p:`DONNA`, t:`¿Sí? (Lo mira. Bill hace el australiano. Ríe) ¡Bill!`},
{p:`HARRY`, t:`¡Hola, Donna!`},
{p:`DONNA`, t:`(Ríe) ¡Harry! ¿Pero qué hacen acá?`},
{p:`SAM`, t:`(Se deja ver) Donna…`},
{p:`DONNA`, t:`VOS.`},
{p:`DONNA`, cancion:`MAMMA MÍA`, t:`¡Vos!
Yo por ti me engañé, hace tiempo lo sé
Y ya lo decidí, ahora te dejaré
Mírame bien, cuándo aprenderé
No sé por qué, vivo tanto esta gran pasión
Que me quema el corazón
Si me miras siento tanto placer
Si te acercas creo desvanecer
¡Oh, oh!`},
{p:`DONNA`, cancion:`MAMMA MÍA`, t:`Mamma mía, una y otra vez
No sé, cómo resistirte
Mamma mía, quiero y tú lo ves
No sé, cómo evadirte
Tú que me has provocado
Luego me has rechazado
¿Por qué te sigo queriendo así?
Mamma mía, ya lo decidí
Porqué, no puedo vivir sin ti`},
{p:`DONNA`, t:`No, no, estoy soñando, ¡claro, no están acá de verdad!`},
{p:`SAM`, t:`¿Querés que te pellizque?`},
{p:`DONNA`, t:`¡Ni se te ocurra tocarme! ¿Qué mierda hacés acá, Sam? ¿Qué hacen todos acá?`},
{p:`BILL`, t:`Yo estoy escribiendo un artículo para una revista.`},
{p:`HARRY`, t:`Y yo vine de vacaciones.`},
{p:`SAM`, t:`Y yo... vi luz y entré.`},
{p:`DONNA`, t:`¡Qué lástima!... eh... Uh, qué lástima, no hay más cuartos disponibles, la peor época del año…`},
{p:`SAM`, t:`Bueno, menos mal que reservé con tiempo.`},
{p:`DONNA`, t:`Ah... Ah... Igual no les aconsejo quedarse.`},
{p:`SAM`, t:`¿Por qué?`},
{p:`DONNA`, t:`No... Porque... porque hay un casamiento justo y no tengo personal suficiente disponible para atenderlos, pero van a estar mucho más cómodos si van al continente…`},
{p:`SAM`, t:`No, no, por eso no hay problema. Acá mi amigo Bill está acostumbrado a sufrir por su arte. Y el viejo Heavy es el rey de la espontaneidad. Y yo vine a ver la isla. Vos sabés lo que significa para mí.`},
{p:`DONNA`, t:`Qué... Qué bien. Me encantaría quedarme con ustedes charlando sobre los viejos tiempos y todo, ¿no?... pero justo tengo que irme porque resul... eh... ¡La leche!... dejé la leche en el fuego...`},
{p:`HARRY`, t:`¡La edad no puede marchitarla!`},
{p:`BILL`, t:`¡Esperaba encontrarla medio baqueteada!`},
{p:`SAM`, t:`No... Sigue siendo Donna.`},
{p:`SAM, BILL y HARRY`, ps:[`SAM`,`BILL`,`HARRY`], cancion:`MAMMA MÍA`, t:`Si me miras siento tanto placer
Si te acercas creo desvanecer
¡Oh, oh!`}
]},

{n:"5", acto:1, lugar:"Habitación de Donna — Chiquitita", lineas:[
{a:`Rosie y Tanya ven que hay una cama sola. Corren para agarrarla, Tanya se acuesta primero.`},
{p:`TANYA`, t:`¡A ver qué trajiste para usar en el casamiento! (Rosie saca una bermuda estilo militar) ¡No, boluda, sos joda!`},
{p:`ROSIE`, t:`¿Qué?`},
{p:`TANYA`, t:`¿Cómo te vas a...?`},
{p:`ROSIE`, t:`¡Por favor, Tanya!`},
{p:`TANYA`, t:`Ah, bueno, bueno, no sé, ¡qué sé yo! Por eso nunca conseguís al hombre perfecto…`},
{p:`ROSIE`, t:`Ya lo encontré, y lo único que quiere es casarse y tener hijos. ¡No, gracias!`},
{p:`TANYA`, t:`Las chicas de hoy piensan que el mayor logro de una mujer es atrapar a un hombre, ¡pero por favor!`},
{p:`ROSIE`, t:`Tanya, vos te casaste tres veces.`},
{p:`TANYA`, t:`¡La voz de la experiencia, querida, gracias!`},
{p:`ROSIE`, t:`(Descubre el baúl) ¡Tanya, mirá esto por favor!`},
{p:`TANYA`, t:`(Nostálgica) ¡Éramos tan jóvenes!`},
{p:`DONNA`, t:`(Irrumpe en la habitación) ¡Sophie! ¿Sophie dónde está?`},
{p:`ROSIE`, t:`No la vimos, ¿por qué?`},
{p:`DONNA`, t:`¡Tengo que encontrarla ya mismo!`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], t:`(Le muestran el vestido de Donna y las Dynamos) ¡Tarán!`},
{p:`DONNA`, t:`¿Y eso?`},
{p:`ROSIE`, t:`Estaba en el baúl.`},
{p:`TANYA`, t:`¿Por qué no lo colgás en el bar así Sophie ve que tiene una mamá con onda?`},
{p:`DONNA`, t:`(Se lo arranca de la mano y lo tira al suelo) ¡Quémalo, tíralo, no lo quiero ver nunca más!`},
{p:`ROSIE`, t:`¿Pero por qué? ¿Qué pasó?`},
{p:`DONNA`, t:`Creí que era parte del pasado, y que ya lo había olvidado... ¡Pero no!`},
{p:`ROSIE`, t:`¿No qué?`},
{p:`DONNA`, t:`Nada, déjenme sola, no puedo hablar de esto. ¡Pero yo sabía que esto me iba a pasar, si toda la vida me estuvo dando vueltas como un fantasma! ¡¿Pero ahora me tenía que pasar, justo ahora?! Dios mío, ¡¿pero cómo pude ser tan idiota?!`},
{p:`ROSIE`, cancion:`CHIQUITITA`, t:`Chiquitita,
dime ¿por qué...?`},
{p:`TANYA`, cancion:`CHIQUITITA`, t:`...tanta pena y sufrimiento?`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], cancion:`CHIQUITITA`, t:`Nunca te vi tan mal,
y es mañana el casamiento.`},
{p:`TANYA`, cancion:`CHIQUITITA`, t:`No quisiera verte así.`},
{p:`ROSIE`, cancion:`CHIQUITITA`, t:`Aunque quieras disimularlo.`},
{p:`TANYA`, cancion:`CHIQUITITA`, t:`Si es que tan triste estás
¿Para qué quieres callarlo?`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], cancion:`CHIQUITITA`, t:`Chiquitita, dímelo tú
En mi hombro, aquí llorando
Cuenta conmigo ya
Para así seguir andando
Tan segura te conocí
Y ahora tu ala quebrada
(Qué vacío, me duele verte llorar)
Déjamela arreglar, yo la quiero ver curada`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], cancion:`CHIQUITITA`, t:`Chiquitita, sabes muy bien
Que las penas vienen y van y desaparecerán
Otra vez vas a bailar y serás feliz
Como flores que florecen
Chiquitita, no hay que llorar
Las estrellas brillan por ti allá en lo alto
Quiero verte sonreír para compartir
Tu alegría, chiquitita.`},
{p:`DONNA`, t:`(Tosiendo) Voy a ser la que fui ayer. Va de nuevo... Es su papá…`},
{p:`TANYA`, t:`¿El papá de quién?`},
{p:`DONNA`, t:`¡De Sophie!`},
{p:`TANYA`, t:`¡Ah!`},
{p:`DONNA`, t:`¿Se acuerdan que les conté que era Sam, el arquitecto, el que me dejó para casarse con otra?`},
{p:`TANYA`, t:`¡Ese chanta!`},
{p:`ROSIE`, t:`¡Típico de los hombres!`},
{p:`DONNA`, t:`Bueno, la verdad es que no estoy tan segura de que fuera él.`},
{p:`TANYA`, t:`¡¿Qué?!`},
{p:`DONNA`, t:`Es que hubo... hubo un... ¡hubo un par de más de hombres!`},
{p:`ROSIE`, t:`¿Cómo no nos contaste antes?`},
{p:`TANYA`, t:`Donna, pero qué zorrita…`},
{p:`DONNA`, t:`¿Y para qué? ¿Qué me iba a imaginar que iban a estar los tres sentados en mi bar el día antes del casamiento de su hija?`},
{p:`TANYA y ROSIE`, ps:[`TANYA`,`ROSIE`], t:`¡¿Qué?!`},
{p:`DONNA`, t:`(Las calla) ¡Claro que estoy segura! ¿Cómo me voy a olvidar de los padres de mi hija? Son Sam, Bill Austin y "Harry" Bright.`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], t:`No me digas que... (hacen el movimiento rockero con la cabeza)`},
{p:`DONNA`, t:`Sí, sí, ¿pero por qué se aparecieron así de la nada? Parece un horrible truco del destino…`},
{p:`TANYA`, t:`¿Y ellos saben?`},
{p:`DONNA`, t:`No, no pueden saber nada. Yo nunca le dije nada a nadie. ¿Pero para qué están acá? ¿Para qué? ¡Para arruinarle el casamiento a Sophie!`},
{p:`TANYA`, t:`Ay, bueno, pensé que no estabas muy de acuerdo con ese casamiento.`},
{p:`DONNA`, t:`¡No quiero que ellos se lo arruinen! No tienen derecho a aparecerse así de la nada. ¿Alguna vez hicieron algo por su hija?`},
{p:`ROSIE`, t:`Donna, no seas injusta, ellos ni siquiera saben que existe.`},
{p:`DONNA`, t:`Y tampoco tienen por qué saberlo. ¡Hice muy buen trabajo yo solita con Sophie para ahora verme amenazada por un... HOMBRE!`},
{p:`ROSIE`, t:`Bueno, tranquila, por hoy estás salvada, la fiesta de Sophie es sólo para mujeres, y mañana Tanya y yo los llevamos a... pescar.`},
{p:`TANYA`, t:`¿Qué? ¿A pescar? (Se toca el pecho) ¡Hola!`},
{p:`ROSIE`, t:`¿Qué sugerís que hagamos vos y yo con tres hombres?`},
{p:`TANYA`, t:`¡Uh! ¡Ay, qué grandes recuerdos, nena!`},
{p:`DONNA`, t:`Ah, bueno…`},
{p:`ROSIE`, t:`Donna, ¿cómo no nos contaste antes...? ¡Ah! Yo me acuerdo de Bill Austin. Carne australiana de primera.`},
{p:`DONNA`, t:`Claro, para ustedes son todo risitas y recuerdos, ¿no? Porque la que se quedó embarazada fui yo... Más sí, a lo mejor me lo merezco, mirá.`},
{p:`TANYA`, t:`¡Qué horror, Donna! ¡Hablás igual que tu mamá!`},
{p:`DONNA`, t:`Claro que no.`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], t:`¡Claro que sí!`},
{p:`TANYA`, t:`¿Qué pasó con nuestra Donna, vida y alma de todas las fiestas, la rockera suprema?`},
{p:`DONNA`, t:`Se volvió vieja…`},
{p:`TANYA`, t:`Bueno, ¡que rejuvenezca querida! ¿Por qué la vergüenza si no hiciste nada malo?`},
{p:`ROSIE`, t:`Sí y al que no le guste, que se joda.`},
{p:`TANYA`, t:`Así se habla, nena.`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], cancion:`DANCING QUEEN`, t:`A reír, a bailar,
la reina vuelve a brillar.
Uh, mírenla hoy por fin,
es nuestra dancing queen.
Hoy es viernes y hay que salir,
a la disco tenés que ir.
Esta noche es la noche
para conocer... A tu futuro rey.`},
{p:`TANYA`, cancion:`DANCING QUEEN`, t:`Bien vestido y con mucho gel
de repente aparece…`},
{p:`ROSIE y TANYA`, ps:[`ROSIE`,`TANYA`], cancion:`DANCING QUEEN`, t:`...él.
Humo, música y luces.
¿Quién te va a parar? Sólo querés bailar.
La pista va a estallar.`},
{p:`DONNA, ROSIE y TANYA`, ps:[`DONNA`,`ROSIE`,`TANYA`], cancion:`DANCING QUEEN`, t:`Con nuestra dancing queen
hoy la fiesta no tiene fin.
Dancing queen,
siempre al ritmo del tamboril.`},
{p:`DONNA`, cancion:`DANCING QUEEN`, t:`¡Oh, yeah!`},
{p:`DONNA, ROSIE y TANYA`, ps:[`DONNA`,`ROSIE`,`TANYA`], cancion:`DANCING QUEEN`, t:`A reír, a bailar,
La reina vuelve a brillar.
Uh, mírenla hoy por fin
es nuestra dancing queen.`}
]},
{n:"6", acto:1, lugar:"La playa — Sophie y Sky", lineas:[
{a:`La playa. Sky limpiando el bote. Entra Sophie apurada, con la cabeza en las nubes por el asunto de sus papás.`},
{p:`SOPHIE`, t:`¿A dónde vas?`},
{p:`SKY`, t:`¡Ah, bueno! (Hace el aullido de un lobo) Los chicos todavía no me dijeron nada, pero creo que hoy hay strippers en el Orfeo, lucha de barro en el Medusa's. Pepper traía un par de esposas.`},
{p:`SOPHIE`, t:`No vayas.`},
{p:`SKY`, t:`¿Y perderme la última noche de libertad?`},
{p:`SOPHIE`, t:`No, no digo que no vayas, lo que quiero... ¿De verdad pensás así?`},
{p:`SKY`, t:`(Piensa) Sí... ¡No! Pienso que es la última noche antes de... la aventura más grande de mi vida. Vení acá…`},
{p:`SOPHIE`, t:`¿Viste que siempre te digo que quiero encontrar a mi papá?`},
{p:`SKY`, t:`Sí, ya lo hablamos mil veces ese tema. No necesitás a tu papá, me tenés a mí.`},
{p:`SOPHIE`, t:`Sí, ya sé, Sky, pero prometeme que pase lo que pase vos no me vas a dejar.`},
{p:`SKY`, t:`¿Estás loca? ¡Si me diste vuelta la cabeza!`},
{p:`SKY`, cancion:`SOS TODO PARA MÍ`, t:`No era celoso, me daba igual
Hoy todo aquel que te mira es mi peor rival
Me porto mal por primera vez
Dejando aparte el tabaco, yo era un chico bien
Un sentimiento así, es nuevo para mí
No puedo ser quien era ayer, cambié por ti`},
{p:`SOPHIE`, cancion:`SOS TODO PARA MÍ`, t:`No malgastes emociones
Deja tu amor en mí
Caí como bruta en esa red
Algo de charla, y sonrisas, te lo puse bien
Un levante fácil fui para ti
Solo una niña podría haber caído así..
No sé lo que me das, no vivo si te vas
Me da horror perder tu amor, no puedo más.`},
{p:`SKY y CORO MASCULINO`, ps:[`SKY`], cancion:`SOS TODO PARA MÍ`, t:`No malgastes emociones
Deja tu amor en mí.`},
{p:`SOPHIE`, cancion:`SOS TODO PARA MÍ`, t:`Salí con chicos alguna vez
Duraban sólo unos días, nunca más de diez`},
{p:`SKY`, cancion:`SOS TODO PARA MÍ`, t:`Ser muy sensato era mi virtud
Eso cambió justo el día que viniste tú
Ahora ya lo ves, el mundo va al revés
Hoy soy así, cambié por ti, ¿qué voy a hacer?`},
{p:`SKY y CORO MASCULINO`, ps:[`SKY`], cancion:`SOS TODO PARA MÍ`, t:`(No malgastes emociones)
(Deja tu amor en mí)
(No compartas devociones)
(Deja tu amor en mí)`},
{p:`SOPHIE y CORO FEMENINO`, ps:[`SOPHIE`], cancion:`SOS TODO PARA MÍ`, t:`(No malgastes emociones)
(Deja tu amor en mí)
(No malgastes emociones)
(Deja tu amor en mí)`}
]},

{n:"7", acto:1, lugar:"La despedida de soltera — Super Trouper y Dame, dame, dame", lineas:[
{p:`TANYA`, t:`(Voz en off) ¡Damas! ¿Hay alguna por acá?`},
{p:`CHICAS`, t:`¡Sí!`},
{p:`TANYA`, t:`(En off) ¡Por una noche y sólo por una noche, la taberna "Noche de verano" se enorgullece en presentar a la primera banda femenina, en vivo, con toda la gloria de sus arrugas...!`},
{p:`ROSIE`, t:`(En off) ¡Hablá por vos!`},
{p:`TANYA`, t:`(En off) ¡Una noche, una canción, porque es para lo único que nos da el aire! ¡Con ustedes: "Donna y las Dynamos"!`},
{p:`DONNA, ROSIE y TANYA`, ps:[`DONNA`,`ROSIE`,`TANYA`], cancion:`SUPER TROUPER`, t:`Super trouper
luces que encandilan
no me harán llorar,
nada va a importar
si en la platea vas a estar.`},
{p:`DONNA`, cancion:`SUPER TROUPER`, t:`Me sentía a punto de estallar
cuando ayer llamé desde Glasgow.
Canto, como y duermo sin parar,
y eso es todo lo que yo hago.
De repente me enteré de tu llegada,
casi lloro de emoción.
Hoy será todo distinto
cuando empiece la función.`},
{p:`DONNA, ROSIE y TANYA`, ps:[`DONNA`,`ROSIE`,`TANYA`], cancion:`SUPER TROUPER`, t:`Que brille el super trouper,
que los reflectores quemen como el sol,
bajo su calor yo me siento la mejor.
Que brille el super trouper
luces que encandilan
no me harán llorar, nada va a importar
si en la platea vas a estar.`},
{p:`DONNA`, cancion:`SUPER TROUPER`, t:`Tanta gente viene a la función,
pero igual yo me siento sola.
Ser famosa no es la solución
si te extraño a cada hora.
Hay momentos en que siento que no puedo,
pero todo va a cambiar.
Este show será distinto
si conmigo vas a estar.`},
{p:`DONNA, ROSIE y TANYA`, ps:[`DONNA`,`ROSIE`,`TANYA`], cancion:`SUPER TROUPER`, t:`Que brille el super trouper,
que los reflectores quemen como el sol,
bajo su calor yo me siento la mejor.
Que brille el super trouper
luces que encandilan
no me harán llorar, nada va a importar
si en la platea vas a estar.
Super trouper, luces que encandilan.`},
{a:`La canción termina con gritos y aplausos. Entran Sam, Bill y Harry.`},
{p:`DONNA`, t:`¿Qué mierda hacen estos acá?`},
{p:`ROSIE`, t:`Ey, ey, ¡despedida de soltera es sólo para mujeres!`},
{p:`SOPHIE`, t:`¡No, queremos que se queden! ¿No, chicas?`},
{p:`CHICAS`, cancion:`DAME, DAME, DAME`, t:`¿Hay alguien por ahí
tan sólo para mí?
Dame, dame, dame
un hombre esta noche,
alguien que me aleje
de esta gran soledad.
Dame, dame, dame
un hombre esta noche,
hasta que amanezca
quiero amar de verdad.`},
{a:`Mientras sigue el baile, Sophie rescata a Sam y bailan juntos en el frente.`},
{p:`SOPHIE`, t:`¡Perdón por sacarte del baile!`},
{p:`SAM`, t:`No, gracias que lo hiciste, pero... esta isla solía ser muy tranquila.`},
{p:`SOPHIE`, t:`¿No te arrepentís de haber tardado tanto en volver?`},
{p:`SAM`, t:`No, no, me arrepiento de no haber sabido lo que había acá. Yo siempre soñé con construirla pero tu mamá me ganó de mano.`},
{p:`SOPHIE`, t:`Contame algo sobre mi mamá.`},
{p:`SAM`, t:`Tu mamá era... irresistible. Era única, ¿sabés? Nosotros hablábamos y peleábamos mucho. ¡Te cuento algo más! Fui yo quien la trajo acá por primera vez.`},
{p:`SOPHIE`, t:`¿Pero eso no fue lo único que hicieron, no?`},
{p:`SAM`, t:`¿Pero qué te contó de mí?`},
{p:`SOPHIE`, t:`Nada, en realidad nunca me habló de vos.`},
{p:`SAM`, t:`(La mira sorprendido) Pero no entiendo... ¿Por qué estoy acá?`},
{a:`Sophie lo mira sin poder responder. Le hace una señal a Lisa, que arrastra a Sam hacia la pista de baile. Durante el baile Sophie termina bailando con Harry.`},
{p:`HARRY`, t:`(Ríe) ¡No puedo creer que Donna tenga una hija!`},
{p:`SOPHIE`, t:`¿Vos tenés hijos, Harry?`},
{p:`HARRY`, t:`No, me hubiera encantado tener una hija, ¡no sabés cuánto la hubiera malcriado!`},
{p:`SOPHIE`, t:`¡Qué suertuda! Nunca es demasiado tarde.`},
{p:`HARRY`, t:`Mmm, no creo que mi pareja esté muy de acuerdo. ¿Tu papá está acá?`},
{p:`SOPHIE`, t:`No sé.`},
{p:`HARRY`, t:`¿Cómo?`},
{p:`SOPHIE`, t:`No sé quién es mi papá.`},
{a:`Las chicas se llevan a Harry. Ahora Sophie baila con Bill.`},
{p:`BILL`, t:`Ey, ¿puedo ser un poco metido? ¡Soy escritor así que tengo derecho!`},
{p:`SOPHIE`, t:`Sí, no hay problema.`},
{p:`BILL`, t:`¿Cómo hizo tu mamá para construir este lugar? Cuando la conocí cantaba en un barcito en el continente…`},
{p:`SOPHIE`, t:`Heredó dinero de un testamento. Cuando era chiquita, vivíamos con una señora mayor. Mamá la cuidaba. Se llamaba Sophia.`},
{p:`BILL`, t:`¿Mi tía abuela Sophia? Pero siempre se dijo que su dinero había ido a parar a manos de alguien de la familia... Esperá un minuto, ¿cuántos años tenés?`},
{p:`SOPHIE`, t:`¡Veinte!`},
{p:`BILL`, t:`¡NO, NO, NOOOOOO!`}
]},

{n:"8", acto:1, lugar:"El muelle — Sophie y Bill", lineas:[
{a:`Bill entra corriendo agitado. Sophie entra atrás y él la mira. En el fondo se escucha la música de la fiesta.`},
{p:`SOPHIE`, t:`¡Bill!`},
{p:`BILL`, t:`Necesitaba tomar un poco de aire.`},
{p:`SOPHIE`, t:`¿Por qué tu tía abuela le dejó toda su plata a mi mamá?`},
{p:`BILL`, t:`No sé... ¿Tu mamá qué te dijo?`},
{p:`SOPHIE`, t:`¡Esto no tiene nada que ver con ella! Toda mi vida tuve una gran pregunta sin respuesta, y no quiero más secretos.`},
{p:`BILL`, t:`Sophie, este nunca fue mi secreto.`},
{p:`SOPHIE`, t:`¿Significa algo para vos? ¿Vos sos mi papá?`},
{p:`BILL`, t:`Creo que sí.`},
{p:`SOPHIE`, t:`¿Sabés lo que significa?`},
{p:`BILL`, t:`¿No tendrás una hermana gemela, no?`},
{p:`SOPHIE`, t:`No, no, claro que no. ¿No me llevarías hasta el altar mañana?`},
{p:`BILL`, t:`¿Qué? ¿Llevarte hasta el altar?`},
{p:`LISA`, t:`(Aparece y los interrumpe) ¡Sophie, volvieron los chicos!`},
{p:`SOPHIE`, t:`¡Sí, ahí vamos!`},
{p:`BILL`, t:`¡Voy a hablar con tu mamá!`},
{p:`SOPHIE`, t:`¡No, no! Esta noche no. Que sea nuestro secreto hasta el casamiento.`},
{p:`BILL`, t:`Está bien. Lo voy a hacer.`}
]},

{n:"9", acto:1, lugar:"El patio — Voulez Vous (final del Acto I)", lineas:[
{a:`El patio. Las chicas bailan, Sophie se acopla y baila en el medio de una ronda.`},
{p:`CHICAS`, cancion:`VOULEZ VOUS`, t:`Presten atención,
algo está pasando en la habitación.
Llenas de ansiedad,
brillan tus pupilas en la oscuridad.`},
{a:`Entran los chicos con aire triunfal llevando a Sky en andas. Lo llevan hasta Sophie y él le da el collar de perlas.`},
{p:`CHICAS`, cancion:`VOULEZ VOUS`, t:`Y vamos otra vez,
hoy puede ser igual que ayer,
dueños de la acción.
Lo hicimos una vez,
¿por qué no hacerlo otra vez?
Es tu decisión.`},
{p:`ELENCO`, cancion:`VOULEZ VOUS`, t:`Voulez vous, ahá,
es a todo o nada,
no hay mayor opción,
sin promesas, sin perdón.
Voulez vous, ahá,
no hay que darle vueltas
no es a media luz,
la question c'est voulez vous.`},
{a:`Sam lleva a Sophie a un lado.`},
{p:`SAM`, t:`Sophie, ¡yo ya sé por qué estoy acá! Dejame que te diga algo…`},
{p:`SOPHIE`, t:`Sam…`},
{p:`SAM`, t:`Yo sé que estoy apurando un poco las cosas, ¿pero tu mamá ya sabe que vos sabés...?`},
{p:`SOPHIE`, t:`¡No, no, no puede...!`},
{p:`SAM`, t:`No, claro que no. ¿Quién te va a llevar hasta el altar?`},
{p:`SOPHIE`, t:`¡Nadie!`},
{p:`SAM`, t:`Error. Lo voy a hacer yo.`},
{p:`SOPHIE`, t:`¿Vos?`},
{p:`SAM`, t:`Y no te preocupes por Donna, no me asusta... mucho.`},
{a:`Sam sale mientras el elenco sigue el baile. Sophie está bailando con Harry cuando de repente él grita.`},
{p:`HARRY`, t:`¡Ya entendí! Bueno, creo que tardé un poquito en darme cuenta... ¡Soy tu papá!`},
{p:`SOPHIE`, t:`¡Harry...!`},
{p:`HARRY`, t:`Ahora me cierra todo. ¡Por eso me mandaste la invitación! Querés a tu papá acá con vos para que te lleve hasta el altar. No te voy a decepcionar. ¡Ahí estaré!`},
{p:`ELENCO`, cancion:`VOULEZ VOUS`, t:`Voulez vous, ahá,
es a todo o nada,
no hay mayor opción,
sin promesas, sin perdón.
Voulez vous, ahá,
no hay que darle vueltas,
no es a media luz,
la question c'est voulez vous.
Voulez vous.`}
]},
{n:"10", acto:2, lugar:"El patio de madrugada — Sophie y Donna", lineas:[
{a:`Es de madrugada, Sophie está acostada en el patio, aún vestida con su pijama, y grita. Donna aparece velozmente.`},
{p:`DONNA`, t:`(Aparece acomodándose el camisón) ¡Sophie! ¿Qué pasa? Son las 6 de la mañana, ¿qué hacés ahí?`},
{p:`SOPHIE`, t:`(Mira a su alrededor confundida) No sé, yo... Estoy bien, mamá.`},
{p:`DONNA`, t:`No, no estás bien, vení. Otra vez estás caminando dormida.`},
{p:`SOPHIE`, t:`¿Otra vez? ¿Cuándo caminé dormida? ¡Mamá, no soy un bebé!`},
{p:`DONNA`, t:`¡Ya lo sé, Sophie, pero todavía sos mi hija y yo sé cuándo algo no anda bien! Todavía estamos a tiempo, puedo arreglar todo, mi amor. Yo puedo cancelar todo este capricho del casamiento…`},
{p:`SOPHIE`, t:`¿Capricho? ¿Cómo qué... capricho?`},
{p:`DONNA`, t:`Perdón, fue una forma de decir…`},
{p:`SOPHIE`, t:`¡No, es lo que pensás! ¡Que soy una estúpida en casarme y que todo esto es una pavada!`},
{p:`DONNA`, t:`Bueno, no voy a fingir que lo entiendo pero…`},
{p:`SOPHIE`, t:`¡No, claro que no! A vos te fue bárbaro sin un hombre, ¿no? ¡No pasaste por el casamiento, fuiste... directo al bebé!`},
{p:`DONNA`, t:`¿Qué está pasando acá, Sophie? ¿Por qué me estás atacando a mí?`},
{p:`SOPHIE`, t:`¡Yo voy a hacer las cosas bien! Amo a Sky, quiero estar con él, ¡y no voy a dejar que mis hijos crezcan sin saber quién es su papá porque es una mierda!`},
{a:`Sophie sale corriendo. Sky, Eddie y Pepper entran, la viva imagen de la resaca matutina.`},
{p:`SKY y PEPPER`, ps:[`SKY`,`PEPPER`], cancion:`VOULEZ VOUS`, t:`Voulez vous, ahá,
es a todo o nada…`},
{p:`DONNA`, t:`¡Sh! ¡Dios! ¡¿Pueden parar con todo este barullo antes que despierten a toda la isla?! ¿De dónde vienen?`},
{p:`EDDIE`, t:`(Despeinando a Pepper) ¡De dar un paseo! ¿O no, chicos?`},
{p:`DONNA`, t:`¡¿Pero qué clase de casamiento vamos a tener en el estado en que están?! ¡Sky, vos no te vas a casar con mi hija oliendo a pescado podrido! ¡A la ducha, va, va!`},
{p:`PEPPER`, t:`Sí…`},
{p:`DONNA`, t:`¿A dónde te creés que vas?`},
{p:`PEPPER`, t:`¡A enjabonarle la espalda al novio!`},
{p:`DONNA`, t:`Ah... ¡Quiero que pongas el champán en el hielo, quiero que pongas la vajilla, los manteles, las mejores copas, pero primero las lavás bien! (Pepper sale) Eddie, prepará el bote.`},
{p:`EDDIE`, t:`Ay, ¿por qué?`},
{p:`DONNA`, t:`Porque yo te lo ordeno y punto.`},
{a:`Eddie se va. Donna parece estar a punto de estallar. Suspira profundamente y queda sola con sus pensamientos.`}
]},

{n:"11", acto:2, lugar:"El patio — Uno de nosotros y ¿No lo ves?", lineas:[
{p:`DONNA`, cancion:`UNO DE NOSOTROS`, t:`¿Quién a veces llora?
¿Quién aún te añora
sola en un rincón?
Qué tristeza da
verse hundida, verse así.
¡Ojalá siguieras junto a mí!`},
{p:`DONNA`, cancion:`UNO DE NOSOTROS`, t:`Después de ti
no hubo más pasiones
fue porque tú robaste
todas mis opiniones
creía en ti
pero no vi tu juego
un día, todo se fue
traicionaste mi fe
tú no sabes
cómo lo pasé...`},
{p:`DONNA`, cancion:`UNO DE NOSOTROS`, t:`¿Quién a veces llora?
¿Quién aún te añora
sola en un rincón?
Su mirada ausente...
Sueña verse en otra situación
¿quién sin darse cuenta
corre a abrir la puerta
por si estás ahí?
Qué tristeza da
verse hundida, verse así
¡ojalá siguieras junto a mí!
Siempre junto a mí...`},
{a:`Sam entra, Donna lo ve y se quiere ir.`},
{p:`SAM`, t:`¡Donna! ¿Pero por qué tanto apuro?`},
{p:`DONNA`, t:`¿Qué querés, Sam?`},
{p:`SAM`, t:`(Mostrándole un dibujo) Tengo una idea para una ampliación.`},
{p:`DONNA`, t:`¡No me interesa tu ampliación! ¿Qué estás haciendo acá?`},
{p:`SAM`, t:`Estás viviendo mi sueño, Donna, no sé si te acordás. La isla, la taberna... es mi sueño.`},
{p:`DONNA`, t:`¡Pero mirá vos! ¿Tu sueño? Es mi realidad, ¿sabés? ¡Un trabajo duro y una hipoteca del carajo!`},
{p:`SAM`, t:`¡Bueno, está bien, sé una mártir! Yo también tengo hijos, Donna, y sé lo difícil que debe ser para vos sola.`},
{p:`DONNA`, t:`¡No me vengas con eso ahora! Me encanta hacer todo sola, ¿sabés? Todas las mañanas me despierto y le doy gracias al cielo por no tener al lado mío un viejo menopáusico arruinándome la vida. ¡Soy libre, soy soltera y es genial!`},
{p:`SAM`, cancion:`¿NO LO VES?`, t:`¿Nuestra felicidad a dónde fue a parar?
Hoy si me acerco a vos no me dejás pasar.
¿Qué fue de todo nuestro amor?
No hay explicación.
¿Por qué no me contás qué fue de la pasión?`},
{p:`SAM`, cancion:`¿NO LO VES?`, t:`Te estoy llamando hoy, te estoy gritando,
¿no lo ves?
Que no haya duda, un grito de ayuda,
¿no lo ves?
Si te vas otra vez sin tu amor me dejás.
Si te vas nuestra historia no da para más.`},
{p:`DONNA`, cancion:`¿NO LO VES?`, t:`Ya no te puedo ver
y cerca sé que estás.
Me diste la ilusión
y ya no hay nada más.
Yo quise hacerlo realidad,
y mi futuro es gris.
¿Qué fue de aquel amor
que me hizo tan feliz?`},
{p:`DONNA y SAM`, ps:[`DONNA`,`SAM`], cancion:`¿NO LO VES?`, t:`Te estoy llamando hoy, te estoy gritando,
¿no lo ves?
Que no haya duda, un grito de ayuda,
¿no lo ves?
Si te vas otra vez sin tu amor me dejás.
Si te vas nuestra historia no da para más.`},
{p:`SAM`, t:`¿Por qué no dijiste que era Sophie la que se casaba?`},
{p:`DONNA`, t:`¡Porque no es asunto tuyo!`},
{p:`SAM`, t:`Bueno, ¿y cómo es ese tipo, Sky? ¿Es bueno para ella?`},
{p:`DONNA`, t:`¡Eso tampoco es asunto tuyo!`},
{p:`DONNA y SAM`, ps:[`DONNA`,`SAM`], cancion:`¿NO LO VES?`, t:`Te estoy llamando hoy, te estoy gritando,
¿No lo ves?
Que no haya duda, un grito de ayuda,
¿No lo ves?`},
{p:`DONNA`, cancion:`¿NO LO VES?`, t:`Si te vas…`},
{p:`SAM`, cancion:`¿NO LO VES?`, t:`Si te vas…`},
{p:`DONNA y SAM`, ps:[`DONNA`,`SAM`], cancion:`¿NO LO VES?`, t:`...otra vez sin tu amor me dejás.
...nuestra historia no da para más.`}
]},

{n:"12", acto:2, lugar:"La playa — Ay, ¿qué va a decir tu mamá? y Es por mí, es por vos", lineas:[
{a:`La playa. Tanya está tomando sol. Pepper maneja el bar y está preparando unos cócteles.`},
{p:`PEPPER`, t:`¡Signora! Esto será una caricia para sus papilas gustativas.`},
{p:`TANYA`, t:`Ay, sí, ¿pero va a sacarme la resaca también?`},
{p:`PEPPER`, t:`Mirate a un espejo, muñeca, porque con sólo mirarte la mía... desapareció.`},
{p:`TANYA`, t:`¡Ay, callate, nene, que tengo edad para ser tu mamá!`},
{p:`PEPPER`, t:`Bueno, entonces podés llamarme... ¡Edipo!`},
{p:`TANYA`, t:`(Lo fulmina con la mirada) ¡Fuera de acá, fuera de acá!`},
{p:`PEPPER`, t:`¡Tanya! ¿Por qué no seguimos lo de anoche?`},
{p:`TANYA`, t:`Ni me hagas acordar de anoche... ¡Anoche nunca pasó!`},
{a:`Rosie, Bill, Ali, Lisa y Eddie entran.`},
{p:`LISA`, t:`¡Pepper! ¡Dale, Pepper, mové los deditos! Cóctel de champagne para todos.`},
{p:`PEPPER`, t:`(Atento a Tanya) Ahí tienen el bar, sírvanse lo que quieran.`},
{p:`ALI`, t:`No, vos nos tenés que servir, nosotros somos los invitados.`},
{p:`EDDIE`, t:`¡Qué difícil es encontrar un buen servicio!`},
{p:`LISA`, t:`¿Un trago, Bill?`},
{p:`BILL`, t:`¡No, gracias! Rosie me prometió hacer un rico manjar.`},
{p:`ROSIE`, t:`¿Yo prometí eso?`},
{p:`BILL`, t:`¿Sabés que yo siempre llevo en mi mochila una copia de tu libro "Cocina para la nueva mujer"?`},
{p:`ROSIE`, t:`¿En serio? Ah bueno, entonces seguramente sabés cómo condimentarme...`},
{p:`TANYA`, t:`(Mirando su reloj) ¡Vamos, vamos, chicas, que estamos en la cuenta regresiva! ¡Vamos que tenemos mucho trabajo por delante, vamos, vamos!`},
{p:`PEPPER`, t:`Eh... ¿trabajo?`},
{p:`TANYA`, t:`Sobre mi cara, lindo. ¡Un poco de chapa y pintura!`},
{p:`PEPPER`, t:`¡Pero Tanya, no se puede mejorar una obra maestra!`},
{p:`EDDIE`, t:`¡Qué patético!`},
{p:`ALI`, t:`¡Ah, bueno, de la nada un chamuyo!`},
{p:`LISA`, t:`¡No le hagas caso, Tanya, no puede evitar ser un bo-lu-do!`},
{p:`PEPPER`, t:`¡Tanya no puede ignorar la química que hay entre nosotros!`},
{p:`TANYA`, cancion:`AY, ¿QUÉ VA A DECIR TU MAMÁ?`, t:`¡Los nenes que juegan con fuego se queman los deditos!
Me buscás, me apurás,
pero yo no me puedo
arriesgar a salir con vos,
mejor digamos adiós.
Me mirás y se ve
en tus ojos que estás confundido
y algo yo sé,
vos no sos más que un bebé.`},
{p:`TANYA`, cancion:`AY, ¿QUÉ VA A DECIR TU MAMÁ?`, t:`Bailemos algo movido,
si eso es divertido,
ay, ¿qué va a decir tu mamá?
Vení corriendo a buscarme
para conquistarme.
Ay, ¿qué va a decir tu mamá?`},
{p:`PEPPER`, cancion:`AY, ¿QUÉ VA A DECIR TU MAMÁ?`, t:`¡Despacito!`},
{p:`TANYA`, cancion:`AY, ¿QUÉ VA A DECIR TU MAMÁ?`, t:`¡Despacito!
No hay por qué escapar,
tiempo siempre habrá,
¿Qué dirá mamá?`},
{p:`TANYA`, cancion:`AY, ¿QUÉ VA A DECIR TU MAMÁ?`, t:`Enfriá el motor,
¿qué sucederá?
¿qué dirá mamá?
Puedo ver que buscás,
pero sos muy chiquito,
¿no ves que te doblo en edad?
En eso no hay novedad.`},
{p:`TANYA`, cancion:`AY, ¿QUÉ VA A DECIR TU MAMÁ?`, t:`Sos especial y me gustás,
pero veo tu juego y siento que todo está mal.
Sos una trampa mortal.`},
{p:`PEPPER`, cancion:`AY, ¿QUÉ VA A DECIR TU MAMÁ?`, t:`No hay por qué escapar,
tiempo siempre habrá.`},
{a:`Sky entra apurado.`},
{p:`SKY`, t:`¡No, no! ¿Qué están haciendo acá? ¡Donna se está volviendo loca!`},
{p:`EDDIE`, t:`¡Perdón, Sky!`},
{p:`PEPPER`, t:`¡Perdón!`},
{p:`SKY`, t:`(Repasando su discurso) "Desde el primer día que te vi supe que nunca me iba a ir de esta isla..."`},
{p:`SOPHIE`, t:`(Entra alterada) ¡Sky! ¡Sky! ¡Está todo arruinado, me tenés que ayudar!`},
{p:`SKY`, t:`¿Por qué? ¿Qué pasó?`},
{p:`SOPHIE`, t:`¡Ay, es un lío y es todo culpa mía! Sé que estuve mal, pero leí el diario de mi mamá, analicé todos los que pueden ser mis papás... Y los invité al casamiento, pensé que iba a reconocer a mi papá con sólo verlo pero no fue así. ¡Ahora los tres piensan que son mis papás y todos están esperando para llevarme al altar...!`},
{p:`SKY`, t:`¡Pará, pará, pará! Tranquila. Repetí eso. ¿Qué hiciste?`},
{p:`SOPHIE`, t:`Invité a mi papá a nuestro casamiento.`},
{p:`SKY`, t:`¿Por qué no me lo dijiste antes? Pensé que hablábamos de todo, que nos teníamos confianza.`},
{p:`SOPHIE`, t:`No, Sky…`},
{p:`SKY`, t:`¡Y el gran casamiento es por esto!... ¡Claro, todo una excusa para encontrar a tu papá!`},
{p:`SOPHIE`, t:`¡No, no es así...!`},
{p:`SKY`, t:`¡Yo quería tomar un bote al continente con un par de testigos y casarme, nada más! ¡Y vos insististe con toda esta locura del casamiento de fantasía para jugar a la familia feliz!`},
{p:`SOPHIE`, t:`¡Se trata de saber quién soy!`},
{p:`SKY`, t:`¡No, Sophie, no lo vas a saber conociendo a tu papá! Eso viene de vos. ¿Qué sentirías vos si yo te hubiese mentido? Si yo me quiero casar con vos es porque te amo, porque pensé que es lo que vos querías. Pero ahora no estoy seguro...`},
{p:`SAM`, t:`(Entra) Perdón si interrumpo.`},
{p:`SKY`, t:`(Alejándose de Sophie) No, está bien. (A Sophie) Pensalo.`},
{p:`SOPHIE`, t:`No, Sky, esperá…`},
{p:`SAM`, t:`(Bloqueando su camino) ¡Esperá, dejalo! Él tiene razón, tenés que estar segura de lo que querés.`},
{p:`SOPHIE`, t:`(Alejándose de él) ¡Esto no tiene nada que ver con vos!`},
{p:`SAM`, t:`¡Sophie, soy tu papá y no puedo llevarte al altar hasta no saber si de verdad sos feliz!`},
{p:`SOPHIE`, t:`¡Ya tuve esta charla con mi mamá que me conoce mucho mejor que vos!`},
{p:`SAM`, t:`¿Y qué puede saber Donna sobre el matrimonio? Mirá, yo tengo más de veinte años de consejos para darte en dos minutos así que escuchame bien. Sos muy joven, tenés toda la vida por delante.`},
{p:`SOPHIE`, t:`Ahora no, Sam…`},
{p:`SAM`, t:`Yo también tuve la gran fiesta de casamiento, la torta... Bueno, lo siento mucho pero no siempre se termina con un "Felices para siempre".`},
{p:`SAM`, cancion:`ES POR MÍ, ES POR VOS`, t:`Todavía me acuerdo las peleas con mi esposa...
Separarse causa tanto dolor
pero sin amor.
Es por mí, es por vos,
por el bien de los dos.`},
{p:`SAM`, cancion:`ES POR MÍ, ES POR VOS`, t:`Ya no hay más risa,
todo fue deprisa.
El silencio en el lugar me hace llorar.
Nuestra historia terminó,
no hay más que hablar.
Es por mí, es por vos,
sólo hay que decir adiós.`},
{p:`SAM`, cancion:`ES POR MÍ, ES POR VOS`, t:`Es por mí, es por vos.
Cuesta aceptar que se terminó.
Separarse causa tanto dolor
pero sin amor.
Es por mí, es por vos,
por el bien de los dos.`},
{p:`SOPHIE`, t:`Me dijiste que tenías hijos.`},
{p:`SAM`, t:`Sí, y viven con su mamá.`},
{p:`SAM`, cancion:`ES POR MÍ, ES POR VOS`, t:`Tantos buenos tiempos,
cosas que hoy no siento.
Esa casa en la que vi chicos jugar,
ya no queda nada más
de nuestro hogar.`},
{p:`SOPHIE`, t:`Pero ese sos vos, no yo. ¡Amo a Sky más que a nada en el mundo! ¿Vos...? ¿Vos sentiste eso cuando te casaste?`},
{p:`SAM`, t:`No…`},
{p:`SOPHIE`, t:`Entonces va a estar todo bien. ¡Sí, yo sé que sí!`},
{p:`SAM`, t:`¡Sophie!`}
]},
{n:"13", acto:2, lugar:"Habitación de Donna — Un verano y Se me escapa el tiempo", lineas:[
{a:`Donna está sola en su cuarto probándose sombreros.`},
{p:`DONNA`, t:`Ni siquiera me sé poner un sombrero. No puedo hacer nada bien. (Golpean la puerta) ¡Pase!`},
{p:`DONNA`, t:`¡Harry! ¿Qué estás haciendo acá?`},
{p:`HARRY`, t:`Quería darte esto... (Le da un cheque)`},
{p:`DONNA`, t:`¡Mierda! ¿Qué es esto?`},
{p:`HARRY`, t:`(Torpemente) Es que... pensé que durante todos estos años tuviste que ajustarte cuidando sola a Sophie así que quise contribuir con algo para los gastos de la boda.`},
{p:`DONNA`, t:`(Se ríe y sacude la cabeza) Pero esto puede cubrir cuatro bodas... y un funeral. Harry, es un gesto hermoso, pero no…`},
{p:`HARRY`, t:`¿Sabés que desde que llegué a la isla es la primera vez que escucho que te reís?`},
{p:`DONNA`, t:`Bueno, Harry, estoy muy nerviosa, no sé qué esperabas encontrar.`},
{p:`HARRY`, t:`Un poquito más de la vieja Donna y un poco menos de la actual.`},
{p:`HARRY`, cancion:`UN VERANO`, t:`Hubo aquella vez
Un verano
Lo recuerdo bien
Calles de París
Un licor de anís
En verano
Fuiste tan feliz`},
{p:`HARRY`, cancion:`UN VERANO`, t:`Aquel paseo por el Sena para ver la Torre Eiffel
Libres bajo el cielo
Qué bello fue vivir así
Aquellos días junto a ti
Oh, sí`},
{p:`HARRY`, cancion:`UN VERANO`, t:`Qué tiempo aquel de amor y paz
Flores en el pelo
Y sin querer
Nos acechaba el miedo
A envejecer
A malograr el sueño
Y que al final
No hubiera bailes que bailar...`},
{p:`DONNA y HARRY`, ps:[`DONNA`,`HARRY`], cancion:`UN VERANO`, t:`Hubo alguna vez
Un verano
Lo recuerdo bien`},
{p:`HARRY`, cancion:`UN VERANO`, t:`Dos turistas van
Hacia Notre Dame`},
{p:`DONNA y HARRY`, ps:[`DONNA`,`HARRY`], cancion:`UN VERANO`, t:`En verano
Qué alegría dan
Esos restaurants`},
{p:`HARRY`, cancion:`UN VERANO`, t:`En verano
Quesos y croissants...
Si pudiera ser
Otra vez ayer
En verano
Sueño con volver`},
{p:`DONNA`, cancion:`UN VERANO`, t:`Hoy vas al banco a trabajar
Te has vuelto un hombre familiar
Y te llamas... ¿Harry?
Lo raro es ¡sí!
Que fueras tanto para mí`},
{p:`DONNA y HARRY`, ps:[`DONNA`,`HARRY`], cancion:`UN VERANO`, t:`Hubo aquella vez
Un verano
Lo recuerdo bien...
Cuando te besé
por Champs Elysees
En verano
Fuiste tan feliz...`},
{a:`Alguien golpea la puerta, lo que los trae de inmediato al presente.`},
{p:`DONNA`, t:`(Trata de devolverle el cheque) ¡Tomá Harry! No, no puedo aceptarlo, no sé por qué pensás que puedo aceptarlo, pero no. (Otro golpe) ¡Pase!`},
{p:`HARRY`, t:`Bueno... no podemos seguir hablando de esto ahora. ¡Te veo en el casamiento!`},
{p:`DONNA`, t:`¿En el casamiento?`},
{p:`HARRY`, t:`Sí... Me invitaron.`},
{p:`DONNA`, t:`(Rompiendo el hielo) Así que... ¿ese es el vestido?`},
{p:`SOPHIE`, t:`Sí…`},
{p:`DONNA`, t:`Es... es hermoso... ¿Ya están listas Lisa y Ali para ayudarte?`},
{p:`SOPHIE`, t:`¿No me ayudás vos, ma?`},
{p:`DONNA`, cancion:`SE ME ESCAPA EL TIEMPO`, t:`Amaneció y se fue ya para la escuela,
la vi salir distraída y sonreír.
Me dice adiós y en mí crece la tristeza,
algo que no puedo describir.
El miedo de perderla para siempre
y sin llegar a conocerla bien.
Me gusta compartir sus alegrías,
su risa y su niñez.`},
{p:`DONNA`, cancion:`SE ME ESCAPA EL TIEMPO`, t:`Se me escapa el tiempo cada vez
que intento retener momentos y sentimientos,
se me escapa el tiempo sin querer.
Tengo tantas cosas que aprender.
Y cuando pienso que la entiendo,
siguió creciendo,
se me escapa el tiempo sin querer.`},
{p:`DONNA`, t:`Así... ahí está. ¡Adentro!`},
{p:`SOPHIE`, t:`¿Vos sentís que te estoy decepcionando?`},
{p:`DONNA`, t:`¡Ay, Sophie! ¿Por qué decir eso?`},
{p:`SOPHIE`, t:`Todos dicen "Tu mamá tiene tanta onda, ella sola se hizo cargo del negocio, de vos".`},
{p:`DONNA`, t:`Bueno, no tenía demasiadas opciones, ¿no? Ser madre soltera a los 70... Tampoco tenía a dónde ir... Mi propia madre me echó.`},
{p:`SOPHIE`, t:`¿Qué? Yo no sabía…`},
{p:`DONNA`, t:`No, no, pero eso no es importante ahora, no, no, no. Prefiero estar acá con vos que encerrada en aquel monoambiente depresivo, ¿sí? ¡Mirate!`},
{p:`DONNA`, cancion:`SE ME ESCAPA EL TIEMPO`, t:`Al despertar, somos dos para el desayuno,
y al bostezar, veo al tiempo que se va.
Ella se fue y otra vez la melancolía
y esa culpa que jamás se va.
¿Qué fue de nuestros juegos y aventuras,
y viajes que planeábamos hacer?
Hay tantas cosas que jamás logramos,
¿por qué? Yo no lo sé...`},
{p:`DONNA y SOPHIE`, ps:[`DONNA`,`SOPHIE`], cancion:`SE ME ESCAPA EL TIEMPO`, t:`A veces quiero congelar el tiempo,
guardar esas imágenes en mí.
Se me escapa el tiempo…`},
{p:`SOPHIE`, t:`¿No me llevás hasta el altar? ¡Estoy tan orgullosa de vos, mamá!`},
{p:`DONNA`, t:`Sí... sí.`},
{p:`SAM`, t:`(Aparece en la puerta) Donna…`},
{p:`DONNA`, t:`¡Ahora no, Sam!`},
{p:`SAM`, t:`Sophie me dijo que vos la vas a llevar al altar.`},
{p:`DONNA`, t:`¡Por supuesto! ¿Quién si no?`},
{p:`SAM`, t:`¿Qué tal su papá?`},
{p:`DONNA`, t:`¡Su papá no está acá!`},
{p:`SAM`, t:`Donna, Donna, esto es entre vos y yo…`},
{p:`DONNA`, cancion:`HAY SÓLO UN GANADOR`, t:`Ya no quiero hablar de lo que pasamos.
Duele ver caer sueños del ayer.
Yo jugué a ganar, aposté a la suerte.
No me quedan más cartas por jugar.
Hay sólo un ganador que humilla al perdedor.
Lo tengo que aceptar, cosas del azar.`},
{p:`DONNA`, cancion:`HAY SÓLO UN GANADOR`, t:`Me creí tu amor y seguí tu juego.
Yo jamás dudé, sólo me entregué.
Yo soñé un hogar, me sentí segura.
Yo me equivoqué, caro lo pagué.
Los dioses con frialdad digitan la verdad.
Mi corazón perdió todo lo que dio.
Hay sólo un ganador que humilla al perdedor.
Es fácil de entender, ya no hay más que hacer.`},
{p:`DONNA`, cancion:`HAY SÓLO UN GANADOR`, t:`Contame, ¿te besó como yo lo hacía?
¿Al decirte "amor" te sentís mejor?
Vos sabés muy bien lo que yo sentía.
¿Y qué pude hacer más que obedecer?
Los jueces hablarán, el fallo dictarán.
Ya no hay acusación, fin de la actuación.
Que siga la función que aún falta más acción.
En esto del amor hay sólo un ganador.`},
{p:`DONNA`, cancion:`HAY SÓLO UN GANADOR`, t:`Ya no quiero hablar, ya no tengo fuerzas.
Tengo que aceptar tu mano al saludar.
Te pido perdón si me pongo triste,
si me ves dudar, si me ves llorar.
Pero sé que hay sólo un ganador,
hay sólo un ganador.
¡Hay sólo un ganador!`}
]},

{n:"14", acto:2, lugar:"El casamiento — Apostá por mí y Que sí, que sí", lineas:[
{a:`El patio está listo para la ceremonia. Rosie está dando los últimos toques a los arreglos. Entra Bill.`},
{p:`BILL`, t:`¡Rosie!`},
{p:`ROSIE`, t:`¡Andá y esperá con los demás hasta que yo termine!`},
{p:`BILL`, t:`(Mostrándole la carta) ¡Recibí esta carta de Sophie! Quería que la llevara al altar, ahora se arrepintió. Estoy confundido. Soy el papá de Sophie.`},
{p:`ROSIE`, t:`Ajá, necesitás hablar con Donna.`},
{p:`BILL`, t:`¡Se lo voy a decir ahora!`},
{p:`ROSIE`, t:`¡No! ¡El casamiento de Sophie es en cinco minutos, así que elegí una sillita y quedate sentadito ahí!`},
{p:`BILL`, t:`Para decirte la verdad, me daba pánico la idea de caminar hasta el altar…`},
{p:`ROSIE`, t:`¡Decímelo a mí!`},
{p:`BILL`, t:`Casamiento, hijos, responsabilidades. ¡Yo soy un escritor! Lo decidí hace mucho tiempo. ¡Yo camino solo!`},
{p:`ROSIE`, cancion:`APOSTÁ POR MÍ`, t:`Si cambiás de plan, me podés llamar.
Si decís que sí, apostá por mí.
Si te importo, me avisás,
me vas a encontrar
si buscás algún lugar para descansar.`},
{p:`ROSIE`, cancion:`APOSTÁ POR MÍ`, t:`En tu soledad cuando no haya nadie más,
si decís que sí, apostá por mí.
Cuando arranque lo mejor, esa es la verdad,
yo te pido por favor la oportunidad.
Apostá por mí, apostá por mí.
Vamos a una fiesta.`},
{p:`BILL`, cancion:`APOSTÁ POR MÍ`, t:`O de paseo.`},
{p:`ROSIE`, cancion:`APOSTÁ POR MÍ`, t:`¿Querés que nos juntemos?
Vamos a un concierto.`},
{p:`BILL`, cancion:`APOSTÁ POR MÍ`, t:`Sólo charlemos.`},
{p:`ROSIE`, cancion:`APOSTÁ POR MÍ`, t:`Así nos conocemos.
Porque sé muy bien,
hay tanto que hacer de a dos.
Cuando sueño que estoy con vos
hay magia.
¿Por qué no querés ni hablar?`},
{p:`BILL`, cancion:`APOSTÁ POR MÍ`, t:`Me da mucho miedo amar.`},
{p:`ROSIE`, cancion:`APOSTÁ POR MÍ`, t:`Si te digo hoy que yo no me voy.
Si cambiás de plan, me podés llamar.
Si decís que sí, apostá por mí.`},
{p:`BILL`, cancion:`APOSTÁ POR MÍ`, t:`¡Dame un respiro, dale!`},
{p:`ROSIE`, cancion:`APOSTÁ POR MÍ`, t:`Apostá por mí.
Podés tomarte tu tiempo,
no tengo apuro,
para conquistarme.
No querés herirme.`},
{p:`BILL`, cancion:`APOSTÁ POR MÍ`, t:`Eso seguro.`},
{p:`ROSIE`, cancion:`APOSTÁ POR MÍ`, t:`No voy a dejarte.
Entendelo bien:
mi amor es especial y cura todo mal.
¡Es magia!`},
{p:`BILL y ROSIE`, ps:[`BILL`,`ROSIE`], cancion:`APOSTÁ POR MÍ`, t:`No sueñes con escapar,
yo jamás te podré olvidar.
¡Yo jamás sentí un amor así!`},
{a:`Entran los invitados. Sophie y Donna caminan hacia el altar.`},
{p:`PADRE ALEXANDRIO`, t:`Por favor, tomen asiento. ¡Sean todos bienvenidos! ¡Bienvenidos Sophie, Sky y todos los amigos que se encuentran aquí reunidos! ¡Y bienvenida especialmente a Donna, que representa a tu familia! Seres queridos, estamos aquí reunidos para celebrar el matrimonio de Sky…`},
{p:`DONNA`, t:`(Interrumpiendo) ¡Y bienvenido también al papá de Sophie!`},
{a:`Se ponen de pie Sam, Harry y Bill; al verse se vuelven a sentar.`},
{p:`SOPHIE`, t:`(Girando para mirarla) ¿Qué?`},
{p:`DONNA`, t:`Sí, te lo tengo que decir, Sophie. ¡Tu papá está acá!`},
{p:`SOPHIE`, t:`¡Ya sé!`},
{p:`DONNA`, t:`¿Qué?`},
{p:`SOPHIE`, t:`¡Yo lo invité!`},
{p:`DONNA`, t:`¿Pero cómo, si yo no sé cuál de los tres es? (Dándose cuenta) ¡Claro, por eso están todos acá!`},
{p:`SOPHIE`, t:`¡Mamá, lo siento tanto! ¿Me vas a poder perdonar?`},
{p:`DONNA`, t:`¿Vos me vas a poder perdonar?`},
{p:`SOPHIE`, t:`¡No me importa si te acostaste con cientos y cientos de hombres! Sos mi mamá y te amo.`},
{p:`DONNA`, t:`¡Ay, Sophie! (Se abrazan) ¡No, padre, no me acosté con cientos y cientos de hombres! Tal vez con... ehhh`},
{p:`SAM`, t:`Disculpame, ¿vos estás diciendo que Sophie puede ser mi hija como también la hija de Bill o de Harry?`},
{p:`DONNA`, t:`Así es. ¡No te hagas el santito porque el único culpable de todo esto sos vos! ¡Sí! Si no hubieras dejado a mi mamá para casarte con otra no…`},
{p:`SAM`, t:`¡No fue así! Yo volví... Le dije a Lorraine que no podía casarme con ella y volví a buscarte.`},
{p:`DONNA`, t:`¿Y por qué no me llamaste?`},
{p:`SAM`, t:`¡Porque fui lo suficientemente estúpido como para pensar que estarías en tu cuarto llorando por mí! Cuando llegué a la isla me dijeron que te habías ido con otro tipo. Entonces volví a casa, Lorraine me dijo que era un idiota y se casó conmigo para demostrármelo.`},
{p:`HARRY`, t:`¡Perdón que interrumpa un segundito! Donna, vos fuiste la primera mujer que amé. ¡Pero también fuiste la última mujer que amé! Hay distintas clases de familia, ¿no? La tuya son vos y Sophie. La mía somos yo... y Peter. Y para mí es genial tener aunque sea un tercio de Sophie. Jamás pensé tener ni siquiera eso.`},
{p:`SAM`, t:`(A Sophie) ¡Estoy de acuerdo con Harry, ser un tercio de tu papá me parece buenísimo!`},
{p:`BILL`, t:`¡A mí también!`},
{p:`ROSIE`, t:`¡Típico! ¡Te pasás veinte años esperando por un hombre y de pronto te aparecen tres!`},
{p:`SOPHIE`, t:`Podríamos averiguar cuál de los tres es mi papá pero no necesito saberlo, no me interesa. Aprendí algo sobre mí. (Mirando a Sky) ¡Sky, no nos casemos!`},
{p:`TODOS`, t:`¡¿Qué?!`},
{p:`SOPHIE`, t:`Yo sé que vos nunca quisiste nada de todo esto y tenemos toda la vida por delante. ¡Salgamos de esta isla y vayamos por el mundo!`},
{p:`SKY`, t:`¡Te amo!`},
{p:`PADRE ALEXANDRIO`, t:`Donna, ¿entonces se suspende el casamiento?`},
{p:`DONNA`, t:`¡Pero qué sé yo, padre, ni idea lo que está pasando!`},
{p:`SAM`, t:`¡Esperen un minuto! ¿Por qué desperdiciar un buen casamiento? ¿Qué decís, Sheridan? ¡Necesitás a alguien que ponga orden en esta isla!`},
{p:`DONNA`, t:`¡Ah, vos estás loco, ¿no?! ¡Yo no soy bígama!`},
{p:`SAM`, t:`¡Y yo tampoco! Soy un hombre divorciado que te ama desde hace veintiún años.`},
{p:`SAM`, cancion:`QUE SÍ, QUE SÍ, QUE SÍ`, t:`No más secretos
Tú ya ves lo que siento`},
{p:`CHICAS`, cancion:`QUE SÍ, QUE SÍ, QUE SÍ`, t:`Di que sí, que sí, que sí
Que sí, que sí, que sí`},
{p:`SAM`, cancion:`QUE SÍ, QUE SÍ, QUE SÍ`, t:`Donna, me quieres
Es verdad: no lo niegues
Di que sí`},
{p:`DONNA`, cancion:`QUE SÍ, QUE SÍ, QUE SÍ`, t:`Que sí, que sí, que sí, que sí, que sí`},
{p:`TODOS`, cancion:`QUE SÍ, QUE SÍ, QUE SÍ`, t:`Oh, tanto tiempo he pensado en ti
Por fin he vuelto
Estás junto a mí
Yo ya sé que me quieres
Es verdad, no lo niegues
Es así, que sí, que sí,
Que sí, que sí, que sí`}
]},

{n:"15", acto:2, lugar:"El muelle — Yo lo soñé", lineas:[
{a:`El muelle. Sophie y Sky se vistieron con ropa de viaje.`},
{p:`SOPHIE`, cancion:`YO LO SOÑÉ`, t:`Mi sueño es mi gran canción
Me hará vencer cualquier temor
Todo cuento de hadas
Puede ser real
Cree en tu futuro
Aunque salga mal`},
{p:`SOPHIE`, cancion:`YO LO SOÑÉ`, t:`Sé que existe un ángel
Hay bondad en todo cuanto ves
Sé que existe un ángel
Lo descubres antes o después
Poder creer, mi sueño es.`},
{a:`Harry, Sam, Bill y Donna se despiden de Sophie y Sky.`},
{p:`TODOS`, cancion:`YO LO SOÑÉ`, t:`Mi sueño es un ideal
Poder cambiar la realidad
Sigue tu camino
Sin mirar atrás
A través de sombras
Otro paso más
Sé que existe un ángel
Hay bondad en todo cuanto ves
Sé que existe un ángel
Lo descubres antes o después
Poder creer
Mi sueño es
Poder creer.`},
{p:`SOPHIE`, cancion:`YO LO SOÑÉ`, t:`Mi sueño es
Poder creer, mi sueño es.`}
]}
];

/* personajes que se pueden elegir en la primera pantalla */
const ELENCO = ["SOPHIE","DONNA","TANYA","ROSIE","SAM","HARRY","BILL","SKY","ALI","LISA","PEPPER","EDDIE","PADRE ALEXANDRIO"];
