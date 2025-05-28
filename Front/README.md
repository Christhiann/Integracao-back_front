# Projeto Front-end criado para a disciplina de Mineração de Dados - 7P UNDB.

CASO JA TENHA FEITO A INSTALAÇÃO:
no terminal do projeto:
git checkout main
git fetch
git pull origin main

Passos para instalar e rodar localmente:
* Se certificar que tem node.js e git instalados. para tal, pode abrir o painel de controle do computador ou dar o comando git (ou node) num terminal.

1- Fazer o clone do repositório na máquina local:
* Utilizando o GitHub para Desktop: https://docs.github.com/pt/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop

* Utilizando o terminal do computador:
  1- Abra o terminal na pasta que você deseja clonar o repositório
  2- Digite "git clone https://github.com/paulosergiofig/mineracaodedadosfrontend.git"
  3- Navegue até o repositório criado a partir do terminal ou, pelo explorador de arquivos, abra um novo terminal dentro da pasta clonada.

2- Instalar as dependências:
  Estando certificado que se encontra dentro do repositório, digite o seguinte comando no terminal:<br />
  npm install

* Se ocorrer o erro 'ENOENT: no such file or directory (...)\package.json', é provável que você não esteja na pasta correta. certifique-se que está mesmo no repositório.

3- Iniciar:<br />
  Comando no terminal:<br />
  npm run dev
