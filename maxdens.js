var dens =
[
    // Wild Area dens
    // 1
    new Den("Fighting", "Fighting", false, [new Pokemon("Tyrogue"),new Pokemon("Machop"),new Pokemon("Timburr"),new ExclusivePair("Scraggy", "Croagunk"),new ExclusivePair("Machoke", "Gurdurr"),new ExclusivePair("Gurdurr", "Machoke"),new ExclusivePair("Hitmonlee", "Hitmonchan"),new ExclusivePair("Hitmonchan", "Hitmonlee"),new ExclusivePair("Scrafty", "Toxicroak"),new ExclusivePair("Conkeldurr", "Hitmontop", 1, 1),new Pokemon("Machamp", 1),new ExclusivePair("Hitmontop", "Conkeldurr", 1, 1)]),
    // 2
    new Den("Psychic", "Psychic", false, [new Pokemon("Ralts"),new Pokemon("Munna"),new Pokemon("Espurr"),new ExclusivePair("Gothita", "Solosis"),new Pokemon("Elgyem"),new Pokemon("Kirlia"),new ExclusivePair("Meowstic-M", "Meowstic-F"),new ExclusivePair("Gothorita", "Duosion"),new Pokemon("Musharna"),new ExclusivePair("Gothitelle", "Reuniclus", 1, 1),new ExclusivePair("Solrock", "Lunatone"),new Pokemon("Gardevoir", 1)]),
    // 3
    new Den("Rock", "Rock", false, [new Pokemon("Bonsly"),new ExclusivePair("Roggenrola", "Binacle"),new ExclusivePair("Binacle", "Roggenrola"),new Pokemon("Dwebble"),new Pokemon("Rhyhorn"),new Pokemon("Boldore"),new Pokemon("Barbaracle"),new Pokemon("Rhydon"),new Pokemon("Sudowoodo"),new ExclusivePair("Crustle", "Gigalith", 1, 1),new ExclusivePair("Gigalith", "Crustle", 1, 1),new Pokemon("Shuckle", 1)]),
    // 4
    new Den("Bug", "Bug", false, [new Pokemon("Caterpie"),new Pokemon("Grubbin"),new Pokemon("Nincada"),new Pokemon("Joltik"),new ExclusivePair("Metapod", "Durant"),new ExclusivePair("Durant", "Metapod"),new Pokemon("Charjabug"),new Pokemon("Ninjask"),new Pokemon("Butterfree"),new Pokemon("Galvantula", 1),new Pokemon("Vikavolt"),new Pokemon("Durant", 1)]),
    // 5
    new Den("Bug", "Bug", false, [new Pokemon("Caterpie"),new Pokemon("Combee"),new Pokemon("Cutiefly"),new Pokemon("Blipbug"),new Pokemon("Joltik"),new Pokemon("Metapod"),new Pokemon("Dottler"),new Pokemon("Galvantula"),new Pokemon("Butterfree"),new Pokemon("Ribombee", 1),new Pokemon("Vespiquen", 1),new Pokemon("Orbeetle", 1)]),
    // 6
    new Den("Ghost", "Ghost", false, [new Pokemon("Gastly"),new Pokemon("Duskull"),new Pokemon("Drifloon"),new Pokemon("Phantump"),new Pokemon("Frillish"),new Pokemon("Pumpkaboo"),new Pokemon("Haunter"),new Pokemon("Dusclops"),new Pokemon("Drifblim"),new Pokemon("Trevenant", 1),new Pokemon("Gourgeist", 1),new Pokemon("Jellicent", 1)]),
    // 7
    new Den("Water", "Water", false, [new Pokemon("Magikarp"),new Pokemon("Mantyke"),new Pokemon("Remoraid"),new Pokemon("Chinchou"),new Pokemon("Wailmer"),new ExclusivePair("Basculin-Red", "Basculin-Blue"),new Pokemon("Octillery"),new Pokemon("Mantine"),new Pokemon("Lanturn"),new Pokemon("Wailord", 1),new Pokemon("Wishiwashi"),new Pokemon("Gyarados", 1)]),
    // 8
    new Den("Water", "Water", false, [new Pokemon("Chewtle"),new Pokemon("Arrokuda"),new Pokemon("Shellos"),new Pokemon("Dewpider"),new Pokemon("Wailmer"),new ExclusivePair("Basculin-Red", "Basculin-Blue"),new Pokemon("Wishiwashi"),new Pokemon("Drednaw"),new Pokemon("Barraskewda"),new Pokemon("Araquanid", 1),new Pokemon("Gastrodon", 1),new Pokemon("Wailord", 1)]),
    // 9
    new Den("Water", "Water", false, [new Pokemon("Chewtle"),new Pokemon("Wooper"),new Pokemon("Tympole"),new Pokemon("Corphish"),new Pokemon("Shellder"),new Pokemon("Palpitoad"),new Pokemon("Drednaw"),new Pokemon("Quagsire"),new Pokemon("Pyukumuku"),new Pokemon("Cloyster", 1),new Pokemon("Seismitoad", 1),new Pokemon("Crawdaunt", 1)]),
    // 10
    new Den("Fighting", "Fighting", false, [new Pokemon("Tyrogue"),new Pokemon("Stufful"),new Pokemon("Clobbopus"),new Pokemon("Pancham"),new ExclusivePair("Farfetch'd-Galar", "Stufful"),new ExclusivePair("Sawk", "Throh"),new Pokemon("Bewear"),new Pokemon("Pangoro"),new Pokemon("Hawlucha"),new ExclusivePair("Sirfetch'd", "Bewear", 1, 1),new Pokemon("Grapploct", 1),new Pokemon("Falinks", 1)]),
    // 11
    new Den("Steel", "Steel", false, [new Pokemon("Klink"),new Pokemon("Meowth-Galar"),new Pokemon("Bronzor"),new Pokemon("Ferroseed"),new Pokemon("Pawniard"),new Pokemon("Cufant"),new Pokemon("Klang"),new Pokemon("Perrserker"),new Pokemon("Bronzong"),new Pokemon("Bisharp", 1),new Pokemon("Klinklang", 1),new Pokemon("Copperajah", 1)]),
    // 12
    new Den("Steel", "Steel", false, [new Pokemon("Klink"),new Pokemon("Bronzor"),new Pokemon("Ferroseed"),new Pokemon("Pawniard"),new Pokemon("Klink"),new Pokemon("Bronzor"),new Pokemon("Steelix"),new Pokemon("Ferrothorn"),new Pokemon("Bronzong"),new Pokemon("Bisharp", 1),new ExclusivePair("Mawile", "Steelix", 1, 1),new Pokemon("Togedemaru", 1)]),
    // 13
    new Den("Psychic", "Psychic", false, [new Pokemon("Mime Jr."),new Pokemon("Blipbug"),new Pokemon("Natu"),new Pokemon("Hatenna"),new ExclusivePair("Dottler", "Ponyta-Galar"),new Pokemon("Hattrem"),new Pokemon("Sigilyph"),new Pokemon("Xatu"),new ExclusivePair("Indeedee-M", "Indeedee-F"),new ExclusivePair("Sigilyph", "Oranguru", 1, 1),new ExclusivePair("Orbeetle", "Rapidash-Galar", 1, 1),new Pokemon("Hatterene", 1)]),
    // 14
    new Den("Psychic", "Psychic", false, [new Pokemon("Mime Jr."),new Pokemon("Wynaut"),new Pokemon("Natu"),new Pokemon("Baltoy"),new Pokemon("Bronzor"),new Pokemon("Mr. Mime-Galar"),new Pokemon("Sigilyph"),new Pokemon("Xatu"),new ExclusivePair("Indeedee-M", "Indeedee-F"),new Pokemon("Claydol"),new Pokemon("Mr. Rime", 1),new Pokemon("Wobbuffet", 1)]),
    // 15
    new Den("Rock", "Rock", false, [new Pokemon("Rolycoly"),new ExclusivePair("Roggenrola", "Dwebble"),new ExclusivePair("Dwebble", "Roggenrola"),new Pokemon("Binacle"),new Pokemon("Carkol"),new Pokemon("Boldore"),new Pokemon("Crustle"),new Pokemon("Barbaracle"),new ExclusivePair("Onix", "Coalossal"),new ExclusivePair("Coalossal", "Gigalith", 1, 1),new ExclusivePair("Gigalith", "Onix", 1, 1),new Pokemon("Rhyperior", 1)]),
    // 16
    new Den("Ground", "Ground", false, [new Pokemon("Diglett"),new Pokemon("Mudbray"),new Pokemon("Nincada"),new Pokemon("Drilbur"),new Pokemon("Onix"),new Pokemon("Barboach"),new Pokemon("Steelix"),new Pokemon("Whiscash"),new Pokemon("Diggersby"),new Pokemon("Dugtrio", 1),new Pokemon("Excadrill", 1),new Pokemon("Mudsdale", 1)]),
    // 17
    new Den("Ground", "Ground", false, [new Pokemon("Silicobra"),new Pokemon("Yamask-Galar"),new Pokemon("Hippopotas"),new ExclusivePair("Swinub", "Trapinch"),new ExclusivePair("Trapinch", "Swinub"),new Pokemon("Piloswine"),new ExclusivePair("Vibrava", "Stunfisk-Galar"),new ExclusivePair("Stunfisk-Galar", "Vibrava"),new Pokemon("Runerigus"),new ExclusivePair("Hippowdon", "Flygon", 1, 0),new ExclusivePair("Flygon", "Hippowdon", 0, 1),new Pokemon("Sandaconda", 1)]),
    // 18
    new Den("Fire", "Fire", false, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Sizzlipede"),new Pokemon("Salandit"),new Pokemon("Litwick"),new ExclusivePair("Darumaka-Galar", "Heatmor"),new ExclusivePair("Salazzle", "Lampent"),new ExclusivePair("Lampent", "Salazzle"),new ExclusivePair("Ninetales", "Arcanine"),new Pokemon("Torkoal"),new ExclusivePair("Centiskorch", "Heatmor", 1, 1),new ExclusivePair("Heatmor", "Centiskorch", 1, 1),new ExclusivePair("Darmanitan-Galar", "Arcanine", 1, 1)]),
    // 19
    new Den("Fire", "Fire", false, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Salandit"),new Pokemon("Litwick"),new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Salandit"),new ExclusivePair("Salazzle", "Lampent"),new ExclusivePair("Lampent", "Salazzle"),new ExclusivePair("Ninetales", "Arcanine"),new ExclusivePair("Torkoal", "Salazzle"),new ExclusivePair("Salazzle", "Torkoal", 1, 1),new Pokemon("Chandelure", 1),new ExclusivePair("Turtonator", "Arcanine", 0, 1)]),
    // 20
    new Den("Fire", "Fire", false, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Sizzlipede"),new Pokemon("Salandit"),new Pokemon("Litwick"),new ExclusivePair("Darumaka-Galar", "Torkoal"),new ExclusivePair("Salazzle", "Carkol"),new ExclusivePair("Carkol", "Salazzle"),new ExclusivePair("Ninetales", "Arcanine"),new Pokemon("Torkoal"),new Pokemon("Centiskorch", 1),new Pokemon("Coalossal", 1),new ExclusivePair("Darmanitan-Galar", "Arcanine", 1, 1)]),
    // 21
    new Den("Ice", "Ice", false, [new Pokemon("Vanillite"),new Pokemon("Swinub"),new Pokemon("Snover"),new Pokemon("Bergmite"),new Pokemon("Delibird"),new Pokemon("Vanillish"),new Pokemon("Piloswine"),new Pokemon("Avalugg"),new Pokemon("Abomasnow"),new Pokemon("Cloyster", 1),new Pokemon("Vanilluxe", 1),new Pokemon("Lapras", 1)]),
    // 22
    new Den("Ice", "Ice", false, [new Pokemon("Swinub"),new Pokemon("Cubchoo"),new Pokemon("Snom"),new Pokemon("Sneasel"),new Pokemon("Mr. Mime-Galar"),new Pokemon("Piloswine"),new Pokemon("Cloyster"),new Pokemon("Beartic"),new Pokemon("Mr. Rime"),new Pokemon("Mamoswine", 1),new Pokemon("Frosmoth", 1),new Pokemon("Weavile", 1)]),
    // 23
    new Den("Ice", "Ice", false, [new Pokemon("Snover"),new Pokemon("Snom"),new ExclusivePair("Darumaka-Galar", "Delibird"),new Pokemon("Sneasel"),new Pokemon("Mr. Mime-Galar"),new Pokemon("Snover"),new Pokemon("Abomasnow"),new Pokemon("Glalie"),new Pokemon("Mr. Rime"),new Pokemon("Frosmoth", 1),new Pokemon("Froslass", 1),new ExclusivePair("Darmanitan-Galar", "Eiscue", 1, 0)]),
    // 24
    new Den("Electric", "Electric", false, [new Pokemon("Pichu"),new Pokemon("Electrike"),new Pokemon("Joltik"),new Pokemon("Chinchou"),new Pokemon("Charjabug"),new Pokemon("Pikachu"),new Pokemon("Pikachu"),new Pokemon("Manectric"),new Pokemon("Lanturn"),new Pokemon("Galvantula", 1),new Pokemon("Vikavolt"),new Pokemon("Raichu", 1)]),
    // 25
    new Den("Electric", "Electric", false, [new Pokemon("Yamper"),new Pokemon("Helioptile"),new Pokemon("Toxel"),new Pokemon("Chinchou"),new Pokemon("Pikachu"),new Pokemon("Lanturn"),new Pokemon("Boltund"),new Pokemon("Heliolisk"),new Pokemon("Toxtricity"),new Pokemon("Pincurchin", 1),new Pokemon("Togedemaru", 1),new Pokemon("Morpeko")]),
    // 26
    new Den("Grass", "Grass", false, [new Pokemon("Budew"),new ExclusivePair("Seedot", "Lotad"),new Pokemon("Bounsweet"),new Pokemon("Oddish"),new ExclusivePair("Nuzleaf", "Lombre"),new Pokemon("Roselia"),new Pokemon("Gloom"),new Pokemon("Steenee"),new ExclusivePair("Shiftry", "Ludicolo"),new Pokemon("Tsareena", 1),new Pokemon("Vileplume", 1),new Pokemon("Bellossom", 1)]),
    // 27
    new Den("Grass", "Grass", false, [new Pokemon("Budew"),new Pokemon("Gossifleur"),new Pokemon("Cottonee"),new Pokemon("Applin"),new Pokemon("Cherubi"),new Pokemon("Roselia"),new Pokemon("Ferroseed"),new Pokemon("Ferrothorn"),new Pokemon("Cherrim"),new Pokemon("Eldegoss", 1),new Pokemon("Whimsicott", 1),new ExclusivePair("Flapple", "Appletun", 1, 1)]),
    // 28
    new Den("Grass", "Grass", false, [new Pokemon("Pumpkaboo"),new Pokemon("Phantump"),new Pokemon("Pumpkaboo"),new Pokemon("Morelull"),new Pokemon("Pumpkaboo"),new Pokemon("Roselia"),new Pokemon("Shiinotic"),new Pokemon("Maractus"),new Pokemon("Trevenant"),new Pokemon("Gourgeist", 1),new Pokemon("Dhelmise"),new Pokemon("Pumpkaboo", 1)]),
    // 29
    new Den("Poison", "Poison", false, [new Pokemon("Stunky"),new Pokemon("Trubbish"),new Pokemon("Skorupi"),new ExclusivePair("Mareanie", "Oddish"),new ExclusivePair("Oddish", "Mareanie"),new Pokemon("Roselia"),new Pokemon("Qwilfish"),new Pokemon("Drapion"),new Pokemon("Vileplume"),new ExclusivePair("Toxapex", "Skuntank", 1, 1),new Pokemon("Garbodor", 1),new ExclusivePair("Skuntank", "Toxapex", 1, 1)]),
    // 30
    new Den("Poison", "Poison", false, [new Pokemon("Toxel"),new Pokemon("Gastly"),new Pokemon("Skorupi"),new Pokemon("Oddish"),new Pokemon("Gloom"),new Pokemon("Haunter"),new Pokemon("Koffing"),new Pokemon("Qwilfish"),new Pokemon("Vileplume"),new Pokemon("Roselia", 1),new Pokemon("Toxtricity", 1),new Pokemon("Weezing-Galar", 1)]),
    // 31
    new Den("Flying", "Flying", false, [new Pokemon("Pidove"),new Pokemon("Hoothoot"),new Pokemon("Natu"),new ExclusivePair("Rufflet", "Vullaby"),new Pokemon("Woobat"),new Pokemon("Tranquill"),new Pokemon("Unfezant"),new Pokemon("Noctowl"),new Pokemon("Swoobat"),new Pokemon("Xatu", 1),new ExclusivePair("Braviary", "Mandibuzz", 1, 1),new Pokemon("Sigilyph", 1)]),
    // 32
    new Den("Flying", "Flying", false, [new Pokemon("Rookidee"),new Pokemon("Noibat"),new Pokemon("Wingull"),new Pokemon("Natu"),new Pokemon("Drifloon"),new Pokemon("Corvisquire"),new Pokemon("Drifblim"),new Pokemon("Pelipper"),new Pokemon("Xatu"),new Pokemon("Corviknight", 1),new Pokemon("Hawlucha", 1),new Pokemon("Cramorant")]),
    // 33
    new Den("Fairy", "Fairy", false, [new Pokemon("Cleffa"),new Pokemon("Togepi"),new Pokemon("Cutiefly"),new ExclusivePair("Swirlix", "Spritzee"),new Pokemon("Clefairy"),new Pokemon("Morelull"),new Pokemon("Togetic"),new Pokemon("Clefable"),new Pokemon("Ribombee"),new Pokemon("Shiinotic", 1),new ExclusivePair("Slurpuff", "Aromatisse", 1, 1),new Pokemon("Togekiss", 1)]),
    // 34
    new Den("Fairy", "Fairy", false, [new Pokemon("Mime Jr."),new Pokemon("Milcery"),new Pokemon("Impidimp"),new Pokemon("Ralts"),new Pokemon("Clefairy"),new Pokemon("Kirlia"),new Pokemon("Morgrem"),new Pokemon("Clefable"),new Pokemon("Gardevoir"),new Pokemon("Alcremie", 1),new ExclusivePair("Mawile", "Rapidash-Galar", 1, 1),new Pokemon("Grimmsnarl", 1)]),
    // 35
    new Den("Dark", "Dark", false, [new Pokemon("Purrloin"),new Pokemon("Stunky"),new Pokemon("Sneasel"),new Pokemon("Inkay"),new Pokemon("Pawniard"),new Pokemon("Liepard"),new Pokemon("Skuntank"),new Pokemon("Weavile"),new Pokemon("Malamar"),new Pokemon("Bisharp", 1),new Pokemon("Crawdaunt", 1),new ExclusivePair("Shiftry", "Sableye", 1, 1)]),
    // 36
    new Den("Dark", "Dark", false, [new Pokemon("Nickit"),new Pokemon("Zigzagoon-Galar"),new Pokemon("Purrloin"),new Pokemon("Impidimp"),new ExclusivePair("Deino", "Vullaby"),new Pokemon("Thievul"),new Pokemon("Linoone-Galar"),new Pokemon("Morgrem"),new Pokemon("Grimmsnarl"),new ExclusivePair("Zweilous", "Mandibuzz", 0, 1),new Pokemon("Obstagoon", 1),new ExclusivePair("Hydreigon", "Tyranitar", 0, 1)]),
    // 37
    new Den("Dragon", "Dragon", false, [new Pokemon("Noibat"),new ExclusivePair("Trapinch", "Axew"),new ExclusivePair("Axew", "Trapinch"),new Pokemon("Noibat"),new ExclusivePair("Jangmo-o", "Goomy"),new Pokemon("Vibrava"),new ExclusivePair("Hakamo-o", "Fraxure"),new ExclusivePair("Fraxure", "Sliggoo"),new ExclusivePair("Haxorus", "Flygon"),new ExclusivePair("Flygon", "Haxorus", 0, 1),new ExclusivePair("Turtonator", "Drampa", 0, 1),new ExclusivePair("Kommo-o", "Goodra", 1, 1)]),
    // 38
    new Den("Dragon", "Dragon", false, [new Pokemon("Noibat"),new Pokemon("Applin"),new ExclusivePair("Jangmo-o", "Goomy"),new Pokemon("Dreepy"),new Pokemon("Noibat"),new Pokemon("Applin"),new Pokemon("Drakloak"),new Pokemon("Noivern"),new ExclusivePair("Hakamo-o", "Sliggoo"),new ExclusivePair("Kommo-o", "Goodra", 1, 1),new ExclusivePair("Flapple", "Appletun", 1, 1),new Pokemon("Dragapult", 1)]),
    // 39
    new Den("Normal", "Normal", false, [new Pokemon("Bunnelby"),new Pokemon("Hoothoot"),new Pokemon("Pidove"),new Pokemon("Minccino"),new Pokemon("Helioptile"),new Pokemon("Stufful"),new Pokemon("Diggersby"),new Pokemon("Noctowl"),new Pokemon("Unfezant"),new Pokemon("Heliolisk", 1),new Pokemon("Cinccino", 1),new Pokemon("Bewear", 1)]),
    // 40
    new Den("Normal", "Normal", false, [new Pokemon("Skwovet"),new Pokemon("Wooloo"),new Pokemon("Zigzagoon-Galar"),new Pokemon("Munchlax"),new ExclusivePair("Indeedee-M", "Indeedee-F"),new Pokemon("Greedent"),new Pokemon("Linoone-Galar"),new Pokemon("Greedent"),new Pokemon("Dubwool"),new Pokemon("Diggersby", 1),new ExclusivePair("Braviary", "Oranguru", 1, 1),new Pokemon("Snorlax", 1)]),
    // 41
    new Den("Water", "Water", false, [new Pokemon("Tympole"),new Pokemon("Shellder"),new Pokemon("Chinchou"),new ExclusivePair("Mareanie", "Palpitoad"),new ExclusivePair("Palpitoad", "Mareanie"),new Pokemon("Arrokuda"),new ExclusivePair("Cloyster", "Toxapex"),new ExclusivePair("Lanturn", "Cloyster"),new ExclusivePair("Wishiwashi", "Lanturn"),new ExclusivePair("Seismitoad", "Wishiwashi", 1, 0),new ExclusivePair("Barraskewda", "Seismitoad", 1, 1),new ExclusivePair("Toxapex", "Barraskewda", 1, 1)]),
    // 42
    new Den("Water", "Water", false, [new Pokemon("Shellos"),new Pokemon("Krabby"),new Pokemon("Corphish"),new Pokemon("Chewtle"),new Pokemon("Binacle"),new Pokemon("Pyukumuku"),new Pokemon("Kingler"),new Pokemon("Crawdaunt"),new Pokemon("Barbaracle"),new Pokemon("Gastrodon", 1),new Pokemon("Jellicent", 1),new Pokemon("Drednaw", 1)]),
    // 43
    new Den("Ghost", "Ghost", true, [new Pokemon("Gastly"),new Pokemon("Yamask-Galar"),new Pokemon("Sinistea"),new Pokemon("Duskull"),new Pokemon("Haunter"),new ExclusivePair("Pumpkaboo", "Corsola-Galar"),new Pokemon("Dusclops"),new ExclusivePair("Runerigus", "Sableye"),new ExclusivePair("Polteageist", "Runerigus", 1, 0),new ExclusivePair("Gourgeist", "Cursola", 1, 1),new Pokemon("Dusknoir", 1),new Pokemon("Gengar")]),
    // 44
    new Den("Water", "Water", true, [new Pokemon("Magikarp"),new Pokemon("Feebas"),new Pokemon("Arrokuda"),new Pokemon("Chewtle"),new Pokemon("Mareanie"),new ExclusivePair("Basculin-Red", "Basculin-Blue"),new Pokemon("Qwilfish"),new Pokemon("Toxapex"),new Pokemon("Pyukumuku", 1),new Pokemon("Gyarados", 1),new Pokemon("Lapras", 1),new Pokemon("Milotic", 1)]),
    // 45
    new Den("Steel", "Steel", true, [new Pokemon("Riolu"),new Pokemon("Bronzor"),new Pokemon("Pawniard"),new Pokemon("Klink"),new Pokemon("Onix"),new ExclusivePair("Durant", "Klang"),new ExclusivePair("Klang", "Durant"),new Pokemon("Bronzong"),new Pokemon("Bisharp", 1),new Pokemon("Steelix", 1),new Pokemon("Klinklang", 1),new Pokemon("Lucario", 1)]),
    // 46
    new Den("Bug", "Bug", true, [new Pokemon("Wimpod"),new Pokemon("Blipbug"),new ExclusivePair("Karrablast", "Shelmet"),new Pokemon("Dewpider"),new ExclusivePair("Shelmet", "Karrablast"),new Pokemon("Dwebble"),new Pokemon("Dottler"),new Pokemon("Orbeetle"),new Pokemon("Araquanid", 1),new Pokemon("Golisopod"),new ExclusivePair("Escavalier", "Accelgor", 1, 1),new Pokemon("Shedinja")]),
    // 47
    new Den("Ghost", "Ghost", true, [new Pokemon("Honedge"),new Pokemon("Yamask-Galar"),new Pokemon("Sinistea"),new Pokemon("Drifloon"),new Pokemon("Doublade"),new ExclusivePair("Pumpkaboo", "Corsola-Galar"),new Pokemon("Drifblim"),new ExclusivePair("Gourgeist", "Sableye"),new Pokemon("Polteageist", 1),new ExclusivePair("Gourgeist", "Cursola", 1, 1),new Pokemon("Runerigus"),new Pokemon("Aegislash")]),
    // 48
    new Den("Fighting", "Fighting", true, [new Pokemon("Riolu"),new Pokemon("Machop"),new ExclusivePair("Scraggy", "Croagunk"),new Pokemon("Stufful"),new Pokemon("Bewear"),new Pokemon("Falinks"),new Pokemon("Machoke"),new ExclusivePair("Scrafty", "Toxicroak"),new Pokemon("Machamp", 1),new ExclusivePair("Passimian", "Hawlucha", 1, 1),new Pokemon("Lucario", 1),new Pokemon("Gallade", 1)]),
    // 49
    new Den("Steel", "Steel", true, [new Pokemon("Meowth-Galar"),new Pokemon("Bronzor"),new Pokemon("Pawniard"),new Pokemon("Ferroseed"),new Pokemon("Honedge"),new Pokemon("Bronzong"),new Pokemon("Perrserker"),new Pokemon("Ferrothorn"),new Pokemon("Bisharp", 1),new Pokemon("Stunfisk-Galar", 1),new Pokemon("Copperajah", 1),new Pokemon("Duraludon", 1)]),
    // 50
    new Den("Psychic", "Psychic", true, [new Pokemon("Inkay"),new Pokemon("Ralts"),new Pokemon("Mr. Mime-Galar"),new Pokemon("Woobat"),new Pokemon("Hatenna"),new Pokemon("Hattrem"),new Pokemon("Kirlia"),new Pokemon("Swoobat"),new Pokemon("Hatterene", 1),new Pokemon("Mr. Rime", 1),new Pokemon("Malamar", 1),new Pokemon("Gardevoir", 1)]),
    // 51
    new Den("Rock", "Rock", true, [new Pokemon("Dwebble"),new Pokemon("Bonsly"),new Pokemon("Rolycoly"),new ExclusivePair("Binacle", "Roggenrola"),new Pokemon("Carkol"),new ExclusivePair("Sudowoodo", "Larvitar"),new ExclusivePair("Barbaracle", "Pupitar"),new Pokemon("Onix"),new Pokemon("Crustle", 1),new Pokemon("Coalossal", 1),new Pokemon("Steelix", 1),new ExclusivePair("Stonjourner", "Tyranitar", 0, 1)]),
    // 52
    new Den("Ground", "Ground", true, [new Pokemon("Wooper"),new Pokemon("Barboach"),new Pokemon("Yamask-Galar"),new Pokemon("Golett"),new Pokemon("Palpitoad"),new Pokemon("Quagsire"),new Pokemon("Stunfisk-Galar"),new Pokemon("Golurk"),new Pokemon("Gastrodon", 1),new Pokemon("Seismitoad", 1),new Pokemon("Runerigus"),new Pokemon("Rhyperior", 1)]),
    // 53
    new Den("Fire", "Fire", true, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Sizzlipede"),new Pokemon("Litwick"),new Pokemon("Charmander"),new Pokemon("Charmeleon"),new ExclusivePair("Ninetales", "Heatmor"),new Pokemon("Heatmor"),new Pokemon("Torkoal"),new ExclusivePair("Ninetales", "Salazzle", 1, 1),new ExclusivePair("Salazzle", "Arcanine", 1, 1),new Pokemon("Centiskorch", 1),new Pokemon("Charizard", 1)]),
    // 54
    new Den("Fire", "Fire", true, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Sizzlipede"),new Pokemon("Litwick"),new Pokemon("Salandit"),new Pokemon("Carkol"),new ExclusivePair("Lampent", "Heatmor"),new ExclusivePair("Heatmor", "Lampent"),new Pokemon("Torkoal"),new ExclusivePair("Ninetales", "Arcanine", 1, 1),new Pokemon("Chandelure", 1),new Pokemon("Coalossal", 1),new ExclusivePair("Turtonator", "Salazzle", 0, 1)]),
    // 55
    new Den("Ice", "Ice", true, [new Pokemon("Vanillite"),new ExclusivePair("Darumaka-Galar", "Cubchoo"),new Pokemon("Mr. Mime-Galar"),new Pokemon("Bergmite"),new Pokemon("Snorunt"),new Pokemon("Delibird"),new Pokemon("Avalugg"),new Pokemon("Glalie"),new Pokemon("Vanilluxe", 1),new Pokemon("Mr. Rime", 1),new Pokemon("Lapras", 1),new ExclusivePair("Darmanitan-Galar", "Eiscue", 1, 0)]),
    // 56
    new Den("Electric", "Electric", true, [new Pokemon("Yamper"),new Pokemon("Toxel"),new Pokemon("Pikachu"),new Pokemon("Joltik"),new Pokemon("Chinchou"),new Pokemon("Lanturn"),new Pokemon("Boltund"),new Pokemon("Toxtricity"),new Pokemon("Pincurchin", 1),new Pokemon("Galvantula", 1),new Pokemon("Togedemaru", 1),new Pokemon("Morpeko")]),
    // 57
    new Den("Electric", "Electric", true, [new Pokemon("Pichu"),new Pokemon("Electrike"),new Pokemon("Toxel"),new Pokemon("Helioptile"),new Pokemon("Joltik"),new Pokemon("Pikachu"),new Pokemon("Pikachu"),new Pokemon("Rotom-Mow"),new Pokemon("Rotom-Fan"),new Pokemon("Rotom-Wash"),new Pokemon("Rotom-Frost"),new Pokemon("Rotom-Heat")]),
    // 58
    new Den("Grass", "Grass", true, [new Pokemon("Budew"),new ExclusivePair("Seedot", "Lotad"),new Pokemon("Gossifleur"),new Pokemon("Ferroseed"),new ExclusivePair("Nuzleaf", "Lombre"),new Pokemon("Applin"),new Pokemon("Roselia"),new ExclusivePair("Shiftry", "Ludicolo"),new Pokemon("Eldegoss", 1),new Pokemon("Ferrothorn", 1),new Pokemon("Roserade", 1),new ExclusivePair("Flapple", "Appletun", 1, 1)]),
    // 59
    new Den("Grass", "Grass", true, [new Pokemon("Cherubi"),new ExclusivePair("Seedot", "Lotad"),new Pokemon("Gossifleur"),new Pokemon("Cottonee"),new ExclusivePair("Nuzleaf", "Lombre"),new Pokemon("Morelull"),new Pokemon("Cherrim"),new Pokemon("Shiinotic"),new Pokemon("Eldegoss", 1),new Pokemon("Whimsicott", 1),new ExclusivePair("Shiftry", "Ludicolo", 1, 1),new Pokemon("Dhelmise")]),
    // 60
    new Den("Poison", "Poison", true, [new Pokemon("Stunky"),new Pokemon("Trubbish"),new Pokemon("Skorupi"),new Pokemon("Koffing"),new ExclusivePair("Mareanie", "Salandit"),new Pokemon("Toxel"),new Pokemon("Garbodor"),new Pokemon("Drapion"),new Pokemon("Toxtricity", 1),new Pokemon("Skuntank", 1),new Pokemon("Weezing-Galar", 1),new ExclusivePair("Toxapex", "Salazzle", 1, 1)]),
    // 61
    new Den("Flying", "Flying", true, [new Pokemon("Natu"),new Pokemon("Hoothoot"),new Pokemon("Rookidee"),new Pokemon("Wingull"),new Pokemon("Butterfree"),new Pokemon("Corvisquire"),new Pokemon("Noctowl"),new Pokemon("Pelipper"),new Pokemon("Xatu", 1),new Pokemon("Hawlucha", 1),new Pokemon("Corviknight", 1),new Pokemon("Delibird", 1)]),
    // 62
    new Den("Fairy", "Fairy", true, [new Pokemon("Togepi"),new Pokemon("Morelull"),new Pokemon("Impidimp"),new Pokemon("Ralts"),new Pokemon("Togetic"),new Pokemon("Shiinotic"),new Pokemon("Morgrem"),new ExclusivePair("Mawile", "Rapidash-Galar"),new Pokemon("Gardevoir", 1),new Pokemon("Togekiss", 1),new Pokemon("Grimmsnarl", 1),new Pokemon("Mimikyu")]),
    // 63
    new Den("Dark", "Dark", true, [new Pokemon("Nickit"),new Pokemon("Zigzagoon-Galar"),new ExclusivePair("Scraggy", "Vullaby"),new Pokemon("Sneasel"),new Pokemon("Liepard"),new Pokemon("Linoone-Galar"),new Pokemon("Thievul"),new Pokemon("Pangoro"),new Pokemon("Weavile", 1),new ExclusivePair("Scrafty", "Mandibuzz", 1, 1),new Pokemon("Obstagoon", 1),new ExclusivePair("Hydreigon", "Tyranitar", 0, 1)]),
    // 64
    new Den("Dragon", "Dragon", true, [new ExclusivePair("Trapinch", "Axew"),new Pokemon("Applin"),new ExclusivePair("Axew", "Trapinch"),new ExclusivePair("Jangmo-o", "Goomy"),new Pokemon("Dreepy"),new ExclusivePair("Fraxure", "Vibrava"),new ExclusivePair("Hakamo-o", "Sliggoo"),new ExclusivePair("Turtonator", "Drampa"),new ExclusivePair("Kommo-o", "Goodra", 1, 1),new Pokemon("Drakloak", 1),new ExclusivePair("Haxorus", "Flygon", 1, 0),new Pokemon("Dragapult", 1)]),
    // 65
    new Den("Normal", "Normal", true, [new Pokemon("Bunnelby"),new Pokemon("Pidove"),new Pokemon("Skwovet"),new Pokemon("Eevee"),new Pokemon("Tranquill"),new Pokemon("Wooloo"),new Pokemon("Unfezant"),new Pokemon("Dubwool"),new ExclusivePair("Braviary", "Oranguru", 1, 1),new ExclusivePair("Indeedee-M", "Indeedee-F", 1, 1),new Pokemon("Eevee", 1),new Pokemon("Snorlax", 1)]),
    // 66
    new Den("Normal", "Normal", true, [new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto", 1),new Pokemon("Ditto", 1),new Pokemon("Ditto", 1),new Pokemon("Ditto", 1)]),
    // 67
    new Den("Water", "Water", true, [new Pokemon("Mantyke"),new Pokemon("Corphish"),new Pokemon("Arrokuda"),new Pokemon("Chewtle"),new Pokemon("Mareanie"),new ExclusivePair("Basculin-Red", "Basculin-Blue"),new Pokemon("Crawdaunt"),new Pokemon("Toxapex"),new Pokemon("Pyukumuku", 1),new Pokemon("Mantine", 1),new Pokemon("Lapras", 1),new Pokemon("Vaporeon", 1)]),
    // 68
    new Den("Psychic", "Psychic", true, [new Pokemon("Inkay"),new Pokemon("Bronzor"),new Pokemon("Mr. Mime-Galar"),new Pokemon("Woobat"),new Pokemon("Hatenna"),new Pokemon("Hattrem"),new Pokemon("Bronzong"),new Pokemon("Swoobat"),new Pokemon("Malamar", 1),new Pokemon("Mr. Rime", 1),new Pokemon("Hatterene", 1),new Pokemon("Espeon", 1)]),
    // 69
    new Den("Dark", "Dark", true, [new Pokemon("Nickit"),new Pokemon("Zigzagoon-Galar"),new Pokemon("Inkay"),new Pokemon("Pawniard"),new Pokemon("Liepard"),new Pokemon("Linoone-Galar"),new Pokemon("Thievul"),new Pokemon("Pangoro"),new Pokemon("Bisharp", 1),new Pokemon("Malamar", 1),new Pokemon("Obstagoon", 1),new Pokemon("Umbreon", 1)]),
    // 70
    new Den("Grass", "Grass", true, [new Pokemon("Cherubi"),new Pokemon("Bounsweet"),new Pokemon("Gossifleur"),new Pokemon("Cottonee"),new Pokemon("Steenee"),new Pokemon("Ferroseed"),new Pokemon("Cherrim"),new Pokemon("Ferrothorn"),new Pokemon("Eldegoss", 1),new Pokemon("Tsareena", 1),new Pokemon("Whimsicott", 1),new Pokemon("Leafeon", 1)]),
    // 71
    new Den("Fire", "Fire", true, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Sizzlipede"),new Pokemon("Litwick"),new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Carkol"),new ExclusivePair("Lampent", "Heatmor"),new ExclusivePair("Heatmor", "Lampent"),new Pokemon("Torkoal"),new ExclusivePair("Arcanine", "Ninetales", 1, 1),new ExclusivePair("Ninetales", "Arcanine", 1, 1),new Pokemon("Chandelure", 1),new Pokemon("Flareon", 1)]),
    // 72
    new Den("Electric", "Electric", true, [new Pokemon("Yamper"),new Pokemon("Toxel"),new Pokemon("Pikachu"),new Pokemon("Helioptile"),new Pokemon("Chinchou"),new Pokemon("Lanturn"),new Pokemon("Boltund"),new Pokemon("Toxtricity"),new Pokemon("Heliolisk", 1),new Pokemon("Vikavolt"),new Pokemon("Pikachu", 1),new Pokemon("Jolteon", 1)]),
    // 73
    new Den("Ice", "Ice", true, [new Pokemon("Vanillite"),new Pokemon("Snom"),new Pokemon("Mr. Mime-Galar"),new Pokemon("Bergmite"),new Pokemon("Snorunt"),new Pokemon("Vanillish"),new Pokemon("Avalugg"),new Pokemon("Frosmoth"),new Pokemon("Vanilluxe", 1),new Pokemon("Mr. Rime", 1),new Pokemon("Froslass", 1),new Pokemon("Glaceon", 1)]),
    // 74
    new Den("Fairy", "Fairy", true, [new Pokemon("Togepi"),new ExclusivePair("Swirlix", "Spritzee"),new Pokemon("Impidimp"),new Pokemon("Ralts"),new Pokemon("Togetic"),new Pokemon("Morgrem"),new ExclusivePair("Slurpuff", "Aromatisse"),new Pokemon("Milcery"),new Pokemon("Gardevoir", 1),new Pokemon("Grimmsnarl", 1),new Pokemon("Togekiss", 1),new Pokemon("Sylveon", 1)]),
    // 75
    new Den("Water", "Water", true, [new Pokemon("Magikarp"),new Pokemon("Dewpider"),new Pokemon("Wooper"),new Pokemon("Barboach"),new Pokemon("Krabby"),new Pokemon("Wishiwashi"),new Pokemon("Kingler"),new Pokemon("Whiscash"),new Pokemon("Qwilfish", 1),new Pokemon("Quagsire", 1),new Pokemon("Araquanid", 1),new Pokemon("Gyarados", 1)]),
    // 76
    new Den("Water", "Water", true, [new Pokemon("Mantyke"),new Pokemon("Remoraid"),new Pokemon("Wailmer"),new Pokemon("Binacle"),new Pokemon("Krabby"),new Pokemon("Pyukumuku"),new Pokemon("Kingler"),new ExclusivePair("Basculin-Red", "Basculin-Blue"),new Pokemon("Qwilfish", 1),new Pokemon("Octillery", 1),new Pokemon("Wailord", 1),new Pokemon("Mantine", 1)]),
    // 77
    new Den("Fire", "Fire", true, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Sizzlipede"),new Pokemon("Litwick"),new Pokemon("Charmander"),new Pokemon("Charmeleon"),new ExclusivePair("Ninetales", "Heatmor"),new Pokemon("Heatmor"),new Pokemon("Torkoal"),new ExclusivePair("Ninetales", "Salazzle", 1, 1),new ExclusivePair("Salazzle", "Arcanine", 1, 1),new Pokemon("Centiskorch", 1),new Pokemon("Charizard", 1, true)]),
    // 78
    new Den("Water", "Water", true, [new Pokemon("Magikarp"),new Pokemon("Arrokuda"),new Pokemon("Chewtle"),new Pokemon("Krabby"),new Pokemon("Pyukumuku"),new ExclusivePair("Basculin-Red", "Basculin-Blue"),new Pokemon("Qwilfish"),new Pokemon("Kingler"),new Pokemon("Wishiwashi"),new Pokemon("Gyarados", 1),new Pokemon("Gastrodon", 1),new Pokemon("Drednaw", 1, true)]),
    // 79
    new Den("Grass", "Grass", true, [new Pokemon("Budew"),new ExclusivePair("Seedot", "Lotad"),new Pokemon("Gossifleur"),new Pokemon("Ferroseed"),new ExclusivePair("Nuzleaf", "Lombre"),new Pokemon("Applin"),new Pokemon("Roselia"),new ExclusivePair("Shiftry", "Ludicolo"),new Pokemon("Eldegoss", 1),new Pokemon("Ferrothorn", 1),new Pokemon("Roserade", 1),new ExclusivePair("Flapple", "Appletun", 1, 1, true, true)]),
    // 80
    new Den("Fire", "Fire", true, [new ExclusivePair("Vulpix", "Growlithe"),new Pokemon("Sizzlipede"),new Pokemon("Litwick"),new Pokemon("Salandit"),new Pokemon("Carkol"),new Pokemon("Lampent"),new Pokemon("Heatmor"),new Pokemon("Torkoal"),new ExclusivePair("Ninetales", "Arcanine", 1, 1),new Pokemon("Chandelure", 1),new Pokemon("Coalossal", 1),new Pokemon("Centiskorch", 1, true)]),
    // 81
    new Den("Fighting", "Ghost", true, [new ExclusivePair("Riolu", "Honedge"),new ExclusivePair("Machop", "Yamask-Galar"),new ExclusivePair("Stufful", "Sinistea"),new ExclusivePair("Farfetch'd-Galar", "Gastly"),new ExclusivePair("Bewear", "Doublade"),new ExclusivePair("Machoke", "Corsola-Galar"),new ExclusivePair("Falinks", "Haunter"),new ExclusivePair("Hawlucha", "Sableye"),new ExclusivePair("Lucario", "Polteageist", 1, 1),new ExclusivePair("Gallade", "Cursola", 1, 1),new ExclusivePair("Sirfetch'd", "Runerigus", 1, 0),new ExclusivePair("Machamp", "Gengar", 1, 0, true, true)]),
    // 82
    new Den("Fairy", "Fairy", true, [new Pokemon("Togepi"),new ExclusivePair("Morelull", "Ponyta-Galar"),new Pokemon("Impidimp"),new Pokemon("Ralts"),new Pokemon("Togetic"),new Pokemon("Shiinotic"),new Pokemon("Morgrem"),new ExclusivePair("Mawile", "Rapidash-Galar"),new Pokemon("Gardevoir", 1),new Pokemon("Togekiss", 1),new Pokemon("Grimmsnarl", 1),new Pokemon("Alcremie", 1, true)]),
    // 83
    new Den("Rock", "Ice", true, [new ExclusivePair("Dwebble", "Vanillite"),new ExclusivePair("Bonsly", "Cubchoo"),new ExclusivePair("Rolycoly", "Mr. Mime-Galar"),new ExclusivePair("Binacle", "Bergmite"),new ExclusivePair("Carkol", "Snorunt"),new ExclusivePair("Sudowoodo", "Delibird"),new ExclusivePair("Barbaracle", "Avalugg"),new ExclusivePair("Onix", "Glalie"),new ExclusivePair("Crustle", "Vanilluxe", 1, 1),new ExclusivePair("Steelix", "Mr. Rime", 1, 1),new ExclusivePair("Stonjourner", "Eiscue"),new ExclusivePair("Coalossal", "Lapras", 1, 1, true, true)]),
    // 84
    new Den("Steel", "Steel", true, [new Pokemon("Riolu"),new Pokemon("Bronzor"),new Pokemon("Pawniard"),new Pokemon("Klink"),new Pokemon("Onix"),new ExclusivePair("Durant", "Klang"),new ExclusivePair("Klang", "Durant"),new Pokemon("Bronzong"),new Pokemon("Bisharp", 1),new Pokemon("Steelix", 1),new Pokemon("Klinklang", 1),new Pokemon("Duraludon", 1, true)]),
    // 85
    new Den("Steel", "Steel", true, [new Pokemon("Meowth-Galar"),new Pokemon("Bronzor"),new Pokemon("Pawniard"),new Pokemon("Ferroseed"),new Pokemon("Honedge"),new Pokemon("Bronzong"),new Pokemon("Perrserker"),new Pokemon("Ferrothorn"),new Pokemon("Bisharp", 1),new Pokemon("Stunfisk-Galar", 1),new Pokemon("Duraludon", 1),new Pokemon("Copperajah", 1, true)]),
    // 86
    new Den("Poison", "Poison", true, [new Pokemon("Stunky"),new Pokemon("Trubbish"),new Pokemon("Skorupi"),new Pokemon("Koffing"),new ExclusivePair("Mareanie", "Salandit"),new Pokemon("Toxel"),new Pokemon("Drapion"),new Pokemon("Toxtricity"),new Pokemon("Skuntank", 1),new Pokemon("Weezing-Galar", 1),new ExclusivePair("Toxapex", "Salazzle", 1, 1),new Pokemon("Garbodor", 1, true)]),
    // 87
    new Den("Fairy", "Fairy", true, [new Pokemon("Togepi"),new ExclusivePair("Swirlix", "Spritzee"),new Pokemon("Impidimp"),new Pokemon("Ralts"),new Pokemon("Togetic"),new Pokemon("Morgrem"),new ExclusivePair("Slurpuff", "Aromatisse"),new Pokemon("Milcery"),new Pokemon("Gardevoir", 1),new Pokemon("Grimmsnarl", 1),new Pokemon("Togekiss", 1),new Pokemon("Hatterene", 1, true)]),
    // 88
    new Den("Dark", "Dark", true, [new Pokemon("Nickit"),new Pokemon("Zigzagoon-Galar"),new ExclusivePair("Scraggy", "Vullaby"),new Pokemon("Impidimp"),new Pokemon("Liepard"),new Pokemon("Linoone-Galar"),new Pokemon("Morgrem"),new Pokemon("Thievul"),new Pokemon("Pangoro", 1),new ExclusivePair("Scrafty", "Mandibuzz", 1, 1),new ExclusivePair("Hydreigon", "Tyranitar", 0, 1),new Pokemon("Grimmsnarl", 1, true)]),
    // 89
    new Den("Flying", "Flying", true, [new Pokemon("Natu"),new Pokemon("Hoothoot"),new Pokemon("Rookidee"),new Pokemon("Wingull"),new Pokemon("Butterfree"),new Pokemon("Corvisquire"),new Pokemon("Noctowl"),new Pokemon("Pelipper"),new Pokemon("Xatu", 1),new Pokemon("Hawlucha", 1),new Pokemon("Sigilyph", 1),new Pokemon("Corviknight", 1, true)]),
    // 90
    new Den("Bug", "Bug", true, [new Pokemon("Wimpod"),new Pokemon("Blipbug"),new ExclusivePair("Karrablast", "Shelmet"),new Pokemon("Dewpider"),new ExclusivePair("Shelmet", "Karrablast"),new Pokemon("Dwebble"),new Pokemon("Dottler"),new Pokemon("Orbeetle"),new Pokemon("Araquanid", 1),new Pokemon("Golisopod"),new ExclusivePair("Escavalier", "Accelgor", 1, 1),new Pokemon("Butterfree", 1, true)]),
    // 91
    new Den("Water", "Water", true, [new Pokemon("Corphish"),new Pokemon("Krabby"),new Pokemon("Arrokuda"),new Pokemon("Chewtle"),new Pokemon("Mareanie"),new ExclusivePair("Basculin-Red", "Basculin-Blue"),new Pokemon("Crawdaunt"),new Pokemon("Toxapex"),new Pokemon("Pyukumuku", 1),new Pokemon("Gyarados", 1),new Pokemon("Lapras", 1),new Pokemon("Kingler", 1, true)]),
    // 92
    new Den("Bug", "Bug", true, [new Pokemon("Wimpod"),new Pokemon("Blipbug"),new ExclusivePair("Karrablast", "Shelmet"),new Pokemon("Dewpider"),new ExclusivePair("Shelmet", "Karrablast"),new Pokemon("Dwebble"),new Pokemon("Dottler"),new Pokemon("Orbeetle"),new Pokemon("Araquanid", 1),new Pokemon("Golisopod"),new ExclusivePair("Escavalier", "Accelgor", 1, 1),new Pokemon("Orbeetle", 1, true)]),
    // 93
    new Den("Ground", "Ground", true, [new Pokemon("Wooper"),new Pokemon("Barboach"),new Pokemon("Yamask-Galar"),new Pokemon("Golett"),new Pokemon("Palpitoad"),new Pokemon("Quagsire"),new Pokemon("Stunfisk-Galar"),new Pokemon("Golurk"),new Pokemon("Gastrodon", 1),new Pokemon("Seismitoad", 1),new Pokemon("Rhyperior", 1),new Pokemon("Sandaconda", 1, true)]),
    // 94-98
    new Den(),
    new Den(),
    new Den(),
    new Den(),
    new Den(),
    
    // Isle of Armor dens
    // 99
    new Den("Normal", "Normal", false, [new Pokemon("Chansey"),new Pokemon("Igglybuff"),new Pokemon("Lillipup"),new Pokemon("Buneary"),new Pokemon("Jigglypuff"),new Pokemon("Jigglypuff"),new Pokemon("Herdier"),new Pokemon("Lopunny"),new Pokemon("Lopunny", 1),new Pokemon("Wigglytuff", 1),new Pokemon("Dunsparce", 1),new Pokemon("Stoutland", 1)]),
    // 100
    new Den("Normal", "Normal", true, [new Pokemon("Blissey", 2),new Pokemon("Lillipup", 2),new Pokemon("Stufful", 2),new Pokemon("Jigglypuff", 2),new Pokemon("Buneary", 2),new Pokemon("Jigglypuff", 2),new Pokemon("Dunsparce", 2),new Pokemon("Dubwool", 2),new Pokemon("Lopunny", 2),new Pokemon("Stoutland", 2),new Pokemon("Bewear", 2),new Pokemon("Wigglytuff", 2)]),
    // 101
    new Den("Normal", "Normal", false, [new Pokemon("Chansey"),new Pokemon("Whismur"),new Pokemon("Lickitung"),new Pokemon("Miltank"),new Pokemon("Loudred"),new Pokemon("Loudred"),new Pokemon("Lickitung"),new Pokemon("Miltank", 1),new Pokemon("Bouffalant", 1),new Pokemon("Tauros", 1),new Pokemon("Exploud", 1),new Pokemon("Lickilicky", 1)]),
    // 102
    new Den("Normal", "Normal", true, [new Pokemon("Blissey", 2),new Pokemon("Whismur", 2),new Pokemon("Tauros", 2),new Pokemon("Lickitung", 2),new Pokemon("Miltank", 2),new Pokemon("Miltank", 2),new Pokemon("Bouffalant", 2),new Pokemon("Tauros", 2),new Pokemon("Exploud", 2),new Pokemon("Cinccino", 2),new Pokemon("Exploud", 2),new Pokemon("Lickilicky", 2)]),
    // 103
    new Den("Ground", "Ground", false, [new Pokemon("Chansey"),new Pokemon("Sandshrew"),new Pokemon("Sandile"),new Pokemon("Cubone"),new Pokemon("Sandshrew"),new Pokemon("Krokorok"),new Pokemon("Sandslash"),new Pokemon("Sandaconda", 1),new Pokemon("Sandslash", 1),new Pokemon("Marowak", 1),new Pokemon("Krookodile", 1),new Pokemon("Kangaskhan", 1)]),
    // 104
    new Den("Ground", "Ground", true, [new Pokemon("Blissey", 2),new Pokemon("Sandshrew", 2),new Pokemon("Cubone", 2),new Pokemon("Trapinch", 2),new Pokemon("Trapinch", 2),new Pokemon("Krokorok", 2),new Pokemon("Sandslash", 2),new Pokemon("Marowak", 2),new Pokemon("Krookodile", 2),new Pokemon("Kangaskhan", 2),new Pokemon("Flygon"),new Pokemon("Golurk", 2)]),
    // 105
    new Den("Electric", "Electric", false, [new Pokemon("Chansey"),new Pokemon("Dedenne"),new Pokemon("Magnemite"),new Pokemon("Shinx"),new Pokemon("Morpeko"),new Pokemon("Dedenne"),new Pokemon("Luxio"),new Pokemon("Dedenne", 1),new Pokemon("Magneton", 1),new Pokemon("Pincurchin", 1),new Pokemon("Luxray", 1),new Pokemon("Magnezone", 1)]),
    // 106
    new Den("Electric", "Electric", true, [new Pokemon("Blissey", 2),new Pokemon("Shinx", 2),new Pokemon("Pichu", 2),new Pokemon("Pikachu", 2),new Pokemon("Pincurchin", 2),new Pokemon("Luxio", 2),new Pokemon("Raichu", 2),new Pokemon("Boltund", 2),new Pokemon("Dedenne", 2),new Pokemon("Manectric", 2),new Pokemon("Luxray", 2),new Pokemon("Magnezone", 2)]),
    // 107
    new Den("Flying", "Flying", false, [new Pokemon("Chansey"),new Pokemon("Fletchling"),new Pokemon("Woobat"),new ExclusivePair("Rufflet", "Vullaby"),new Pokemon("Emolga"),new Pokemon("Fletchinder"),new Pokemon("Fletchinder"),new ExclusivePair("Braviary", "Mandibuzz", 1, 1),new Pokemon("Emolga", 1),new Pokemon("Swoobat", 1),new ExclusivePair("Braviary", "Mandibuzz", 1, 1),new Pokemon("Talonflame", 1)]),
    // 108
    new Den("Flying", "Flying", true, [new Pokemon("Blissey", 2),new Pokemon("Hoothoot", 2),new Pokemon("Pidove", 2),new ExclusivePair("Rufflet", "Vullaby", 2, 2),new Pokemon("Tranquill", 2),new Pokemon("Swoobat", 2),new Pokemon("Noctowl", 2),new Pokemon("Unfezant", 2),new Pokemon("Talonflame", 2),new Pokemon("Emolga", 2),new ExclusivePair("Braviary", "Mandibuzz", 2, 2),new Pokemon("Talonflame", 2)]),
    // 109
    new Den("Bug", "Bug", false, [new Pokemon("Chansey"),new ExclusivePair("Pinsir", "Heracross"),new Pokemon("Dwebble"),new Pokemon("Dottler"),new ExclusivePair("Pinsir", "Heracross"),new ExclusivePair("Pinsir", "Heracross"),new Pokemon("Crustle"),new Pokemon("Scyther", 1),new Pokemon("Scyther", 1),new ExclusivePair("Pinsir", "Heracross", 1, 1),new Pokemon("Orbeetle", 1),new Pokemon("Scizor", 1)]),
    // 110
    new Den("Bug", "Bug", true, [new Pokemon("Blissey", 2),new Pokemon("Scyther", 2),new ExclusivePair("Pinsir", "Heracross", 2, 2),new Pokemon("Shuckle", 2),new Pokemon("Whirlipede", 2),new Pokemon("Scyther", 2),new Pokemon("Crustle", 2),new Pokemon("Scolipede", 2),new Pokemon("Accelgor", 2),new Pokemon("Escavalier", 2),new ExclusivePair("Pinsir", "Heracross", 2, 2),new Pokemon("Scizor", 2)]),
    // 111
    new Den("Grass", "Grass", false, [new Pokemon("Chansey"),new Pokemon("Foongus"),new Pokemon("Fomantis"),new Pokemon("Petilil"),new Pokemon("Lurantis"),new Pokemon("Amoonguss"),new Pokemon("Tangela"),new Pokemon("Lilligant", 1),new Pokemon("Lurantis", 1),new Pokemon("Lilligant", 1),new Pokemon("Amoonguss", 1),new Pokemon("Tangrowth", 1)]),
    // 112
    new Den("Grass", "Grass", true, [new Pokemon("Blissey", 2),new Pokemon("Tangela", 2),new Pokemon("Fomantis", 2),new Pokemon("Foongus", 2),new Pokemon("Lurantis", 2),new Pokemon("Maractus", 2),new Pokemon("Lilligant", 2),new Pokemon("Lurantis", 2),new Pokemon("Amoonguss", 2),new Pokemon("Tangrowth", 2),new Pokemon("Lilligant", 2),new Pokemon("Abomasnow", 2)]),
    // 113
    new Den("Fire", "Fire", false, [new Pokemon("Chansey"),new Pokemon("Fletchling"),new Pokemon("Salandit"),new Pokemon("Larvesta"),new Pokemon("Salandit"),new Pokemon("Fletchinder"),new Pokemon("Larvesta"),new Pokemon("Torkoal", 1),new Pokemon("Talonflame", 1),new Pokemon("Salazzle", 1),new Pokemon("Torkoal", 1),new Pokemon("Volcarona", 1)]),
    // 114
    new Den("Fire", "Fire", true, [new Pokemon("Blissey", 2),new Pokemon("Larvesta", 2),new Pokemon("Litwick", 2),new Pokemon("Larvesta", 2),new Pokemon("Salandit", 2),new Pokemon("Torkoal", 2),new Pokemon("Salazzle", 2),new Pokemon("Talonflame", 2),new Pokemon("Chandelure", 2),new Pokemon("Volcarona", 2),new ExclusivePair("Ninetales", "Arcanine", 2, 2),new Pokemon("Charizard", 2)]),
    // 115
    new Den("Rock", "Rock", false, [new Pokemon("Chansey"),new Pokemon("Roggenrola"),new Pokemon("Rhyhorn"),new Pokemon("Rockruff"),new Pokemon("Boldore"),new Pokemon("Rhydon"),new Pokemon("Crustle"),new Pokemon("Rhydon", 1),new Pokemon("Gigalith", 1),new Pokemon("Crustle", 1),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 1, 1),new Pokemon("Rhyperior", 1)]),
    // 116
    new Den("Rock", "Rock", true, [new Pokemon("Blissey", 2),new Pokemon("Rockruff", 2),new Pokemon("Bonsly", 2),new Pokemon("Rhyhorn", 2),new Pokemon("Rockruff", 2),new Pokemon("Rhydon", 2),new Pokemon("Shuckle", 2),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 2, 2),new Pokemon("Sudowoodo", 2),new Pokemon("Gigalith", 2),new Pokemon("Crustle", 2),new Pokemon("Rhyperior", 2)]),
    // 117
    new Den("Psychic", "Psychic", false, [new Pokemon("Chansey"),new Pokemon("Exeggcute"),new Pokemon("Abra"),new Pokemon("Ralts"),new Pokemon("Kadabra"),new Pokemon("Kirlia"),new ExclusivePair("Kadabra", "Oranguru"),new Pokemon("Exeggutor", 1),new Pokemon("Gardevoir", 1),new Pokemon("Exeggutor", 1),new Pokemon("Alakazam", 1),new Pokemon("Starmie", 1)]),
    // 118
    new Den("Psychic", "Psychic", true, [new Pokemon("Blissey", 2),new Pokemon("Elgyem", 2),new Pokemon("Abra", 2),new Pokemon("Slowpoke-Galar", 2),new Pokemon("Elgyem", 2),new ExclusivePair("Kadabra", "Oranguru", 2, 2),new Pokemon("Slowpoke-Galar", 2),new Pokemon("Musharna", 2),new ExclusivePair("Indeedee-M", "Indeedee-F", 2, 2),new Pokemon("Beheeyem", 2),new Pokemon("Alakazam", 2),new ExclusivePair("Meowstic-M", "Meowstic-F", 2, 2)]),
    // 119
    new Den("Poison", "Poison", false, [new Pokemon("Chansey"),new Pokemon("Venipede"),new Pokemon("Skorupi"),new Pokemon("Tentacool"),new Pokemon("Tentacool"),new Pokemon("Whirlipede"),new Pokemon("Whirlipede"),new Pokemon("Drapion", 1),new Pokemon("Tentacruel", 1),new Pokemon("Drapion", 1),new Pokemon("Tentacruel", 1),new Pokemon("Scolipede", 1)]),
    // 120
    new Den("Poison", "Poison", true, [new Pokemon("Blissey", 2),new Pokemon("Mereanie", 2),new Pokemon("Qwilfish", 2),new Pokemon("Whirlipede", 2),new Pokemon("Whirlipede", 2),new Pokemon("Qwilfish", 2),new Pokemon("Amoonguss", 2),new Pokemon("Toxapex", 2),new Pokemon("Scolipede", 2),new Pokemon("Drapion", 2),new Pokemon("Weezing-Galar", 2),new Pokemon("Scolipede", 2)]),
    // 121
    new Den("Dark", "Dark", false, [new Pokemon("Chansey"),new Pokemon("Carvanha"),new Pokemon("Pawniard"),new Pokemon("Carvanha"),new Pokemon("Zorua"),new Pokemon("Sharpedo"),new Pokemon("Malamar"),new Pokemon("Drapion", 1),new Pokemon("Bisharp", 1),new Pokemon("Malamar", 1),new Pokemon("Sharpedo", 1),new Pokemon("Zoroark")]),
    // 122
    new Den("Dark", "Dark", true, [new Pokemon("Blissey", 2),new Pokemon("Zorua"),new Pokemon("Carvanha", 2),new Pokemon("Zorua"),new Pokemon("Inkay", 2),new Pokemon("Krokorok", 2),new Pokemon("Malamar", 2),new Pokemon("Thievul", 2),new Pokemon("Zoroark"),new Pokemon("Sharpedo", 2),new Pokemon("Liepard", 2),new Pokemon("Krookodile", 2)]),
    // 123
    new Den("Fighting", "Fighting", false, [new Pokemon("Chansey"),new Pokemon("Mienfoo"),new Pokemon("Clobbopus"),new Pokemon("Mienfoo"),new ExclusivePair("Scraggy", "Croagunk"),new ExclusivePair("Passimian", "Grapploct"),new ExclusivePair("Scrafty","Toxicroak"),new Pokemon("Mienshao", 1),new Pokemon("Mienshao", 1),new ExclusivePair("Scrafty", "Toxicroak", 1, 1),new Pokemon("Grapploct", 1),new Pokemon("Mienshao", 1)]),
    // 124
    new Den("Fighting", "Fighting", true, [new Pokemon("Blissey", 2),new Pokemon("Mienfoo", 2),new ExclusivePair("Scraggy", "Croagunk", 2, 2),new ExclusivePair("Sawk", "Throh", 2, 2),new Pokemon("Mienshao", 2),new Pokemon("Falinks", 2),new ExclusivePair("Passimian", "Mienshao", 2, 2),new ExclusivePair("Sawk", "Throh", 2, 2),new Pokemon("Mienshao", 2),new ExclusivePair("Scrafty", "Toxicroak", 2, 2),new Pokemon("Grapploct", 2),new ExclusivePair("Sirfetch'd", "Falinks", 2, 2)]),
    // 125
    new Den("Fairy", "Fairy", false, [new Pokemon("Chansey"),new Pokemon("Igglybuff"),new Pokemon("Azurill"),new Pokemon("Comfey"),new Pokemon("Jigglypuff"),new Pokemon("Marill"),new Pokemon("Comfey"),new Pokemon("Klefki", 1),new Pokemon("Azumarill", 1),new Pokemon("Wigglytuff", 1),new Pokemon("Gardevoir", 1),new Pokemon("Comfey", 1)]),
    // 126
    new Den("Fairy", "Fairy", true, [new Pokemon("Blissey", 2),new Pokemon("Cleffa", 2),new Pokemon("Morelull", 2),new Pokemon("Marill", 2),new Pokemon("Clefairy", 2),new Pokemon("Kirlia", 2),new Pokemon("Klefki", 2),new Pokemon("Comfey", 2),new Pokemon("Clefable", 2),new Pokemon("Gardevoir", 2),new Pokemon("Shiinotic", 2),new Pokemon("Azumarill", 2)]),
    // 127
    new Den("Ghost", "Ghost", false, [new Pokemon("Chansey"),new Pokemon("Sandygast"),new Pokemon("Frillish"),new Pokemon("Cubone"),new Pokemon("Drifloon"),new Pokemon("Jellicent"),new Pokemon("Drifblim"),new Pokemon("Palossand", 1),new Pokemon("Jellicent", 1),new Pokemon("Drifblim", 1),new Pokemon("Marowak", 1),new Pokemon("Palossand", 1)]),
    // 128
    new Den("Ghost", "Ghost", true, [new Pokemon("Blissey", 2),new Pokemon("Sandygast", 2),new Pokemon("Frillish", 2),new Pokemon("Sandygast", 2),new Pokemon("Drifloon", 2),new Pokemon("Jellicent", 2),new Pokemon("Drifblim", 2),new Pokemon("Gourgeist", 2),new Pokemon("Gourgeist", 2),new Pokemon("Gourgeist", 2),new Pokemon("Gourgeist", 2),new ExclusivePair("Palossand", "Cursola", 2, 2)]),
    // 129
    new Den("Steel", "Steel", false, [new Pokemon("Chansey"),new Pokemon("Klefki"),new Pokemon("Magnemite"),new Pokemon("Pawniard"),new Pokemon("Magnemite"),new Pokemon("Skarmory"),new Pokemon("Magneton"),new Pokemon("Magneton", 1),new Pokemon("Klefki", 1),new Pokemon("Bisharp", 1),new Pokemon("Magnezone", 1),new Pokemon("Skarmory", 1)]),
    // 130
    new Den("Steel", "Steel", true, [new Pokemon("Blissey", 2),new Pokemon("Magnemite", 2),new Pokemon("Skarmory", 2),new Pokemon("Bronzor", 2),new Pokemon("Meowth-Galar", 2),new Pokemon("Magneton", 2),new Pokemon("Klinklang", 2),new Pokemon("Skarmory", 2),new Pokemon("Bronzong", 2),new Pokemon("Perrserker", 2),new Pokemon("Lucario", 2),new Pokemon("Bisharp", 2)]),
    // 131
    new Den("Dragon", "Dragon", false, [new Pokemon("Chansey"),new ExclusivePair("Jangmo-o", "Goomy"),new Pokemon("Horsea"),new Pokemon("Applin"),new Pokemon("Seadra"),new Pokemon("Druddigon"),new ExclusivePair("Hakamo-o", "Sliggoo"),new Pokemon("Druddigon", 1),new Pokemon("Gyarados", 1),new ExclusivePair("Flapple", "Appletun", 1, 1),new Pokemon("Kingdra", 1),new ExclusivePair("Kommo-o", "Goodra", 1, 1)]),
    // 132
    new Den("Dragon", "Dragon", true, [new Pokemon("Blissey", 2),new Pokemon("Horsea", 2),new Pokemon("Druddigon", 2),new ExclusivePair("Turtonator", "Drampa", 0, 2),new ExclusivePair("Jangmo-o", "Goomy", 2, 2),new Pokemon("Seadra", 2),new ExclusivePair("Hakamo-o", "Sliggoo", 2, 2),new ExclusivePair("Turtonator", "Drampa", 0, 2),new Pokemon("Druddigon", 2),new Pokemon("Noivern", 2),new Pokemon("Kingdra", 2),new ExclusivePair("Kommo-o", "Goodra", 2, 2)]),
    // 133
    new Den("Water", "Water", false, [new Pokemon("Chansey"),new Pokemon("Poliwag"),new Pokemon("Wooper"),new Pokemon("Goldeen"),new Pokemon("Poliwhirl"),new Pokemon("Crawdaunt"),new Pokemon("Poliwhirl"),new Pokemon("Seaking", 1),new Pokemon("Crawdaunt", 1),new Pokemon("Quagsire", 1),new Pokemon("Poliwrath", 1),new Pokemon("Politoed", 1)]),
    // 134
    new Den("Water", "Water", true, [new Pokemon("Blissey", 2),new Pokemon("Corphish", 2),new Pokemon("Dewpider", 2),new Pokemon("Goldeen", 2),new Pokemon("Poliwhirl", 2),new Pokemon("Crawdaunt", 2),new Pokemon("Quagsire", 2),new Pokemon("Seaking", 2),new Pokemon("Poliwrath", 2),new Pokemon("Crawdaunt", 2),new Pokemon("Araquanid", 2),new Pokemon("Politoed", 2)]),
    // 135
    new Den("Water", "Water", false, [new Pokemon("Chansey"),new Pokemon("Psyduck"),new Pokemon("Chewtle"),new Pokemon("Arrokuda"),new Pokemon("Barboach"),new Pokemon("Golduck"),new Pokemon("Cramorant"),new Pokemon("Golduck", 1),new Pokemon("Barraskewda", 1),new Pokemon("Drednaw", 1),new Pokemon("Whiscash", 1),new Pokemon("Golduck", 1)]),
    // 136
    new Den("Water", "Water", true, [new Pokemon("Blissey", 2),new Pokemon("Arrokuda", 2),new Pokemon("Tympole", 2),new Pokemon("Psyduck", 2),new Pokemon("Palpitoad", 2),new Pokemon("Golduck", 2),new Pokemon("Whiscash", 2),new Pokemon("Golduck", 2),new Pokemon("Barraskewda", 2),new Pokemon("Seismitoad", 2),new Pokemon("Gyarados", 2),new Pokemon("Basculin-Red", 2)]),
    // 137
    new Den("Water", "Water", false, [new Pokemon("Chansey"),new Pokemon("Tentacool"),new Pokemon("Krabby"),new Pokemon("Tentacool"),new Pokemon("Remoraid"),new Pokemon("Tentacruel"),new Pokemon("Wishiwashi"),new Pokemon("Octillery", 1),new Pokemon("Mantine", 1),new Pokemon("Kingler", 1),new Pokemon("Cloyster", 1),new Pokemon("Tentacruel", 1)]),
    // 138
    new Den("Water", "Water", true, [new Pokemon("Blissey", 2),new Pokemon("Shellder", 2),new Pokemon("Binacle", 2),new Pokemon("Mareanie", 2),new Pokemon("Remoraid", 2),new Pokemon("Tentacruel", 2),new Pokemon("Pyukumuku", 2),new Pokemon("Octillery", 2),new Pokemon("Mantine", 2),new Pokemon("Barbaracle", 2),new Pokemon("Cloyster", 2),new Pokemon("Toxapex", 2)]),
    // 139
    new Den("Water", "Water", false, [new Pokemon("Chansey"),new Pokemon("Chinchou"),new ExclusivePair("Clawitzer", "Skrelp"),new ExclusivePair("Clawitzer", "Skrelp"),new Pokemon("Staryu"),new Pokemon("Wailmer"),new Pokemon("Wishiwashi"),new Pokemon("Wailord", 1),new Pokemon("Lanturn", 1),new Pokemon("Starmie", 1),new ExclusivePair("Clauncher", "Dragalge", 0, 1),new Pokemon("Sharpedo", 1)]),
    // 140
    new Den("Water", "Water", true, [new Pokemon("Blissey", 2),new ExclusivePair("Clawitzer", "Skrelp", 0, 2),new Pokemon("Staryu", 2),new Pokemon("Wailmer", 2),new Pokemon("Pelipper", 2),new Pokemon("Lanturn", 2),new Pokemon("Seadra", 2),new ExclusivePair("Clauncher", "Dragalge", 0, 2),new Pokemon("Lanturn", 2),new Pokemon("Starmie", 2),new ExclusivePair("Clauncher", "Dragalge", 0, 2),new Pokemon("Sharpedo", 2)]),
    // 141 & 142
    new Den(),
    new Den(),
    // 143
    new Den("Bug", "Bug", false, [new Pokemon("Chansey"),new Pokemon("Combee"),new Pokemon("Combee"),new Pokemon("Combee"),new Pokemon("Combee"),new Pokemon("Combee"),new Pokemon("Combee"),new Pokemon("Vespiquen", 1),new Pokemon("Vespiquen", 1),new Pokemon("Vespiquen", 1),new Pokemon("Vespiquen", 1),new Pokemon("Vespiquen", 1)]),
    // 144
    new Den("Bug", "Bug", true, [new Pokemon("Blissey", 2),new Pokemon("Combee", 2),new Pokemon("Combee", 2),new Pokemon("Combee", 2),new Pokemon("Combee", 2),new Pokemon("Vespiquen", 2),new Pokemon("Vespiquen", 2),new Pokemon("Vespiquen", 2),new Pokemon("Vespiquen", 2),new Pokemon("Vespiquen", 2),new Pokemon("Vespiquen", 2),new Pokemon("Vespiquen", 2)]),
    // 145
    new Den("Grass", "Grass", true, [new Pokemon("Blissey", 2),new Pokemon("Foongus", 2),new Pokemon("Exeggcute", 2),new Pokemon("Tangela", 2),new Pokemon("Roselia", 2),new Pokemon("Tangela", 2),new Pokemon("Roselia", 2),new Pokemon("Exeggutor", 2),new Pokemon("Venusaur", 2),new Pokemon("Tangrowth", 2),new Pokemon("Roserade", 2),new Pokemon("Venusaur", 2, true)]),
    // 146
    new Den("Water", "Water", true, [new Pokemon("Blissey", 2),new Pokemon("Magikarp", 2),new Pokemon("Tentacool", 2),new Pokemon("Staryu", 2),new Pokemon("Binacle", 2),new Pokemon("Tentacruel", 2),new Pokemon("Gyarados", 2),new Pokemon("Tentacruel", 2),new Pokemon("Gyarados", 2),new Pokemon("Starmie", 2),new Pokemon("Barbaracle", 2),new Pokemon("Blastoise", 2, true)]),
    // 147
    new Den("Water", "Water", true, [new Pokemon("Blissey", 2),new Pokemon("Krabby", 2),new Pokemon("Binacle", 2),new Pokemon("Tentacool", 2),new Pokemon("Remoraid", 2),new Pokemon("Tentacruel", 2),new Pokemon("Octillery", 2),new Pokemon("Avalugg", 2),new Pokemon("Beartic", 2),new Pokemon("Kingler", 2),new Pokemon("Cloyster", 2),new Pokemon("Kingler", 2, true)]),
    // 148
    new Den("Water", "Water", true, [new Pokemon("Blissey", 2),new Pokemon("Chewtle", 2),new Pokemon("Psyduck", 2),new Pokemon("Barboach", 2),new Pokemon("Basculin-Red", 2),new Pokemon("Golduck", 2),new Pokemon("Cramorant", 0),new Pokemon("Golduck", 2),new Pokemon("Barraskewda", 2),new Pokemon("Basculin-Red", 2),new Pokemon("Whiscash", 2),new Pokemon("Drednaw", 2, true)]),
    // 149
    new Den("Bug", "Bug", true, [new Pokemon("Blissey", 2),new Pokemon("Blipbug", 2),new Pokemon("Cutiefly", 2),new Pokemon("Joltik", 2),new ExclusivePair("Pinsir", "Heracross", 2, 2),new Pokemon("Dottler", 2),new Pokemon("Ninjask", 2),new Pokemon("Orbeetle", 2),new Pokemon("Galvantula", 2),new Pokemon("Ribombee", 2),new Pokemon("Ninjask", 2),new Pokemon("Orbeetle", 2, true)]),
    // 150
    new Den("Ground", "Ground", true, [new Pokemon("Blissey", 2),new Pokemon("Silicobra", 2),new Pokemon("Drilbur", 2),new Pokemon("Silicobra", 2),new Pokemon("Drilbur", 2),new Pokemon("Sandslash", 2),new Pokemon("Krokorok", 2),new Pokemon("Sandaconda", 2),new Pokemon("Krookodile", 2),new Pokemon("Excadrill", 2),new Pokemon("Krookodile", 2),new Pokemon("Sandaconda", 2, true)]),
    // 151
    new Den("Grass", "Grass", true, [new Pokemon("Blissey", 2),new Pokemon("Applin", 2),new Pokemon("Cherubi"),new Pokemon("Cherubi"),new Pokemon("Applin", 2),new Pokemon("Steenee", 2),new ExclusivePair("Flapple", "Appletun", 2, 2),new Pokemon("Greedent", 2),new ExclusivePair("Flapple", "Appletun", 2, 2),new Pokemon("Greedent", 2),new Pokemon("Tsareena", 2),new ExclusivePair("Flapple", "Appletun", 2, 2, true, true)]),
    // 152
    new Den("Normal", "Normal", false, [new Pokemon("Chansey"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto"),new Pokemon("Ditto", 1),new Pokemon("Ditto", 1),new Pokemon("Ditto", 1),new Pokemon("Ditto", 1),new Pokemon("Ditto", 1)]),
    // 153
    new Den("Normal", "Normal", true, [new Pokemon("Blissey", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2),new Pokemon("Ditto", 2)]),
    // 154
    new Den("Grass", "Grass", false, [new Pokemon("Chansey"),new Pokemon("Foongus"),new Pokemon("Exeggcute"),new Pokemon("Fomantis"),new Pokemon("Tangela"),new Pokemon("Lurantis"),new Pokemon("Exeggcute"),new Pokemon("Exeggutor", 1),new Pokemon("Amoonguss", 1),new Pokemon("Lurantis", 1),new Pokemon("Tangrowth", 1),new Pokemon("Venusaur", 1)]),
    // 155
    new Den("Water", "Water", false, [new Pokemon("Chansey"),new Pokemon("Magikarp"),new Pokemon("Tentacool"),new Pokemon("Staryu"),new Pokemon("Shellder"),new Pokemon("Tentacruel"),new Pokemon("Gyarados"),new Pokemon("Tentacruel", 1),new Pokemon("Gyarados", 1),new Pokemon("Starmie", 1),new Pokemon("Cloyster", 1),new Pokemon("Blastoise", 1)]),
    // 156
    new Den("Rock", "Rock", false, [new Pokemon("Chansey"),new Pokemon("Rockruff"),new Pokemon("Rockruff"),new Pokemon("Rockruff"),new Pokemon("Rockruff"),new Pokemon("Rockruff"),new Pokemon("Rockruff", 3),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 1, 1),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 1, 1),new ExclusivePair("Lycanroc-Midnight", "Lycanroc-Midday", 1, 1),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 1, 1),new Pokemon("Lycanroc-Dusk")]),
    // 157
    new Den("Rock", "Rock", true, [new Pokemon("Blissey", 2),new Pokemon("Rockruff", 2),new Pokemon("Rockruff", 2),new Pokemon("Rockruff", 2),new Pokemon("Rockruff", 2),new Pokemon("Rockruff", 2),new Pokemon("Rockruff", 4),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 2, 2),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 2, 2),new ExclusivePair("Lycanroc-Midnight", "Lycanroc-Midday", 2, 2),new ExclusivePair("Lycanroc-Midday", "Lycanroc-Midnight", 2, 2),new Pokemon("Lycanroc-Dusk")]),
    
    // Crown Tundra dens
    // 158
    new Den("Normal", "Normal", false, [new Pokemon("Audino", 1),new Pokemon("Swablu"),new Pokemon("Wooloo"),new Pokemon("Swablu"),new Pokemon("Munchlax"),new Pokemon("Greedent"),new Pokemon("Dubwool"),new Pokemon("Altaria", 1),new Pokemon("Altaria", 1),new Pokemon("Dubwool", 1),new Pokemon("Snorlax", 1),new Pokemon("Snorlax", 1)]),
    // 159
    new Den("Normal", "Normal", true, [new Pokemon("Delibird", 2),new Pokemon("Swablu", 2),new Pokemon("Skwovet", 2),new Pokemon("Swablu", 2),new Pokemon("Greedent", 2),new Pokemon("Greedent", 2),new Pokemon("Dubwool", 2),new Pokemon("Altaria", 2),new Pokemon("Altaria", 2),new Pokemon("Dubwool", 2),new Pokemon("Snorlax", 2),new Pokemon("Snorlax", 2, true)]),
    // 160
    new Den("Fire", "Fire", false, [new Pokemon("Audino", 1),new Pokemon("Magby"),new Pokemon("Sizzlipede"),new Pokemon("Magby"),new Pokemon("Heatmor"),new Pokemon("Lampent"),new Pokemon("Heatmor"),new Pokemon("Magmar", 1),new Pokemon("Centiskorch", 1),new Pokemon("Chandelure", 1),new Pokemon("Magmar", 1),new Pokemon("Magmortar", 1)]),
    // 161
    new Den("Fire", "Fire", true, [new Pokemon("Delibird", 2),new Pokemon("Magby", 2),new Pokemon("Magby", 2),new Pokemon("Magmar", 2),new Pokemon("Heatmor", 2),new Pokemon("Magmar", 2),new Pokemon("Centiskorch", 2),new Pokemon("Chandelure", 2),new ExclusivePair("Ninetales", "Arcanine", 2, 2),new Pokemon("Magmortar", 2),new Pokemon("Magmortar", 2),new Pokemon("Centiskorch", 2, true)]),
    // 162
    new Den("Water", "Water", false, [new Pokemon("Audino", 1),new ExclusivePair("Omanyte", "Kabuto"),new Pokemon("Feebas"),new ExclusivePair("Omanyte", "Kabuto"),new Pokemon("Feebas"),new Pokemon("Whiscash"),new Pokemon("Basculin-Red"),new ExclusivePair("Omastar", "Kabutops", 1, 1),new Pokemon("Basculin-Red", 1),new Pokemon("Gyarados", 1),new Pokemon("Milotic", 1),new Pokemon("Relicanth", 1)]),
    // 163
    new Den("Water", "Water", true, [new Pokemon("Delibird", 2),new Pokemon("Feebas", 2),new ExclusivePair("Omanyte", "Kabuto", 2, 2),new Pokemon("Feebas", 2),new Pokemon("Relicanth", 2),new Pokemon("Basculin-Red", 2),new Pokemon("Kingler", 2),new Pokemon("Relicanth", 2),new ExclusivePair("Omastar", "Kabutops", 2, 2),new Pokemon("Milotic", 2),new Pokemon("Gyarados", 2),new Pokemon("Kingler", 2, true)]),
    // 164
    new Den("Electric", "Electric", false, [new Pokemon("Audino", 1),new Pokemon("Elekid"),new Pokemon("Joltik"),new Pokemon("Elekid"),new Pokemon("Pincurchin"),new Pokemon("Electabuzz"),new Pokemon("Mimikyu"),new Pokemon("Galvantula", 1),new Pokemon("Pincurchin", 1),new Pokemon("Boltund", 1),new Pokemon("Electabuzz", 1),new Pokemon("Electabuzz", 1)]),
    // 165
    new Den("Electric", "Electric", true, [new Pokemon("Delibird", 2),new Pokemon("Elekid", 2),new Pokemon("Elekid", 2),new Pokemon("Dedenne", 2),new Pokemon("Galvantula", 2),new Pokemon("Electabuzz", 2),new Pokemon("Boltund", 2),new Pokemon("Toxtricity", 2),new Pokemon("Pincurchin", 2),new Pokemon("Electivire", 2),new Pokemon("Electivire", 2),new Pokemon("Toxtricity", 2, true)]),
    // 166
    new Den("Grass", "Grass", false, [new Pokemon("Audino", 1),new Pokemon("Gossifleur"),new ExclusivePair("Anorith", "Lileep"),new ExclusivePair("Anorith", "Lileep"),new ExclusivePair("Lileep", "Anorith"),new ExclusivePair("Anorith", "Lileep"),new Pokemon("Eldegoss"),new ExclusivePair("Armaldo", "Cradily", 1, 1),new Pokemon("Araquanid", 1),new Pokemon("Eldegoss", 1),new Pokemon("Ferrothorn", 1),new ExclusivePair("Cradily", "Armaldo", 1, 1)]),
    // 167
    new Den("Bug", "Bug", true, [new Pokemon("Delibird", 2),new ExclusivePair("Anorith", "Lileep", 2, 2),new ExclusivePair("Lileep", "Anorith", 2, 2),new ExclusivePair("Anorith", "Lileep", 2, 2),new ExclusivePair("Lileep", "Anorith", 2, 2),new Pokemon("Araquanid", 2),new Pokemon("Butterfree", 2),new ExclusivePair("Armaldo", "Cradily", 2, 2),new ExclusivePair("Cradily", "Armaldo", 2, 2),new Pokemon("Eldegoss", 2),new ExclusivePair("Armaldo", "Cradily", 2, 2),new Pokemon("Butterfree", 2, true)]),
    // 168
    new Den("Ice", "Ice", false, [new Pokemon("Audino", 1),new Pokemon("Smoochum"),new ExclusivePair("Darumaka-Galar", "Swinub"),new Pokemon("Smoochum"),new Pokemon("Amaura"),new Pokemon("Piloswine"),new Pokemon("Abomasnow"),new Pokemon("Jynx", 1),new Pokemon("Frosmoth", 1),new ExclusivePair("Darmanitan-Galar", "Frosmoth", 1, 1),new Pokemon("Aurorus", 1),new Pokemon("Glalie", 1)]),
    // 169
    new Den("Ice", "Ice", true, [new Pokemon("Delibird", 2),new Pokemon("Snorunt", 2),new ExclusivePair("Darumaka-Galar", "Snorunt", 2, 2),new Pokemon("Smoochum", 2),new Pokemon("Amaura", 2),new Pokemon("Glalie", 2),new Pokemon("Abomasnow", 2),new Pokemon("Jynx", 2),new Pokemon("Frosmoth", 2),new ExclusivePair("Darmanitan-Galar", "Frosmoth", 2, 2),new Pokemon("Aurorus", 2),new Pokemon("Mamoswine", 2)]),
    // 170
    new Den("Ice", "Ice", false, [new Pokemon("Audino", 1),new ExclusivePair("Cubchoo", "Eiscue"),new Pokemon("Spheal"),new Pokemon("Spheal"),new ExclusivePair("Bergmite", "Eiscue"),new Pokemon("Sealeo"),new Pokemon("Cryogonal"),new Pokemon("Vanilluxe", 1),new Pokemon("Beartic", 1),new Pokemon("Walrein", 1),new Pokemon("Avalugg", 1),new Pokemon("Lapras", 1)]),
    // 171
    new Den("Ice", "Ice", true, [new Pokemon("Delibird", 2),new Pokemon("Lapras", 2),new Pokemon("Spheal", 2),new Pokemon("Sealeo", 2),new Pokemon("Sealeo", 2),new Pokemon("Avalugg", 2),new Pokemon("Cryogonal"),new Pokemon("Walrein", 2),new Pokemon("Lapras", 2),new Pokemon("Vanilluxe", 2),new Pokemon("Walrein", 2),new ExclusivePair("Lapras", "Lapras", 2, 2, false, true)]),
    // 172
    new Den("Fighting", "Fighting", false, [new Pokemon("Audino", 1),new Pokemon("Timburr"),new Pokemon("Golett"),new Pokemon("Golett"),new Pokemon("Carkol"),new Pokemon("Gurdurr"),new Pokemon("Golurk"),new Pokemon("Conkeldurr", 1),new Pokemon("Golurk", 1),new Pokemon("Coalossal", 1),new Pokemon("Golurk", 1),new Pokemon("Conkeldurr", 1)]),
    // 173
    new Den("Fighting", "Fighting", true, [new Pokemon("Delibird", 2),new Pokemon("Falinks", 2),new Pokemon("Tyrogue", 2),new Pokemon("Gurdurr", 2),new ExclusivePair("Farfetch'd-Galar", "Gurdurr", 2, 2),new Pokemon("Falinks", 2),new Pokemon("Golurk", 2),new ExclusivePair("Sirfetch'd", "Conkeldurr", 2, 2),new Pokemon("Conkeldurr", 2),new ExclusivePair("Hitmonlee", "Hitmonchan", 2, 2),new Pokemon("Hitmontop", 2),new ExclusivePair("Machamp", "Machamp", 2, 2, true, false)]),
    // 174
    new Den("Poison", "Poison", false, [new Pokemon("Audino", 1),new ExclusivePair("Nidoran-F", "Nidoran-M"),new Pokemon("Zubat"),new ExclusivePair("Nidoran-F", "Nidoran-M"),new ExclusivePair("Nidoran-M", "Nidoran-F"),new ExclusivePair("Nidorina", "Nidorino"),new ExclusivePair("Nidorino", "Nidorina"),new ExclusivePair("Nidoqueen", "Nidoking", 1, 1),new Pokemon("Golbat", 1),new Pokemon("Golbat", 1),new ExclusivePair("Nidoqueen", "Nidoking", 1, 1),new ExclusivePair("Nidoking", "Nidoqueen", 1, 1)]),
    // 175
    new Den("Poison", "Poison", true, [new Pokemon("Delibird", 2),new Pokemon("Zubat", 2),new Pokemon("Trubbish", 2),new ExclusivePair("Nidorina", "Nidorino", 2, 2),new Pokemon("Slowpoke-Galar", 2),new Pokemon("Golbat", 2),new Pokemon("Garbodor", 2),new ExclusivePair("Nidoqueen", "Nidoking", 2, 2),new ExclusivePair("Nidoqueen", "Nidoking", 2, 2),new ExclusivePair("Nidoking", "Nidoqueen", 2, 2),new Pokemon("Crobat", 2),new Pokemon("Gardodor", 2, true)]),
    // 176
    new Den("Flying", "Flying", false, [new Pokemon("Audino", 1),new Pokemon("Zubat"),new Pokemon("Noibat"),new Pokemon("Swablu"),new Pokemon("Golbat"),new Pokemon("Golbat"),new Pokemon("Corvisquire"),new Pokemon("Golbat", 1),new Pokemon("Altaria", 1),new Pokemon("Noivern", 1),new Pokemon("Corviknight", 1),new Pokemon("Crobat", 1)]),
    // 177
    new Den("Flying", "Flying", true, [new Pokemon("Delibird", 2),new Pokemon("Zubat", 2),new Pokemon("Woobat", 2),new Pokemon("Corvisquire", 2),new Pokemon("Golbat", 2),new Pokemon("Swoobat", 2),new Pokemon("Corviknight", 2),new Pokemon("Aerodactyl", 2),new Pokemon("Altaria", 2),new Pokemon("Crobat", 2),new Pokemon("Noivern", 2),new Pokemon("Corviknight", 2, true)]),
    // 178
    new Den("Psychic", "Psychic", false, [new Pokemon("Audino", 1),new Pokemon("Mime Jr."),new ExclusivePair("Baltoy", "Ponyta-Galar"),new Pokemon("Bronzor"),new Pokemon("Mr. Mime-Galar"),new ExclusivePair("Gothorita", "Duosion"),new Pokemon("Claydol"),new ExclusivePair("Indeedee-M", "Indeedee-F", 1, 1),new ExclusivePair("Gothitelle", "Reuniclus", 1, 1),new ExclusivePair("Claydol", "Rapidash-Galar", 0, 1),new Pokemon("Mr. Rime", 1),new Pokemon("Bronzong", 1)]),
    // 179
    new Den("Psychic", "Psychic", true, [new Pokemon("Delibird", 2),new ExclusivePair("Indeedee-M", "Indeedee-F", 2, 2),new ExclusivePair("Gothita", "Solosis", 2, 2),new Pokemon("Mr. Mime-Galar", 2),new Pokemon("Slowpoke-Galar", 2),new Pokemon("Metang", 2),new ExclusivePair("Indeedee-M", "Indeedee-F", 2, 2),new ExclusivePair("Indeedee-M", "Indeedee-F", 2, 2),new Pokemon("Mr. Rime", 2),new ExclusivePair("Gothitelle", "Reuniclus", 2, 2),new ExclusivePair("Gothitelle", "Reuniclus", 2, 2),new Pokemon("Metagross", 2)]),
    // 180
    new Den("Rock", "Rock", false, [new Pokemon("Audino", 1),new ExclusivePair("Stonjourner", "Rolycoly"),new Pokemon("Aron"),new Pokemon("Aron"),new ExclusivePair("Stonjourner", "Carkol"),new ExclusivePair("Stonjourner", "Carkol"),new Pokemon("Lairon"),new ExclusivePair("Mawile", "Sableye", 1, 1),new Pokemon("Lairon", 1),new Pokemon("Carbink", 1),new Pokemon("Aggron", 1),new Pokemon("Coalossal", 1)]),
    // 181
    new Den("Rock", "Rock", true, [new Pokemon("Delibird", 2),new ExclusivePair("Mawile", "Sableye", 2, 2),new Pokemon("Aron", 2),new Pokemon("Lairon", 2),new Pokemon("Lairon", 2),new Pokemon("Shuckle", 2),new ExclusivePair("Mawile", "Sableye", 2, 2),new ExclusivePair("Mawile", "Sableye", 2, 2),new Pokemon("Coalossal", 2),new Pokemon("Aggron", 2),new Pokemon("Aggron", 2),new Pokemon("Coalossal", 2, true)]),
    // 182
    new Den("Ghost", "Ghost", false, [new Pokemon("Audino", 1),new Pokemon("Dreepy"),new Pokemon("Phantump"),new Pokemon("Mimikyu"),new Pokemon("Snorunt"),new Pokemon("Drakloak"),new Pokemon("Mimikyu"),new ExclusivePair("Mawile", "Sableye", 1, 1),new Pokemon("Glalie", 1),new Pokemon("Froslass", 1),new Pokemon("Trevenant", 1),new Pokemon("Mimikyu")]),
    // 183
    new Den("Ghost", "Ghost", true, [new Pokemon("Delibird", 2),new Pokemon("Dreepy", 2),new Pokemon("Dreepy", 2),new Pokemon("Dreepy", 2),new ExclusivePair("Haunter", "Corsola-Galar", 0, 2),new ExclusivePair("Mawile", "Sableye", 2, 2),new Pokemon("Trevenant", 2),new ExclusivePair("Trevenant", "Cursola", 2, 2),new ExclusivePair("Mawile", "Sableye", 2, 2),new Pokemon("Dragapult", 2),new Pokemon("Dragapult", 2),new ExclusivePair("Gengar", "Gengar", 0, 0, false, true)]),
    // 184
    new Den("Dragon", "Dragon", false, [new Pokemon("Audino", 1),new Pokemon("Druddigon"),new ExclusivePair("Bagon", "Gible"),new ExclusivePair("Bagon", "Gible"),new Pokemon("Tyrunt"),new ExclusivePair("Shelgon", "Gabite"),new Pokemon("Dratini"),new ExclusivePair("Shelgon", "Gabite", 1, 1),new Pokemon("Druddigon", 1),new Pokemon("Tyrantrum", 1),new ExclusivePair("Salamence", "Garchomp", 1, 1),new ExclusivePair("Salamence", "Garchomp", 1, 1)]),
    // 185
    new Den("Dragon", "Dragon", true, [new Pokemon("Delibird", 2),new Pokemon("Duraludon", 2),new ExclusivePair("Bagon", "Gible", 2, 2),new Pokemon("Tyrunt", 2),new ExclusivePair("Turtonator", "Drampa", 0, 2),new ExclusivePair("Shelgon", "Gabite", 2, 2),new Pokemon("Duraludon", 2),new Pokemon("Dragonite", 2),new Pokemon("Tyrantrum", 2),new ExclusivePair("Salamence", "Garchomp", 2, 2),new ExclusivePair("Salamence", "Garchomp", 2, 2),new Pokemon("Duraludon", 2, true)]),
    // 186
    new Den("Dark", "Dark", false, [new Pokemon("Audino", 1),new Pokemon("Sneasel"),new Pokemon("Impidimp"),new Pokemon("Impidimp"),new Pokemon("Morgrem"),new Pokemon("Sneasel"),new Pokemon("Linoone-Galar"),new Pokemon("Grimmsnarl", 1),new Pokemon("Absol", 1),new Pokemon("Obstagoon", 1),new Pokemon("Absol", 1),new Pokemon("Weavile", 1)]),
    // 187
    new Den("Dark", "Dark", true, [new Pokemon("Delibird", 2),new Pokemon("Impidimp", 2),new Pokemon("Absol", 2),new Pokemon("Sneasel", 2),new Pokemon("Sneasel", 2),new Pokemon("Thievul", 2),new Pokemon("Liepard", 2),new Pokemon("Absol", 2),new Pokemon("Grimmsnarl", 2),new Pokemon("Weavile", 2),new Pokemon("Absol", 2),new Pokemon("Grimmsnarl", 2, true)]),
    // 188
    new Den("Steel", "Steel", false, [new Pokemon("Audino", 1),new Pokemon("Aron"),new Pokemon("Durant"),new Pokemon("Aron"),new Pokemon("Beldum"),new Pokemon("Lairon"),new Pokemon("Metang"),new Pokemon("Corviknight", 1),new Pokemon("Durant", 1),new Pokemon("Copperajah", 1),new Pokemon("Aggron", 1),new Pokemon("Aggron", 1)]),
    // 189
    new Den("Steel", "Steel", true, [new Pokemon("Delibird", 2),new Pokemon("Aron", 2),new Pokemon("Meowth-Galar", 2),new Pokemon("Durant", 2),new Pokemon("Lairon", 2),new Pokemon("Purrserker", 2),new Pokemon("Purrserker", 2),new Pokemon("Copperajah", 2),new Pokemon("Aggron", 2),new Pokemon("Metagross", 2),new Pokemon("Metagross", 2),new Pokemon("Copperajah", 2, true)]),
    // 190
    new Den("Fairy", "Fairy", false, [new Pokemon("Audino", 1),new Pokemon("Cleffa"),new Pokemon("Carbink"),new Pokemon("Hatenna"),new Pokemon("Cleffa"),new Pokemon("Hattrem"),new Pokemon("Clefairy"),new Pokemon("Carbink", 1),new Pokemon("Carbink", 1),new Pokemon("Clefable", 1),new Pokemon("Whimsicott", 1),new Pokemon("Hatterene", 1)]),
    // 191
    new Den("Fairy", "Fairy", true, [new Pokemon("Delibird", 2),new Pokemon("Carbink", 2),new Pokemon("Cottonee", 2),new Pokemon("Clefairy", 2),new Pokemon("Carbink", 2),new Pokemon("Carbink", 2),new Pokemon("Whimsicott", 2),new Pokemon("Weezing-Galar", 2),new Pokemon("Hatterene", 2),new Pokemon("Clefable", 2),new Pokemon("Weezing-Galar", 2),new Pokemon("Hatterene", 2, true)]),
    // 192
    new Den("Ghost", "Ghost", false, [new Pokemon("Audino", 1),new Pokemon("Sinistea"),new Pokemon("Sinistea"),new Pokemon("Sinistea"),new Pokemon("Sinistea"),new Pokemon("Sinistea"),new Pokemon("Sinistea"),new Pokemon("Sinistea", 1),new Pokemon("Sinistea", 1),new Pokemon("Sinistea", 1),new Pokemon("Sinistea", 1),new Pokemon("Sinistea-Antique", 1)]),
    // 193
    new Den("Ghost", "Ghost", true, [new Pokemon("Delibird", 2),new Pokemon("Sinistea", 2),new Pokemon("Sinistea", 2),new Pokemon("Sinistea", 2),new Pokemon("Sinistea", 2),new Pokemon("Sinistea", 2),new Pokemon("Sinistea", 2),new ExclusivePair("Sinistea", "Alcremie", 2, 2),new Pokemon("Sinistea-Antique", 2),new Pokemon("Polteageist", 2),new Pokemon("Polteageist-Antique", 2),new Pokemon("Alcremie", 2, true)]),
    // 194
    new Den("Normal", "Normal", false, [new Pokemon("Audino", 1),new Pokemon("Eevee"),new Pokemon("Eevee"),new Pokemon("Eevee"),new Pokemon("Flareon"),new Pokemon("Jolteon"),new Pokemon("Vaporeon"),new Pokemon("Espeon", 1),new Pokemon("Umbreon", 1),new Pokemon("Leafeon", 1),new Pokemon("Glaceon", 1),new Pokemon("Sylveon", 1)]),
    // 195
    new Den("Normal", "Normal", true, [new Pokemon("Delibird", 2),new Pokemon("Eevee", 2),new Pokemon("Eevee", 2),new Pokemon("Eevee", 2),new Pokemon("Flareon", 2),new Pokemon("Jolteon", 2),new Pokemon("Vaporeon", 2),new Pokemon("Espeon", 2),new Pokemon("Umbreon", 2),new Pokemon("Leafeon", 2),new Pokemon("Glaceon", 2),new Pokemon("Sylveon", 2)]),
    // 196
    new Den("Rock", "Rock", false, [new Pokemon("Audino", 1),new ExclusivePair("Omanyte", "Kabuto"),new ExclusivePair("Anorith", "Lileep"),new ExclusivePair("Tyrunt", "Amaura"),new ExclusivePair("Amaura", "Tyrunt"),new ExclusivePair("Armaldo", "Cradily"),new ExclusivePair("Cradily", "Armaldo"),new ExclusivePair("Omastar", "Kabutops", 1, 1),new ExclusivePair("Armaldo", "Cradily", 1, 1),new ExclusivePair("Tyrantrum", "Aurorus", 1, 1),new ExclusivePair("Aurorus", "Tyrantrum", 1, 1),new Pokemon("Aerodactyl", 1)]),
    // 197
    new Den("Rock", "Rock", true, [new Pokemon("Delibird", 2),new ExclusivePair("Omanyte", "Kabuto", 2, 2),new ExclusivePair("Omastar", "Kabutops", 2, 2),new Pokemon("Aerodactyl", 2),new ExclusivePair("Arctozolt", "Arctovish", 2, 2),new ExclusivePair("Dracozolt", "Dracovish", 2, 2),new ExclusivePair("Dracovish", "Dracozolt", 2, 2),new Pokemon("Aerodactyl", 2),new ExclusivePair("Dracozolt", "Dracovish", 2, 2),new ExclusivePair("Dracovish", "Dracozolt", 2, 2),new ExclusivePair("Arctozolt", "Arctovish", 2, 2),new ExclusivePair("Arctovish", "Arctozolt", 2, 2)])
];

/* templates

    // #
    new Den("", "", false, [new Pokemon("Audino", 1),new Pokemon(""),new Pokemon(""),new Pokemon(""),new Pokemon(""),new Pokemon(""),new Pokemon(""),new Pokemon("", 1),new Pokemon("", 1),new Pokemon("", 1),new Pokemon("", 1),new Pokemon("", 1)]),
    // #
    new Den("", "", true, [new Pokemon("Delibird", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2),new Pokemon("", 2)]),
*/
