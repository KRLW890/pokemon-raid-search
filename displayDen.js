var displayDen = function(den, pokemon, ha, gmax)
{
    var output = document.createElement("table");
    output.insertRow();
    output.insertRow();
    output.rows[1].insertCell();
    output.rows[1].cells[0].colSpan = 2;
    output.rows[1].cells[0].classList.add("result-location");
    if (den < 95)
        output.rows[1].cells[0].innerText = "Wild Area";
    else if (den > 95 && den < 158)
        output.rows[1].cells[0].innerText = "Isle of Armor";
    else if (den > 157)
        output.rows[1].cells[0].innerText = "Crown Tundra";
    output.insertRow();
    for (var i = 0; i < 2; i++)
    {
        output.rows[0].insertCell();
        output.rows[2].insertCell();
        if (dens[den].rare)
            output.rows[0].cells[i].classList.add("rare");
        else
            output.rows[0].cells[i].classList.add("common");
        output.rows[2].cells[i].classList.add(dens[den].types[i].toLowerCase());
    }
    output.rows[0].cells[0].classList.add("top-left");
    output.rows[0].cells[1].classList.add("top-right");
    
    output.insertRow();
    output.rows[3].insertCell();
    output.rows[3].cells[0].colSpan = 2;
    output.rows[3].cells[0].classList.add("serebii-link");
    var link = document.createElement("a");
    link.href = "https://www.serebii.net/swordshield/maxraidbattles/den" + (den+1) + ".shtml";
    link.target = "_blank";
    link.innerText = "Locations on Serebii";
    output.rows[3].cells[0].appendChild(link);
        
    output.rows[0].cells[0].innerText = "Den " + (den+1);
    if (dens[den].rare)
    {
        output.rows[0].cells[1].innerText = "Rare beam";
        output.rows[1].cells[0].classList.add("rare");
        output.rows[3].cells[0].classList.add("rare");
    }
    else
    {
        output.rows[0].cells[1].innerText = "Common beam";
        output.rows[1].cells[0].classList.add("common");
        output.rows[3].cells[0].classList.add("common");
    }
    
    for (var i = 0; i < 2; i++)
    {
        var version = document.createElement("p");
        version.classList.add("version-name");
        if (i == 0)
            version.innerText = "Sword";
        else
            version.innerText = "Shield";
        output.rows[2].cells[i].appendChild(version);
        
        var pokeList = document.createElement("table");
        for (var j = 0; j < 12; j++)
        {
            var target = true;
            if (j%3 == 0)
                pokeList.insertRow();
            pokeList.rows[Math.floor(j/3)].insertCell();
            pokeList.rows[Math.floor(j/3)].cells[j%3].classList.add("pokemon-cell");
            if (dens[den].pokemon[j].gmax[i])
                pokeList.rows[Math.floor(j/3)].cells[j%3].innerText += "GMax ";
            pokeList.rows[Math.floor(j/3)].cells[j%3].innerText += dens[den].pokemon[j].name[i];
            if (dens[den].pokemon[j].name[i].toLowerCase() != pokemon.toLowerCase())
                target = false;
            switch (dens[den].pokemon[j].ha[i])
            {
                case 0:
                    pokeList.rows[Math.floor(j/3)].cells[j%3].innerText += "\nNever HA";
                    if (ha)
                        target = false;
                break;
                case 1:
                    pokeList.rows[Math.floor(j/3)].cells[j%3].innerText += "\nHA possible";
                break;
                case 2:
                    pokeList.rows[Math.floor(j/3)].cells[j%3].innerText += "\nAlways HA";
                break;
                case 3:
                    pokeList.rows[Math.floor(j/3)].cells[j%3].innerText += "\nOwn Tempo possible";
                break;
                case 4:
                    pokeList.rows[Math.floor(j/3)].cells[j%3].innerText += "\nAlways Own Tempo";
                break;
            }
            if (gmax && !dens[den].pokemon[j].gmax[i])
                target = false;
            if (target)
                pokeList.rows[Math.floor(j/3)].cells[j%3].classList.add("target-mon");
        }
        output.rows[2].cells[i].appendChild(pokeList);
    }
    
    document.getElementById("results").appendChild(output);
};
