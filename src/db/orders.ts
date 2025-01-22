import wood from '../assets/wood.png';
import stone from '../assets/stone.png';
import clay from '../assets/clay.png';
import metal from '../assets/metal.png';
import glass from '../assets/glass.png';
import sand from '../assets/sand.png';
import water from '../assets/water.png';
import roofing from '../assets/roofing.png';
import paint from '../assets/paint.png';
import pipes from '../assets/pipes.png';
import wires from '../assets/wires.png';

export default [
    {
        "id": 1,
        "name": "Small House",
        "materials_needed": [
            {"name": "Wood", "amount": 5, "icon": wood},
            {"name": "Stone", "amount": 10, "icon": stone},
            {"name": "Clay", "amount": 3, "icon": clay}
        ],
        "time_to_complete": 0.2,
        "payment": 75,
        "description": "A cozy starter home for new residents, providing basic shelter and comfort."
    },
    {
        "id": 2,
        "name": "Community School",
        "materials_needed": [
            {"name": "Wood", "amount": 8, "icon": wood},
            {"name": "Stone", "amount": 15, "icon": stone},
            {"name": "Metal", "amount": 5, "icon": metal},
            {"name": "Roofing", "amount": 3, "icon": roofing}
        ],
        "time_to_complete": 4,
        "payment": 150,
        "description": "A modern educational facility to support learning and community development."
    },
    {
        "id": 3,
        "name": "Water Plant",
        "materials_needed": [
            {"name": "Metal", "amount": 10, "icon": metal},
            {"name": "Pipes", "amount": 5, "icon": pipes},
            {"name": "Wires", "amount": 4, "icon": wires},
            {"name": "Glass", "amount": 3, "icon": glass}
        ],
        "time_to_complete": 6,
        "payment": 250,
        "description": "A critical infrastructure project to ensure clean water supply for the community."
    },
    {
        "id": 4,
        "name": "Art Gallery",
        "materials_needed": [
            {"name": "Wood", "amount": 6, "icon": wood},
            {"name": "Glass", "amount": 4, "icon": glass},
            {"name": "Paint", "amount": 3, "icon": paint},
            {"name": "Sand", "amount": 2, "icon": sand}
        ],
        "time_to_complete": 3,
        "payment": 120,
        "description": "A cultural hub to showcase local art and foster creativity in the community."
    },
    {
        "id": 5,
        "name": "Electrical Substation",
        "materials_needed": [
            {"name": "Metal", "amount": 8, "icon": metal},
            {"name": "Wires", "amount": 6, "icon": wires},
            {"name": "Stone", "amount": 5, "icon": stone}
        ],
        "time_to_complete": 5,
        "payment": 200,
        "description": "A key electrical infrastructure to provide reliable power distribution."
    },
    {
        "id": 6,
        "name": "Swimming Pool",
        "materials_needed": [
            {"name": "Wood", "amount": 6, "icon": wood},
            {"name": "Glass", "amount": 4, "icon": glass},
            {"name": "Paint", "amount": 3, "icon": paint},
            {"name": "Sand", "amount": 2, "icon": sand}
        ],
        "time_to_complete": 3,
        "payment": 120,
        "description": "A recreational facility to promote fitness and provide a cool retreat for residents."
    }    
];