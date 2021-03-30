var bandeiraBrasil = document.querySelector("#bandeira-brasil");
var bandeiraEua = document.querySelector("#bandeira-eua");
var bandeiraEspanha = document.querySelector("#bandeira-espanha");

var titulo = document.querySelector("#titulo");
var p = document.querySelector("#paragrafo");

function transformaTextoParaIngles(){
	titulo.textContent = "Rainbow";
	p.textContent = "The rainbow is a multicolored arc, composed of seven colors, caused by the optical phenomenon that, through the refraction (dispersion) of sunlight on the water droplets suspended in the air, forms a spectrum of lights or colors. The white light of the sun is refracted on the water droplets and, thus, divided into the seven colors that make up the rainbow. In this way, the rainbow effect can be observed whenever there are drops of water in the air and, especially when sunlight falls above the observer. Therefore, the rainbow appears, many times, after the rain. This phenomenon is also called: rain-arc and celestial-arc. It is important to note that the rainbow is also called 'arch-of-the-covenant' 'arch-of-god' and 'arch-of-the-old' in the religions: Christian, Jewish and Islamic. After the flood, God, Noah and all surviving beings, formed a covenant. As a way of promising that he would no longer flood the earth, God transformed the rainbow into the symbol of this covenant, ensuring that after the rain it would appear in the sky.";
}

function transformaTextoParaEspanhol(){
	titulo.textContent = "Arcoiris";
	p.textContent = "El arco iris es un arco multicolor, compuesto por siete colores, provocado por el fenómeno óptico que, a través de la refracción (dispersión) de la luz solar sobre las gotas de agua suspendidas en el aire, forma un espectro de luces o colores. La luz blanca del sol se refracta sobre las gotas de agua y, así, se divide en los siete colores que componen el arco iris. De esta forma, el efecto del arco iris se puede observar siempre que haya gotas de agua en el aire y, especialmente, cuando la luz del sol cae sobre el observador. Por tanto, el arcoíris aparece, muchas veces, después de la lluvia. Este fenómeno también se llama: arco de lluvia y arco celeste. Es importante señalar que el arco iris también se llama 'arco-del-pacto' 'arco-de-dios' y 'arco-de-los-viejos' en las religiones: cristiana, judía e islámica. Después del diluvio, Dios, Noé y todos los seres sobrevivientes formaron un pacto. Como una forma de prometer que ya no inundaría la tierra, Dios transformó el arco iris en el símbolo de esta alianza, asegurándose que después de la lluvia aparecería en el cielo.";
}

function transformaTextoParaPortugues(){
	titulo.textContent = "Arco-íris";
	p.textContent = "O arco-íris é um arco multicolorido, composto de sete cores, causado pelo fenômeno óptico que, através da refração (dispersão) da luz solar sobre as gotas de água suspensas no ar, forma um espectro de luzes ou cores. A luz branca do sol é refratada sobre as gotas de água e, assim, dividida nas sete cores que compõem o arco-íris. Dessa forma, o efeito do arco-íris pode ser observado sempre que existirem gotas de água no ar e, sobretudo quando a luz do sol incidir acima do observador. Por isso, o arco-íris aparece, muitas vezes, depois da chuva. Esse fenômeno, também é denominado: arco-da-chuva e arco-celeste. Importante ressaltar que o arco-íris é também chamado de 'arco-da-aliança' 'arco-de-deus' e 'arco-da-velha' nas religiões: Cristiana, Judaica e Islâmica. Após o dilúvio, Deus, Noé e todos os seres sobreviventes, formaram uma aliança. Como forma de prometer que não inundaria mais a terra, Deus transformou o arco-íris no símbolo desta aliança, garantindo que depois da chuva ele apareceria no céu. ";
}

bandeiraBrasil.onclick = transformaTextoParaPortugues;
bandeiraEua.onclick = transformaTextoParaIngles;
bandeiraEspanha.onclick = transformaTextoParaEspanhol;