# 💵 Dólar Monitor - Monitoramento em Tempo Real

Plataforma completa para monitorar cotação do dólar (USD/BRL) com alertas inteligentes via **Email**, **SMS** e interface visual responsiva.

## 🎯 Recursos

✅ **Monitoramento em Tempo Real** - Verifica a cotação a cada 15 minutos  
✅ **Alertas Inteligentes** - Notifica quando varia R$ 0,50  
✅ **Múltiplos Canais** - Email, SMS e Dashboard  
✅ **Histórico Completo** - Gráficos e relatórios  
✅ **Mobile First** - App responsivo + App nativa  
✅ **Backend Robusto** - API Node.js com banco de dados  

## 📱 Plataformas

- **Web** - Dashboard responsivo (Desktop/Tablet/Mobile)
- **Mobile** - App nativa iOS/Android com React Native
- **Backend** - API Node.js com PostgreSQL

## 🚀 Quick Start

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend (Web)
```bash
cd frontend
npm install
npm run dev
```

### Mobile
```bash
cd mobile
npm install
npx react-native start
```

## 📋 Requisitos

- Node.js 16+
- PostgreSQL ou SQLite
- Twilio (SMS)
- SendGrid ou Gmail (Email)
- npm ou yarn

## 📧 Configuração de Notificações

### Email (SendGrid)
```
SENDGRID_API_KEY=sua_chave_aqui
SENDGRID_FROM_EMAIL=seu_email@dominio.com
```

### SMS (Twilio)
```
TWILIO_ACCOUNT_SID=sua_sid_aqui
TWILIO_AUTH_TOKEN=seu_token_aqui
TWILIO_PHONE_NUMBER=+5511999999999
```

## 📊 API Endpoints

- `GET /api/cotacao/atual` - Cotação atual
- `GET /api/cotacao/historico` - Histórico completo
- `GET /api/alertas` - Lista de alertas
- `POST /api/alertas/criar` - Criar novo alerta
- `PUT /api/alertas/:id` - Atualizar alerta
- `DELETE /api/alertas/:id` - Remover alerta

## 📝 Licença

MIT

## 👨‍💻 Autor

@adelmobatista126

---

**Desenvolvido com ❤️ para monitoramento financeiro inteligente**
