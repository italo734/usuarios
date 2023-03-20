

let nomes = [
    {
        nome: 'fernando03@gmail.com',
        senha: 'fernando1'
    },
    {
        nome: 'magno09@gmail.com',
        senha: 'magno1'
    },
    {
        nome: 'ferdinando02@gmail.com',
        senha: '123'
    },
    {
        nome: 'fernanda03@gmail.com',
        senha: '456'
    },

    {
        nome: 'agnaldo12@gmail.com',
        senha: '789'
    },
    {
        nome: 'biaggi056@gmail.com',
        senha: '101112'
    },
    {
        nome: 'italo23@gmail.com',
        senha: '246'
    },
    {
        nome: 'rocket10@gmail.com',
        senha: '824'
    },
    {
        nome: 'lucas16@gmail.com',
        senha: '461'
    },
    {
        nome: 'hilorena17@gmail.com',
        senha: '135'
    },
    {
        nome: 'mateusrl09@gmail.com',
        senha: '100'
    },
    {
        nome: 'luiza04@gmail.com',
        senha: '901'
    },
    {
        nome: 'pedrao08@gmail.com',
        senha: '220'
    },
    {
        nome: 'carla98@gmail.com',
        senha: '234'
    },
    {
        nome: 'dudu10@gmail.com',
        senha: 'titulo'
    },          

    {
        nome: 'bia',
        senha: '123'
    },
]

