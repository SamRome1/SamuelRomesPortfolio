// Portfolio Data Structure
const portfolioData = [
    {
        id: 'technical-content',
        title: 'Technical Content Creation',
        items: [
            {
                title: 'YouTube Tutorial Series',
                category: 'Video Content',
                description: 'A comprehensive tutorial series covering web development best practices, JavaScript advanced concepts, and modern frameworks.',
                date: '2024',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=YouTube+Tutorials',
                link: '#'
            },
            {
                title: 'Blog Posts & Articles',
                category: 'Written Content',
                description: 'In-depth technical articles about software architecture, performance optimization, and design patterns.',
                date: '2024',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=Blog+Posts',
                link: '#'
            },
            {
                title: 'Open Source Contributions',
                category: 'Community',
                description: 'Active contributor to popular open-source projects with focus on code quality and documentation.',
                date: '2023-2024',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Open+Source',
                link: '#'
            },
            {
                title: 'Technical Podcasts',
                category: 'Audio Content',
                description: 'Guest appearances and hosted episodes discussing trends in software development.',
                date: '2024',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=Podcasts',
                link: '#'
            }
        ]
    },
    {
        id: 'skills',
        title: 'Technical Skills',
        items: [
            {
                title: 'Frontend Development',
                category: 'React, Vue, TypeScript',
                description: 'Expert in modern frontend frameworks with expertise in building responsive, performant user interfaces. Proficient in React, Vue.js, and TypeScript.',
                date: '2023-2024',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Frontend',
                link: '#'
            },
            {
                title: 'Backend Development',
                category: 'Node.js, Python, SQL',
                description: 'Full-stack backend development experience with Node.js, Python, and database design. RESTful API and microservices architecture.',
                date: '2023-2024',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=Backend',
                link: '#'
            },
            {
                title: 'Cloud & DevOps',
                category: 'AWS, Docker, CI/CD',
                description: 'Cloud infrastructure management using AWS, containerization with Docker, and automated deployment pipelines.',
                date: '2023-2024',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Cloud+DevOps',
                link: '#'
            },
            {
                title: 'Data & Analytics',
                category: 'SQL, Python, Analytics',
                description: 'Data analysis and visualization skills using Python, SQL, and modern BI tools for data-driven insights.',
                date: '2023-2024',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=Data+Analytics',
                link: '#'
            },
            {
                title: 'Mobile Development',
                category: 'React Native, Flutter',
                description: 'Cross-platform mobile development using React Native and Flutter for iOS and Android applications.',
                date: '2023-2024',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Mobile+Dev',
                link: '#'
            }
        ]
    },
    {
        id: 'projects',
        title: 'Featured Projects',
        items: [
            {
                title: 'E-Commerce Platform',
                category: 'Full Stack',
                description: 'A scalable e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, payment processing, and admin dashboard.',
                date: '2024',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=E-Commerce',
                link: '#'
            },
            {
                title: 'AI Chat Application',
                category: 'Machine Learning',
                description: 'Intelligent chat application with NLP capabilities, built using Python, TensorFlow, and React. Supports real-time messaging and AI-powered responses.',
                date: '2024',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=AI+Chat',
                link: '#'
            },
            {
                title: 'Project Management Tool',
                category: 'Web Application',
                description: 'Collaborative project management application with real-time updates, Gantt charts, and team communication features.',
                date: '2023',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=PM+Tool',
                link: '#'
            },
            {
                title: 'Analytics Dashboard',
                category: 'Data Visualization',
                description: 'Real-time analytics dashboard with interactive charts, custom reports, and data export capabilities for business intelligence.',
                date: '2023',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=Analytics',
                link: '#'
            },
            {
                title: 'Mobile Fitness App',
                category: 'React Native',
                description: 'Cross-platform fitness tracking application with workout planning, progress tracking, and social sharing features.',
                date: '2023',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Fitness+App',
                link: '#'
            }
        ]
    },
    {
        id: 'experience',
        title: 'Professional Experience',
        items: [
            {
                title: 'Senior Developer',
                category: 'TechCorp Inc.',
                description: 'Led development of microservices architecture serving 1M+ users. Mentored junior developers and established development best practices.',
                date: '2022-2024',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Senior+Dev',
                link: '#'
            },
            {
                title: 'Full Stack Engineer',
                category: 'StartUp XYZ',
                description: 'Developed and deployed multiple production applications from scratch. Implemented CI/CD pipelines and improved system performance by 40%.',
                date: '2020-2022',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=Full+Stack',
                link: '#'
            },
            {
                title: 'Junior Developer',
                category: 'Digital Agency',
                description: 'Built responsive web applications for clients, maintained legacy code, and contributed to frontend optimization initiatives.',
                date: '2019-2020',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Junior+Dev',
                link: '#'
            }
        ]
    },
    {
        id: 'certifications',
        title: 'Certifications & Awards',
        items: [
            {
                title: 'AWS Certified Solutions Architect',
                category: 'Certification',
                description: 'Professional-level certification validating expertise in designing scalable, reliable, and secure AWS infrastructure.',
                date: '2023',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=AWS+Cert',
                link: '#'
            },
            {
                title: 'Google Cloud Associate Engineer',
                category: 'Certification',
                description: 'Certified in Google Cloud Platform with expertise in deploying and managing cloud applications.',
                date: '2023',
                image: 'https://via.placeholder.com/280x160/764ba2/ffffff?text=GCP+Cert',
                link: '#'
            },
            {
                title: 'Best Developer Award',
                category: 'Recognition',
                description: 'Awarded as the best developer of the year for exceptional contributions and innovation.',
                date: '2023',
                image: 'https://via.placeholder.com/280x160/667eea/ffffff?text=Award',
                link: '#'
            }
        ]
    }
];
