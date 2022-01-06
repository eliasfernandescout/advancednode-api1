data:
    implementação de interfaces relacionadas a ações no banco de dados (adicionar, remover, etc)

domain:
    implementação de interfaces das regras de negócio, definição dos modelos de entrada de dados ao banco de dados

infra:
    implementação de repositórios (ex: mongo-repositories)
    implementação de adaptadores utilizados por esses repositórios (bcrypt)

presentation:
    controllers
    errors, helpers, protocolos, utilitários relacionados a esses controllers

main:
    servidor propriamente dito
    configurações do servidor
    decoradores (das funcionalidades do servidor, caso necessários)
    factories (instâncias dos controladores)
    middlewares
    rotas
