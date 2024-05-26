var types = {
  "aberration (shapechanger)": "Aberrazione (mutaforma)",
  "aberration": "Aberrazione",
  "beast": "Bestia",
  "celestial (titan)": "Celestiale (titano)",
  "celestial": "Celestiale",
  "construct": "Costrutto",
  "dragon": "Drago",
  "elemental": "Elementale",
  "fey": "Folletto",
  "fiend (demon)": "Immondo (demone)",
  "fiend (demon, orc)": "Immondo (demone, orco)",
  "fiend (demon, shapechanger)": "Immondo (demone, mutaforma)",
  "fiend (devil)": "Immondo (diavolo)",
  "fiend (devil, shapechanger)": "Immondo (diavolo, mutaforma)",
  "fiend (gnoll)": "Immondo (gnoll)",
  "fiend (shapechanger)": "Immondo (mutaforma)",
  "fiend (yugoloth)": "Immondo (yugoloth)",
  "fiend": "Immondo",
  "giant (cloud giant)": "Gigante (gigante delle nuvole)",
  "giant (fire giant)": "Gigante (gigante del fuoco)",
  "giant (frost giant)": "Gigante (gigante del gelo)",
  "giant (hill giant)": "Gigante (gigante delle colline)",
  "giant (stone giant)": "Gigante (gigante delle pietre)",
  "giant (storm giant)": "Gigante (gigante delle tempeste)",
  "giant": "Gigante",
  "humanoid (aarakocra)": "Umanoide (aarakocra)",
  "humanoid (any race)": "Umanoide (qualsiasi razza)",
  "humanoid (bullywug)": "Umanoide (bullywug)",
  "humanoid (dwarf)": "Umanoide (nano)",
  "humanoid (elf)": "Umanoide (elfo)",
  "humanoid (firenewt)": "Umanoide (Tritone del Fuoco)",
  "humanoid (gith)": "Umanoide (gith)",
  "humanoid (gnoll)": "Umanoide (gnoll)",
  "humanoid (gnome)": "Umanoide (gnomo)",
  "humanoid (goblinoid)": "Umanoide (goblinoïde)",
  "humanoid (grimlock)": "Umanoide (grimlock)",
  "humanoid (grung)": "Umanoide (grung)",
  "humanoid (human)": "Umanoide (umano)",
  "humanoid (human, shapechanger)": "Umanoide (umano, mutaforma)",
  "humanoid (kenku)": "Umanoide (kenku)",
  "humanoid (kobold)": "Umanoide (coboldo)",
  "humanoid (kuo-toa)": "Umanoide (kuo-toa)",
  "humanoid (lizardfolk)": "Umanoide (lucertoloide)",
  "humanoid (merfolk)": "Umanoide (marinide)",
  "humanoid (orc)": "Umanoide (orco)",
  "humanoid (quaggoth)": "Umanoide (quaggoth)",
  "humanoid (sahuagin)": "Umanoide (sahuagin)",
  "humanoid (shapechanger)": "Umanoide (mutaforma)",
  "humanoid (thri-kreen)": "Umanoide (thri-kreen)",
  "humanoid (troglodyte)": "Umanoide (troglodite)",
  "humanoid (xvart)": "Umanoide (xvart)",
  "humanoid (yuan-ti)": "Umanoide (yuan-ti)",
  "humanoid": "Umanoide",
  "monstrosity (shapechanger)": "Mostruosità (mutaforma)",
  "monstrosity (shapechanger, yuan-ti)": "Mostruosità (mutaforma, yuan-ti)",
  "monstrosity (titan)": "Mostruosità (titano)",
  "monstrosity": "Mostruosità",
  "ooze": "Melma",
  "plant": "Vegetale",
  "swarm of Tiny beasts": "Sciame di minuscole bestie",
  "undead (shapechanger)": "Non Morto (mutaforma)",
  "undead": "Non Morto",
};

