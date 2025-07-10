const prompt = require('prompt-sync')(); // Importa a biblioteca para ler entradas do teclado

let alunos = []; // Lista de alunos (cada um será um objeto com nome e curso)
let cursos = []; // Lista de cursos disponíveis

let opcao; // Variável para armazenar a opção do menu

let senha = prompt('digite a senha');
if (senha = 'senai123'){
    console.log('senha correta');


do {
    // Exibe o menu de opções
    opcao = prompt(
        'Sistema Escolar\n\n' +
        '1 - Cadastrar aluno\n' +
        '2 - Excluir aluno\n' +
        '3 - Cadastrar curso\n' +
        '4 - Excluir curso\n' +
        '5 - Visualizar Informações\n' +
        '6 - Matricular Aluno em Curso\n' +
        '7 - Sair\n\n' +
        'Escolha uma opção:\n'
    );

    switch (opcao) {
        case '1': {
            // Cadastrar aluno
            let nomeAluno = prompt('Digite o nome do aluno: ');
            if (nomeAluno && nomeAluno.trim() !== '') {
                alunos.push({ nome: nomeAluno.trim(), curso: null });
                console.log("Aluno cadastrado com sucesso!");
            } else {
                console.log("Nome inválido.");
            }
            break;
        }

        case '2': {
            // Excluir aluno
            let nomeExcluir = prompt('Digite o nome do aluno a excluir: ');
            let index = alunos.findIndex(aluno => aluno.nome === nomeExcluir);
            if (index !== -1) {
                alunos.splice(index, 1);
                console.log("Aluno excluído com sucesso!");
            } else {
                console.log("Aluno não encontrado.");
            }
            break;
        }

        case '3': {
            // Cadastrar curso
            let nomeCurso = prompt('Digite o nome do curso: ');
            if (nomeCurso && nomeCurso.trim() !== '') {
                cursos.push(nomeCurso.trim());
                console.log("Curso cadastrado com sucesso!");
            } else {
                console.log("Nome inválido.");
            }
            break;
        }

        case '4': {
            // Excluir curso
            let nomeExcluir = prompt('Digite o nome do curso a excluir: ');
            let index = cursos.indexOf(nomeExcluir);
            if (index !== -1) {
                cursos.splice(index, 1);
                // Remove o curso dos alunos matriculados nesse curso
                for (let i = 0; i < alunos.length; i++) {
                    if (alunos[i].curso === nomeExcluir) {
                        alunos[i].curso = null;
                    }
                }
                console.log("Curso excluído com sucesso!");
            } else {
                console.log("Curso não encontrado.");
            }
            break;
        }

        case '5': {
            // Visualizar informações
            let info = '\nAlunos Cadastrados:\n';
            if (alunos.length > 0) {
                for (let i = 0; i < alunos.length; i++) {
                    let aluno = alunos[i];
                    let cursoInfo = aluno.curso ? aluno.curso : 'Sem curso';
                    info += `- ${aluno.nome} (${cursoInfo})\n`; // Aqui a correção solicitada
                }
            } else {
                info += 'Nenhum aluno cadastrado.\n';
            }

            info += '\nCursos Cadastrados:\n';
            if (cursos.length > 0) {
                for (let i = 0; i < cursos.length; i++) {
                    info += `- ${cursos[i]}\n`;
                }
            } else {
                info += 'Nenhum curso cadastrado.\n';
            }

            console.log(info);
            break;
        }

        case '6': {
            // Matricular aluno em curso
            let nomeAluno = prompt('Digite o nome do aluno: ');
            let aluno = alunos.find(a => a.nome === nomeAluno);

            if (!aluno) {
                console.log("Aluno não encontrado.");
                break;
            }

            if (cursos.length === 0) {
                console.log("Nenhum curso disponível.");
                break;
            }

            console.log("\nCursos disponíveis:");
            for (let i = 0; i < cursos.length; i++) {
                console.log(`${i + 1} - ${cursos[i]}`);
            }

            let numCurso = parseInt(prompt('Digite o número do curso desejado: '));

            if (numCurso >= 1 && numCurso <= cursos.length) {
                aluno.curso = cursos[numCurso - 1];
                console.log("Aluno matriculado com sucesso!");
            } else {
                console.log("Número do curso inválido.");
            }
            break;
        }

        case '7':
            // Sair do sistema
            console.log("Saindo do sistema...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }

} while (opcao !== '7')
} else {
    console.log('Senha incorreta'); }

