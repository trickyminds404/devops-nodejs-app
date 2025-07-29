DevOps Pipeline Report
1. Architecture Diagram
   <img width="900" height="315" alt="image" src="https://github.com/user-attachments/assets/e2cf3908-b6b5-495b-8965-ff9d63bb7824" />

 
3. Branching Strategy
- main – Production-ready code; protected branch
- develop – Integration branch for features and fixes
- PRs are required for merging changes from develop → main
  <img width="1918" height="976" alt="br-str" src="https://github.com/user-attachments/assets/3150f8f3-5ccf-41ad-b2eb-c95a78357d0a" />

                           
 
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


 
5. Pipeline Execution (Screenshots / Logs)
Include pipeline execution logs or screenshots showing successful builds and deployments. Example logs:
[INFO] Docker image built and pushed to DockerHub
[INFO] Terraform applied successfully
[INFO] Ansible completed: Node.js app deployed to EC2
<img width="1918" height="1032" alt="pl1" src="https://github.com/user-attachments/assets/c9efc57c-9631-44ca-8d5f-47a035af096e" />

<img width="1918" height="1020" alt="pl2" src="https://github.com/user-attachments/assets/af2e439f-eba4-4b00-898e-bada6a39b533" />




 
 
7. Outcome
- Successfully deployed a containerized Node.js app using an automated DevOps pipeline.
- Verified deployment by accessing the application via EC2 public IP.