var alignments = {
  "chaotic evil": "Caotico Malvagio",
  "chaotic neutral": "Caotico Neutrale",
  "chaotic good": "Caotico Buono",
  "neutral evil": "Neutrale Malvagio",
  "true neutral": "Neutrale",
  "neutral": "Neutrale",
  "neutral good": "Neutre Buono",
  "lawful evil": "Legale Malvagio",
  "lawful neutral": "Legale Neutrale",
  "lawful good": "Legale Buono",
  "chaotic good evil": "Caotico Buono/Malvagio",
  "lawful chaotic evil": "Legale/Caotico Malvagio",
  "unaligned": "Senza Allineamento",
  "any non-lawful": "Qualsiasi non legale",
  "any": "Qualsiasi",
};

var languages = {
  "giant eagle": "Acquila Gigante",
  "worg": "Worg",
  "winter wolf": "Lupo Artico",
  "sahuagin": "Sahuagin",
  "giant owl, understands but cannot speak all but giant owl":
    "gufo gigante, capisce tutto ma non può parlare tranne che in gigante",
  "giant elk but can't speak them": "alce gigante ma non può parlare loro",
  "understands infernal but can't speak it":
    "capisce l'infernale ma non può parlare",
  "understands draconic but can't speak":
    "capisce il draconico ma non può parlare",
  "understands common but doesn't speak it":
    "capisce il comune ma non può parlare",
  "understands abyssal but can't speak":
    "capisce l'abissale ma non può parlare",
  "understands all languages it knew in life but can't speak":
    "capisce tutte le lingue che conosceva in vita ma non sa parlare",
  "understands commands given in any language but can't speak":
    "capisce i comandi dati in qualsiasi lingua ma non sa parlare",
  "(can't speak in rat form)": "(non può parlare in forma di ratto)",
  "(can't speak in boar form)": "(non può parlare in forma di cinghiale)",
  "(can't speak in bear form)": "(non può parlare in forma d'orso)",
  "(can't speak in tiger form)": "(non può parlare in forma di tigre)",
  "any one language (usually common)": "uno quasiasi, normalmente il comune",
  "any two languages": "2 linguaggi qualsiasi",
  "any four languages": "4 linguaggi qualsiasi",
  "5 other languages": "5 altri linguaggi",
  "any, usually common": "quasiasi, normalmente il comune",
  "one language known by its creator":
    "un linguaggio conosciuto dal suo creatore",
  "the languages it knew in life": "i linguaggi che conosceva in vita",
  "those it knew in life": "i linguaggi che conosceva in vita",
  "all it knew in life": "i linguaggi che conosceva in vita",
  "any it knew in life": "i linguaggi che conosceva in vita",
  "all, telepathy 120 ft.": "tutti, telepatia 36m",
  "telepathy 60 ft.": "telepatia 18m",
  "telepathy 60ft. (works only with creatures that understand abyssal)":
    "telepatia 18m (solo per creature che capiscono l'abissale)",
  "telepathy 120 ft.": "telepatia 36m",
  "but can't speak": "ma non può parlare",
  "but can't speak it": "ma non può parlare",
  "choice": "a scelta",
  "understands the languages of its creator but can't speak":
    "capisce le lingue del suo creatore ma non sa parlare",
  "understands common and giant but can't speak":
    "capisce il comune e il gigante ma non sa parlare",
  "cannot speak": "Non parla",
};

var races = {
  "Dragonborn": "Dragonide",
  "Dwarf": "Nano",
  "Hill Dwarf": "Nano delle Colline",
  "Elf": "Elfo",
  "High Elf": "Elfo Alto",
  "Rock Gnome": "Gnomo delle Rocce",
  "Gnome": "Gnomo",
  "Half Elf": "Mezzelfo",
  "Half-Elf": "Mezzelfo",
  "Half-elf": "Mezzelfo",
  "Halfling": "Halfling",
  "Lightfoot Halfling": "Halfling Piedelesto",
  "Half Orc": "Mezzorco",
  "Half-Orc": "Mezzorco",
  "HUMAN": "Umano",
  "Human": "Umano",
  "Variant Human": "Umano Variante",
  "Tiefling": "Tiefling",
};

