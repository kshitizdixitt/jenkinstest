node(){
    stage('Cloning Git') {
        checkout scm
    }
        
    stage('Install dependencies') {
        nodejs('nodejs') {
            sh 'npm install'
            echo "Modules installed"
        }
        
    }

    stage('Test') {
        nodejs('nodejs') {
            sh 'npm run test'
            echo "Test completed"
        }
        
    }

    stage('Build') {
        nodejs('nodejs') {
            sh 'npm run build'
            echo "Build completed"
        }
        
    }

    stage('Package Build') {
        sh "tar -zcvf bundle.tar.gz /var/www/html/angularprojects/firstapp/dist/"
    }

    
}

