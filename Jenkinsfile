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
                sh 'apt-get install npm'
            }
        }

        stage("Build"){
            steps{
                sh 'npm run dev'
            }
         } 
    }
    
}
