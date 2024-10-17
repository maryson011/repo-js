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
[] - Escalar é preciso...
[] - 12 Factors
    - The Twelve-Factor App
[] - Sobreescrevendo localmente