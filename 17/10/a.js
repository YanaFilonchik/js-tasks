//  10. Сделай formatDate(separator)(day)(month)(year), которая собирает дату строкой.

function formatDate(separator){
    return function(day){
        return function(month){
            return function(year){
                return `${day}${separator}${month}${separator}${year}`;
            }
        }
    }
}

console.log(formatDate(`-`)(26)(11)(2025));