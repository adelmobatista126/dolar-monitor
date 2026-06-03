const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');

// Carrega variáveis de ambiente
dotenv.config();

// Importa rotas
const cotacaoRoutes = require('./routes/cotacao');
const alertasRoutes = require('./routes/alertas');
const usuariosRoutes = require('./routes/usuarios');
const healthCheck = require('./routes/health');

// Importa serviços
const { iniciarMonitoramento } = require('./services/monitorService');
const { inicializarBancoDados } = require('./database/db');

const app = express();

// Middleware de segurança
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de logging simples
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Inicializa banco de dados
inicializarBancoDados();

// Rotas
app.use('/api/health', healthCheck);
app.use('/api/cotacao', cotacaoRoutes);
app.use('/api/alertas', alertasRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: '💵 Dólar Monitor API',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      health: '/api/health',
      cotacao: '/api/cotacao',
      alertas: '/api/alertas',
      usuarios: '/api/usuarios'
    }
  });
});

// Tratamento de erros 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.path,
    method: req.method
  });
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Erro interno do servidor',
    details: process.env.NODE_ENV === 'development' ? err : undefined
  });
});

const PORT = process.env.PORT || 3000;

// Inicia servidor
const server = app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📡 API pronta para receber requisições\n`);
  
  // Inicia monitoramento de cotações
  iniciarMonitoramento();
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n⏹️  Encerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor encerrado');
    process.exit(0);
  });
});

module.exports = app;
