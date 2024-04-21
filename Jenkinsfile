pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                
                checkout scm
            }
        }

        stage("Test"){
            steps{
                sh 'npm install -g npm'
            }
        }

        stage("Build"){
            steps{
                sh 'npm run dev'
            }
         } 
    }
    
}
