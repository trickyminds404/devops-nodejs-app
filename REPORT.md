𝑫𝒆𝒗𝑶𝒑𝒔 𝑷𝒊𝒑𝒆𝒍𝒊𝒏𝒆 𝑹𝒆𝒑𝒐𝒓𝒕

1. 𝑨𝒓𝒄𝒉𝒊𝒕𝒆𝒄𝒕𝒖𝒓𝒆 𝑫𝒊𝒂𝒈𝒓𝒂𝒎
   
      <img width="2825" height="990" alt="diagram-export-7-28-2025-10_17_34-PM" src="https://github.com/user-attachments/assets/119adb4c-440e-457f-b609-d4862bcebf93" />

 
2. 𝑩𝒓𝒂𝒏𝒄𝒉𝒊𝒏𝒈 𝑺𝒕𝒓𝒂𝒕𝒆𝒈𝒚
   
      - main – Production-ready code; protected branch
      - develop – Integration branch for features and fixes
      - PRs are required for merging changes from develop → main
        <img width="1918" height="976" alt="br-str" src="https://github.com/user-attachments/assets/3150f8f3-5ccf-41ad-b2eb-c95a78357d0a" />

                           
 
3. 𝑻𝒆𝒓𝒓𝒂𝒇𝒐𝒓𝒎 𝑹𝒆𝒔𝒐𝒖𝒓𝒄𝒆 𝑺𝒖𝒎𝒎𝒂𝒓𝒚
   
      Resources provisioned using Terraform:
      - VPC – Custom VPC with public subnet
      - Subnet – Single public subnet
      - EC2 Instance – t2.micro instance with Elastic IP
      - Security Groups – Allow SSH (22) and HTTP (80)
      - Internet Gateway – For public access
      
      All parameters are configurable via terraform.tfvars.
      
<img width="422" height="868" alt="terraaform arch" src="https://github.com/user-attachments/assets/0eef4b78-c093-4559-9982-0b87f299f8be" />

                                                         

4. 𝑱𝒆𝒏𝒌𝒊𝒏𝒔 𝑷𝒊𝒑𝒆𝒍𝒊𝒏𝒆 𝑺𝒕𝒂𝒈𝒆𝒔
   
      Jenkins executes the following stages defined in Jenkinsfile:
      1. Checkout Code – From develop branch
      2. Terraform Apply – Provisions infrastructure
      3. Build& Push Docker Image – Runs build_and_push.sh
      4. Ansible Deploy – Installs Docker and deploys the container
      
<img width="1250" height="181" alt="jen-pipeline" src="https://github.com/user-attachments/assets/1e4d884e-5100-4871-a6f7-a3ad22e2dabb" />


 
5. 𝑷𝒊𝒑𝒆𝒍𝒊𝒏𝒆 𝑬𝒙𝒆𝒄𝒖𝒕𝒊𝒐𝒏 (𝑺𝒄𝒓𝒆𝒆𝒏𝒔𝒉𝒐𝒕𝒔 / 𝑳𝒐𝒈𝒔)

      Include pipeline execution logs or screenshots showing successful builds and deployments. Example logs:
      [INFO] Docker image built and pushed to DockerHub
      [INFO] Terraform applied successfully
      [INFO] Ansible completed: Node.js app deployed to EC2
      <img width="1918" height="1032" alt="pl1" src="https://github.com/user-attachments/assets/c9efc57c-9631-44ca-8d5f-47a035af096e" />
      
      <img width="1918" height="1020" alt="pl2" src="https://github.com/user-attachments/assets/af2e439f-eba4-4b00-898e-bada6a39b533" />




 
 
6. 𝑶𝒖𝒕𝒄𝒐𝒎𝒆

      - Successfully deployed a containerized Node.js app using an automated DevOps pipeline.
      - Verified deployment by accessing the application via EC2 public IP.
        <img width="1918" height="1025" alt="image" src="https://github.com/user-attachments/assets/472594b3-4866-448e-86db-8b6b5565e029" />

  
   

https://github.com/user-attachments/assets/59ff3169-5e6b-43c7-82f8-11ee52c6aef5



