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
                sh 'sudo apt update'
            }
        }

        stage("Build"){
            steps{
                sh 'npm run dev'
            }
         } 
    }
    
}
