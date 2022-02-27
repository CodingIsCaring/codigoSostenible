function getInsuranceAmount(status) {
    let amount;
    if (!status.hasInsurance()){
        amount = 1;
    } else {
        if (status.isTotaled()){
            amount = 10000;
        } else {
            if (status.isDented()){
                amount = 160;
                if (status.isBigDent()){
                    amount = 270;
                }
            } else {
                amount = 0
            }
        }
    }
    return amount;
}