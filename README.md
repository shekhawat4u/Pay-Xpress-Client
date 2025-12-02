## **Pay Xpress - Complete Feature List**

### **Frontend Pages & Navigation**

1. **Dashboard** - Real-time transaction overview with statistics
2. **Transactions** - View all payment transactions with history and filtering
3. **Pay In** - Accept payments from customers
4. **Pay Out** - Send payouts to recipients
5. **Settlement** - View settlement information and history
6. **Export** - Export transaction data and reports
7. **Payment API** - Generate and manage API keys for integration
8. **API Documentation** - Complete guide on how to use the Pay Xpress API
9. **Account** - User profile and account settings
10. **Support** - Help and support page
11. **Payment Page** - Razorpay checkout integration

---

### **API Endpoints (8 core endpoints)**

| Endpoint | Method | Purpose
|-----|-----|-----
| `/api/payments/create-order` | POST | Create new payment orders
| `/api/payments/verify-payment` | POST | Verify completed payments with signature validation
| `/api/payments/generate-link` | POST | Generate shareable payment links
| `/api/payments/deep-link` | POST | Create deep links for direct payment routing
| `/api/payments/payout` | POST | Send money to recipients via bank transfer
| `/api/payments/payout-upi` | POST | Send money via UPI transfer
| `/api/payments/order-status/:orderId` | GET | Check status of specific orders
| `/api/payments/transactions` | GET | Retrieve all transactions
| `/api/payments/transaction/:orderId` | GET | Get single transaction details
| `/api/payments/refund` | POST | Process refunds for payments
| `/api/payments/settlements` | GET | View settlement information


---

### **Core Features**

✅ **API Key Management** - Generate, view, hide/show, and delete API keys
✅ **Payment Integration** - Full Razorpay API integration
✅ **Signature Verification** - HMAC-SHA256 bank-level security
✅ **Transaction Tracking** - In-memory database with complete history
✅ **Refund Processing** - Instant refund capabilities
✅ **Multiple Payout Methods** - Bank transfer + UPI support
✅ **Shareable Links** - Generate payment links for customers
✅ **Deep Linking** - Advanced routing with return URLs
✅ **Real-time Dashboard** - Live stats and auto-refresh
✅ **Error Handling** - Comprehensive error messages with status codes
✅ **CORS Protection** - Secure cross-origin requests
✅ **Environment Configuration** - Easy setup with .env file

---

### **Middleware Architecture**

**Client Frontend** → **Pay Xpress API** → **Razorpay** → **Payment Processing**

All payment requests go through the middleware layer, allowing you to:

- Monitor all transactions
- Apply custom logic
- Generate reports
- Manage API keys
- Control access


---

### **UI/UX Features**

- Dark theme professional dashboard
- Real-time transaction monitoring
- Copy-to-clipboard functionality for API keys
- Eye icon to show/hide sensitive data
- Collapsible API documentation
- Beautiful card-based layouts
- Responsive design for all devices
- Loading states and error handling


# Pay Xpress - Payment Gateway Middleware

A production-ready payment gateway middleware that acts as a trusted middleman between your application and Razorpay, providing seamless payment processing with enterprise-grade security, API key management, and comprehensive transaction analytics.

## Architecture

