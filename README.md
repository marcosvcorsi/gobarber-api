# Recuperação de Senha

**RF**

- O usuário deve poder recuperar sua senha, informando o seu e-mail;
- O usuário deve receber um e-amil com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envio em ambiente de desenvolvimento;
- Utilizar Amazon SES para envio em produção;
- O envio de e-mail deve acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve experiar em 2h;
- O usuário precisa confirma a nova senha;

# Atualizar Perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já existente;
- Para atualizar sua senha, o usuário deve informa a senha antiga;
- Para atualizar sua senha, o usuário precisa confirma a nova senha;

# Painel de Prestador

**RF**

- O usuário deve poder listar seus agendamento de um dia especifico.
- O prestador deve receber uma notificação, sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real em Socket.io

**RN**

- A notificação deve ter um statis de lida ou não lida

# Agendamento de Serviçoes

**RF**

- O usuário deve poder listar todos prestadores de serviços cadastrados
- O usuário deve poder listar os dias com pelo menos horário disponivel de um prestador.
- O usuário deve poder listar os horários disponivels de um dia especifico de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador.

**RNF**

- A listagem de prestador deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamento devem estar disponivels entre 8h as 18h (primeiro as 8h, ultimo as 17h);
- O usuário não pode angedar em um horário já ocupado;
- O usuário não pode angedar em um horario que já passou;
- O usuário não pode
