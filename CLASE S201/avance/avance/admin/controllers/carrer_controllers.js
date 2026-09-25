// admin/controllers/carrer_controllers.js

export function home(req, res) {
    let carrers = [
        {
        "id": 1,
        "name": "Ingeniería de Sistemas"
        },
        {
        "id": 2,
        "name": "Ingeniería Civil"
        },
        {
        "id": 3,
        "name": "Ingeniería Industrial"
        },
        {
        "id": 4,
        "name": "Ingeniería Mecánica"
        },
        {
        "id": 5,
        "name": "Ingeniería Electrónica"
        },
        {
        "id": 6,
        "name": "Arquitectura"
        },
        {
        "id": 7,
        "name": "Administración"
        },
        {
        "id": 8,
        "name": "Contabilidad y Finanzas"
        },
        {
        "id": 9,
        "name": "Economía"
        },
        {
        "id": 10,
        "name": "Derecho"
        },
        {
        "id": 11,
        "name": "Psicología"
        },
        {
        "id": 12,
        "name": "Comunicación"
        },
        {
        "id": 13,
        "name": "Marketing"
        },
        {
        "id": 14,
        "name": "Negocios Internacionales"
        },
        {
        "id": 15,
        "name": "Medicina"
        }
        ];

  return res.render('admin/carrers', {
    title: 'CARRERAS',
    carrers: carrers
  });
}