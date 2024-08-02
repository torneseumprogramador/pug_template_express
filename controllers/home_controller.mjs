const HomeController = {
    index: (req, res, next) => {
        const lista = [ 
            {
              titulo: "Um desafio feito com os alunos usando o pug",
              mostrarBotao: true
            },
            {
              titulo: "Item 2 no titulo",
              mostrarBotao: false
            },
        ]
        res.render('home/index', { title: 'Estudando template pug', lista: lista });
    },
    sobre: (req, res, next) => {
        res.render('home/sobre', { title: 'Estudando template pug' });
    },
}

export default HomeController;