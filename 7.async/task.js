class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time.length === 0 || typeof (callback) !== "function") {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        if (this.alarmCollection.findIndex(arr => arr.time === time) !== -1) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(arr => arr.time !== time)
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(arr => {
                if (arr.time === this.getCurrentFormattedTime() && arr.canCall === true) {
                    arr.canCall = false;
                    arr.callback();
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(arr => arr.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}