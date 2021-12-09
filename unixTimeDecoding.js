// 10380900000

function timeLeft(ux_milliseconds){

    let ms_remaining = ux_milliseconds;

    let unidays = Math.floor(ms_remaining/86400000); //24*60*60*1000 = 86400000 ms / day
        ms_remaining = ms_remaining-unidays*86400000;
    let unihours = Math.floor(ms_remaining/3600000); //60*60*1000 = 3600000 ms / hour
        if (unihours<10)
            unihours = '0' + unihours;
        ms_remaining = ms_remaining-unihours*3600000;
    let uniminutes = Math.floor(ms_remaining/60000);
        if (uniminutes<10)
            uniminutes = '0' + uniminutes;
        ms_remaining = ms_remaining-uniminutes*60000;
    let uniseconds = Math.floor(ms_remaining/1000);
        if (uniseconds<10)
        uniseconds = '0' + uniseconds;
    //console.log(unidays + " dni " + unihours + " g." + uniminutes + " m. " + uniseconds + " s.");
    return unidays + " | " + unihours + ":" + uniminutes + ":" + uniseconds;
}