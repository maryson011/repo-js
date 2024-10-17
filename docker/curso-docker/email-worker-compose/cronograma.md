[OK] - Iniciando a composição com o banco de dados
    - docker compose down --volumes
    - docker compose up --build -d
    - docker compose ps
    - docker compose exec db psql -U user -c '\l'
    - docker compose down
[OK] - Usando volumes e scripts de banco de dados
    - docker compose up --build -d
    - docker logs email-worker-compose-db-1
    - docker compose ps
    - docker compose exec db psql -U user -f /scripts/check.sql
[OK] - Começando nossa camada de front-end
    - docker compose ps
    - docker compose down --volumes
    - docker compose up --build -d
    - docker logs email-worker-compose-db-1
[OK] - Aplicação para enfileirar as mensagens
[OK] - Configurando um proxy reverso
[OK] - Redes, dependências e banco de dados
    - docker logs email-worker-compose-app-1
    - docker compose exec db psql -U user -d email_sender -c 'select * from emails'
[OK] - Fila e workes
    - docker compose logs -f -t
[OK] - Escalar é preciso...
    - docker compose up --build -d --scale worker=3
    - docker compose logs -f -t worker
[OK] - 12 Factors
    - The Twelve-Factor App
    - só adicinar as variaveis de ambiente e sobistituir os valores fixos (docker-compose -> enviroment)
[OK] - Sobreescrevendo localmente
    - docker-compose.override.yml:
        version: '3'
        services:
            app:
                environment:
                    - DB_NAME=email_sender