# Aashish Khadka - Personal Portfolio

A modern, responsive personal portfolio website built with React.js (frontend) and Django (backend).

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Content**: Projects, skills, and content managed through Django admin
- **Contact Form**: Functional contact form with email notifications
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized images and efficient code structure

## 🛠️ Tech Stack

### Frontend
- React.js 18
- React Router DOM
- Axios for API calls
- CSS3 with custom properties
- Font Awesome icons

### Backend
- Django 4.2
- Django REST Framework
- SQLite database (can be changed to PostgreSQL)
- Django CORS headers
- Email integration

## 📁 Project Structure

\`\`\`
portfolio/
├── frontend/                 # React.js frontend
│   ├── public/
│   │   └── assets/
│   │       └── images/       # Project and profile images
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS files
│   │   └── utils/           # Utility functions
│   └── package.json
├── backend/                  # Django backend
│   ├── portfolio_backend/    # Django project settings
│   ├── portfolio/           # Main Django app
│   │   ├── models.py        # Database models
│   │   ├── views.py         # API views
│   │   ├── serializers.py   # DRF serializers
│   │   └── admin.py         # Admin interface
│   └── requirements.txt
└── README.md
\`\`\`

## 🚀 Quick Start

### Backend Setup

1. **Navigate to backend directory**
   \`\`\`bash
   cd backend
   \`\`\`

2. **Create virtual environment**
   \`\`\`bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. **Set up environment variables**
   Create a `.env` file in the backend directory:
   \`\`\`env
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   EMAIL_HOST_USER=your-email@gmail.com
   EMAIL_HOST_PASSWORD=your-app-password
   \`\`\`

5. **Run migrations**
   \`\`\`bash
   python manage.py makemigrations
   python manage.py migrate
   \`\`\`

6. **Create superuser**
   \`\`\`bash
   python manage.py createsuperuser
   \`\`\`

7. **Populate initial data**
   \`\`\`bash
   python manage.py populate_data
   \`\`\`

8. **Start development server**
   \`\`\`bash
   python manage.py runserver
   \`\`\`

### Frontend Setup

1. **Navigate to frontend directory**
   \`\`\`bash
   cd frontend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env` file in the frontend directory:
   \`\`\`env
   REACT_APP_API_URL=http://localhost:8000/api
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm start
   \`\`\`

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api
- Django Admin: http://localhost:8000/admin

## 📝 Usage

### Adding Projects
1. Go to Django Admin (http://localhost:8000/admin)
2. Login with your superuser credentials
3. Navigate to "Projects" section
4. Add new projects with images, descriptions, and GitHub links

### Managing Content
- **Skills**: Add/edit technical skills, soft skills, and tools
- **Education**: Manage education history
- **Certificates**: Add professional certificates
- **Contact Messages**: View messages from the contact form

### Customization
- Update personal information in the Django admin
- Modify colors and styling in CSS custom properties
- Add new sections by creating components and pages

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Set environment variables in your hosting dashboard

### Backend (Heroku/Railway)
1. Add `gunicorn` to requirements.txt
2. Create `Procfile`: `web: gunicorn portfolio_backend.wsgi`
3. Set environment variables in your hosting dashboard
4. Deploy to your chosen platform

## 📧 Contact

- **Email**: ashishkhadka014@gmail.com
- **Phone**: +977 9702505709
- **GitHub**: [Ashishkdk18](https://github.com/Ashishkdk18)
- **Location**: Itahari, Nepal

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Aashish Khadka
