 export function obterDiaSemana(date){
    const daysOfWeek = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
    ];
    const dayOfWeek = daysOfWeek[date];
    return dayOfWeek
    }


 console.log(obterDiaSemana())