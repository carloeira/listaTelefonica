<h1>Documetação de acesso ao projeto:</h1>
<h2>Lista Telefonica com consumo de API.</h2>

Neste projeto está sendo usada a API do Nodejs e inicialmente 
se faz necessário verificar a versão do Nodejs instalada.

  <h2>Instalando e verificando versão do Nodejs</h2>

Abra o terminal no VsCode, na pasta de trabalho e execute o comando: 
node -v
e também o comando:
npm -v

Se não houver retorno com as versões de cada verificação, 
precisará baixar e instalar o Nodejs no site: https://nodejs.org/

Após instalar, execute o comando:
npm install -g json-server

  <h2>Executando o projeto</h2>

Abra o terminal na pasta de trabalho e execute o comando:
npx json-server db.json --port 8001

Após a execução, será apresentado o endereço da API. 
Acesse: http://localhost:8001 para acompanhar as alterações 
e abra o arquivo HTML em seu navegador para interagir com o projeto.
