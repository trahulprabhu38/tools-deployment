# T Rahul Prabhu DevOps Portal

A modern, responsive DevOps tool aggregation portal built with Next.js and TailwindCSS. Provides a centralized dashboard to access all your internal DevOps tools in one place.

## Features

✅ **Modern UI** - Glassmorphism design with smooth animations  
✅ **Dark/Light Mode** - Toggle between themes  
✅ **Search & Filter** - Quickly find tools by name or category  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Tool Management** - Dynamically load tools from configuration  
✅ **Sidebar Navigation** - Quick access to Tools, Docs, and Admin  
✅ **Container Ready** - Includes Dockerfile for easy deployment  

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd devops-portal
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build and Production

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Docker Deployment

Build the Docker image:
\`\`\`bash
docker build -t devops-portal:latest .
\`\`\`

Run the container:
\`\`\`bash
docker run -p 3000:3000 devops-portal:latest
\`\`\`

### NGINX Configuration

Example NGINX configuration for reverse proxy:

\`\`\`nginx
server {
    listen 80;
    server_name devops.trahulprabhu.work;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

## Configuration

Tools are defined in `app/page.tsx`. To add a new tool:

\`\`\`typescript
{
  id: 9,
  name: 'Tool Name',
  url: 'https://tool.trahulprabhu.work',
  description: 'Tool description',
  category: 'category-name',
  icon: '🔧',
}
\`\`\`

Categories: `monitoring`, `cicd`, `deployment`, `quality`, `logging`, `infrastructure`, `security`

## Environment Variables

Currently, no environment variables are required. The portal works out of the box with the built-in configuration.

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: TailwindCSS v4
- **UI Components**: Custom React components
- **Icons**: Lucide React
- **Deployment**: Docker, NGINX
- **Language**: TypeScript

## Future Enhancements

- [ ] Google OAuth integration
- [ ] Admin panel for tool management
- [ ] User preferences storage
- [ ] Tool health status indicators
- [ ] Recent tool access history
- [ ] Tool usage analytics

## License

MIT

## Support

For issues or questions, please open an issue on the repository.
# tools-deployment
