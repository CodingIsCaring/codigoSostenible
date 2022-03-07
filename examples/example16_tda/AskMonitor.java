AskMonitor am = new AskMonitor("Time Vortex Hocus", 2, alarm);

//Execution
am.setValue(3);
if (am.getValue() > am.getLimit()) {
    am.getAlarm().warn(am.getName() + " too high");
}
