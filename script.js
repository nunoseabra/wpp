async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Fala o Agente Leland Turbo.

Tenho uma breve mensagem para o Agente Finn McMissile.

Finn, o meu disfarce foi descoberto. Todo o trabalho está em risco.

Não vais acreditar o que eu descobri.

Isto é maior do que tudo o que já vimos... e ninguém sequer sabe que existe.

Finn, eu preciso de apoio, mas não chames a cavalaria, isso poderia arruinar a operação.

E tem cuidado. Isto não é seguro. Vamos a isto.

Fim de transmissão. Boa sorte.

Ok amigo, chegámos.

Ok amigo, chegámos.

Exactamente onde me pagaste para te trazer.

A questão é, para quê?

Procuro um carro.

Um carro? Ha!

Olha amigo, não nos podemos afastar mais de terra que isto.

Aqui é exactamente onde quero estar.

Tenho novidades para ti. Não está aqui ninguém para além de nós.

O que fazes tu aqui?

O que te parece, génio? A apanhar caranguejos.

Então dá a volta e regressa de onde vieste.

Sim, e quem me vai obrigar?

Certo. Certo. Não vale a pena tanta irritação.

Que imbecil. Desculpa, amigo. Parece-me que é o fim da viagem.

Amigo?

Atenção. Todos os trabalhadores ao cais de carga.

Leland Turbo, fala o Finn McMissile. Estou no ponto de encontro. Escuto.

Ok, pessoal, já sabem o que fazer.

Leland, é o Finn. Por favor responde. Escuto.

Vamos lá pessoal. Estes contentores não se vão descarregar sozinhos.

Há aqui demasiados carros. Saiam-me do caminho.

Professor Zündapp?

Aqui está, Professor. Queria ver isto antes de carregarmos?

Aqui está, Professor. Queria ver isto antes de carregarmos?

Ah, sim. Com muito cuidado.

Oh, uma câmara de filmar.

O que é que faz realmente?

Esta câmara é extremamente perigosa.

O que andará agora a tramar, Professor?

Este é um equipamento muito valioso. Certifiquem-se que está devidamente acondicionado para a viagem.

Certo.

Hei, Professor Z!

Este é um daqueles espiões britânicos de que lhe falámos.

Sim! Encontrámos este a encostar o pára-choques onde não devia.

Agente Leland Turbo.

É o Finn McMissile!

Ele viu a câmara! Matem-no!

Toda a gente ao convés! Toda a gente ao convés!

Como?

Para os barcos!

Ele está a escapar!

Não por muito tempo!

Ele está morto, Professor.

Fantástico!

Com o Finn McMissile fora de jogo, quem nos pode deter?

Mate -Rebocador Mate, é quem sou - estou aqui para ajudar.

Hei, Otis!

Hei, Mate.

Hei, Otis!

Hei, Mate.

Eu... Oh, bolas. Desculpa.

Pensava que desta vez conseguia, mas...

Suave como algodão, hã?

Quem estou a tentar enganar? Vou ser sempre mais áspero que um esfregão.

Ora porcas, estás a verter óleo outra vez. Devem ser as tuas juntas.

Hei, olha para o lado positivo disto.

É a 12ª vez que este mês te reboco, por isso esta é por conta da casa.

És o único que consegue ser simpático com esfregões como eu, Mat.

Não te preocupes. Estas coisas acontecem com qualquer um.

Mas tu nunca vertes óleo.

Sim, mas não sou perfeito.

Não digas a ninguém, mas acho que a minha ferrugem já se começa a ver.

Hei, o Faísca McQueen já voltou?

Ainda não.

Ainda não!?

Ele deve estar extasiado com a sua quarta vitória da taça pistão.

Quarta! Uhau!

Estamos muito orgulhosos dele, mas gostava mesmo era que voltasse depressa,

porque temos um verão inteiro de coisas de amigos para pôr em dia.

Apenas eu e...

McQueen!

McQueen!

Mat! Eu não tenho pressa nenhuma!

Hei, pessoal. O McQueen voltou!

Aaah!

