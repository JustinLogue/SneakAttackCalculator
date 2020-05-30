$(document).ready(function() {

    const $weaponButton = $('.weapon');
    const $attackButton =$('.attack');
    const $setrogueLvl = $('#rogueLvl');
    const $setdexMod = $('#dex');
    const $setstrMod = $('#str');
    
    const player ={
        rogueLvl: 0,
        sneakDice:0,
        sneakDamage: 0,
        strStat: 0,
        strMod: 0,
        dexStat: 0,
        dexMod: 0,
        statDamage: 0,
        magicBonus: 0,
        crit: false,
        name: "",
        hitDie: "",
        weaponDamage: 0,
        stat: "",
        totalDamage: 0,
        damType: ""
    }
    const weapon = {
        dagger :{
            name: 'Dagger',
            hitDie: '1d4',
            damType: 'piercing',
            stat: 'finesse'
        },
        club :{
            name: 'Club',
            hitDie: '1d4',
            damType: 'bludgeoning',
            stat: 'str'

        },
        lightHammer :{
            name: 'Light Hammer',
            hitDie: '1d4',
            damType: 'bludgeoning',
            stat: 'str'

        },
        sickle :{
            name:'Sickle',
            hitDie: '1d4',
            damType: 'slashing',
            stat: 'str'

        },
        sling  :{
            name: 'Sling',
            hitDie: '1d4',
            damType: 'bludgeoning',
            stat: 'dex'

        },
        whip  :{
            name: 'Whip',
            hitDie: '1d4',
            damType: 'slashing',
            stat: 'str'

        },
        dart  :{
            name: 'Dart',
            hitDie: '1d4',
            damType: 'piercing',
            stat: 'finesse'

        },
        handaxe  :{
            name: 'Hand Axe',
            hitDie: '1d6',
            damType: 'slashing',
            stat: 'str'

        },
        javelin :{
            name: 'Javelin',
            hitDie: '1d6',
            damType: 'piercing',
            stat: 'str'

        },
        quarterstaff :{
            name: 'Quaterstaff',
            hitDie: '1d6',
            damType: 'bludgeoning',
            stat: 'str'

        },
        mace :{
            name: 'Mace',
            hitDie: '1d6',
            damType: 'bludgeoning',
            stat: 'str'

        },
        spear :{
            name: 'Spear',
            hitDie: '1d6',
            damType: 'piercing',
            stat: 'str'

        },
        shortBow :{
            name: 'Short Bow',
            hitDie: '1d6',
            damType: 'piercing',
            stat: 'dex'

        },
        scimitar  :{
            name: 'Scimitar',
            hitDie: '1d6',
            damType: 'slashing',
            stat: 'Finesse'

        },
        shortSword :{
            name: 'Short Sword',
            hitDie: '1d6',
            damType: 'piercing',
            stat: 'Finesse'

        },
        trident :{
            name: 'Trident',
            hitDie: '1d6',
            damType: 'piercing',
            stat: 'str'

        },
        Handcrossbow :{
            name: 'Hand Crossbow',
            hitDie: '1d6',
            damType: 'piercing',
            stat: 'dex'

        },
        greatClub :{
            name: 'Great Club',
            hitDie: '1d8',
            damType: 'bludgeoning',
            stat: 'str'

        },
        quarterstaff2  :{
            name: 'Quarterstaff (2-handed)',
            hitDie: '1d8',
            damType: 'bludgeoning',
            stat: 'str'

        },
        lightCrossbow :{
            name: 'Light Crossbow',
            hitDie: '1d8',
            damType: 'piercing',
            stat: 'dex'

        },
        spear2 :{
            name: 'Spear (2-handed)',
            hitDie: '1d8',
            damType: 'piercing',
            stat: 'str'

        },
        battleaxe :{
            name: 'Battle Axe',
            hitDie: '1d8',
            damType: 'slashing',
            stat: 'str'

        },
        flail :{
            name: 'Flail',
            hitDie: '1d8',
            damType: 'bludgeoning',
            stat: 'str'

        },
        longsword :{
            name: 'Long Sword',
            hitDie: '1d8',
            damType: 'slashing',
            stat: 'str'

        },
        morningstar :{
            name: 'Morningstar',
            hitDie: '1d8',
            damType: 'piercing',
            stat: 'str'

        },
        rapier :{
            name: 'Rapier',
            hitDie: '1d8',
            damType: 'piercing',
            stat: 'finesse'

        },
        warPick :{
            name: 'War Pick',
            hitDie: '1d8',
            damType: 'piercing',
            stat: 'str'

        },
        trident2 :{
            name: 'Trident (2-handed)',
            hitDie: '1d8',
            damType: 'piercing',
            stat: 'str'

        },
        warhammer :{
            name: 'Warhammer',
            hitDie: '1d8',
            damType: 'bludgeoning',
            stat: 'str'

        },
        longBow :{
            name: 'Long Bow',
            hitDie: '1d8',
            damType: 'piercing',
            stat: 'dex'

        },
        battleaxe2 :{
            name: 'Battle Axe (2-handed)',
            hitDie: '1d10',
            damType: 'slashing',
            stat: 'str'

        },
        glavie :{
            name: 'Glaive',
            hitDie: '1d10',
            damType: 'slashing',
            stat: 'str'

        },
        halberd :{
            name: 'Halberd',
            hitDie: '1d10',
            damType: 'slashing',
            stat: 'str'

        },
        longsword2 :{
            name: 'Long Sword (2-handed)',
            hitDie: '1d10',
            damType: 'slashing',
            stat: 'str'

        },
        pike :{
            name: 'Pike',
            hitDie: '1d10',
            damType: 'piercing',
            stat: 'str'

        },
        heavyCrossbow :{
            name: 'Heavy Crossbow',
            hitDie: '1d10',
            damType: 'piercing',
            stat: 'dex'

        },
        warhammer2 :{
            name: 'Warhammer (2-handed)',
            hitDie: '1d10',
            damType: 'bludgeoning',
            stat: 'str'

        },
        greatAxe :{
            name: 'Great Axe',
            hitDie: '1d12',
            damType: 'slashing',
            stat: 'str'

        },
        lance :{
            name: 'Lance',
            hitDie: '1d12',
            damType: 'piercing',
            stat: 'str'

        },
        greatSword :{
            name: 'Great Sword',
            hitDie: '2d6',
            damType: 'slashing',
            stat: 'str'

        },
        maul :{
            name: 'Maul',
            hitDie: '2d6',
            damType: 'bludgeoning',
            stat: 'str'

        },
        blowgun :{
            name: 'Blowgun',
            hitDie: '1',
            damType: 'piercing',
            stat: 'dex'

        }
    }
    $weaponButton.on('click', function(){
        
        const varName = $(this).removeClass("weapon").attr("class");
        $(this).addClass("weapon");

        console.log(weapon[varName].name); 

        player.name = weapon[varName].name;
        player.hitDie = weapon[varName].hitDie;
        player.stat = weapon[varName].stat;
        player.damType = weapon[varName].damType;
        document.getElementById('wname').textContent = (`Weapon: ${player.name}`);
        document.getElementById('wdie').textContent = (`Hit die: ${player.hitDie}`);
        document.getElementById('damt').textContent = (`Damage Type: ${player.damType}`);



        console.log(player);
    })

    function statDamage(){
        player.dexMod =(Math.ceil(((player.dexStat-10)/2)));
        player.strMod =(Math.ceil(((player.strStat-10)/2)));
        if (player.stat == 'str')
        {
            player.statDamage = player.strMod;
        }
        else if (player.stat == 'dex')
        {
            player.statDamage = player.dexMod;
        }
        else if (player.stat == 'finesse')
        {
            if (player.dexmod > player.strMod)
            {
                player.statDamage = player.dexMod;
            }
            else
            {
                player.statDamage = player.strMod;
            }
        }
        console.log(`Stat damage is ${player.statDamage}`);
    }

    function sneakDice(){
        player.sneakDice = Math.ceil(player.rogueLvl/2);
        console.log(`Number of sneak dice is :${player.sneakDice}`);
        player.sneakDamage = ((Math.floor(Math.random() * 6) + 1 ) *player.sneakDice);
        console.log(`Sneak attack die damage is ${player.sneakDamage}`);
    }

    function weaponDamage(){
        if(player.hitDie === '1d4')
    {
        player.weaponDamage = (Math.floor(Math.random() * 4) + 1 );
        console.log(`Your weapon Damage is ${player.weaponDamage}`);
    }
    else if(player.weaponDie === '1d6')
    {
        player.weaponDamage = (Math.floor(Math.random() * 6) + 1 );
        console.log(`Your weapon Damage is ${player.weaponDamage}`);
    }
    else if(player.weaponDie === '1d8')
    {
        player.weaponDamage = (Math.floor(Math.random() * 8) + 1 );
        console.log(`Your weapon Damage is ${player.weaponDamage}`);
    }
    else if(player.weaponDie === '1d10')
    {
        player.weaponDamage = (Math.floor(Math.random() * 10) + 1 );
        console.log(`Your weapon Damage is ${player.weaponDamage}`);
    }
    else if(player.weaponDie === '1d12')
    {
        player.weaponDamage = (Math.floor(Math.random() * 12) + 1 );
        console.log(`Your weapon Damage is ${player.weaponDamage}`);
    }
    else if(player.weaponDie === '2d6')
    {
        player.weaponDamage = ((Math.floor(Math.random() * 6) + 1 )+(Math.floor(Math.random() * 6) + 1 ));
        console.log(`Your weapon Damage is ${player.weaponDamage}`);
    }
    else if(player.weaponDie === '1')
    {
        player.weaponDamage =  1;
        console.log(`Your weapon Damage is ${player.weaponDamage}`);
    }
    }

    function totalDamage(){
        player.totalDamage = player.statDamage + player.sneakDamage +player.weaponDamage;
        console.log(`You dealt ${player.totalDamage} damage!`);
    }

    $('.rogueLvl').on('submit', function(event){
        console.log('My form is submitting')
        event.preventDefault();
        console.log($setrogueLvl)
        player.rogueLvl = parseInt($setrogueLvl.val());
        console.log(player.rogueLvl);
        sneakDice();
        document.getElementById('roguelv').textContent = (`Sneak Attack dice: ${player.sneakDice}`);
        

    })
    
    $('.dex').on('submit', function(event){
        console.log('My form is submitting')
        event.preventDefault();
        console.log($setdexMod)
        player.dexStat = parseInt($setdexMod.val());
        console.log(player.dexStat);
        statDamage();
        document.getElementById('iddex').textContent = (`Dexterity - Score: ${player.dexStat}    Modifier: ${player.dexMod}`);
    })
    
    $('.str').on('submit', function(event){
        console.log('My form is submitting')
        event.preventDefault();
        console.log($setstrMod)
        player.strStat = parseInt($setstrMod.val());
        console.log(player.strStat);
        statDamage();
        document.getElementById('idstr').textContent = (`Strength - Score: ${player.strStat}   Modifier: ${player.strMod}`);
    })



    $attackButton.on('click', function(){
        statDamage();
        sneakDice();
        weaponDamage();
        totalDamage();
        alert(`You total sneak attack damage is ${player.totalDamage} ${player.damType} damage!`);
    })




});
