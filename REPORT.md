𝑫𝒆𝒗𝑶𝒑𝒔 𝑷𝒊𝒑𝒆𝒍𝒊𝒏𝒆 𝑹𝒆𝒑𝒐𝒓𝒕

1. 𝑨𝒓𝒄𝒉𝒊𝒕𝒆𝒄𝒕𝒖𝒓𝒆 𝑫𝒊𝒂𝒈𝒓𝒂𝒎
   
         <img width="900" height="315" alt="image" src="https://github.com/user-attachments/assets/e2cf3908-b6b5-495b-8965-ff9d63bb7824" />

 
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
      
      <img width="191" height="394" alt="image" src="https://github.com/user-attachments/assets/ea247a40-4ed5-4a4e-ba52-44731ba23d6e" />

                                                         

4. 𝑱𝒆𝒏𝒌𝒊𝒏𝒔 𝑷𝒊𝒑𝒆𝒍𝒊𝒏𝒆 𝑺𝒕𝒂𝒈𝒆𝒔
   
      Jenkins executes the following stages defined in Jenkinsfile:
      1. Checkout Code – From develop branch
      2. Terraform Apply – Provisions infrastructure
      3. Build& Push Docker Image – Runs build_and_push.sh
      4. Ansible Deploy – Installs Docker and deploys the container
      
      <img width="984" height="108" alt="image" src="https://github.com/user-attachments/assets/b4484f8d-f879-4e7a-a465-14cd498bd3a1" />


 
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
  
   

https://github.com/user-attachments/assets/59ff3169-5e6b-43c7-82f8-11ee52c6aef5



