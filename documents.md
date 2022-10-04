<h1>Documetação de acesso ao projeto:
Lista Telefonica com consumo de API.</h1>

Neste projeto está sendo usada a API do Nodejs e inicialmente 
se faz necessário verificar a versão do Nodejs instalada.

#Instalando e verificando versão do Nodejs

Abra o terminal na pasta de trabalho e execute o comando: 
node -v
e também o comando:
npm -v

Se não houver retorno com as versões de cada verificação, 
precisará baixar e instalar o Nodejs no site: https://nodejs.org/

Após instalar, execute o comando:
npm install -g json-server

#Executando o projeto

Abra o terminal na pasta de trabalho e execute o comando:
npx json-server db.json --port 8001

Após a execução, será apresentado o endereço da API. 
Acesse: http://localhost:8001 para acompanhar as alterações 
e abra o arquivo HTML em seu navegador para interagir com o projeto.