var classes = {
  "Barbarian": "Barbaro",
  "Bard": "Bardo",
  "Cleric": "Chierico",
  "Druid": "Druido",
  "Fighter": "Guerriero",
  "Monk": "Monaco",
  "Paladin": "Paladino",
  "Ranger": "Ranger",
  "Rogue": "Ladro",
  "Sorcerer": "Stregone",
  "Warlock": "Warlock",
  "Wizard": "Mago",
  "Champion": "Campione",
  "College of Lore": "Collegio della Sapienza",
  "Oath of Devotion": "Giuramento di Devozione",
  "Life Domain": "Dominio della Vita",
  "Circle of the Land": "Circolo della Terra",
  "The Fiend": "Patrono Immondo",
  Hunter: "Cacciatore",
  "School of Evocation": "Scuola di Evocazione",
  "Path of the Berserker": "Percorso del Berserker",
  "Eldritch Blast": "Deflagrazione Occulta",
  "Pact of the Tome": "Patto del Tomo",
  "Pact of the Blade": "Patto della Lama",
  "Pact of the Chain": "Patto della Catena",
  "Way of the Open Hand": "Via della Mano Aperta",
};

var rarity = {
  "Common": "Comune",
  "Uncommon": "Non Comune",
  "Rare": "Raro",
  "Very rare": "Molto Raro",
  "Legendary": "Leggendario",
};
Hooks.once('init', () => {

	if (typeof Babele !== 'undefined') {

    game.settings.register("translation-dnd5e-it", "convert", {
      name: "Conversione Automatica",
      hint: "Applica automaticamente la conversione da sistema imperiale a sistema metrico",
      scope: "world",
      type: Boolean,
      default: true,
      config: true,
      onChange: (convert) => {
        setEncumbranceData();
      },
    });

    Babele.get().register({
      module: "translation-dnd5e-it",
      lang: "it",
      dir: "compendium",
    });

		Babele.get().registerConverters({
			"pages": Converters.pages(),
			"weight": Converters.weight(),
			"range": Converters.range(),
			"sightRange": Converters.sightRange(),
			"alignement": Converters.alignment(),
			"movement": Converters.movement(),
			"senses": Converters.senses(),
			"di": Converters.damage(),
			"languages": Converters.languages(),
			"token": Converters.token(),
			"race": Converters.race(),
			"rarity": Converters.rarity(),
			"raceRequirements": Converters.raceRequirements(),
			"classRequirements": Converters.classRequirements(),
			"source": Converters.source(),
			"type": Converters.type(),
			"adv_sizehint": Converters.advsizehint(),
			"advancement" : Converters.advancement()
		});
	}
});

Hooks.once('ready', () => {
	setEncumbranceData();
});

Hooks.on('createScene', (scene) => {
	if (convertEnabled()) {
		scene.update({
			"gridUnits": "m", "gridDistance": 1.5
		});
	}
});

Hooks.on('createActor', (actor) => {
	if (actor.getFlag("babele", "translated")) {
		return;
	}
	if (convertEnabled()) {
		actor.update({
			token: {
				dimSight: footsToMeters(actor.data.token.dimSight),
				brightSight: footsToMeters(actor.data.token.brightSight)
			},
			data: {
				attributes: {
					movement: {
						burrow: 0,
						climb: 0,
						fly: 0,
						swim: 0,
						units: 'm',
						walk: 9
					}
				}
			}
		});
	}
})

Hooks.on("renderActorSheet", async function () {
	skillSorting();
});

function convertEnabled() {
	return game.settings.get("translation-dnd5e-it", "convert");
}

