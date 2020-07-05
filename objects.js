var count = 0;
poketree = new Root();
var Den  = function(typeSw, typeSh, rare, pokemon)
{
    if (typeSw != undefined)
    {
        this.types = [typeSw, typeSh];
        this.rare = rare;
        this.pokemon = pokemon;
        if (this.pokemon[11].gmax)
            this.gmax = true;
        else
            this.gmax = false;
        for (var i = 0; i < 12; i++)
        {
            poketree.add(this.pokemon[i].name[0], count, "sw");
            poketree.add(this.pokemon[i].name[1], count, "sh");
        }
    }
    else
        this.pokemon = [new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null"),new Pokemon("null")];
    
    count++;
};

var ExclusivePair = function(sw, sh, swha, shha, gmax)
{
    this.name = [sw, sh];
    this.ha = [];
    this.ha[0] = swha || 0;
    this.ha[1] = shha || 0;
    this.gmax = gmax || false;
    this.exclusive = true;
};

var Pokemon = function(name, ha, gmax)
{
    ExclusivePair.call(this, name, name, ha, ha, gmax);
    this.exclusive = false;
};
