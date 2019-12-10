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
        console.log(Act1WholeIntervals);
        console.log(Act1Extra);
        let i = 1;
        while (i <= Act1WholeIntervals) {
            schedule.push(timeperinterval);
            schedule.push(Break);
            i += 1;
        };
        schedule.push(Act1Extra);
        schedule.push(Break);
        console.log(schedule);
    };
}
document.addEventListener("DOMContentLoaded", ready);