function setEncumbranceData() {
	let convert = convertEnabled();
	game.settings.set("dnd5e", "metricWeightUnits", convert);

	// Fix system bug 
	CONFIG.DND5E.encumbrance.threshold.encumbered = mergeObject(
		CONFIG.DND5E.encumbrance.threshold.encumbered, {
			metric: 2.5
		}
	);
	CONFIG.DND5E.encumbrance.threshold.heavilyEncumbered = mergeObject(
		CONFIG.DND5E.encumbrance.threshold.heavilyEncumbered, {
			metric: 5
		}
	);
	CONFIG.DND5E.encumbrance.threshold.maximum = mergeObject(
		CONFIG.DND5E.encumbrance.threshold.maximum , {
			metric: 7.5
		}
	);

	if (convert){
		CONFIG.DND5E.movementUnits = {			
			m: CONFIG.DND5E.movementUnits.m,
			km: CONFIG.DND5E.movementUnits.km,
			ft: CONFIG.DND5E.movementUnits.ft,
			mi: CONFIG.DND5E.movementUnits.mi
		  };
	}
}

async function skillSorting() {
	const lists = document.getElementsByClassName("skills-list");
	for (let list of lists) {
		const competences = list.childNodes;
		let complist = [];
		for (let sk of competences) {
			if (sk.innerText && sk.tagName == "LI") {
				complist.push(sk);
			}
		}
		complist.sort(function (a, b) {
			return (a.innerText > b.innerText) ? 1 : -1;
		});
		for (let sk of complist) {
			list.appendChild(sk)
		}
	}
}

/**
 * Utility class with all predefined converters
 */

class Converters {

	// Override babele page to translate tooltips
	static pages() {
		return (pages, translations) => Converters._pages(pages, translations);
	}
	static _pages(pages, translations) {
		return pages.map(data => {
			if (!translations) {
				return data;
			}

			const translation = translations[data.name];
			if (!translation) {
				return data;
			}

			return mergeObject(data, {
				name: translation.name,
				image: { caption: translation.caption ?? data.image.caption },
				src: translation.src ?? data.src,
				text: { content: translation.text ?? data.text.content },
				video: {
					width: translation.width ?? data.video.width,
					height: translation.height ?? data.video.height,
				},
				system: { tooltip: translation.tooltip ?? data.system.tooltip },
				translated: true,
			});
		});
	}

	static weight() {
		return (value) => Converters._weight(value);
	}

	static _weight(value) {
		if (!convertEnabled()) {
			return value;
		}
		return Converters.lbToKg(value);
	}

	static range() {
		return (range) => Converters._range(range);
	}

	static _range(range) {
		if (!range) {
			return range;
		}

		if (!convertEnabled()) {
			return range;
		}
		if (range.units === "ft") {
			return mergeObject(range, {
				"value": Converters.footsToMeters(range.value),
				"long": Converters.footsToMeters(range.long),
				"units": "m"
			});
		}
		if (range.units === "mi") {
			return mergeObject(range, {
				"value": Converters.milesToMeters(range.value),
				"long": Converters.milesToMeters(range.long),
				"units": "km"
			});
		}
		return range;
	}

	static alignment() {
		return (alignment) => Converters._alignment(alignment);
	}

	static _alignment(alignment) {
		return alignments[alignment.toLowerCase()];
	}

	static sightRange() {
		return (range) => Converters._sightRange(range);
	}

	static _sightRange(range) {
		if (!convertEnabled()) {
			return range;
		}
		return Converters.footsToMeters(range)
	}

	static alignment(){
		return (alignment) => Converters._alignment(alignment);
	}

	static _alignment(alignment) {
		return alignments[alignment.toLowerCase()];
	}

	static movement() {
		return (movement) => Converters._movement(movement);
	}

	static _movement(movement) {

		if (!convertEnabled()) {
			return movement;
		}

		let convert = (value) => { return value; };
		let units = movement.units;
		if (units === 'ft') {
			convert = (value) => { return Converters.footsToMeters(value) };
			units = "m";
		}
		if (units === 'ml') {
			convert = (value) => { return Converters.milesToMeters(value) };
			units = "m";
		}

		return mergeObject(movement, {
			burrow: convert(movement.burrow),
			climb: convert(movement.climb),
			fly: convert(movement.fly),
			swim: convert(movement.swim),
			units: units,
			walk: convert(movement.walk)
		});
	}

