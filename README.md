DevOps CI/CD Pipeline: Node.js App on AWS
This project demonstrates a complete CI/CD pipeline for a simple Node.js application, utilizing GitHub, Jenkins, Docker, Terraform, Ansible, and AWS. The goal is to automate the build, provisioning, configuration, and deployment process using industry-standard DevOps tools and practices.
🚀 Tech Stack
- GitHub – Source code management and PR workflows
- Jenkins – CI/CD automation
- Docker & DockerHub – Containerization and image registry
- Terraform – AWS infrastructure provisioning
- Ansible – Configuration management and deployment
- AWS EC2 – Hosting the application
- Node.js – Sample application
- 
🗂️ Project Structure
<img width="472" height="328" alt="image" src="https://github.com/user-attachments/assets/7ca52472-6403-48f0-b85c-35bb3f2d2167" />

    
📋 Prerequisites
- AWS Free Tier account
- DockerHub account
- Git, Docker, Terraform, Ansible, Jenkins (installed locally or on EC2)
- Basic Node.js knowledge
- 
🔁 Workflow Overview
1. Developer pushes code to GitHub.
2. GitHub triggers Jenkins build.
3. Jenkins builds the Docker image and pushes it to DockerHub.
4. Jenkins triggers Terraform to provision EC2 instance on AWS.
5. Jenkins runs Ansible playbook to install Docker and run the container.
6. Node.js app becomes accessible on the EC2 public IP.
   
📌 Architecture 

<img width="2825" height="990" alt="diagram-export-7-28-2025-10_17_34-PM" src="https://github.com/user-attachments/assets/9ee61c8f-928c-4155-aba4-3a07e927b84c" />


 
