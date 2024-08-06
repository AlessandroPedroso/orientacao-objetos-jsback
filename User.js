export default class User {
    #nome
    #email
    #sobrenome
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true) {

        this.#nome = nome
        // this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {

        if (novoNome === "") {

            throw new Error('formato do nome não é válido')

        }

        this.#nome = novoNome

    }


    // set nome(novoNome) {
    //     if (novoNome === "") {
    //         throw new Error('formato do nome não é válido')

    //     }
    //     let [nome, ...sobrenome] = novoNome.split(" ")
    //     this.#nome = nome
    //     this.#sobrenome = sobrenome
    // }

    // //exemplo de metodo privado
    // #montaObjUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    // exibirInfos() {
    //     const objUser = this.#montaObjUser()
    //     return `${objUser.nome}, ${objUser.email}`
    // }

    exibirInfos() {
        if (this.role === "estudante") {
            return `dados estudante: ${this.nome}`
        }

        if (this.role === "admin") {
            return `dados admin: ${this.nome}, ${this.role}`
        }

        if (this.role === "docente") {
            return `dados docente: ${this.nome}, ${this.email}`

        }
    }

    //sem contexto de instância, não é uma pratica usar construtor, usar propriedades fora dos contrutores
    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`
    }
}

// const novoUser = new User('Juliana', 'j@j.com', '2024-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser))
