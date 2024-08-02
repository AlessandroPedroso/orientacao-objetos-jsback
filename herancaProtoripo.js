const user = {

    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true, //por padrao

    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: 'Mariana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true, //por padrao

    criarCurso: function () {
        console.log('curso criado')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()