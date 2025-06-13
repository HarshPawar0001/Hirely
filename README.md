Hirely: Your Full-Stack Job Portal Solution
Hirely is a modern, full-stack web application designed to revolutionize the hiring process for both recruiters and job seekers. Built with the powerful React ecosystem, it provides a seamless and intuitive platform for managing job postings, tracking applicant progress, and fostering efficient communication throughout the recruitment lifecycle. Whether you're a company looking to fill positions or a candidate seeking your next opportunity, Hirely aims to simplify and enhance your experience.

🚀 Features
Hirely comes packed with features to facilitate a smooth and efficient hiring workflow:

Comprehensive Job Posting Management
Create & Edit: Recruiters can easily create new job listings with rich text descriptions, specifying roles, requirements, locations, and more. Existing postings can be updated in real-time.

Visibility Control: Manage the active status of job postings, making them visible or hidden to applicants as needed.

Detailed Listings: Support for various job details, including salary ranges, employment types (full-time, part-time, contract), and benefits.

Intuitive Candidate Tracking & Management
Pipeline Visualization: Track applicants through customizable stages of the hiring pipeline (e.g., Applied, Reviewed, Interview, Offer, Hired, Rejected).

Applicant Profiles: View detailed profiles for each applicant, including their submitted resumes, cover letters, and application history.

Notes & Feedback: Recruiters can add private notes and collaborative feedback for each candidate.

Streamlined Application Submission
User-Friendly Forms: Candidates can easily apply to jobs through intuitive forms, uploading their resumes and cover letters.

Application History: Applicants can view the status and history of their submitted applications from their personal dashboard.

Robust User Authentication & Authorization
Secure Access: Leverages Clerk for secure and scalable user authentication, supporting various sign-in methods.

Role-Based Access Control: Differentiate between user roles (e.g., Recruiter, Applicant) to provide appropriate permissions and UI experiences.

Advanced Search and Filtering
Job Search: Job seekers can efficiently search for opportunities based on keywords, location, job type, and more.

Candidate Search: Recruiters can filter and search through applicants based on skills, application status, and other criteria.

Responsive & Modern UI
Tailwind CSS: Utilizes Tailwind CSS for a highly customizable, responsive, and mobile-first design, ensuring a great user experience across all devices.

Shadcn UI: Integrates Shadcn UI components for a consistent, accessible, and aesthetically pleasing user interface.

💻 Technologies Used
Hirely is a full-stack application built with a modern and robust technology stack:

Full Stack React JS Project (Job Portal): The overarching architecture leverages React for the frontend and a serverless backend powered by Supabase.

React: A declarative, component-based JavaScript library for building dynamic and interactive user interfaces.

Tailwind CSS: A highly customizable, low-level CSS framework that gives you all the building blocks you need to build bespoke designs without ever leaving your HTML.

Supabase: An open-source Firebase alternative providing a PostgreSQL database, authentication, instant APIs, and real-time subscriptions, acting as the backend-as-a-service.

Clerk: A comprehensive user management platform for React applications, handling authentication, user profiles, and more, integrating seamlessly with Supabase.

Shadcn UI: A collection of beautifully designed and accessible UI components built with Radix UI and Tailwind CSS, providing pre-built and customizable elements.

Node.js/npm: The JavaScript runtime environment and package manager used for building, running, and managing the project's dependencies.

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js: (LTS version recommended) You can download it from nodejs.org.

npm: (Comes bundled with Node.js) Used for package management.

Installation
Clone the repository:

git clone https://github.com/HarshPawar0001/Hirely.git

Navigate to the project directory:

cd Hirely

Install dependencies:

npm install

Environment Variables
Hirely relies on environment variables for connecting to Supabase and Clerk. You'll need to set these up:

Create a .env.local file in the root of your project directory.

Obtain your API keys and URLs from your Supabase and Clerk dashboards.

Supabase: You'll need your SUPABASE_URL and SUPABASE_ANON_KEY.

Clerk: You'll need your NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY.

Add the following to your .env.local file:

# Supabase Credentials
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Credentials
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

Important: Replace your_supabase_project_url, your_supabase_anon_key, your_clerk_publishable_key, and your_clerk_secret_key with your actual credentials.

Running the Application
To start the development server:

npm start

This command runs the app in development mode.
Open http://localhost:3000 to view it in your browser. The page will automatically reload when you make changes. You may also see any lint errors in the console.

📁 Project Structure
(Assuming a typical Create React App or Next.js structure. Adjust if your project deviates significantly.)

Hirely/
├── public/                 # Static assets
├── src/                    # All source code
│   ├── components/         # Reusable UI components (e.g., Button.jsx, Card.jsx)
│   ├── pages/              # React pages (e.g., HomePage.jsx, JobDetails.jsx)
│   ├── api/                # API routes (if using Next.js API routes)
│   ├── lib/                # Utility functions, Supabase/Clerk client initialization
│   ├── styles/             # Tailwind CSS configurations and global styles
│   ├── App.jsx             # Main application component
│   └── index.jsx           # Entry point
├── .env.local              # Environment variables (local development)
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file

📜 Available Scripts
In the project directory, you can run the following commands:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.
See the section about running tests for more information. This is useful for ensuring code quality and functionality.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include hashes. Your app is ready to be deployed!
See the section about deployment for more information.

🌍 Deployment
After running npm run build, your optimized production build will be generated in the build/ directory. This static output can be deployed to various hosting services.

Hirely is currently deployed on Vercel and can be accessed here: https://hirely-livid.vercel.app/

Other common deployment options include:

Vercel: Excellent for Next.js applications and static sites, offering seamless deployments and CI/CD.

Netlify: Another popular choice for static sites and frontend applications, with easy integration and custom domains.

GitHub Pages: Simple for hosting static content directly from your GitHub repository.

AWS S3 + CloudFront: For highly scalable and performant static site hosting.

Ensure your environment variables are correctly configured for your chosen deployment platform (e.g., using their specific methods for secrets management).

🔮 Future Enhancements
We have several ideas for enhancing Hirely further:

Real-time Notifications: Implement real-time updates for job applications and communications.

Integrated Messaging: A built-in chat system for recruiters and applicants.

Calendar Integration: Schedule interviews directly within the platform.

Analytics Dashboard: Provide insights into job posting performance and applicant data.

Advanced AI Matching: Use AI to match candidates with suitable job openings based on skills and experience.

Multi-language Support: Extend the application to support multiple languages.

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

To contribute to Hirely:

Fork the Project

Create your Feature Branch: (git checkout -b feature/AmazingFeature)

Commit your Changes: (git commit -m 'Add some AmazingFeature')

Push to the Branch: (git push origin feature/AmazingFeature)

Open a Pull Request: Describe your changes thoroughly.

📄 License
Distributed under the MIT License. See the LICENSE file in the repository for more information.

✉️ Contact
Harsh Pawar - harsh.pawar.ug23@nsut.ac.in - LinkedIn

Project Link: https://github.com/HarshPawar0001/Hirely
