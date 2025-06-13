Hirely: Your Full-Stack Job Portal
Hirely is a modern, full-stack web application designed to simplify the hiring process for recruiters and job seekers. Built with React, it offers a seamless platform for managing job postings, tracking applicants, and facilitating communication.

🚀 Features
Hirely provides an efficient hiring workflow with:

Job Posting Management: Create, edit, and manage job listings with detailed descriptions and visibility controls.

Candidate Tracking: Track applicants through customizable hiring stages and access detailed profiles including resumes and notes.

Application Submission: Candidates can easily apply to jobs and monitor their application status.

Secure User Authentication & Access: Leverages Clerk for secure, role-based access for recruiters and applicants.

Advanced Search and Filtering: Quickly find jobs or candidates using keywords, location, skills, and application status.

Responsive & Modern Interface: Built with Tailwind CSS and Shadcn UI for a customizable and accessible design across all devices.

💻 Technologies Used
Hirely is built with a robust and modern tech stack:

React JS (Frontend)

Tailwind CSS

Supabase (Backend, Database, Auth)

Clerk (User Authentication)

Shadcn UI (UI Components)

Node.js/npm

🚀 Getting Started
To get Hirely running locally:

Prerequisites
Ensure you have Node.js and npm installed.

Installation
Clone the repository:
```text
git clone https://github.com/HarshPawar0001/Hirely.git
```
Navigate to the project directory:
```text
cd Hirely
```

Install dependencies:
```text
npm install
```

Environment Variables
Create a .env.local file in the project root and add your Supabase and Clerk credentials:

# Supabase Credentials
```text
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Credentials

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Running the Application
To start the development server:
```text
npm start
```

Open http://localhost:3000 in your browser.

📁 Project Structure
## 📁 Project Structure

```text
Hirely/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable UI components (e.g., Button.jsx, Card.jsx)
│   ├── pages/              # React pages (e.g., HomePage.jsx, JobDetails.jsx)
│   ├── api/                # API routes (if using Next.js API routes)
│   ├── lib/                # Utility functions, Supabase/Clerk client initialization
│   ├── styles/             # Tailwind CSS configurations
│   ├── App.jsx             # Main application component
│   └── index.jsx           # Entry point
├── .env.local              # Environment variables
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

📜 Available Scripts
In the project directory, you can run:

npm start
Starts the app in development mode.

npm test
Launches the test runner.

npm run build
Builds the app for production.

🌍 Deployment
Hirely is currently deployed on Vercel: https://hirely-livid.vercel.app/

🤝 Contributing
Contributions are welcome!

Fork the Project

Create your Feature Branch: (git checkout -b feature/AmazingFeature)

Commit your Changes: (git commit -m 'Add some AmazingFeature')

Push to the Branch: (git push origin feature/AmazingFeature)

Open a Pull Request: Describe your changes.

📄 License
Distributed under the MIT License. See the LICENSE file for details.

✉️ Contact
Harsh Pawar - harsh.pawar.ug23@nsut.ac.in - LinkedIn

Project Link: https://github.com/HarshPawar0001/Hirely





