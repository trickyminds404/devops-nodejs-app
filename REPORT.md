DevOps Pipeline Report
1. Architecture Diagram
   <img width="900" height="315" alt="image" src="https://github.com/user-attachments/assets/e2cf3908-b6b5-495b-8965-ff9d63bb7824" />

 
3. Branching Strategy
- main – Production-ready code; protected branch
- develop – Integration branch for features and fixes
- PRs are required for merging changes from develop → main
  <img width="508" height="571" alt="image" src="https://github.com/user-attachments/assets/b695cd25-d5b5-4193-8ff3-3e0daa5b2862" />
                           
 
3. Terraform Resource Summary

Resources provisioned using Terraform:
- VPC – Custom VPC with public subnet
- Subnet – Single public subnet
- EC2 Instance – t2.micro instance with Elastic IP
- Security Groups – Allow SSH (22) and HTTP (80)
- Internet Gateway – For public access

All parameters are configurable via terraform.tfvars.

<img width="191" height="394" alt="image" src="https://github.com/user-attachments/assets/ea247a40-4ed5-4a4e-ba52-44731ba23d6e" />

                                                         

4. Jenkins Pipeline Stages

Jenkins executes the following stages defined in Jenkinsfile:
1. Checkout Code – From develop branch
2. Terraform Apply – Provisions infrastructure
3. Build& Push Docker Image – Runs build_and_push.sh
4. Ansible Deploy – Installs Docker and deploys the container

   <img width="984" height="108" alt="image" src="https://github.com/user-attachments/assets/b4484f8d-f879-4e7a-a465-14cd498bd3a1" />


 
6. Pipeline Execution (Screenshots / Logs)
Include pipeline execution logs or screenshots showing successful builds and deployments. Example logs:
[INFO] Docker image built and pushed to DockerHub
[INFO] Terraform applied successfully
[INFO] Ansible completed: Node.js app deployed to EC2
<img width="989" height="512" alt="image" src="https://github.com/user-attachments/assets/435f2d27-8cec-436e-abb3-9d499c3af6b5" />
<img width="991" height="529" alt="image" src="https://github.com/user-attachments/assets/43a168be-622c-481a-be57-b695576a3aed" />



 
 
Outcome
- Successfully deployed a containerized Node.js app using an automated DevOps pipeline.
- Verified deployment by accessing the application via EC2 public IP.

