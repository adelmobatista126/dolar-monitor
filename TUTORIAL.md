# 🎓 Tutorial - Seu Primeiro Alerta

Aprenda como criar e configurar um alerta em 3 passos!

## Passo 1: Entender os Tipos de Alerta

Existem 3 tipos de alertas:

1. **Valorização** 📈 - Notifica quando o dólar sobe
2. **Desvalorização** 📉 - Notifica quando o dólar cai
3. **Ambos** 🔄 - Notifica em qualquer variação

## Passo 2: Criar um Alerta via API

### Usando cURL

```bash
curl -X POST http://localhost:3000/api/alertas \
  -H "Content-Type: application/json" \
  -d '{
    "usuario_id": "seu_usuario_123",
    "tipo": "valoriza",
    "threshold": 0.50,
    "email": "seu@email.com",
    "telefone": "+5511999999999"
  }'
```

### Usando JavaScript

```javascript
const criarAlerta = async () => {
  const response = await fetch('http://localhost:3000/api/alertas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      usuario_id: 'seu_usuario_123',
      tipo: 'valoriza',
      threshold: 0.50,
      email: 'seu@email.com',
      telefone: '+5511999999999'
    })
  });

  const data = await response.json();
  console.log('Alerta criado:', data);
};

criarAlerta();
```

### Usando Python

```python
import requests

url = 'http://localhost:3000/api/alertas'
payload = {
    'usuario_id': 'seu_usuario_123',
    'tipo': 'valoriza',
    'threshold': 0.50,
    'email': 'seu@email.com',
    'telefone': '+5511999999999'
}

response = requests.post(url, json=payload)
print(response.json())
```

## Passo 3: Configurar Notificações

### Para Email Funcionar

1. Configure SendGrid em `backend/.env`:
```env
SENDGRID_API_KEY=SG.sua_chave_aqui
ENABLE_EMAIL=true
```

2. Reinicie o backend:
```bash
npm run dev
```

### Para SMS Funcionar

1. Configure Twilio em `backend/.env`:
```env
TWILIO_ACCOUNT_SID=ACxxxxxxx
TWILIO_AUTH_TOKEN=sua_token
TWILIO_PHONE_NUMBER=+5511999999999
ENABLE_SMS=true
```

2. Reinicie o backend:
```bash
npm run dev
```

## ✅ Seu Alerta Está Funcionando!

Agora quando a cotação variar R$ 0,50, você receberá:
- 📧 Email com detalhes da variação
- 📱 SMS com resumo (se configurado)

## 🧪 Testar Seu Alerta

### Ver Alertas Criados

```bash
curl http://localhost:3000/api/alertas/seu_usuario_123
```

### Obter Cotação Atual

```bash
curl http://localhost:3000/api/cotacao/atual
```

## 📝 Dicas

- **Threshold**: Use valores pequenos (0.50 para R$ 0,50)
- **Tipo**: Para ser notificado sempre, use `ambos`
- **Email/Telefone**: Deixe em branco se não quiser notificações desse canal

## 🆘 Troubleshooting

### Não recebo emails?
1. Verifique se `ENABLE_EMAIL=true`
2. Verifique sua chave SendGrid
3. Veja logs do backend para erros

### Não recebo SMS?
1. Verifique se `ENABLE_SMS=true`
2. Verifique credenciais Twilio
3. Verifique se o número de telefone está com código do país

### Alerta não foi criado?
1. Verifique se backend está rodando
2. Veja a resposta de erro da API
3. Verifique se todos os campos obrigatórios foram preenchidos

---

**Pronto! Você aprendeu a criar alertas! 🎉**

Próximo passo: Leia [API_DOCS.md](API_DOCS.md) para explorar mais endpoints.
