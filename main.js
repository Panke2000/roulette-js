const ROW_1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
const ROW_2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const ROW_3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

const COL_1_18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const COL_19_36 = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

const COL_1_12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const COL_13_24 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const COL_25_36 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

const RED = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const BLACK = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

let active_bets = [];
console.log(active_bets);

let balance_value = 1000;
let bet_value = 100;
let active_bets_value = 0;
let active_bets_total = 0;
const MAX_BET_VALUE = 1000;

function bet() {
    let spin_result = spin();
    if (spin_result === 37) {
        spin_result = '00';
    }else if (spin_result === 38) {
        spin_result = '0';
    }
    console.log('spin result: ' + spin_result);
    let table = document.getElementById('BETS-TABLE');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.setAttribute('class', 'tg-uguq');
    cell1.setAttribute('colspan', '2');
    let cell2 = row.insertCell(1);
    cell2.setAttribute('class', 'tg-uguq');
    cell2.setAttribute('colspan', '2');
    let spin_win = 0;
    for (let i = 0; i < active_bets.length; i++) {
        if (active_bets[i][0] === 'RED') {
            if (RED.includes(parseInt(spin_result))) {
                balance_value += active_bets[i][1] * 2;
                spin_win += active_bets[i][1] * 2;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === 'BLACK') {
            if (BLACK.includes(parseInt(spin_result))) {
                balance_value += active_bets[i][1] * 2;
                spin_win += active_bets[i][1] * 2;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === 'EVEN') {
            if (spin_result % 2 === 0) {
                balance_value += active_bets[i][1] * 2;
                spin_win += active_bets[i][1] * 2;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === 'ODD') {
            if (spin_result % 2 !== 0) {
                balance_value += active_bets[i][1] * 2;
                spin_win += active_bets[i][1] * 2;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === 'SINGLE-0') {
            if (spin_result === '0') {
                balance_value += active_bets[i][1] * 35;
                spin_win += active_bets[i][1] * 35;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === 'DOUBLE-0') {
            if (spin_result === '00') {
                balance_value += active_bets[i][1] * 35;
                spin_win += active_bets[i][1] * 35;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '1st ROW') {
            if (ROW_1.includes(spin_result)) {
                balance_value += active_bets[i][1] * 3;
                spin_win += active_bets[i][1] * 3;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '2nd ROW') {
            if (ROW_2.includes(spin_result)) {
                balance_value += active_bets[i][1] * 3;
                spin_win += active_bets[i][1] * 3;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '3rd ROW') {
            if (ROW_3.includes(spin_result)) {
                balance_value += active_bets[i][1] * 3;
                spin_win += active_bets[i][1] * 3;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '1-18') {
            if (COL_1_18.includes(spin_result)) {
                balance_value += active_bets[i][1] * 2;
                spin_win += active_bets[i][1] * 2;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '19-36') {
            if (COL_19_36.includes(spin_result)) {
                balance_value += active_bets[i][1] * 2;
                spin_win += active_bets[i][1] * 2;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '1-12') {
            if (COL_1_12.includes(spin_result)) {
                balance_value += active_bets[i][1] * 3;
                spin_win += active_bets[i][1] * 3;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '13-24') {
            if (COL_13_24.includes(spin_result)) {
                balance_value += active_bets[i][1] * 3;
                spin_win += active_bets[i][1] * 3;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === '25-36') {
            if (COL_25_36.includes(spin_result)) {
                balance_value += active_bets[i][1] * 3;
                spin_win += active_bets[i][1] * 3;
                document.getElementById('balance-value').innerHTML = balance_value;
            }
        } else if (active_bets[i][0] === spin_result) {
            balance_value += active_bets[i][1] * 35;
            spin_win += active_bets[i][1] * 35;
            document.getElementById('balance-value').innerHTML = balance_value;
        }
    }
    if (spin_win > 0) {
        alert('The spin result is: ' + spin_result + '\nYou won: $' + spin_win + ', with profit of: $' + (spin_win - active_bets_value));
    } else {
        alert('The spin result is: ' + spin_result + '\nYou lost: $' + active_bets_value);
    }

    active_bets_total = 0;
    document.getElementById('ACTIVE_BETS').innerHTML = active_bets_total;
    active_bets_value = 0;
    document.getElementById('ACTIVE_BETS_TOTAL').innerHTML = active_bets_value;
    active_bets = [];
    console.log(active_bets);
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }

};

function undo() {
    if (active_bets.length <= 0) {
        return;
    } else {
        balance_value += active_bets[active_bets.length - 1][1];
        document.getElementById('balance-value').innerHTML = balance_value;
        active_bets_total--;
        document.getElementById('ACTIVE_BETS').innerHTML = active_bets_total;
        active_bets_value -= active_bets[active_bets.length - 1][1];
        document.getElementById('ACTIVE_BETS_TOTAL').innerHTML = active_bets_value;
        active_bets.pop();
        console.log(active_bets);
        let table = document.getElementById('BETS-TABLE');
        table.deleteRow(-1);
    }
};

function reset() {
    if (active_bets.length <= 0) {
        return;
    } else if (confirm('Are you sure you want to reset?')) {
        balance_value += active_bets_value;
        document.getElementById('balance-value').innerHTML = balance_value;
        active_bets_total = 0;
        document.getElementById('ACTIVE_BETS').innerHTML = active_bets_total;
        active_bets_value = 0;
        document.getElementById('ACTIVE_BETS_TOTAL').innerHTML = active_bets_value;
        active_bets = [];
        console.log(active_bets);
        let table = document.getElementById('BETS-TABLE');
        while (table.rows.length > 1) {
            table.deleteRow(-1);
        }
    }
        
};

function betMax() {
    bet_value = MAX_BET_VALUE;
};

function betMinus() {
    if (bet_value >= 100) {
        bet_value -= 50;
    } else {
        bet_value = 50;
    }
};

function betPlus() {
    if (bet_value < MAX_BET_VALUE) {
        bet_value += 50;
    } else {
        bet_value = MAX_BET_VALUE;
    }
};

function addToList(bet_type) {
    if (balance_value >= bet_value) {
        active_bets.push([bet_type, bet_value]);
        console.log(active_bets);
        balance_value -= bet_value;
        document.getElementById('balance-value').innerHTML = balance_value;
        active_bets_value += bet_value;
        document.getElementById('ACTIVE_BETS_TOTAL').innerHTML = active_bets_value;
        active_bets_total++;
        document.getElementById('ACTIVE_BETS').innerHTML = active_bets_total;
    } else {
        alert('Cannot place bet: Insufficient funds');
    }
};

function appendTable(bet_type) {
    let table = document.getElementById('BETS-TABLE');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.setAttribute('class', 'tg-uguq');
    cell1.setAttribute('colspan', '2');
    let cell2 = row.insertCell(1);
    cell2.setAttribute('class', 'tg-uguq');
    cell2.setAttribute('colspan', '2');
    cell1.innerHTML = bet_type;
    cell2.innerHTML = '$' + bet_value;
};

function placeBet(bet_type) {
    switch (bet_type) {
        case 'RED':
            console.log('betting red');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case 'BLACK':
            console.log('betting black');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case 'EVEN':
            console.log('betting even');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case 'ODD':
            console.log('betting odd');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case 'SINGLE-0':
            console.log('betting single 0');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case 'DOUBLE-0':
            console.log('betting double 0');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '1st ROW':
            console.log('betting 1st row');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '2nd ROW':
            console.log('betting 2nd row');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '3rd ROW':
            console.log('betting 3rd row');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '1-18':
            console.log('betting 1 - 18');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '19-36':
            console.log('betting 19 - 36');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '1-12':
            console.log('betting 1 - 12');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '13-24':
            console.log('betting 13 - 24');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case '25-36':
            console.log('betting 25 - 36');
            appendTable(bet_type);
            addToList(bet_type);
            break;
        case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36:
            console.log('betting on number: ' + bet_type);
            appendTable(bet_type);
            addToList(bet_type);
            break;
        default:
            break;
    }
};

function spin() {
    return Math.floor(Math.random() * 38 + 1);
};

function restart() {
    if (confirm('Are you sure you want to restart?')) {
        location.reload();
    }
};

document.addEventListener("click", (e) => {
    switch (e.target.id) {
        case 'bet':
            bet();
            break;
        case 'undo':
            undo();
            break;
        case 'reset':
            reset();
            break;
        case 'restart':
            restart();
            break;
        case 'bet-max':
            console.log('bet is maxed');
            betMax();
            document.getElementById('bet-current-value').innerHTML = bet_value;
            break;
        case 'bet-minus':
            console.log('lowering bet');
            betMinus();
            document.getElementById('bet-current-value').innerHTML = bet_value;
            break;
        case 'bet-plus':
            console.log('boosting bet');
            betPlus();
            document.getElementById('bet-current-value').innerHTML = bet_value;
            break;
        case 'color-red':
            placeBet('RED');
            break;
        case 'color-black':
            placeBet('BLACK');
            break;
        case 'num-even':
            placeBet('EVEN');
            break;
        case 'num-odd':
            placeBet('ODD');
            break;
        case 'single-0':
            placeBet('SINGLE-0');
            break;
        case 'double-0':
            placeBet('DOUBLE-0');
            break;
        case 'row-1':
            placeBet('1st ROW');
            break;
        case 'row-2':
            placeBet('2nd ROW');
            break;
        case 'row-3':
            placeBet('3rd ROW');
            break;
        case '1-18':
            placeBet('1-18');
            break;
        case '19-36':
            placeBet('19-36');
            break;
        case '1-12':
            placeBet('1-12');
            break;
        case '13-24':
            placeBet('13-24');
            break;
        case '25-36':
            placeBet('25-36');
            break;
        case 'num-1': case 'num-2': case 'num-3': case 'num-4': case 'num-5': case 'num-6': case 'num-7': case 'num-8': case 'num-9': case 'num-10': case 'num-11': case 'num-12': case 'num-13': case 'num-14': case 'num-15': case 'num-16': case 'num-17': case 'num-18': case 'num-19': case 'num-20': case 'num-21': case 'num-22': case 'num-23': case 'num-24': case 'num-25': case 'num-26': case 'num-27': case 'num-28': case 'num-29': case 'num-30': case 'num-31': case 'num-32': case 'num-33': case 'num-34': case 'num-35': case 'num-36':
            placeBet(parseInt(e.target.innerHTML));
            break;
    
        default:
            break;
    }
});