\`\`\`
Client's Frontend
  ↓
Your Server API (Pay Xpress Middleware)
      ↓
Razorpay API (create_order, verify_payment, payouts, refunds)
      ↓
Payment Done
\`\`\`

## Project Structure

\`\`\`
payxpress/
├── client/                           # Frontend (Next.js)
│   ├── app/
│   │   ├── page.tsx                 # Home page
│   │   ├── payment/                 # Payment checkout
│   │   ├── dashboard/               # Main dashboard
│   │   ├── transactions/            # Transaction history
│   │   ├── pay-in/                  # Collect payments
│   │   ├── pay-out/                 # Send payouts
│   │   ├── settlement/              # Settlement info
│   │   ├── export/                  # Export data
│   │   ├── payment-api/             # API key management
│   │   ├── api-docs/                # API documentation
│   │   ├── account/                 # Account settings
│   │   └── support/                 # Support page
│   ├── components/
│   │   ├── sidebar.tsx              # Navigation sidebar
│   │   ├── dashboard-layout.tsx     # Layout wrapper
│   │   └── ui/                      # UI components
│   ├── globals.css
│   ├── layout.tsx
│   ├── package.json
│   └── tsconfig.json
├── server/                           # Backend (Express + TypeScript)
│   ├── src/
│   │   ├── config/
│   │   │   └── razorpay.ts          # Razorpay SDK config
│   │   ├── routes/
│   │   │   └── payments.ts          # Payment endpoints
│   │   ├── types/
│   │   │   └── payment.ts           # TypeScript interfaces
│   │   ├── utils/
│   │   │   └── crypto.ts            # Signature verification
│   │   └── index.ts                 # Express app setup
│   ├── package.json
│   └── tsconfig.json
├── .env.example                      # Environment template
└── README.md
\`\`\`

## Complete Feature List

### Dashboard & Analytics
- Real-time transaction overview with statistics
- Live payment metrics and success rates
- Transaction count and total volume tracking
- Auto-refresh dashboard (5-second intervals)
- Beautiful dark theme with professional UI

### Transaction Management
- Complete transaction history with timestamps
- Filter and search transactions
- View detailed transaction information
- Transaction status tracking (pending, completed, failed, refunded)
- Export transaction data to CSV/JSON

### Payment Collection (Pay In)
- Accept payments from customers
- Generate shareable payment links
- Create deep links for custom routing
- Real-time payment status updates
- Multiple payment method support

### Payment Disbursement (Pay Out)
- Send money to recipients
- Bank transfer support
- UPI payment support
- Payout tracking and history
- Instant and batch payouts

### Settlement
- View settlement information
- Track settlement schedules
- Settlement history and reports
- Real-time settlement status

### API Key Management (Payment API)
- Generate unlimited API keys
- View all generated keys
- Show/hide API key visibility
- Delete API keys instantly
- Copy-to-clipboard functionality
- API usage tracking

### API Documentation
- Complete API reference guide
- Endpoint documentation with examples
- Code snippets for integration
- Authentication guide
- Error handling guide
- Webhook documentation
- cURL and JavaScript examples

### Account Management
- User profile settings
- Account information
- Password management
- API activity log
- Account security settings

### Support
- Help and support page
- FAQ section
- Contact information
- Ticket system
- Documentation links

---

## API Endpoints

### Authentication
All API requests require your API key in the header:
\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

### Core Payment Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/payments/create-order` | POST | Create a new payment order |
| `/api/payments/verify-payment` | POST | Verify payment signature and complete transaction |
| `/api/payments/generate-link` | POST | Generate a shareable payment link |
| `/api/payments/deep-link` | POST | Create a deep link for custom routing |
| `/api/payments/payout` | POST | Send money via bank transfer |
| `/api/payments/payout-upi` | POST | Send money via UPI |
| `/api/payments/order-status/:orderId` | GET | Check status of a specific order |
| `/api/payments/refund` | POST | Process refund for a payment |

### Transaction Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/payments/transactions` | GET | Retrieve all transactions |
| `/api/payments/transaction/:orderId` | GET | Get single transaction details |
| `/api/payments/settlements` | GET | View settlement information |

### API Endpoint Examples