O McQueen voltou! O McQueen voltou!

Aaah! Oooh-hoo! Oooh-hah!

O McQueen voltou!

Oh, Faísca! Bem vindo!

É bom ter-te de volta, querido!

Parabéns, pá.

Sê bem vindo, soldado.

Isto não estava o mesmo sem ti, filho.

O quê? Ele foi a algum lado?

É bom estar de volta, pessoal.

Mate!

McQueen!

Mate!

McQueen!

Oooh!

Whoooa!

Hei, até onde conseguiste ir desta vez, Otis?

Metade do caminho até à fronteira.

Ooh, nada mal, pá!

Eu sei! Também não consigo acreditar!

McQueen! Bem vindo!

Mat, é óptimo ver-te.

A ti também, amigo.

Meu, não vais acreditar nas coisas que tenho planeadas para nós!

Estas boas vindas, por cada ano que passa, ficam maiores!

Estás preparado para te divertires à séria?

Primeiro tenho uma coisa para te mostrar.

Uhau.

Não acredito, mudaram o nome à taça pistão.

Deram-lhe o nome do nosso amigo Doc Hudson.

Eu sei que o Doc disse que isto eram apenas taças vazias,

mas serem outros a ganhar, não me parecia correcto, sabes?

O Doc devia estar orgulhoso de ti. Tenho a certeza.

Bem, amigo. Tenho estado todo o ano à espera disto.

Que planos tens?

Ho-ho-ho! Tens a certeza que estás pronto?

Sabes com quem estás a falar? Eu sou o Faísca McQueen!

Eu estou pronto para tudo.

Er... Mat?

Não te esqueças, os teus travões não vão funcionar nisto!

Mat?

Relaxa.

Estes carris não usados à anos!

Aaaah!

Aaaah!

Depressa, depressa. Vá lá. Aqui vamos nós!

Mais depressa!

Ooh. Uhau.

Eu não sei. Achas?

Isto vai ser bom!

Viste aquilo?

Uhau. Isto não vai ser bom.

Ha-ha! Rapaz, este foi o melhor dia de sempre!

E a minha recordação favorita, esta nova amolgadela.

Mater, hoje foi ah...

Porcas, aquilo não foi nada.

Espera até veres o que tenho preparado para esta noite!

Mate, Mate! Eu estava a pensar num jantar calmo.

Era exactamente nisso que eu estava a pensar.

Não, eu queria dizer com a Sally, Mat.

Ainda melhor!

Tu, eu e a menina Sally juntos num jantar.

Mat, estava a tentar dizer, só eu e a Sally.

Oh.

Tu sabes, apenas esta noite.

Oh...

Faremos o que tu quiseres amanhã.

Está bem.

Obrigado por perceberes.

Sim, claro.

Vai lá e diverte-te.

Está bem então.

Até breve, amigo.

Ah, isto é tão agradável.

Nem consigo dizer como é bom estarmos aqui,

apenas nós dois, finalmente.

Tu e eu. Ah! Boa noite.

Oh!

O meu nome é Mat,

sou o vosso empregado de mesa.

Mat o empregado de mesa. Só isso dá graça.

Mat? Trabalhas aqui?

Sim, eu trabalho aqui. O que pensas?

Que entrei por aqui quando ninguém estava a ver

e fingia ser o empregado de mesa apenas para poder estar contigo?

Oh, claro. Isso seria totalmente ridículo!

Posso começar por trazer duas bebidas para estes adoráveis passarinhos?

Sim. Eu quero o habitual.

Sabes? Eu também vou querer isso.

Uh... Certo. O habitual.

Obrigado, amigo.

Não precisas de agradecer, Faísca.

Oh, Mate.

Pareces algo em baixo.

Não é nada.

Eu só queria...

O Faísca e eu...

Quer dizer, ele...

A Sally estava com muita fome.

Mat, por favor não fique assim.

Eu sabia que isto ia acontecer. Não sou idiota.

E uma pessoa inteligente vê logo quando não é desejado.

Mate...

Eu entendo, amigo.

Eu só...

