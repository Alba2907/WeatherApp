
export const firstUpperCase = (str) => {
    if(!str) return ''

    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const kInC = (num) => {
    return Math.round(num - 273.15)
}