	static senses() {
		return (senses) => Converters._senses(senses);
	}

	static _senses(senses) {
		if(!convertEnabled()) {
			return senses;
		}

		let convert = (value) => { return value; };
		let units = senses.units;
		if(units === 'ft') {
			convert = (value) => { return Converters.footsToMeters(value) };
			units = "m";
		}
		if(units === 'ml') {
			convert = (value) => { return Converters.milesToMeters(value) };
			units = "m";
		}

		return mergeObject(senses, {
			darkvision: convert(senses.darkvision),
			blindsight: convert(senses.blindsight),
			tremorsense: convert(senses.tremorsense),
			truesight: convert(senses.truesight),
			units: units,
			special: convert(senses.special)
		});
	}

	static damage() {
		return (damage) => Converters._damage(damage);
	}

	static _damage(damage) {
		return Converters.parseDamage(damage);
	}

	static languages() {
		return (lang) => Converters._languages(lang);
	}

	static _languages(lang) {
		if (lang == null) {
			return lang;
		}

		const languagesSplit = lang.split('; ');
		let languagesFin = '';
		let languagesTr = '';
		languagesSplit.forEach(function (el) {
			languagesTr = languages[el.toLowerCase()];
			if (languagesTr != null) {
				if (languagesFin === '') {
					languagesFin = languagesTr;
				} else {
					languagesFin = languagesFin + ' ; ' + languagesTr;
				}
			}
		});
		return languagesFin;
	}

	static token() {
		return (token) => Converters._token(token);
	}

	static _token(token) {
		return mergeObject(
			token, {
				sight: Converters.footsToMeters(token.dimSight),
				brightSight: Converters.footsToMeters(token.brightSight)
			}
		);
	}

	static race() {
		return (race) => Converters._race(race);
	}

	static _race(race) {
		return races[race] ? races[race] : race;
	}

	static rarity() {
		return (r) => Converters._rarity(r);
	}

	static _rarity(r) {
		return rarity[r] ? rarity[r] : r
	}

	static raceRequirements() {
		return (requirements) => Converters._raceRequirements(requirements);
	}

	static _raceRequirements(requirements) {
		let names = requirements.split(',');
		let translated = [];
		names.map(name => name.trim()).forEach(name => {
			translated.push(races[name] ? races[name] : name)
		});
		return translated.join(', ');
	}

	static classRequirements() {
		return (requirements) => Converters._classRequirements(requirements);
	}

	static _classRequirements(requirements) {
		let names = requirements.split(',');
		let translated = [];
		names.map(name => name.trim()).forEach(name => {
			let keys = Object.keys(classes);
			let translatedName = name;
			keys.forEach(key => {
				translatedName = translatedName.replace(key, classes[key])
			});
			translated.push(translatedName)
		});
		return translated.join(', ');
	}

	static source() {
		return (source) => Converters._source(source);
	}

	static _source(source) {
		let keys = Object.keys(source);
		let translatedSource = source.book;

		if (translatedSource) {
			keys.forEach(key => {
				translatedSource = translatedSource.replace(key, sources[key])
			});
		}
		return mergeObject(
			source, {
			book: translatedSource
		}
		);
	}

	static type() {
		return (type) => Converters._type(type);
	}

	static _type(type) {	
		if (!type.subtype) {
			return 
		};

		let index;
		for (let key of Object.keys(races)) {
			if (key.toLowerCase() !== type.subtype.toLowerCase()){
				continue;
			}

			index = key;
			break;
		}

		return mergeObject(type,
			{
				subtype: index ? races[index].toLowerCase() : type.subtype,				
			}
		);
	}

	static advsizehint() {
		return (advancements, translation) => Converters._advsizehint(advancements, translation);
	}

	static _advsizehint(advancements, translation) {	
		if (!translation) {
			return advancements;
		}

		advancements.forEach(adv => {
			if (adv.type === "Size"){
				mergeObject(adv, {
					configuration:{
						hint: translation
					}
				});
			}
		});

		return advancements;
	}
	
