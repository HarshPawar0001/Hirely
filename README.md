# 🚀 Hirely: Your Full-Stack Job Portal

**Hirely** is a modern, full-stack web application designed to simplify the hiring process for recruiters and job seekers. Built with React, it offers a seamless platform for managing job postings, tracking applicants, and facilitating communication.

---

## ✨ Features

Hirely provides an efficient hiring workflow with:

- **📝 Job Posting Management**: Create, edit, and manage job listings with detailed descriptions and visibility controls.
- **📊 Candidate Tracking**: Track applicants through customizable hiring stages and access detailed profiles including resumes and notes.
- **📩 Application Submission**: Candidates can easily apply to jobs and monitor their application status.
- **🔐 Secure User Authentication & Access**: Leverages Clerk for secure, role-based access for recruiters and applicants.
- **🔍 Advanced Search and Filtering**: Quickly find jobs or candidates using keywords, location, skills, and application status.
- **📱 Responsive & Modern Interface**: Built with Tailwind CSS and Shadcn UI for a customizable and accessible design across all devices.

---

## 🛠 Technologies Used

- **Frontend**: React.js  
- **Styling**: Tailwind CSS + Shadcn UI  
- **Backend & Database**: Supabase  
- **Authentication**: Clerk  
- **Build Tools**: Node.js / npm

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm installed on your system

### 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/HarshPawar0001/Hirely.git


2. **Navigate to the project directory**:

   ```bash
   cd Hirely
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

### 🔐 Environment Variables

Create a `.env.local` file in the project root and add your Supabase and Clerk credentials:

```env
# Supabase Credentials
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Credentials
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### ▶️ Running the Application

To start the development server:

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
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

---

## 📜 Available Scripts

In the project directory, you can run:

* `npm start` – Starts the app in development mode.
* `npm test` – Launches the test runner.
* `npm run build` – Builds the app for production.

---

## 🌍 Deployment

Hirely is currently deployed on Vercel:
🔗 [https://hirely-livid.vercel.app/](https://hirely-livid.vercel.app/)

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork the Project**
2. **Create your Feature Branch**:

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**:

   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## ✉️ Contact

**Harsh Pawar** – [harsh.pawar.ug23@nsut.ac.in](mailto:harsh.pawar.ug23@nsut.ac.in)
📎 [LinkedIn](https://www.linkedin.com/in/harshpawar0001)
🔗 Project Link: [https://github.com/HarshPawar0001/Hirely](https://github.com/HarshPawar0001/Hirely)




