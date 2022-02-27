function getInsuranceAmount(status) {
    if (!status.hasInsurance()){
        return 1;
    }
    if (status.isTotaled()){
        return 10000;
    }
    if (!status.isDented()){
        return 0;
    }
    if (status.isBigDent()){
        return 270;
    }
    return 160;
}