#### Create Order
\`\`\`bash
curl -X POST http://localhost:5000/api/payments/create-order \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 50000,
    "currency": "INR",
    "description": "Product purchase",
    "notes": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }'
\`\`\`

Response:
\`\`\`json
{
  "id": "order_123456",
  "amount": 50000,
  "currency": "INR",
  "status": "created",
  "created_at": "2024-01-15T10:30:00Z"
}
\`\`\`

#### Verify Payment
\`\`\`bash
curl -X POST http://localhost:5000/api/payments/verify-payment \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "razorpay_order_id": "order_123456",
    "razorpay_payment_id": "pay_123456",
    "razorpay_signature": "signature_hash"
  }'
\`\`\`

#### Generate Payment Link
\`\`\`bash
curl -X POST http://localhost:5000/api/payments/generate-link \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 50000,
    "currency": "INR",
    "description": "Monthly subscription",
    "customer_notify": 1,
    "notes": {
      "project_name": "Website Redesign"
    }
  }'
\`\`\`

#### Send Payout (Bank Transfer)
\`\`\`bash
curl -X POST http://localhost:5000/api/payments/payout \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "account_number": "1234567890",
    "ifsc_code": "SBIN0000001",
    "beneficiary_name": "John Doe",
    "amount": 100000,
    "mode": "NEFT"
  }'
\`\`\`

#### Send Payout (UPI)
\`\`\`bash
curl -X POST http://localhost:5000/api/payments/payout-upi \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "vpa": "john@upi",
    "amount": 50000,
    "notes": "Freelance payment"
  }'
\`\`\`

#### Get Order Status
\`\`\`bash
curl -X GET http://localhost:5000/api/payments/order-status/order_123456 \
  -H "Authorization: Bearer YOUR_API_KEY"
\`\`\`

---

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn
- Razorpay account with API keys (get from https://dashboard.razorpay.com/app/keys)

### Step 1: Backend Setup

1. Navigate to server directory:
\`\`\`bash
cd server
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env` file from template:
\`\`\`bash
cp ../.env.example .env
\`\`\`

4. Add your Razorpay API keys to `.env`:
\`\`\`env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
SERVER_PORT=5000
CLIENT_URL=http://localhost:3000
NODE_ENV=development
\`\`\`

5. Start the backend server:
\`\`\`bash
npm run dev
\`\`\`

The backend will run at `http://localhost:5000`

### Step 2: Frontend Setup

1. Navigate to client directory:
\`\`\`bash
cd client
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env.local` file:
\`\`\`bash
cat > .env.local << EOF
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
EOF
\`\`\`

4. Start the frontend development server:
\`\`\`bash
npm run dev
\`\`\`

The frontend will run at `http://localhost:3000`

### Access the Application

- Dashboard: http://localhost:3000/dashboard
- Make Payments: http://localhost:3000/payment
- API Management: http://localhost:3000/payment-api
- API Docs: http://localhost:3000/api-docs

---

## Security Features

- HMAC-SHA256 signature verification for all payments
- CORS protection with configurable origins
- Environment-based API key security
- Server-side payment verification (no client-side trust)
- Rate limiting on API endpoints
- Input validation and sanitization
- Secure credential storage
- HTTPS ready for production

## Environment Variables

### Server (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `RAZORPAY_KEY_ID` | Your Razorpay API Key ID | `rzp_test_xxxxx` |
| `RAZORPAY_KEY_SECRET` | Your Razorpay API Key Secret | `xxxxx` |
| `SERVER_PORT` | Backend server port | `5000` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:3000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Client (.env.local)

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SERVER_URL` | Backend API URL | `http://localhost:5000` |

---

## Development Guide

### Run Both Servers (Recommended)

Open two terminal windows:

**Terminal 1 - Backend:**
\`\`\`bash
cd server
npm run dev
\`\`\`

**Terminal 2 - Frontend:**
\`\`\`bash
cd client
npm run dev
\`\`\`

### Useful NPM Commands

**Backend:**
\`\`\`bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
\`\`\`

**Frontend:**
\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
\`\`\`

---

## Testing the API

### Using Thunder Client or Postman

1. **Create an API Key** in the Payment API section of the dashboard
2. **Copy the API key**
3. **Set up a request** with:
   - URL: `http://localhost:5000/api/payments/create-order`
   - Method: POST
   - Headers: `Authorization: Bearer YOUR_API_KEY`
   - Body: JSON with amount, currency, etc.

