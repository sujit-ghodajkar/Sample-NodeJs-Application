pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS' // Ensure NodeJS is installed on Jenkins
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                git 'https://github.com/sujit-ghodajkar/Sample-NodeJs-Application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build Executable') {
            steps {
                // Use pkg to build the executable
                sh 'npm install -g pkg'
                sh 'pkg . --output myapp.exe'
            }
        }

        stage('Archive Artifact') {
            steps {
                // Archive the executable file
                archiveArtifacts artifacts: 'myapp.exe', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build and packaging successful!'
        }
        failure {
            echo 'Build or packaging failed.'
        }
    }
}
