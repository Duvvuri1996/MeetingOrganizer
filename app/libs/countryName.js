const callingCodes = require('C:/Users/HimRamesh/Desktop/edWisor/FinalProject/MeetingOrganizer-Backend/country-json/src/country-by-calling-code')

let countryCallingCode = (country) => {
    for (x of callingCodes){
        if(country === x.country){
            telCode = x.calling_code
            console.log(telCode)
            return telCode
        }
    }
}

module.exports = {
    countryCallingCode : countryCallingCode
}
