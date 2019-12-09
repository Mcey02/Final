function ready() {
    // let MinutesT = HoursA*60 + MinutesA
    Go.onclick = function() {
        let a1 = parseFloat(Act1.value)
        let a2 = parseFloat(Act2.value)
        let a3 = parseFloat(Act3.value)
        let a4 = parseFloat(Act4.value)
        let a5 = parseFloat(Act5.value)
        let a6 = parseFloat(Act6.value)
        let totaltime = a1+a2+a3+a4+a5+a6;
        let schedule = [];
        let bf = parseInt(BreakFrequency.value)
        let intervals = totaltime/ bf;
        console.log(intervals);
        // let timeperinterval = totaltime/intervals;
        // let Act1Extra = Act1%timeperinterval;
        // let Act1PeriodsStep1 = Act1 - Act1Extra;
        // let Act1Periods = Act1PeriodsStep1/timeperinterval;
        // let i = 1;
        // while (i < Act1Periods) {
        //     schedule.push{timeperinterval};
        //     schedule.push{bl};
        //     i += 1;
        // };
        // schedule.push{Act1Extra};
        // schedule.push{bl};
    };
}
document.addEventListener("DOMContentLoaded", ready);