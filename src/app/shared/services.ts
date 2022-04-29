import { Service } from "./service";

export const SERVICES: Service[] = [
    {
        id: '0',
        name: 'Formateo',
        image: '/assets/images/raSolutionservicio1.webp',
        featured: true, 
        price: '450',
        description: 'Formateo completo del disco duro, re-instalación del sistema operativo, instalación de paquetería de Office (Word, PowerPoint, Excel), Antivirus gratuito'
    },
    {
        id: '1',
        name: 'Optimización',
        image: '/assets/images/soporteRA1.png',
        featured: false, 
        price: '300',
        description: 'Limpieza general de Windows, soporte personalizado, optimización, Antivirus gratuito, más tres consultorías gratuitas'
    },
    {
        id: '2',
        name: 'Soporte Remoto',
        image: '/assets/images/raSolutionService3.png',
        featured: false, 
        price: '350',
        description: 'Paquete de optimización aplicado de manera remota vía TeamViewr/AnyDesk'
    }

]

    