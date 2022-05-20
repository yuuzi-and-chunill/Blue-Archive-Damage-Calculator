class Character {
    constructor(ATK, Damage) {
        this.ATK = ATK;
        this.Damage = Damage;
        //TODO
    }
}

class Atk {
    constructor(base_ATK, favorability_ATK, back_row_ATK, equip_ATK, passive_skill_ATK, site_suitability) {
        this.base_ATK = base_ATK;
        this.favorability_ATK = favorability_ATK;
        this.back_row_ATK = back_row_ATK;
        this.equip_ATK = equip_ATK;
        this.passive_skill_ATK = passive_skill_ATK;
        this.site_suitability = site_suitability;
    }

    getATK() {
        var total_ATK = (this.base_ATK + this.favorability_ATK + this.back_row_ATK) * (1 + 0.01 * this.equip_ATK + 0.01 * this.passive_skill_ATK) * this.site_suitability;
        console.log(total_ATK);
        return total_ATK;
    }
}

class Damage {
    constructor(ATK) {
        this.ATK = ATK;
        //TODO
    }
}

function display(){
    var bATK, fATK, brATK, eATK, psATK;

    if(base_ATK.value !== '' && favorability_ATK.value !== '' && equip_ATK.value !== '') {
        bATK = Number(base_ATK.value);
        fATK = Number(favorability_ATK.value);
        eATK = Number(equip_ATK.value);
    }
    else {
        alert("存在必填項無填入值");
        return;
    }

    if(back_row_ATK.value !== '')
        brATK = Number(back_row_ATK.value);
    else
        brATK = 0;

    if(passive_skill_ATK.value !== ''){
        //=====  psATK calculate  =====
        let psATK_set = document.getElementsByClassName("passive_skill_ATK");
        let psATK_set_sum = Number(passive_skill_ATK.value);
        for (let i=0;i<psATK_set.length;i++){
            psATK_set_sum += Number(psATK_set[i].value);
        }
        console.log(psATK_set_sum);
        psATK = Number(psATK_set_sum);
        //==========================
    }
    else
        psATK = 0;

    mood = Number(site_suitability.value);
    console.log(bATK, fATK, brATK, eATK, psATK, mood);
    var ATK = new Atk(bATK, fATK, brATK, eATK, psATK, mood);
    var total_ATK = ATK.getATK();

    let el = document.getElementById('output');

    el.textContent = "ATK: " + Math.floor(total_ATK);
}

function add_input_check(){
    let add_item = document.createElement("div");
    add_item.className = "add_item";

    let input_check = document.createElement("input");
    input_check.text = "text";
    input_check.className = "passive_skill_ATK";
    input_check.placeholder = "被動&輔助技能(%)(預設+0%)";
    add_item.appendChild(input_check);

    let delete_button = document.createElement("button");
    delete_button.textContent = "刪除";
    add_item.append(delete_button);

    let add_input = document.getElementById("add_input");
    add_input.appendChild(add_item);
    delete_button.addEventListener('click',function(){
        this.parentNode.remove();
    })
}
function handle_enter(event, inputV){
    
    let input_value = document.getElementsByClassName('inputValue')[0].getElementsByTagName('input');
    let arr = Array.prototype.slice.call(input_value);
    if (event.key==="Enter"){
        console.log(arr[arr.indexOf(event.target) + 1]);
        arr[arr.indexOf(event.target) + 1].focus();
    }
}