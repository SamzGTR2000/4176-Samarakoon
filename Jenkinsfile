// pipeline {
//     agent any
    
//     stages {
//         stage('Clone Repository') {
//             steps {
//                 checkout scm
//             }
//         }
        
//         stage('Build Docker Image') {
//             steps {
//                 sh 'docker build -t node-app'
//             }
//         }
        
//         stage('Run Container') {
//             steps {
//                 sh 'docker run -d -p 4000:4000 node-app'
//             }
//         }
        
//         // Additional stages for testing, deployment, etc.
//     }
// }

pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                sh '/usr/local/bin/docker build -t node-app .'
            }
        }
        // Other stages...
    }
}