	static advancement() {
		return (advancements, translations, data, tc) => Converters._advancement(advancements, translations, data, tc);
	}

	static _advancement(advancements, translations, data, tc) {					
		advancements.forEach(adv => {

			switch (adv.type) {
				case "HitPoints":
					mergeObject(adv, {
						title: game.i18n.localize("DND5E." + adv.type)
					});
					break;
				case "ItemGrant":
					mergeObject(adv, {
						title: game.i18n.localize("DND5E." + adv.title)
					});
					break;
				case "AbilityScoreImprovement":{
					mergeObject(adv, {
						title: game.i18n.localize("DND5E.AdvancementAbilityScoreImprovementTitle")
					});
					break;
				}
				case "ScaleValue":
				case "ItemChoice":
				case "Trait":
					const classFeaturesTranslations = game.babele.translations.find((item) => item.collection === "dnd5e.classfeatures");
					if (adv.title !== "") {						
						if (classFeaturesTranslations.entries[adv.title]) {
							mergeObject(adv, {
								title: classFeaturesTranslations.entries[adv.title].name
							});		
						}
						else {
							console.warn(`Can't find "${adv.title}" translation`);
						}
					}

					if(adv.configuration && adv.configuration.hint && adv.configuration.hint !== ""){
						if (classFeaturesTranslations.entries[adv.configuration.hint]) {
							mergeObject(adv, {
								configuration:{
									hint: classFeaturesTranslations.entries[adv.configuration.hint].hint
								}								
							});
						}
						else {
							console.warn(`Can't find hint "${adv.configuration.hint}" translation`);
						}
					}
					break;
				default:
					break;
			}
			
		});

		return advancements;
	}
	
	static round(num) {
		return Math.round((num + Number.EPSILON) * 100) / 100;
	}

	static lbToKg(lb) {
		if (!lb) {
			return lb;
		}
		return parseInt(lb) / 2;
	}

	static footsToMeters(ft) {
		if (!ft) {
			return ft;
		}
		return Converters.round(parseInt(ft) * 0.3);
	}

	static milesToMeters(mi) {
		if (!mi) {
			return mi;
		}
		return Converters.round(parseInt(mi) * 1.5);
	}

	static parseDamage(damage) {
    damage = damage.replace(/bludgeoning/gi, "contundenti");
    damage = damage.replace(/piercing/gi, "perforanti");
    damage = damage.replace(/and/gi, "e");
    damage = damage.replace(/slashing/gi, "taglienti");
    damage = damage.replace(/from/gi, "da");
    damage = damage.replace(/nonmagical attacks/gi, "attacchi non magici");
    damage = damage.replace(/that aren't silvered/gi, "che non sono d'argento");
    damage = damage.replace(
      /not made with silvered weapons/gi,
      "non fatti con armi d'argento"
    );
    return damage;
	}

  static parseSenses(sensesText) {
    const senses = sensesText.split(". ");
    let parsed = "";
    senses.forEach((sense) => {
      parsed = parseSense(sense) + " " + parsed;
    });
    return parsed;
  }
  
  static parseSense(sense) {
    var regexp = /([0-9]+)/gi;
    sense = sense.replace(/ft/gi, "m");
    sense = sense.replace(/feet/gi, "m");
    sense = sense.replace(/Darkvision/gi, "Scurovisione");
    sense = sense.replace(/Darvision/gi, "Scurovisione"); //bug ^^
    sense = sense.replace(/Blindsight/gi, "Vista cieca");
    sense = sense.replace(/Truesight/gi, "Visione del Vero");
    sense = sense.replace(/tremorsense/gi, "Percezione tellurica");
    sense = sense.replace(/Blind Beyond/gi, "Cieco oltre");
    sense = sense.replace(/this radius/gi, "questo raggio");
    sense = sense.replace(
      sense.match(regexp),
      footsToMeters(sense.match(regexp))
    );
    sense = sense.replace(
      "(blind beyond this radius)",
      "(cieco oltre questo raggio)"
    );
    return sense;
  }
}