let usuarioLogado = localStorage.getItem("usuarioLogado")
if (usuarioLogado != undefined) {
    window.addEventListener('beforeunload', function (e) {
        localStorage.removeItem('usuarioLogado')
    })

    let ola = document.querySelector("p#ola")
    ola.innerHTML += `${usuarioLogado}`

    function mostrar() {
        const mostrar = document.querySelector('div.mostrar1')
        mostrar.innerHTML = "";
        for (let i = 0; i < nomes.length; i++) {
            mostrar.innerHTML += `<li>${nomes[i].nome}</li>`;
        }
    }

    function limpar() {
        const nomes = document.querySelector('div.mostrar1')
        nomes.innerHTML = "";
    }

    // function listarusuarios0() {
    //     const listOfUsers = document.querySelector("section.listOfUsers");
    //     // const users = user
    //     listOfUsers.innerHTML = "";
    //     for (let index = 0; i < nomes.length; i++) {
    //         listOfUsers.innerHTML += `<li>${nomes[index].nome}</li>`;
    //     }
    // }

    function deletarusuario1() {
        const lista = document.querySelector('div.mostrar1');
        lista.innerHTML = "";

        lista.innerHTML += "Deletar usuario <br><br>"
        for (let index = 0; index < nomes.length; index++) {

            lista.innerHTML += `<div><input type="checkbox" id="${index}" value="${nomes[index].nome}"><label for="nomes${index}"> ${nomes[index].nome}</label></div>`

        }

        lista.innerHTML += `<input type="button" value="DELETAR" id="deletarusuarios2">`

        //funçao e evento para deletar os escolidos
        const inputdeletar2 = document.querySelector("#deletarusuarios2");
        inputdeletar2.addEventListener("click", deletarusuarios2)

    }
    function deletarusuarios2() {
        let userdeletado = [""]

        for (let index = 0; index < nomes.length; index++) {
            let checkbox = document.getElementById(`${index}`);
            if (checkbox.checked == true) {
                userdeletado[index] = 1
            } else {
                userdeletado[index] = 0
            }

        }

        for (let index = userdeletado.length - 1; index >= 0; index--) {

            if (userdeletado[index] == 1) {
                nomes.splice(index, 1);
            }
        }

        mostrar();
    }
    function criarusuario1() {
        limpar()
        let pagina2 = document.querySelector('div.mostrar1')
        pagina2.innerHTML = `<p> Nome: </p><input type="text" id="emailcriar">
    
        <p>Senha: </p><input type="password" id="senhacriar">
    
        <input type="button" value="Cadastrar" id="botaocadastrar">
        
        <div class="mostrar1"></div>`
        let botaocadastrar = document.querySelector('#botaocadastrar')
        botaocadastrar.addEventListener("click", criaruser2)

    }


    function criaruser2() {

        let usernovo = {
            nome: document.querySelector('#emailcriar').value,
            senha: document.querySelector('#senhacriar').value

        }
        // let emailnovo= document.querySelector('#emailcriar').value
        // let senhanova= document.querySelector('#senhacriar').value
        let pagina2 = document.querySelector('#div.mostrar1')
        let repetida = 0
        for (let index = 0; index < nomes.length; index++) {
            if (usernovo.nome == nomes[index].nome) {
                index = nomes.length
                repetida = 1
            }
        }

        if (repetida == 1) {
            alert("Usuario ja existente")
            criarusuario1()
        }
        else {
            nomes.push(usernovo)
            alert("Usuário cadastrado com sucesso")
            mostrar()
        }
    }

    function atualizarusuario1() {
        let mostrar1 = document.querySelector('div.mostrar1');
        mostrar1.innerHTML = "";
        mostrar1.innerHTML += " <br><br>"
        mostrar1.innerHTML += `<form>
    <label for= "inputuser">Nome usuário:</label> <br>
            <input type= "text" class="inputuser"> <br>
            <label for="inputsenha">Digite a senha atual:</label> <br>
            <input type="password"  class="inputsenha"> <br>
            <label for="inputuser1">Novo usuário:</label> <br>
            <input type="text" class="inputuser1"> <br>
            <label for="inputsenha1">Nova Senha</label> <br>
            <input type="password" class="inputsenha1"> <br>
            <label for="inputsenha2">Confirma senha:</label><br>
            <input type="password" class="inputsenha2"> <br>
            <input type="button" value="trocar" id="trocarsenha"><br>
    
        </form>`

        let inputtrocarsenha1 = document.querySelector("#trocarsenha");
        inputtrocarsenha1.addEventListener("click", atualizarusuario2)

    }

    function atualizarusuario2() {
        let nome = document.querySelector('input.inputuser').value;
        let nome1 = document.querySelector('input.inputuser1').value;
        let senha = document.querySelector('input.inputsenha').value;
        let senha1 = document.querySelector('input.inputsenha1').value;
        let senha2 = document.querySelector('input.inputsenha2').value;
        let errosenha = 1
        let errousuario = 0
        let indice = 0
        let repetida = 0

        for (let index = 0; index < nomes.lenght; index++) {
            if (nomes[index].nome == nome1) {
                if (nomes[index].nome != nome) {
                    errousuario = 1

                }
            }
        }




        for (let index = 0; index < nomes.lenght; index++) {
            if (nomes[index].nome == nome1) {
                if (nomes[index].nome == nome) {
                    repetida = 1
                }

            }
        }
        if (repetida == 0) {
            for (let index = 0; index < nomes.length; index++) {
                if (nomes[index].nome == nome) {
                    repetida = 0
                    if ((nomes[index].senha == senha) && (senha1 == senha2)) {
                        errosenha = 0
                        indice = index
                        index = nomes.length
                    }
                }
            }
        }
        if (repetida == 0) {
            if (errosenha == 0) {
                let mostrar1 = document.querySelector('div.mostrar1');
                mostrar1.innerHTML = "";
                nomes[indice].nome = nome1
                nomes[indice].senha = senha1
                alert("Dados atualizados com sucesso")
                mostrar()
            } else {
                alert("Login incorreto, favor verificar os dados, senha incorreta")
                atualizarusuario1()
            }

        } else {
            alert("Login incorreto, favor verificar os dados, usuário incorreto")
            atualizarusuario1()
        }

    }
    function testarusersenha1() {
        let mostrar1 = document.querySelector('div.mostrar1');
        mostrar1.innerHTML = "";
        mostrar1.innerHTML += "Teste usuário <br><br>"
        mostrar1.innerHTML += `<form>
                            <label for="inputuser">Nome usuário:</label><br>
                            <input type="text" class="inputuser"> <br>
                            <label for="inputsenha">Digite a senha:</label><br>
                            <input type="password" class="inputsenha><br>"
                            <input type= "button" value="Logar" class="botao" id="testarusersenha">
                            </form>`

        const inputtestar2 = document.querySelector("#testarusersenha2");
        inputtestar2.addEventListener("click", testarusersenha2)
    }
    function testarusersenha2() {
        let dados = {
            nome: document.querySelector('input.inputuser').value,
            senha: document.querySelector('input.inputsenha').value

        }
        let erro = 1
        for (let index = 0; index < nomes.length; index++) {
            if (nomes[index].nome == dados.nome && nomes[index].senha == dados.senha) {
                erro = 0
                index = nomes.length
            }
        }

        if (erro == 0) {

            alert("Login realizado com sucesso!")
            testarusersenha1()
        } else {
            alert("Login incorreto, favor verificar os dados, usuario ou senha incorretos")
            testarusersenha2()
        }
    }
    function teste() {

        let mostrar1 = document.querySelector('div.mostrar1');
        mostrar1.innerHTML = "";
        mostrar1.innerHTML += "  <br><br>"
        mostrar1.innerHTML += `<form>
    <label for= "inputuser">Nome usuário:</label> <br>
            <input type= "text" class="user"> <br>
            <label for="inputsenha">Digite a senha atual:</label> <br>
            <input type="password"  class="login"> <br>
           <input type="button" value=testar" class="botao" id="trocarsenha"><br>
    
        </form>`

        let teste = document.querySelector("#trocarsenha");
        teste.addEventListener("click", teste1)
    }
    function teste1() {
        
        let nome1 = document.querySelector('input.user').value;
        let senha = document.querySelector('input.login').value;
      
        let controleusuario = 0

        for (let index = 0; index < nomes.length; index++) {

            if (nomes[index].nome == nome1 && nomes[index].senha == senha) {
                alert("Login válido ")

                controleusuario = 1
                index = nomes.length



            }
        }

        if (controleusuario == 0) {
            alert("senha ou usuario incorreta ")
        }


    }




} else {
    function vetor() {

        let user = (document.querySelector("input#nome").value)
        const senha = (document.querySelector("input#idade").value)
        let controleusuario = 0
        var captar = "";

        for (let index = 0; index < nomes.length; index++) {

            if (nomes[index].nome == user && nomes[index].senha == senha) {
                alert("Login válido ")
                localStorage.setItem("usuarioLogado", nomes[index].nome)
                window.location.assign("./pagina2.html")

                // link.innerHTML = `<p>Voce será multado</p>`
                controleusuario = 1
                index = nomes.length



            }
        }

        if (controleusuario == 0) {
            alert("senha ou usuario incorreta ")
        }


    }


}

