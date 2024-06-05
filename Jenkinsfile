pipeline {
    agent any

   triggers {
          pollSCM('H/1 * * *')
      }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        /*
        stage('Build Docker Image') {
            steps {
                script {
                    def imageName = "your-docker-registry/your-app-name:${env.BUILD_ID}"
                    def dockerfile = 'Dockerfile'

                    sh "docker build -t ${imageName} -f ${dockerfile} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    def imageName = "your-docker-registry/your-app-name:${env.BUILD_ID}"

                    sh "docker push ${imageName}"
                }
            }
        }

        stage('Deploy with Docker') {
            steps {
                script {
                    def containerName = "your-app-container-${env.BUILD_ID}"
                    def imageName = "your-docker-registry/your-app-name:${env.BUILD_ID}"

                    sh "docker stop ${containerName} || true"
                    sh "docker rm ${containerName} || true"
                    sh "docker run -d -p 80:80 --name ${containerName} ${imageName}"
                }
            }
        }
        */

        stage('Copy to Apache Server') {
            steps {
                script {
                 def currentBranch = env.BRANCH_NAME

                    def sourceDirectory = 'dist\\jenkins-app'

                     def targetDirectory
                                        if (currentBranch == 'master') {
                                            targetDirectory = 'C:\\Users\\Tomcii\\Documents\\Coding\\Apache24\\htdocs'
                                        } else {
                                            targetDirectory = 'C:\\Users\\Tomcii\\Documents\\Coding\\Apache24_2\\htdocs'
                                        }

                    bat "xcopy /s /y ${sourceDirectory} ${targetDirectory}"
                }
            }
        }
        stage('Send Mail') {
                    steps {
                        script {
                        try {
                                       mail to: 'Tomciiart@gmail.com',
                                           subject: "Jenkins Job ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}",
                                           body: "The Jenkins job has completed.\n\nCheck the build at ${env.BUILD_URL}"
                                           } catch (Exception e) {
                                           }

                                    }
                    }
                }
    }
}
