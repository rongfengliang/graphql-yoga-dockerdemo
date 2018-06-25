pipeline {
  agent {
    node {
      label 'jt68'
    }
  }
  stages {
    stage('image build') {
      steps {
        sh 'docker-compose build'
      }
    }
    stage('docker-compose run') {
      steps {
        sh 'docker-compose stop && docker-compose up -d '
      }
    }
  }
}