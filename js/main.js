function bienvenida()
{
    alert("Bienvenido a Bread & Coffee");
    bienvenida=parseInt(prompt("1-Menú"));
    if(bienvenida==1)
    {
        menu();  
    }
}

function menu()
{
    menu=parseInt(prompt("A continuacion podrá elegir opciones:"+"\n\nMENÚ:"+"\n 1-Skinny Vainilla Latte"+
    "\n 2-Vainilla Latte"+"\n 3-Latte"+"\n 4-Dulce de Leche Latte"));
}

function comprar()
{
    switch(menu)
    {
        case 1:
            comprar=parseInt(prompt("\n Elegiste: Skinny Vainilla Late"
            +"\n \n Café espresso con leche descremada al vapor y toques de vainilla sin azúcar."+ "\n\n Valor: $500"+
            "\n\n1-Terminar compra"+"\n2-Cancelar operación"));
            break;
            
        case 2:
            comprar=parseInt(prompt("\n Elegiste: Vainilla Latte"
            +"\n \n Café espresso con leche al vapor y toques de vainilla."+ "\n\nValor: $600" +
            "\n\n1-Terminar compra"+"\n2-Cancelar operación"));
            break;
            
        case 3:
            comprar=parseInt(prompt("\n Elegiste: Latte"
            +"\n \n Café espresso con leche vaporizada."+ "\n\nValor: $700" +
            "\n\n1-Terminar compra"+"\n2-Cancelar operación"));
            break;

        case 4:
            comprar=parseInt(prompt("\n Elegiste: Dulce de Leche Latte"
            +"\n \n Café espresso con dulce de leche, leche al vapor con crema batida y salsa de caramelo."+
            "\n\n Valor: $800"+
            "\n\n1-Terminar compra"+"\n2-Cancelar operación"));
            break;

        default:
            alert("\n No seleccionaste ningun item");

    }
}

function terminarcompra()
{
    if(comprar==1)
    {
        terminarcompra=parseInt(prompt("\n MÉTODOS DE PAGO:"+"\n 1-Efectivo"+"\n 2-Tarjeta de Crédito (10% de recargo)"+"\n 3-Tarjeta de Débito (5% de descuento)"))
    }

    else if(comprar==2)
    {
        alert("Operacion Cancelada");
    }
}

function metodopagoefectivo()
{
    if(terminarcompra==1)
    {
        alert("\n Abone por caja");
        alert("\n ¡Gracias por su compra!");
    }
}

function metodopagocreydeb()
{
    let pcafe1=500,pcafe2=600,pcafe3=700,pcafe4=800, interes=10, descuento=5, total=0;
    if(terminarcompra==2)
    {
        switch(menu)
        {
            case 1:
                    total=(pcafe1*interes/100);
                    alert("\n Usted pagará con credito con un 10% de RECARGO"+"\n El total a pagar es:"+(total+pcafe1));
                    alert("\n ¡Gracias por su compra!");
                    break;
            case 2:
                    total=(pcafe2*interes/100);
                    alert("\n Usted pagará con credito con un 10% de RECARGO"+"\n El total a pagar es:"+(total+pcafe2));
                    alert("\n ¡Gracias por su compra!");
                    break;
            case 3:
                    total=(pcafe3*interes/100);
                    alert("\n Usted pagará con credito con un 10% de RECARGO"+"\n El total a pagar es:"+(total+pcafe3));
                    alert("\n ¡Gracias por su compra!");
                    break;
            case 4:
                    total=(pcafe4*interes/100);
                    alert("\n Usted pagará con credito con un 10% de RECARGO"+"\n El total a pagar es:"+(total+pcafe4));
                    alert("\n ¡Gracias por su compra!");
                    break;
        }
    }

    if(terminarcompra==3)
        {
        switch(menu)
            {
                case 1:
                        total=(pcafe1*descuento/100);
                        alert("\n Usted pagará con  débito con un 5% de DESCUENTO"+"\n El total a pagar es:"+(pcafe1-total));
                        alert("\n ¡Gracias por su compra!");
                        break;
                case 2:
                        total=(pcafe2*interes/100);
                        alert("\n Usted pagará con  débito con un 5% de DESCUENTO"+"\n El total a pagar es:"+(pcafe2-total));
                        alert("\n ¡Gracias por su compra!");
                        break;
                case 3:
                        total=(pcafe3*interes/100);
                        alert("\n Usted pagará con débito con un 5% de DESCUENTO"+"\n El total a pagar es:"+(pcafe3-total));
                        alert("\n ¡Gracias por su compra!");
                        break;
                case 4:
                        total=(pcafe4*interes/100);
                        alert("\n Usted pagará con  débito con un 5% de DESCUENTO"+"\n El total a pagar es:"+(pcafe4-total));
                        alert("\n ¡Gracias por su compra!");
                        break;
        }
    }
}


//En el main
    do
    {
        bienvenida();
    }while(bienvenida!=1);
    
    
    comprar();
    terminarcompra();    
    metodopagoefectivo();
    metodopagocreydeb();


