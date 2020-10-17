const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async function(db) {

    // inserir dados na tabela
    /*await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends

        ) VALUES (
            "-23.614053",
            "-47.0167853",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 8h até 18h",
            "0"
        );
    `);*/


    // await saveOrphanage(db, {
        
    //     lat: "-23.614053",
    //     lng: "-47.0167853",
    //     name: "Lar dos meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "979533-068415",
    //     images:[

    //         "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

    //         "https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

    //         "https://images.unsplash.com/photo-1555791019-72d3af01da82?ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 8h até 18h",
    //     open_on_weekends: "0"
    // });

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM  orphanages");
    console.log(selectedOrphanages);


    // consultar somente 1 dado pelo ID
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3" ');
    // console.log(orphanage);


    // Deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id = '3' ");

    // Começar aula em 57:00

});