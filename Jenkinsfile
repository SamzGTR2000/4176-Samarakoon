pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                
                checkout scm
            }
        }

        stage("Build Docker Image") {
            steps {
                
                sh 'docker build -t my-node-app .'
            }
        }

        stage("Run Docker Container") {
            steps {
                
                sh 'docker run -d -p 4000:4000 my-node-app'
            }
        }
    }
}
