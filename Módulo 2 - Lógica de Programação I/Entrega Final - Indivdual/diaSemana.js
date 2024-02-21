export function obterDiaSemana(data){
    const daysOfWeek = [
        'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
      ];
      const dayOfWeek = daysOfWeek[data.getDay()];
      return dayOfWeek
}