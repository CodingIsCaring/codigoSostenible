class TellMonitor {
    public void setValue(int arg) {
        value = arg;
        if (value > limit) {
            alarm.warn(name + " too high");
        }
    }
}

//Execute
TellMonitor tm = new TellMonitor("Time Vortex Hocus", 2, alarm);
tm.setValue(3);