Não ligues ao empregado de mesa.

Bem-vindos à minha loja de pneus.

E ai é que isto se torna interessante.

Oiçam. O mundo está à beira de ser transformado.

E a Allinol está na linha da frente desta mudança!

A nossa nova mistura de combustível foi criada, para não só fornecer energia,

mas para revolucionar a forma como os motores são alimentados.

Eu sou Miles Axelrod e nas minhas viagens através da vida,

já fui o maior defensor de combustíveis fósseis.

Mas venci esse desafio.

Imaginem o que acontecerá se usarmos 100% de combustível sustentável!

O que significa menos...

Gasóleo!

Menos...

Emissões!

E mais...

Mais...

... Energia!

A partir de amanhã, este pequeno motorzinho vai demonstrar que combustíveis alternativos podem salvar o planeta!

Queridos amigos, todos os carros têm sido convidados a participarem no maior evento de corridas de sempre, o Gran Premio Mundial!

Hã?

Uhau!

Três corridas em três países diferentes. E agora permitam-me que apresente a vossa anfitriã, o carro de corrida campeão italiano, Francesco Bernoulli!

Ah... Ah... Ah... Ah...

Uhau!

Senhoras e senhores, um brinde à Allinol.

À Allinol!

Uhau!

Allinol.

Eu estou a usar Allinol! E tem que o experimentar!

Faísca, ainda és o melhor amigo de Mater?

Uhau!

Allinol.

Eu estou a usar Allinol! E tem que o experimentar!

Faísca, ainda és o melhor amigo de Mater?

Claro. Mas porquê?

Porque ele já está no telemóvel com o Francesco.

Diz-me, tu conheces o Faísca McQueen?

Certo que conheço. Ele é o meu melhor amigo!

Deixa-me adivinhar.

Ele te disse "Francisco, o quê? É isso mesmo?"

"Francesco."

"No Francesco."

"Francesco."

E a resposta de McQueen será sim.

Não, não. Tu estás errado. Ele disse que tu estás errado.

O quê?

Mate!

Oi, Faísca!

Não é isso que eu disse.

Claro que disse. Aqui está ele.

Estou a ouvir.

Estou a ouvir.

Vai, fala.

Vai, fala.

Mat, por favor, não faças isso.

É verdade!

Eu vou...

O quê?

Ele te disse "ele é o mais rápido, vai chorar".

Que palavras são essas?

Ele vai chorar porque está triste de perder a corrida.

Ai! Mat, vou ter que desligar.

Pensa nisso!

Toma, vai chorar!

Faísca, estás a vir para cá, ou não?

Sim. Sim.

O quê?

Ai.

É verdade!

Eu já tenho a minha resposta!

O que esperas, Faísca?

Queres um autógrafo ou um lenço?

Ai!

Ai!

Faísca!

Pessoal!

O que se passa?

Eu acabei de falar com o Mat...

... e há boas notícias.

É verdade!

Vai, diz!

Naquela conferência de imprensa que acabamos de ver,

o que me preocupa é o que o Francesco disse.

Ele não é tão rápido quanto eu.

Não podemos deixar isso passar!

Tens que ir ao Gran Premio Mundial!

Gran Premio Mundial!

Isso!

Ótimo!

Não posso ir.

Por que não?

Por que eu...

Eu prometi a Sally que eu ia ter...

... tempo para ela.

Ah! Eu entendo.

Que tal Mat?

O quê?

E-eu não disse nada.

Eu vou pensar sobre isso, tá?

Vai, vai, vai!

Fala com a Sally.

É isso!

Queridos, vamos!

Vamos dar um passeio.

Então?

Vais?

Sim!

Eu sei que é um evento mundial.

Estava mesmo a pensar nisso.

Sim!

Estou muito contente!

Mat?

Mat?

Sim?

Vamos nos divertir.

O que queres dizer?

Tu e eu?

Claro!

Gran Premio Mundial!

Uhau!

Vai ser divertido!

Eu espero que sim.

Vamos!

Ei! Eu!

Está tudo bem?

Claro!

Até lá!

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
