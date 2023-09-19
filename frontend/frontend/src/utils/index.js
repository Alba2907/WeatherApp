
export const firstUpperCase = (str) => {
    if(!str) return ''

    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const kInC = (num) => {
    return Math.round(num - 273.15)
}

export const hPaInMmHg = (num) => {
    return Math.round(num * 0.750062)
}

export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', {timeZone: 'Atlantic/Reykjavik'})
    //, {timeZone:'Atlantic/Reykjavik'}
}