### Using cURL

\`\`\`bash
# Create Order
curl -X POST http://localhost:5000/api/payments/create-order \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"amount": 50000, "currency": "INR"}'

# Get Transactions
curl -X GET http://localhost:5000/api/payments/transactions \
  -H "Authorization: Bearer YOUR_API_KEY"
\`\`\`

---

## Production Deployment

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

\`\`\`bash
cd client
vercel deploy
\`\`\`

### Backend Deployment Options

**Option 1: Railway (Recommended)**
- Push code to GitHub
- Connect to Railway
- Set environment variables
- Auto-deploy

**Option 2: Heroku**
\`\`\`bash
cd server
heroku create your-app-name
heroku config:set RAZORPAY_KEY_ID=your_key
heroku config:set RAZORPAY_KEY_SECRET=your_secret
git push heroku main
\`\`\`

**Option 3: Render**
- Connect GitHub repository
- Set environment variables
- Enable auto-deploy

**Option 4: AWS Lambda / Google Cloud Run**
- Containerize with Docker
- Deploy to serverless platform
- Configure environment variables

---

## Troubleshooting

### Payment Verification Fails
1. Verify Razorpay API keys are correct
2. Check that `RAZORPAY_KEY_SECRET` matches in `.env`
3. Ensure signature algorithm is HMAC-SHA256
4. Verify the order ID and payment ID match

### Dashboard Shows No Transactions
1. Start backend server: `npm run dev` in server directory
2. Check `NEXT_PUBLIC_SERVER_URL` in frontend `.env.local`
3. Open browser console for API errors
4. Ensure both servers are running

### CORS Errors
1. Update `CLIENT_URL` in server `.env`
2. Restart backend server
3. Check browser console for exact CORS error

### API Key Not Working
1. Generate a new API key in Payment API section
2. Copy the full key (with Bearer prefix if needed)
3. Include `Authorization: Bearer YOUR_KEY` in headers
4. Check API key hasn't expired

### Port Already in Use
1. Change `SERVER_PORT` in `.env` to an available port
2. Change port in frontend `NEXT_PUBLIC_SERVER_URL`
3. Or kill process using the port: `lsof -ti:5000 | xargs kill -9`

---

## Architecture Benefits

- **Middleware Advantage**: Monitor all transactions, apply custom logic, generate reports
- **Security**: All payments verified on server-side before trusting data
- **Control**: Manage API keys, rate limits, and access control
- **Flexibility**: Easy to add custom features or integrate other payment gateways
- **Scalability**: Can handle high transaction volumes with proper infrastructure

---

## API Response Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Server Error |

---

## Support & Documentation

- **API Documentation**: Visit http://localhost:3000/api-docs
- **Razorpay Docs**: https://razorpay.com/docs
- **Issues**: Create an issue in the repository
- **Support Page**: http://localhost:3000/support

---

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Built with Next.js, Express, TypeScript, and Razorpay API.

---

**Ready to accept payments? Start with Pay Xpress today!**

feat: implement core Pay Xpress features and frontend UI

- Added authentication flow:
  - Sign Up with OTP verification
  - Sign In
  - Token-based session management
- Created Dashboard layout with responsive sidebar navigation
- Implemented all main frontend pages:
  - Dashboard, Transactions, Pay In, Pay Out, Settlement, Export
  - Payment API (API key management), API Documentation
  - Account and Support pages
  - Razorpay payment checkout integration
- Developed reusable UI components:
  - Sidebar with active state highlighting
  - Loading buttons and toast notifications
- Integrated client-side routing and state management
- Applied Tailwind CSS for responsive and modern design
- Added error handling and user feedback for forms
