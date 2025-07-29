pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/trickyminds404/devops-nodejs-app.git'
                script {
                    // Store Git commit hash right after cloning
                    env.GIT_COMMIT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                }
            }
        }

        stage('Terraform Init & Apply') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'aws-cred',
            usernameVariable: 'AWS_ACCESS_KEY_ID',
            passwordVariable: 'AWS_SECRET_ACCESS_KEY'
        )]) {
            dir('infra') {
                sh '''
                    export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
                    export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

                    terraform init -input=false
                    terraform validate
                    terraform apply -auto-approve -input=false
                    '''
                }
            }
        }
    }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    sh 'docker buildx install || true'
                    withCredentials([
                        usernamePassword(
                            credentialsId: 'dockerhub-credentials',
                            usernameVariable: 'DOCKER_USERNAME',
                            passwordVariable: 'DOCKER_PASSWORD'
                        )
                    ]) {
                        sh '''
                            docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                            chmod +x scripts/build_and_push.sh
                            ./scripts/build_and_push.sh ${GIT_COMMIT}
                        '''
                    }
                }
            }
        }

        stage('Prepare Ansible') {
            steps {
                script {
                    // Get EC2 public IP from Terraform
                    env.EC2_IP = sh(
                        script: "cd infra && terraform output -raw public_ip", 
                        returnStdout: true
                    ).trim()

                    // Create ansible directory and hosts.ini
                    sh 'mkdir -p ansible'

                    writeFile file: 'ansible/hosts.ini', text: """
[ec2]
${env.EC2_IP} ansible_user=ubuntu

[ec2:vars]
ansible_python_interpreter=/usr/bin/python3
ansible_ssh_common_args='-o StrictHostKeyChecking=no'
"""
                    sh 'cat ansible/hosts.ini'
                }
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'aws-ec2-ssh-key',
                        keyFileVariable: 'SSH_KEY_PATH'
                    )
                ]) {
                    script {
                        try {
                            sh """
                                mkdir -p ~/.ssh
                                chmod 600 $SSH_KEY_PATH
                                ssh-keyscan -H ${env.EC2_IP} >> ~/.ssh/known_hosts
                                ansible-playbook -i ansible/hosts.ini ansible/deploy.yml \
                                    --private-key=$SSH_KEY_PATH \
                                    -u ubuntu \
                                    -e "GIT_COMMIT=${env.GIT_COMMIT}"
                            """
                        } catch (Exception e) {
                            error "Ansible deployment failed: ${e.getMessage()}"
                        }
                    }
                }
            }
        }
    }
}

