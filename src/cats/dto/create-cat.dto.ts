    export class CreateCatDto {
       /** 
           `O nome será utilizado para identificar os gatos.`
            @example Salem
            */
        name: string;
    
            /** 
            `A raça que identifica os gatos.`
            @example: Viralata
             */
        raca: string;
    
            /** 
             `A idade que identifica os gatos.`
              @example: 5
             */
        idade: string;
    
        /** 
            `Segurança para abrir aplicação.`
            @example: 123abc
         
            */
          password?: string;
    
    }
