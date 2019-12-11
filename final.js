function ready() {
    // let MinutesT = HoursA*60 + MinutesA
    Go.onclick = function() {
        var a1 = parseInt(Act1.value)
        var a2 = parseInt(Act2.value)
        var a3 = parseInt(Act3.value)
        var a4 = parseInt(Act4.value)
        var a5 = parseInt(Act5.value)
        var a6 = parseInt(Act6.value)
        var Break = parseInt(bl.value)
        if (isNaN(a1) == true) {
            var a1 = 0;
        }
        if (isNaN(a2) == true) {
            var a2 = 0;
        }
        if (isNaN(a3) == true) {
            var a3 = 0;
        }
        if (isNaN(a4) == true) {
            var a4 = 0;
        }
        if (isNaN(a5) == true) {
            var a5 = 0;
        }
        if (isNaN(a6) == true) {
            var a6 = 0;
        }
        let totaltime = a1+a2+a3+a4+a5+a6;
        
        let schedule = [];
        let bf = parseInt(BreakFrequency.value)
        let intervals = totaltime/ bf;
        let timeperinterval = totaltime/intervals;
        let Act1Extra = a1%timeperinterval;
        let Act1Interval = a1 - Act1Extra;
        let Act1WholeIntervals = Act1Interval/timeperinterval;
        let i = 1;
        while (i <= Act1WholeIntervals) {
            schedule.push(timeperinterval);
            schedule.push(Break);
            i += 1;
        };
        if(Act1Extra != 0) {
            schedule.push(Act1Extra);
            schedule.push(Break);
        };
        
        let Act2Extra = a2%timeperinterval;
        let Act2Interval = a2 - Act2Extra;
        let Act2WholeIntervals = Act2Interval/timeperinterval;
        i = 1;
        while (i <= Act2WholeIntervals) {
            schedule.push(timeperinterval);
            schedule.push(Break);
            i += 1;
        };
        if(Act2Extra != 0) {
            schedule.push(Act2Extra);
            schedule.push(Break);
        };
        
        let Act3Extra = a3%timeperinterval;
        let Act3Interval = a3 - Act3Extra;
        let Act3WholeIntervals = Act3Interval/timeperinterval;
        i = 1;
        while (i <= Act3WholeIntervals) {
            schedule.push(timeperinterval);
            schedule.push(Break);
            i += 1;
        };
        if(Act3Extra != 0) {
            schedule.push(Act3Extra);
            schedule.push(Break);
        };
        
        let Act4Extra = a4%timeperinterval;
        let Act4Interval = a4 - Act4Extra;
        let Act4WholeIntervals = Act4Interval/timeperinterval;
        i = 1;
        while (i <= Act4WholeIntervals) {
            schedule.push(timeperinterval);
            schedule.push(Break);
            i += 1;
        };
        if (Act4Extra != 0) {
            schedule.push(Act4Extra);
            schedule.push(Break);
        };   
        
        let Act5Extra = a5%timeperinterval;
        let Act5Interval = a5 - Act5Extra;
        let Act5WholeIntervals = Act5Interval/timeperinterval;
        i = 1;
        while (i <= Act5WholeIntervals) {
            schedule.push(timeperinterval);
            schedule.push(Break);
            i += 1;
        };
        if (Act5Extra != 0) {
            schedule.push(Act5Extra);
            schedule.push(Break);
        };
        
        let Act6Extra = a6%timeperinterval;
        let Act6Interval = a6 - Act6Extra;
        let Act6WholeIntervals = Act6Interval/timeperinterval;
        i = 1;
        while (i <= Act6WholeIntervals) {
            schedule.push(timeperinterval);
            schedule.push(Break);
            i += 1;
        };
        if (Act6Extra != 0) {
            schedule.push(Act6Extra);
            schedule.push(Break);
        };
        console.log(schedule);
    };
}
document.addEventListener("DOMContentLoaded", ready);