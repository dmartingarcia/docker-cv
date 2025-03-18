import { Mail, Phone, Github, Linkedin, Link } from 'lucide-react'

export const RESUME_DATA = {
    name: "David Martin Garcia",
    initials: "DMG",
    location: "Ciudad Real, Castilla La Mancha, Spain",
    locationLink: "https://www.google.com/maps/place/Ciudad+Real",
    about_me: [
      "I like to work in distributed teams, *remotely*, at the **backend team** of a **product company**, talking in **English** and writing **Ruby and Rails**.  ",
      "I’m a motivated **polyglot** backend engineer with **10 years of experience** working remotely for both **startup and mature environments**, spanning industries such as **HR, Finance, and Green energies**. I use my expertise in **development and infrastructure** to create value and deliver **scalable, high-quality solutions**.",
      "Looking for a remote position where I can continue working in a distributed team as a backend developer in a multicultural environment."
    ].join('  \n'),
    avatarUrl: "https://avatars.githubusercontent.com/u/11503528?v=4",
    contact: {
      email: {
        address: "davidmartingarcia0@gmail.com",
        icon: Mail,
      },
      phone: {
        number: "+34601407688",
        icon: Phone,
      },
    },
    social: {
      github: {
        name: "GitHub",
        url: "https://github.com/dmartingarcia",
        icon: Github,
      },
      linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david-martin-garcia/",
        icon: Linkedin,
      },
      webpage: {
        name: "Webpage",
        url: "https://dmartingarcia.com",
        icon: Link,
      },
    },
    education: [
      {
        school: "Universidad de Castilla La Mancha",
        degree: "Bachelor's Degree in Computer Science",
        specialty: "Data science",
        start: "2010",
        end: "2016",
      },
    ],
    professional_experience: [
      {
        company: "Affirm",
        link: "https://www.affirm.com",
        badges: ["Remote", "Python"],
        title: "Senior Developer",
        start: "Feb 2023",
        end: null,
        description: [
          "Started working on Comms Platform team, handling all the infrastructure for sending and receiving communications from users:",
          "- Set ownership and ramp up the team.",
          "- Worked in a multidisciplinary delivery squad of one of the core modules of the platform",
          "- Create a monitoring and tracking solution",
          "- Implement new features and collaborate with other teams for delivering tools",
          "- Take the ownership for the UK launch in my team, negotiating with providers for gathering all the requirements and preparing all the requirements.",
          "- Mentored less experienced people on the team.",
          "- Manage communications and incidents with providers.",
          "- Setting the on-call and runbooks for our team.",
          "- Handle BFCM and specific launch dates from the merchants.",
          "- Provision resources into terraform/terragrunt.",
          "- Handle regulators and changes in security protocols.",
          "- Track events of the user communications and stream the data into the analytics team.",
        ].join('\n'),
      },
      {
        company: "Returnly (Adquired by Affirm)",
        link: "https://www.linkedin.com/company/returnly-technologies-inc",
        badges: ["Remote", "Ruby"],
        title: "Senior Ruby on Rails Developer",
        start: "Jun 2021",
        end: "Feb 2023",
        description: [
          "I joined the Platform team, where I have accomplished the following goals:",
          "- Upgraded Ruby from version 2.3 to 3.2, and Rails from version 4.2 to 7, the most recent versions at this time.",
          "- Review and improve the access to the database replicas for read-only queries and replication.",
          "- Managed the compatibility of gems and libraries with the new version upgrades, which involved collaborating with, contributing to, or forking several gems.",
          "- Perform planning for continuous code improvement, handling the reshaping of the architecture.",
          "- Improve the continuous integration (CI) process, thereby enhancing overall productivity across the company.",
          "  - Handling flaky tests",
          "  - Improve Docker build process in speed and size",
          "  - Improved Docker builds to make them smaller and set up a multi-build CI to support the version upgrades.",
          "- Implement Elasticsearch for building an internal search engine",
          "- Collaborate across multiple teams for integrating and improving the data layer."
        ].join('  \n'),
      },
      {
        company: "Sonnen",
        link: "https://sonnengroup.com/",
        badges: ["Remote", "Ruby", "Elixir"],
        title: "Senior Ruby on Rails/AWS",
        start: "Dec 2018",
        end: "Jun 2021",
        description: [
          "Develop and maintain the API gateway application:",
          "- Setting an Authorization, Authentication, and Permissions layer for all the microservices.",
          "- Developing many data synchronization jobs to fetch new information from 3rd party providers (Salesforce, SAP)",
          "Migrating from a SaaS IoT database provider and creating an in-house backend:",
          "- We improve the code and queries to be able to handle the load, saving money and having a more resilient product compared with the 3rd party.",
          "- Compacting the metrics and keeping the lights up",
          "- Implemented a caching system to collect the statistics and don't have to recalculate them.",
          "Management of the Car Charger backend.",
          "Manage the IaC repositories using Terraform and Ansible",
          "Mentored less experienced people on the team and to set the team culture.",
        ].join('  \n'),
      },
      {
        company: "Rollbox (Adquired by Personio)",
        link: "https://rollbox.io",
        badges: ["Remote", "Ruby"],
        title: "Senior Full Stack Developer",
        start: "Jun 2018",
        end: "Dec 2018",
        description: [
          "We created a payslip calculator engine for multiple regions (ES and UK), automatizing the process at the end of the month of creating the bank files and having all the PDFs for multiple companies.",
          "I also managed to provision and maintain resources on AWS. Additionally, I transitioned our infrastructure from Fargate and EC2 to ECS and established infrastructure monitoring.",
          "Lastly, I improved the synchronization process across multiple integrations with 3rd parties, making them faster and more optimal, not querying the same data multiple times and setting the architecture based on Sidekiq and a custom state event machine.",
        ].join('  \n'),
      },
      {
        company: "Bizneo",
        link: "https://bizneo.com",
        badges: ["Remote", "Ruby", "Elixir"],
        title: "Intern - Developer - Senior Developer",
        start: "Mar 2015",
        end: "Jun 2018",
        description: [
          "We developed an application for HR departments that collects and aggregates information on job listings. Our first successful product was an applicant tracking system that gathered candidates from various sources.",
          "To enhance our platform, we implemented a search engine based on Elasticsearch, that allows recruiters to filter profiles based on specific keywords and questions. This involved handling client requirements and negotiating upcoming features.",
          "We introduced a bot-assisted job publishing and collection engine, incorporating techniques to bypass bot detection algorithms across 40+ job portals. This system remains effective today.",
          "To ensure efficient data collection, we improved database performance, enabling our bots to gather thousands of job offers daily. We also added multi-tenancy for specific clients and developed white-label web pages for them.",
          "Additionally, we created a Chrome extension that allows recruiters to send CVs and profiles from major business social networks and job portals. We built a CV parser using text mining techniques.",
          "Finally, we migrated from bare-metal servers to AWS, provisioning our infrastructure using Terraform and Ansible.",
          "Implementing text search and text suggestions using ElasticSearch.",
          "Implementing fragment caching and object aggregation.",
          "Multitenancy at the database level.",
          "Set an automatization tool for +30 HR portals.",
          "Create captcha solving tools, plus in-house residential proxies.",
          "I also take the responsibility of DevOps and SRE, managing the platform of the whole company. Migrating from bare-metal to the cloud (AWS)",
        ].join('  \n'),
      },
    ],
    achievements: [
      {
        title: "Contributing to OSS"
      },
      {
        title: "2x Global Code Retreat Host on Ciudad Real"
      },
      {
        title: "Hosted tech talks and managed a Meetup developers group (RubyCR)"
      }
    ],
    skills: [
      { title: "Coding Languages",
        elements: [
          "Ruby",
          "Python",
          "Elixir",
          "Typescript",
        ]
      },
      { title: "Libraries and Frameworks",
        elements: [
          "Rails",
          "React",
          "Angularjs/Angular",
        ]
      },
      { title: "Databases",
        elements: [
          "MySQL",
          "PostgreSQL",
          "Elasticsearch",
          "Redis",
          "Firebase",
          "DynamoDB",
        ]
      },
      { title: "Languages",
        elements: [
          "Spanish (Native)",
          "English (Professional Working)",
        ]
      },
      { title: "Infrastructure",
        elements: [
          "AWS",
          "Terraform",
          "Ansible",
          "K8s"
        ]
      },
      { title: "Toolset",
        elements: [
          "Docker",
          "Emacs",
          "Bash",
          "Tmux"
        ]
      }
    ],
    projects: [
    ]
} as const;
