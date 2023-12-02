  export class CreateReservaDto {
    private constructor(
      public readonly fechaReserva: Date,
      public readonly horaReserva: string,
      public readonly eventoId: number,
      public readonly duracionReserva: number,
      ) { }
    
      static create(props: { [key: string]: any }): [string?, CreateReservaDto?] {
        const { fechaReserva, horaReserva, eventoId, duracionReserva } = props;
    
        if (!fechaReserva) return ['fechaReserva property is required', undefined];
        if (!horaReserva) return ['horaReserva property is required', undefined];
        if (!eventoId) return ['eventoId property is required', undefined];
        if (!duracionReserva) return ['duracionReserva property is required', undefined];
        const fechaFormateada = `${fechaReserva}:00`;
        return [undefined, new CreateReservaDto(new Date(fechaFormateada), horaReserva, eventoId, duracionReserva) ];
      }
    }

    