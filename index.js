// Crear una lista de contactos con objetos predefinidos
let contactos = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Perez",
    telefono: "123-456-7890",
    ubicaciones: [
      {
        ciudad: "Ciudad A",
        direccion: "Calle 123",
      },
      {
        ciudad: "Ciudad B",
        direccion: "Avenida XYZ",
      },
    ],
  },
  {
    id: 2,
    nombres: "María",
    apellidos: "García",
    telefono: "987-654-3210",
    ubicaciones: [
      {
        ciudad: "Ciudad C",
        direccion: "Avenida 456",
      },
    ],
  },
  {
    id: 3,
    nombres: "Carlos",
    apellidos: "López",
    telefono: "555-123-4567",
    ubicaciones: [],
  },
];

// Función para agregar un nuevo contacto a la lista
function agregarContacto(contacto) {
  contactos.push(contacto);
}

// Función para borrar un contacto existente de la lista por ID
function borrarContacto(id) {
  const index = contactos.findIndex((contacto) => contacto.id === id);
  if (index !== -1) {
    contactos.splice(index, 1);
    console.log(`El contacto con ID ${id} ha sido eliminado.`);
  } else {
    console.log("No se encontró ningún contacto con ese ID.");
  }
}

// Función para imprimir en la consola la lista de contactos
function imprimirContactos() {
  console.log("Lista de Contactos:");
  contactos.forEach((contacto) => {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombres: ${contacto.nombres}`);
    console.log(`Apellidos: ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log("Ubicaciones:");
    contacto.ubicaciones.forEach((ubicacion) => {
      console.log(`  Ciudad: ${ubicacion.ciudad}`);
      console.log(`  Dirección: ${ubicacion.direccion}`);
    });
    console.log("----------------------");
  });
}

// Ejemplo de uso de las funciones
const nuevoContacto = {
  id: 4,
  nombres: "Ana",
  apellidos: "Martínez",
  telefono: "777-888-9999",
  ubicaciones: [
    {
      ciudad: "Ciudad D",
      direccion: "Avenida ZZZ",
    },
  ],
};

agregarContacto(nuevoContacto);
borrarContacto(2);
imprimirContactos();
