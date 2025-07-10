let prompt = require('prompt-sync')();

let alunos = [];
let cursos = [];

let opcao;

do {
    opcao = prompt(
        'Sistema Escolar\n\n' +
        '1 - Cadastrar aluno\n' + 
        '2 - Excluir aluno\n' +
        '3 - Cadastrar curso\n' +
        '4 - Excluir curso\n' +
        '5 - Visualizar Informações\n' +
        '6 - Sair\n\n' +
        'Escolha uma opção: '
    );

    switch(opcao) {
        case '1': {
            let nomeAluno = prompt('Digite o nome do aluno: ');
            if (nomeAluno && nomeAluno.trim() !== '') {
                alunos.push(nomeAluno.trim());
                console.log("Aluno cadastrado com sucesso!");
            } else {
                console.log("Nome inválido.");
            }
            break;
        }

        case '2': {
            let nomeExcluirAluno = prompt('Digite o nome do aluno a excluir: ');
            let indexAluno = alunos.indexOf(nomeExcluirAluno);
            if (indexAluno !== -1) {
                alunos.splice(indexAluno, 1);
                console.log("Aluno excluído com sucesso!");
            } else {
                console.log("Aluno não encontrado.");
            }
            break;
        }

        case '3': {
            let nomeCurso = prompt('Digite o nome do curso: ');
            if (nomeCurso && nomeCurso.trim() !== '') {
                cursos.push(nomeCurso.trim());
                console.log('Curso cadastrado com sucesso!');
            } else {
                console.log('Nome inválido.');
            }
            break;
        }

        case '4': {
            let nomeExcluirCurso = prompt('Digite o nome do curso a ser excluído: ');
            let indexCurso = cursos.indexOf(nomeExcluirCurso);
            if (indexCurso !== -1) {
                cursos.splice(indexCurso, 1);
                console.log('Curso excluído com sucesso!');
            } else {
                console.log('Curso não encontrado.');
            }
            break;
        }

        case '5': {
            let info = '\nAlunos Cadastrados:\n';
            if (alunos.length > 0) {
                   for (let i = 0; i < alunos.length; i++) {
                    info += '- ' + alunos[1] + '\n';
                };
            } else {
                info += 'Nenhum aluno cadastrado.\n';
            }

            info += '\nCursos Cadastrados:\n';
            if (cursos.length > 0) {
                 for (let i = 0; i < cursos.length; i++) {
                    info += '- ' + cursos[1] + '\n';
                };
            } else {
                info += 'Nenhum curso cadastrado.\n';
            }

            console.log(info);
            break;
        }

        case '6':
            console.log('Saindo do sistema...');
            break;

        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }

} while (opcao !== '6');
