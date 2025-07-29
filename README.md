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
  
🗂️ Project Structure

<img width="462" height="583" alt="project structure" src="https://github.com/user-attachments/assets/1ead00c1-4a3f-4d27-bd83-785ae29ab337" />

    
📋 Prerequisites
- AWS Free Tier account
- DockerHub account
- Git, Docker, Terraform, Ansible, Jenkins (installed locally or on EC2)
- Basic Node.js knowledge
  
🔁 Workflow Overview
1. Developer pushes code to GitHub.
2. GitHub triggers Jenkins build.
3. Jenkins builds the Docker image and pushes it to DockerHub.
4. Jenkins triggers Terraform to provision EC2 instance on AWS.
5. Jenkins runs Ansible playbook to install Docker and run the container.
6. Node.js app becomes accessible on the EC2 public IP.
   
📌 Architecture 

<img width="2825" height="990" alt="architecture diagram" src="https://github.com/user-attachments/assets/ecc79bb7-6285-4496-832e-aa0b0bdb3da0" />


 
