const { GraphQLServer } = require('graphql-yoga')
const typeDefs = `schema.graphql`
const resolvers = {
  Applogin:{
    __resolveType(obj) {
      if (obj.type==1) {
        return 'MobileApplogin'
      } else {
        return 'DesktopApplogin'
      }
    }
  },
  SearchResult:{
    __resolveType(obj) {
      if (obj.type) {
        return 'App'
      } else {
        return 'LocalUser'
      }
    }  
  },
  Query: {
    hello: function(_,name){
        return {
            name:`${name.name}`,
            age:33
        }
    },
    localtype:function(parent,ob){
      return {
        name:`${ob.name}`,
        age: ob.name.length
       }
    },
    login:function(parent,ob){
       if (ob.name=="dalong"){
        return {
          name:"dalong",
          account:"app mobile info"
        }
       }
       else {
        return {
          name:"dalong",
          type:44,
          account:"app mobile info"
        }
       }
    },
    appsearch:function(parent,ob){
      return {
       name:"demoaopp",
       age:333,
       type:55
      }
    },
    appinfo:function(parent,ob){
      console.log(ob,parent)
      return {
        name:ob.name,
        type:3
      }
    },
    listOfStrings:function(parent){
        return [
          "dalong",
          "demoapp",
          "rong"
        ]
    }
  },
  Mutation:{
    addUser:function(parent,ob){
      console.log(ob)
      return JSON.stringify(ob)
    }
  }
}

const options = {
    port: 8000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))